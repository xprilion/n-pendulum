import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default function ThreeCanvas({
  nState,
  ensembleStates = [],
  params,
  trailHistory = [],
  ensembleTrails = [],
  trailLength = 500,
  trailFade = true,
  showGrid = true,
  isEnsemble = false,
  selectedNodeIndex = null,
  onSelectNodeIndex,
  onJointDrag,
  isPaused = false,
  onResetCameraRef,
}) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);

  const mainLinksGroupRef = useRef(new THREE.Group());
  const ensembleGroupRef = useRef(new THREE.Group());
  const selectionIndicatorRef = useRef(null);
  const mainTrailLineRef = useRef(null);
  const gridHelperRef = useRef(null);

  // Raycasting & Interaction Refs
  const raycasterRef = useRef(new THREE.Raycaster());
  const pointerRef = useRef(new THREE.Vector2());
  const dragPlaneRef = useRef(new THREE.Plane());
  const dragIntersectionRef = useRef(new THREE.Vector3());
  const isDraggingRef = useRef(false);
  const draggedIndexRef = useRef(null);
  const dragStartPointerRef = useRef({ x: 0, y: 0 });
  const pointerDownTimeRef = useRef(0);
  const hoveredIndexRef = useRef(null);

  // Velocity tracking during drag for throw impulse
  const lastDragPosRef = useRef(new THREE.Vector3());
  const lastDragTimeRef = useRef(0);
  const dragVelocityRef = useRef(new THREE.Vector3());

  // Refs for props in event listeners
  const nStateRef = useRef(nState);
  const selectedNodeIndexRef = useRef(selectedNodeIndex);
  const onSelectNodeIndexRef = useRef(onSelectNodeIndex);
  const onJointDragRef = useRef(onJointDrag);

  useEffect(() => { nStateRef.current = nState; }, [nState]);
  useEffect(() => { selectedNodeIndexRef.current = selectedNodeIndex; }, [selectedNodeIndex]);
  useEffect(() => { onSelectNodeIndexRef.current = onSelectNodeIndex; }, [onSelectNodeIndex]);
  useEffect(() => { onJointDragRef.current = onJointDrag; }, [onJointDrag]);

  // Setup Three.js Scene
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    sceneRef.current = scene;

    // Camera
    const width = mount.clientWidth;
    const height = mount.clientHeight;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.8, 5.2);
    cameraRef.current = camera;

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    mount.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.rotateSpeed = 0.8;
    controls.zoomSpeed = 1.0;
    controls.panSpeed = 0.8;
    controls.minDistance = 0.8;
    controls.maxDistance = 25;
    controls.target.set(0, -0.6, 0);
    controlsRef.current = controls;

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.0);
    keyLight.position.set(6, 10, 6);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.8);
    fillLight.position.set(-6, -3, -5);
    scene.add(fillLight);

    // 3D Grid Plane
    const grid = new THREE.GridHelper(8, 32, 0x52525b, 0x18181b);
    grid.position.y = -3.2;
    scene.add(grid);
    gridHelperRef.current = grid;

    // Fixed Pivot Mount at (0, 0, 0)
    const pivotGeo = new THREE.SphereGeometry(0.055, 32, 32);
    const pivotMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.15,
      metalness: 0.9,
    });
    const pivotMesh = new THREE.Mesh(pivotGeo, pivotMat);
    scene.add(pivotMesh);

    // Add main links and ensemble groups
    scene.add(mainLinksGroupRef.current);
    scene.add(ensembleGroupRef.current);

    // Selected Node Halo Indicator (Torus Ring)
    const selRingGeo = new THREE.TorusGeometry(0.12, 0.012, 16, 32);
    const selRingMat = new THREE.MeshBasicMaterial({
      color: 0x00f5ff,
      transparent: true,
      opacity: 0.9,
      wireframe: false,
    });
    const selRingMesh = new THREE.Mesh(selRingGeo, selRingMat);
    selRingMesh.rotation.x = Math.PI / 2;
    selRingMesh.visible = false;
    scene.add(selRingMesh);
    selectionIndicatorRef.current = selRingMesh;

    // 3D Trail Buffer Line
    const maxTrailPoints = 1500;
    const trailPositions = new Float32Array(maxTrailPoints * 3);
    const trailColors = new Float32Array(maxTrailPoints * 3);
    const trailGeo = new THREE.BufferGeometry();
    trailGeo.setAttribute('position', new THREE.BufferAttribute(trailPositions, 3));
    trailGeo.setAttribute('color', new THREE.BufferAttribute(trailColors, 3));

    const trailMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      linewidth: 1.5,
    });
    const mainTrailLine = new THREE.Line(trailGeo, trailMat);
    scene.add(mainTrailLine);
    mainTrailLineRef.current = mainTrailLine;

    // Reset camera ref hook
    if (onResetCameraRef) {
      onResetCameraRef.current = () => {
        camera.position.set(0, 0.8, 5.2);
        controls.target.set(0, -0.6, 0);
        controls.update();
      };
    }

    // Helper: get pointer coordinates normalized [-1, 1]
    const getPointerPos = (e) => {
      const rect = renderer.domElement.getBoundingClientRect();
      const clientX = e.clientX !== undefined ? e.clientX : (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
      const clientY = e.clientY !== undefined ? e.clientY : (e.touches && e.touches[0] ? e.touches[0].clientY : 0);
      return {
        normX: ((clientX - rect.left) / rect.width) * 2 - 1,
        normY: -((clientY - rect.top) / rect.height) * 2 + 1,
        screenX: clientX,
        screenY: clientY,
      };
    };

    // Pointer Event Handlers for Direct 3D Raycasting & Dragging
    const onPointerDown = (e) => {
      const pos = getPointerPos(e);
      pointerRef.current.set(pos.normX, pos.normY);
      dragStartPointerRef.current = { x: pos.screenX, y: pos.screenY };
      pointerDownTimeRef.current = performance.now();

      raycasterRef.current.setFromCamera(pointerRef.current, camera);
      const group = mainLinksGroupRef.current;

      // Check for intersections with bob spheres
      const bobMeshes = [];
      group.children.forEach((child) => {
        if (child.userData && child.userData.nodeIndex !== undefined) {
          bobMeshes.push(child);
        }
      });

      const intersects = raycasterRef.current.intersectObjects(bobMeshes, false);
      if (intersects.length > 0) {
        const hit = intersects[0];
        const nodeIdx = hit.object.userData.nodeIndex;
        draggedIndexRef.current = nodeIdx;

        // Set drag plane parallel to camera through the target bob
        const planeNormal = new THREE.Vector3();
        camera.getWorldDirection(planeNormal).negate();
        dragPlaneRef.current.setFromNormalAndCoplanarPoint(planeNormal, hit.point);

        lastDragPosRef.current.copy(hit.point);
        lastDragTimeRef.current = performance.now();
        dragVelocityRef.current.set(0, 0, 0);

        // Temporarily disable OrbitControls to avoid conflict
        controls.enabled = false;
      }
    };

    const onPointerMove = (e) => {
      const pos = getPointerPos(e);
      pointerRef.current.set(pos.normX, pos.normY);

      if (draggedIndexRef.current !== null) {
        const distMoved = Math.hypot(
          pos.screenX - dragStartPointerRef.current.x,
          pos.screenY - dragStartPointerRef.current.y
        );

        if (distMoved > 3) {
          isDraggingRef.current = true;
        }

        if (isDraggingRef.current) {
          raycasterRef.current.setFromCamera(pointerRef.current, camera);
          if (raycasterRef.current.ray.intersectPlane(dragPlaneRef.current, dragIntersectionRef.current)) {
            const now = performance.now();
            const dtSec = Math.max(0.001, (now - lastDragTimeRef.current) / 1000);

            const newPos = dragIntersectionRef.current;
            dragVelocityRef.current.subVectors(newPos, lastDragPosRef.current).divideScalar(dtSec);
            lastDragPosRef.current.copy(newPos);
            lastDragTimeRef.current = now;

            if (onJointDragRef.current) {
              onJointDragRef.current(draggedIndexRef.current, {
                x: newPos.x,
                y: newPos.y,
                z: newPos.z,
              }, false);
            }
          }
        }
      } else {
        // Hover detection
        raycasterRef.current.setFromCamera(pointerRef.current, camera);
        const group = mainLinksGroupRef.current;
        const bobMeshes = group.children.filter((c) => c.userData && c.userData.nodeIndex !== undefined);
        const intersects = raycasterRef.current.intersectObjects(bobMeshes, false);

        if (intersects.length > 0) {
          const hitIdx = intersects[0].object.userData.nodeIndex;
          hoveredIndexRef.current = hitIdx;
          renderer.domElement.style.cursor = 'grab';
        } else {
          hoveredIndexRef.current = null;
          renderer.domElement.style.cursor = 'default';
        }
      }
    };

    const onPointerUp = (e) => {
      const pos = getPointerPos(e);
      const wasDragging = isDraggingRef.current;
      const targetIdx = draggedIndexRef.current;

      controls.enabled = true;
      isDraggingRef.current = false;
      draggedIndexRef.current = null;

      if (targetIdx !== null) {
        if (wasDragging) {
          // Release throw velocity
          if (onJointDragRef.current) {
            onJointDragRef.current(targetIdx, {
              x: lastDragPosRef.current.x,
              y: lastDragPosRef.current.y,
              z: lastDragPosRef.current.z,
            }, true, {
              x: dragVelocityRef.current.x * 0.5,
              y: dragVelocityRef.current.y * 0.5,
              z: dragVelocityRef.current.z * 0.5,
            });
          }
        } else {
          // It was a click -> select the node & open menu!
          if (onSelectNodeIndexRef.current) {
            onSelectNodeIndexRef.current(targetIdx);
          }
        }
      }
    };

    const dom = renderer.domElement;
    dom.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    // Animation Loop
    let animId;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      controls.update();

      // Pulse selection indicator
      if (selectionIndicatorRef.current && selectionIndicatorRef.current.visible) {
        const time = performance.now() * 0.003;
        const scale = 1.0 + 0.08 * Math.sin(time);
        selectionIndicatorRef.current.scale.set(scale, scale, scale);
      }

      renderer.render(scene, camera);
    };
    animate();

    // Resize Observer
    const handleResize = () => {
      if (!mount || !renderer || !camera) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(mount);
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
      dom.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      controls.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Update Grid Helper
  useEffect(() => {
    if (gridHelperRef.current) {
      gridHelperRef.current.visible = showGrid;
    }
  }, [showGrid]);

  // Helper to position cylinder between two 3D points
  const updateCylinder = (mesh, p1, p2, radius = 0.014) => {
    const dir = new THREE.Vector3().subVectors(p2, p1);
    const len = dir.length();
    if (len < 0.0001) return;

    mesh.scale.set(radius / 0.014, len, radius / 0.014);
    mesh.position.copy(p1).addScaledVector(dir, 0.5);
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
  };

  // Re-sync and render N-links on physics tick
  useEffect(() => {
    if (!sceneRef.current || !nState || !nState.positions) return;

    const { numLinks, masses = [], lengths = [], colors = [], pinned = [], positions = [] } = nState;
    const group = mainLinksGroupRef.current;

    // Ensure group has enough rod & bob meshes for numLinks
    const requiredMeshes = numLinks * 2; // rod + bob for each link
    while (group.children.length < requiredMeshes) {
      const idx = Math.floor(group.children.length / 2) + 1;

      // Rod cylinder
      const rodGeo = new THREE.CylinderGeometry(0.014, 0.014, 1, 16);
      const rodMat = new THREE.MeshStandardMaterial({
        color: 0xe4e4e7,
        roughness: 0.25,
        metalness: 0.75,
      });
      const rodMesh = new THREE.Mesh(rodGeo, rodMat);
      group.add(rodMesh);

      // Bob sphere
      const bobGeo = new THREE.SphereGeometry(0.07, 32, 32);
      const bobMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.1,
        metalness: 0.9,
      });
      const bobMesh = new THREE.Mesh(bobGeo, bobMat);
      bobMesh.userData = { nodeIndex: idx };
      group.add(bobMesh);
    }

    while (group.children.length > requiredMeshes) {
      const obj = group.children.pop();
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) obj.material.dispose();
    }

    // Position rods and bobs for each link i (from 1 to numLinks)
    for (let i = 1; i <= numLinks; i++) {
      if (!positions[i - 1] || !positions[i]) continue;
      const pPrev = new THREE.Vector3(positions[i - 1].x, positions[i - 1].y, positions[i - 1].z);
      const pCurr = new THREE.Vector3(positions[i].x, positions[i].y, positions[i].z);

      const rodMesh = group.children[(i - 1) * 2];
      const bobMesh = group.children[(i - 1) * 2 + 1];

      // Update rod
      if (rodMesh) {
        updateCylinder(rodMesh, pPrev, pCurr, 0.013);
      }

      // Update bob
      if (bobMesh) {
        bobMesh.userData = { nodeIndex: i };
        const m = masses[i - 1] || 1.0;
        const radius = Math.max(0.04, Math.min(0.14, 0.04 + Math.sqrt(m) * 0.035));
        bobMesh.scale.setScalar(radius / 0.07);
        bobMesh.position.copy(pCurr);

        // Custom bob color & pinned styling
        const hexColor = colors[i - 1] || '#ffffff';
        if (bobMesh.material) {
          bobMesh.material.color.set(hexColor);
          if (pinned[i]) {
            bobMesh.material.emissive.set(0xffaa00);
            bobMesh.material.emissiveIntensity = 0.4;
          } else {
            bobMesh.material.emissive.set(0x000000);
            bobMesh.material.emissiveIntensity = 0;
          }
        }
      }
    }

    // Update Selection Halo Indicator
    if (selectionIndicatorRef.current) {
      if (selectedNodeIndex !== null && selectedNodeIndex >= 1 && selectedNodeIndex <= numLinks && positions[selectedNodeIndex]) {
        const pSel = positions[selectedNodeIndex];
        selectionIndicatorRef.current.position.set(pSel.x, pSel.y, pSel.z);
        const m = masses[selectedNodeIndex - 1] || 1.0;
        const radius = Math.max(0.04, Math.min(0.14, 0.04 + Math.sqrt(m) * 0.035));
        selectionIndicatorRef.current.scale.setScalar((radius + 0.05) / 0.12);
        selectionIndicatorRef.current.visible = true;
      } else {
        selectionIndicatorRef.current.visible = false;
      }
    }

    // Update 3D Tip Trail Line Buffer
    if (mainTrailLineRef.current && trailHistory.length > 0) {
      const geo = mainTrailLineRef.current.geometry;
      const posAttr = geo.attributes.position;
      const colAttr = geo.attributes.color;
      const count = Math.min(trailHistory.length, 1500);

      const tipColorHex = (colors && colors[numLinks - 1]) || '#ffffff';
      const tipColor = new THREE.Color(tipColorHex);

      for (let i = 0; i < count; i++) {
        const pt = trailHistory[i];
        posAttr.setXYZ(i, pt.x, pt.y, pt.z);

        const prog = i / count;
        const intensity = trailFade ? Math.pow(prog, 2.0) : 0.85;
        colAttr.setXYZ(i, tipColor.r * intensity, tipColor.g * intensity, tipColor.b * intensity);
      }
      geo.setDrawRange(0, count);
      posAttr.needsUpdate = true;
      colAttr.needsUpdate = true;
    }

    // Update 3D Ensemble chains
    const ensembleGroup = ensembleGroupRef.current;
    if (ensembleGroup) {
      if (!isEnsemble || ensembleStates.length === 0) {
        while (ensembleGroup.children.length > 0) {
          const obj = ensembleGroup.children.pop();
          if (obj.geometry) obj.geometry.dispose();
          if (obj.material) obj.material.dispose();
        }
      } else {
        const numEns = ensembleStates.length;
        while (ensembleGroup.children.length > numEns * 2) {
          const obj = ensembleGroup.children.pop();
          if (obj.geometry) obj.geometry.dispose();
          if (obj.material) obj.material.dispose();
        }

        ensembleStates.forEach((st, idx) => {
          if (!st.positions) return;
          const pts = st.positions.map((p) => new THREE.Vector3(p.x, p.y, p.z));

          // 1. Ghost Chain
          let chainLine = ensembleGroup.children[idx * 2];
          if (!chainLine) {
            const lineGeo = new THREE.BufferGeometry().setFromPoints(pts);
            const lineMat = new THREE.LineBasicMaterial({
              color: 0xffffff,
              transparent: true,
              opacity: 0.16,
            });
            chainLine = new THREE.Line(lineGeo, lineMat);
            ensembleGroup.add(chainLine);
          } else {
            chainLine.geometry.setFromPoints(pts);
            chainLine.geometry.attributes.position.needsUpdate = true;
          }

          // 2. Ghost Trail
          const trail = ensembleTrails[idx] || [];
          let trailLine = ensembleGroup.children[idx * 2 + 1];
          if (!trailLine) {
            const tGeo = new THREE.BufferGeometry();
            const tMat = new THREE.LineBasicMaterial({
              color: 0xd4d4d8,
              transparent: true,
              opacity: 0.22,
            });
            trailLine = new THREE.Line(tGeo, tMat);
            ensembleGroup.add(trailLine);
          }
          if (trail.length > 1) {
            const tPts = trail.map((p) => new THREE.Vector3(p.x, p.y, p.z));
            trailLine.geometry.setFromPoints(tPts);
            trailLine.geometry.attributes.position.needsUpdate = true;
          }
        });
      }
    }
  }, [nState, ensembleStates, trailHistory, ensembleTrails, isEnsemble, trailFade, selectedNodeIndex]);

  return (
    <div className="relative w-full h-full overflow-hidden bg-black select-none">
      <div ref={mountRef} className="w-full h-full touch-none" />

      {/* Interaction Hint Badges */}
      <div className="absolute bottom-4 left-4 pointer-events-none hidden sm:flex items-center gap-2 text-[11px] font-mono mono-glass px-3 py-1.5 rounded-full text-zinc-400 border border-zinc-800">
        <span className={`w-1.5 h-1.5 rounded-full ${isPaused ? 'bg-amber-400' : 'bg-cyan-400 animate-ping'}`} />
        <span>
          {isPaused
            ? 'PAUSED • Click any joint to inspect & edit • Drag in 3D to pose'
            : 'Click any joint to edit • Drag to grab & throw • Orbit 3D'}
        </span>
      </div>
    </div>
  );
}
