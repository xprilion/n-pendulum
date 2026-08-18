import React, { useState, useEffect, useRef, useCallback } from 'react';
import ThreeCanvas from './components/ThreeCanvas';
import MonoActionBar from './components/MonoActionBar';
import MonoSettingsDrawer from './components/MonoSettingsDrawer';
import MonoDiagnostics from './components/MonoDiagnostics';
import MonoPresetsDrawer from './components/MonoPresetsDrawer';
import TheoryModal from './components/TheoryModal';
import NodeMenu from './components/NodeMenu';
import ScriptEditor from './components/ScriptEditor';
import {
  createDefaultNPendulum,
  stepNPendulum,
  calculateNEnergy,
  setJointSphericalAngles,
  setJointCartesianPosition,
  addLinkToNPendulum,
  removeLinkFromNPendulum,
  PRESETS_3D,
} from './physics';
import {
  generateScript,
  parseAndExecuteScript,
} from './scriptEngine';
import { audioEngine } from './audio';
import { Check } from 'lucide-react';

export default function App() {
  // N-Pendulum State
  const [numLinks, setNumLinks] = useState(2);
  const [params, setParams] = useState({
    g: 9.81,
    damping: 0,
  });

  const [nState, setNState] = useState(() => createDefaultNPendulum(2));

  // Simulation execution & UI toggles
  const [isPaused, setIsPaused] = useState(false);
  const [simSpeed, setSimSpeed] = useState(1.0);
  const [trailLength, setTrailLength] = useState(500);
  const [trailFade, setTrailFade] = useState(true);
  const [showGrid, setShowGrid] = useState(true);
  const [isEnsemble, setIsEnsemble] = useState(false);
  const [ensembleCount, setEnsembleCount] = useState(12);
  const [ensembleDelta, setEnsembleDelta] = useState(0.0001);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [activePresetId, setActivePresetId] = useState('double_3d_swirl');

  // Scripting Language & Editor State
  const [scriptEditorOpen, setScriptEditorOpen] = useState(false);
  const [scriptCode, setScriptCode] = useState('');
  const [executionError, setExecutionError] = useState(null);
  const [autoApply, setAutoApply] = useState(true);
  const isEditingScriptRef = useRef(false);
  const autoApplyTimerRef = useRef(null);

  // Node Inspector & UI Panels
  const [selectedNodeIndex, setSelectedNodeIndex] = useState(null);
  const [nodeMenuOpen, setNodeMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [diagnosticsOpen, setDiagnosticsOpen] = useState(false);
  const [presetsOpen, setPresetsOpen] = useState(false);
  const [theoryOpen, setTheoryOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Histories for 3D trails & charts
  const [trailHistory, setTrailHistory] = useState([]);
  const [ensembleTrails, setEnsembleTrails] = useState([]);
  const [phaseHistory, setPhaseHistory] = useState([]);
  const [energyHistory, setEnergyHistory] = useState([]);
  const [currentEnergy, setCurrentEnergy] = useState({ kinetic: 0, potential: 0, total: 0 });

  // Refs for low-overhead 60fps loop
  const nStateRef = useRef(nState);
  const paramsRef = useRef(params);
  const isPausedRef = useRef(false);
  const isEnsembleRef = useRef(false);
  const ensembleCountRef = useRef(12);
  const ensembleDeltaRef = useRef(0.0001);
  const ensembleStatesRef = useRef([]);
  const resetCameraRef = useRef(null);
  const activeDragRef = useRef({ nodeIndex: null, targetPos: null });

  // Sync state into refs
  useEffect(() => { nStateRef.current = nState; }, [nState]);
  useEffect(() => { paramsRef.current = params; }, [params]);
  useEffect(() => { isPausedRef.current = isPaused; }, [isPaused]);
  useEffect(() => { ensembleCountRef.current = ensembleCount; }, [ensembleCount]);
  useEffect(() => { ensembleDeltaRef.current = ensembleDelta; }, [ensembleDelta]);

  // Toast notification
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2200);
  };

  // Sync State -> Script (Whenever UI settings or state changes)
  const syncStateToScript = useCallback(() => {
    if (isEditingScriptRef.current) return;
    const generated = generateScript({
      nState: nStateRef.current,
      params: paramsRef.current,
      simSpeed,
      trailLength,
      trailFade,
      showGrid,
      isEnsemble,
      ensembleCount,
      ensembleDelta,
    });
    setScriptCode(generated);
  }, [simSpeed, trailLength, trailFade, showGrid, isEnsemble, ensembleCount, ensembleDelta]);

  // Initial code generation
  useEffect(() => {
    syncStateToScript();
  }, []);

  // Update script whenever major state settings change
  useEffect(() => {
    syncStateToScript();
  }, [numLinks, params, simSpeed, trailLength, trailFade, showGrid, isEnsemble, ensembleCount, ensembleDelta, syncStateToScript]);

  // Handle Script Editor Code Changes
  const handleScriptCodeChange = (newCode) => {
    isEditingScriptRef.current = true;
    setScriptCode(newCode);
    setExecutionError(null);

    if (autoApply) {
      if (autoApplyTimerRef.current) clearTimeout(autoApplyTimerRef.current);
      autoApplyTimerRef.current = setTimeout(() => {
        applyScriptToState(newCode, false);
        isEditingScriptRef.current = false;
      }, 450);
    }
  };

  // Apply Script -> Simulation State
  const applyScriptToState = (codeToRun = scriptCode, showFeedback = true) => {
    const res = parseAndExecuteScript(codeToRun, nStateRef.current, paramsRef.current);
    if (res.success && res.nState) {
      setExecutionError(null);
      setParams(res.params);
      paramsRef.current = res.params;
      setSimSpeed(res.simSpeed);
      setTrailLength(res.trailLength);
      setTrailFade(res.trailFade);
      setShowGrid(res.showGrid);
      setIsEnsemble(res.isEnsemble);
      setEnsembleCount(res.ensembleCount);
      setEnsembleDelta(res.ensembleDelta);

      setNumLinks(res.nState.numLinks);
      setNState(res.nState);
      nStateRef.current = res.nState;

      if (res.isEnsemble) {
        initEnsemble(res.nState);
      }

      if (showFeedback) {
        showToast('✓ Script Executed & Simulation Updated');
      }
    } else {
      setExecutionError(res.error || 'Unknown script execution error');
      if (showFeedback) {
        showToast(`⚡ Error: ${res.error}`);
      }
    }
    isEditingScriptRef.current = false;
  };

  // Node Selection Handlers
  const handleSelectNode = (idx) => {
    setSelectedNodeIndex(idx);
    setNodeMenuOpen(true);
    setDrawerOpen(false);
    showToast(`Inspecting Joint #${idx}`);
  };

  const handleToggleNodeMenu = () => {
    if (nodeMenuOpen) {
      setNodeMenuOpen(false);
    } else {
      const targetIdx = selectedNodeIndex || Math.min(2, numLinks);
      setSelectedNodeIndex(targetIdx);
      setNodeMenuOpen(true);
      setDrawerOpen(false);
      setScriptEditorOpen(false);
    }
  };

  const handleToggleScriptEditor = () => {
    if (scriptEditorOpen) {
      setScriptEditorOpen(false);
    } else {
      syncStateToScript();
      setScriptEditorOpen(true);
      setDrawerOpen(false);
      setNodeMenuOpen(false);
    }
  };

  // When numLinks changes, re-create default N-pendulum
  const handleNumLinksChange = (newN) => {
    setNumLinks(newN);
    const fresh = createDefaultNPendulum(newN);
    setNState(fresh);
    nStateRef.current = fresh;
    if (selectedNodeIndex && selectedNodeIndex > newN) {
      setSelectedNodeIndex(newN);
    }
    setTrailHistory([]);
    setPhaseHistory([]);
    setEnergyHistory([]);
    if (isEnsembleRef.current) {
      initEnsemble(fresh);
    }
    showToast(`Configured ${newN}-Pendulum Spatial Chain`);
  };

  // Update Individual Node Property (Mass, Length, Color)
  const handleUpdateNodeProperty = (linkIdx, prop, value) => {
    const cur = nStateRef.current;
    const newMasses = [...cur.masses];
    const newLengths = [...cur.lengths];
    const newColors = [...(cur.colors || Array(cur.numLinks).fill('#ffffff'))];

    if (prop === 'mass') {
      newMasses[linkIdx] = value;
      showToast(`Joint #${linkIdx + 1} Mass: ${value.toFixed(2)} kg`);
    } else if (prop === 'length') {
      newLengths[linkIdx] = value;
      showToast(`Link #${linkIdx + 1} Length: ${value.toFixed(2)} m`);
    } else if (prop === 'color') {
      newColors[linkIdx] = value;
    }

    const updated = {
      ...cur,
      masses: newMasses,
      lengths: newLengths,
      colors: newColors,
    };

    setNState(updated);
    nStateRef.current = updated;
    if (isEnsembleRef.current) initEnsemble(updated);
  };

  // Set Joint Spherical Angles (Manual Joint Kinematic Posing)
  const handleSetJointAngles = (linkIdx, azimuth, elevation) => {
    const cur = nStateRef.current;
    const updated = setJointSphericalAngles(cur, linkIdx, azimuth, elevation);
    setNState(updated);
    nStateRef.current = updated;
    if (isEnsembleRef.current) initEnsemble(updated);
  };

  // Set Joint Cartesian Position
  const handleSetJointPosition = (nodeIdx, newPos) => {
    const cur = nStateRef.current;
    const updated = setJointCartesianPosition(cur, nodeIdx, newPos);
    setNState(updated);
    nStateRef.current = updated;
    if (isEnsembleRef.current) initEnsemble(updated);
  };

  // Direct 3D Joint Drag Handler (Interactive Three.js Raycast Drag)
  const handleJointDrag = (nodeIdx, newPos, isRelease = false, throwVelocity = null) => {
    if (!isRelease) {
      activeDragRef.current = { nodeIndex: nodeIdx, targetPos: newPos };
      const cur = nStateRef.current;
      const updated = setJointCartesianPosition(cur, nodeIdx, newPos);
      setNState(updated);
      nStateRef.current = updated;
    } else {
      activeDragRef.current = { nodeIndex: null, targetPos: null };
      if (throwVelocity && !isPausedRef.current) {
        const cur = nStateRef.current;
        const newVelocities = cur.velocities.map((v, i) => {
          if (i === nodeIdx - 1) {
            return {
              x: throwVelocity.x,
              y: throwVelocity.y,
              z: throwVelocity.z,
            };
          }
          return v;
        });
        const updated = { ...cur, velocities: newVelocities };
        setNState(updated);
        nStateRef.current = updated;
        showToast(`Imparted Velocity to Joint #${nodeIdx}`);
      }
      syncStateToScript();
    }
  };

  // Quick Action: Kick Joint
  const handleKickJoint = (nodeIdx) => {
    const cur = nStateRef.current;
    const kickX = (Math.random() - 0.5) * 5.0;
    const kickY = (Math.random() - 0.5) * 3.0;
    const kickZ = (Math.random() - 0.5) * 5.0;

    const newVel = cur.velocities.map((v, idx) => {
      if (idx === nodeIdx - 1) {
        return {
          x: v.x + kickX,
          y: v.y + kickY,
          z: v.z + kickZ,
        };
      }
      return v;
    });

    const updated = { ...cur, velocities: newVel };
    setNState(updated);
    nStateRef.current = updated;
    showToast(`⚡ Kicked Joint #${nodeIdx}`);
  };

  // Quick Action: Freeze Joint
  const handleFreezeJoint = (nodeIdx) => {
    const cur = nStateRef.current;
    const newVel = cur.velocities.map((v, idx) => {
      if (idx === nodeIdx - 1) return { x: 0, y: 0, z: 0 };
      return v;
    });
    const updated = { ...cur, velocities: newVel };
    setNState(updated);
    nStateRef.current = updated;
    showToast(`🛑 Froze Joint #${nodeIdx} Velocity`);
  };

  // Quick Action: Toggle Pin Joint
  const handleTogglePinJoint = (nodeIdx) => {
    const cur = nStateRef.current;
    const newPinned = [...(cur.pinned || Array(cur.numLinks + 1).fill(false))];
    newPinned[nodeIdx] = !newPinned[nodeIdx];

    const updated = { ...cur, pinned: newPinned };
    setNState(updated);
    nStateRef.current = updated;
    showToast(newPinned[nodeIdx] ? `📌 Pinned Joint #${nodeIdx}` : `Unpinned Joint #${nodeIdx}`);
    syncStateToScript();
  };

  // Quick Action: Add Link
  const handleAddLink = (afterIdx = null) => {
    const cur = nStateRef.current;
    const updated = addLinkToNPendulum(cur, afterIdx);
    setNumLinks(updated.numLinks);
    setNState(updated);
    nStateRef.current = updated;
    setSelectedNodeIndex(afterIdx !== null ? afterIdx + 1 : updated.numLinks);
    showToast(`Added Joint #${updated.numLinks}`);
  };

  // Quick Action: Remove Link
  const handleRemoveLink = (nodeIdx) => {
    const cur = nStateRef.current;
    if (cur.numLinks <= 1) return;
    const updated = removeLinkFromNPendulum(cur, nodeIdx);
    setNumLinks(updated.numLinks);
    setNState(updated);
    nStateRef.current = updated;
    setSelectedNodeIndex(Math.min(nodeIdx, updated.numLinks));
    showToast(`Removed Joint #${nodeIdx}`);
  };

  // iPhone Chrome / iOS / Universal Fullscreen Handler
  const toggleFullscreen = () => {
    const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const docEl = document.documentElement;

    if (!isFullscreen) {
      const requestFs = docEl.requestFullscreen || docEl.webkitRequestFullscreen || docEl.mozRequestFullScreen || docEl.msRequestFullscreen;
      if (!isIos && requestFs) {
        requestFs.call(docEl).then(() => {
          setIsFullscreen(true);
          showToast('Entered Fullscreen');
        }).catch(() => {
          setIsFullscreen(true);
          window.scrollTo(0, 1);
          showToast('Fullscreen Mode (iOS Edge-to-Edge)');
        });
      } else {
        setIsFullscreen(true);
        window.scrollTo(0, 1);
        showToast('Fullscreen Mode (iOS Edge-to-Edge)');
      }
    } else {
      const exitFs = document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen || document.msExitFullscreen;
      if (exitFs && document.fullscreenElement) {
        exitFs.call(document).then(() => {
          setIsFullscreen(false);
          showToast('Exited Fullscreen');
        }).catch(() => {
          setIsFullscreen(false);
        });
      } else {
        setIsFullscreen(false);
        showToast('Exited Fullscreen');
      }
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    document.addEventListener('webkitfullscreenchange', handleFsChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFsChange);
      document.removeEventListener('webkitfullscreenchange', handleFsChange);
    };
  }, []);

  // Initialize 3D Ensemble states
  const initEnsemble = useCallback((baseState = nStateRef.current) => {
    const states = [];
    const count = ensembleCountRef.current;
    const delta = ensembleDeltaRef.current;
    const n = baseState.numLinks;

    for (let i = 0; i < count; i++) {
      const offset = (i - Math.floor(count / 2)) * delta;
      const perturbedPos = baseState.positions.map((p, idx) => {
        if (idx === 0) return { ...p };
        return {
          x: p.x + offset * (idx / n),
          y: p.y + offset * 0.5 * (idx / n),
          z: p.z + offset * 1.5 * (idx / n),
        };
      });

      const perturbedVel = baseState.velocities.map((v, idx) => ({
        x: v.x + offset * 0.1,
        y: v.y,
        z: v.z + offset * 0.2,
      }));

      states.push({
        numLinks: n,
        lengths: [...baseState.lengths],
        masses: [...baseState.masses],
        colors: [...(baseState.colors || Array(n).fill('#ffffff'))],
        pinned: [...(baseState.pinned || Array(n + 1).fill(false))],
        positions: perturbedPos,
        velocities: perturbedVel,
      });
    }
    ensembleStatesRef.current = states;
    setEnsembleTrails(states.map(() => []));
  }, []);

  useEffect(() => {
    isEnsembleRef.current = isEnsemble;
    if (isEnsemble) {
      initEnsemble();
    } else {
      ensembleStatesRef.current = [];
      setEnsembleTrails([]);
    }
  }, [isEnsemble, ensembleCount, ensembleDelta, initEnsemble]);

  // Apply 3D Transverse Kick / Impulse in X/Y/Z
  const handleApply3DKick = () => {
    const cur = nStateRef.current;
    const kickZ = (Math.random() - 0.5) * 4.0;
    const kickX = (Math.random() - 0.5) * 3.0;

    const updatedVel = cur.velocities.map((v, idx) => ({
      x: v.x + kickX * (idx + 1) * 0.5,
      y: v.y + (Math.random() - 0.5) * 2.0,
      z: v.z + kickZ * (idx + 1) * 0.6,
    }));

    const updatedState = { ...cur, velocities: updatedVel };
    setNState(updatedState);
    nStateRef.current = updatedState;

    if (isEnsembleRef.current) {
      initEnsemble(updatedState);
    }
    showToast('Applied 3D Transverse Impulse');
  };

  // Preset Selection
  const handleSelectPreset = (preset) => {
    setActivePresetId(preset.id);
    setNumLinks(preset.numLinks);
    setParams({ ...preset.params });
    const config = preset.initialConfig(preset.numLinks);
    setNState(config);
    nStateRef.current = config;
    setSelectedNodeIndex(preset.numLinks);
    setTrailHistory([]);
    setPhaseHistory([]);
    setEnergyHistory([]);
    if (isEnsembleRef.current) {
      initEnsemble(config);
    }
    showToast(`Preset: ${preset.name}`);
  };

  // Reset
  const handleReset = () => {
    const fresh = createDefaultNPendulum(numLinks);
    setNState(fresh);
    nStateRef.current = fresh;
    setTrailHistory([]);
    setPhaseHistory([]);
    setEnergyHistory([]);
    if (isEnsembleRef.current) {
      initEnsemble(fresh);
    }
    showToast('Simulation Reset');
  };

  const handleClearTrail = () => {
    setTrailHistory([]);
    setEnsembleTrails(ensembleStatesRef.current.map(() => []));
    setPhaseHistory([]);
    showToast('3D Trails Cleared');
  };

  // Sound Engine
  useEffect(() => {
    audioEngine.toggle(soundEnabled);
    return () => audioEngine.toggle(false);
  }, [soundEnabled]);

  // Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') return;
      if (e.code === 'Space') {
        e.preventDefault();
        setIsPaused((p) => !p);
      } else if (e.key === 'r' || e.key === 'R') {
        handleReset();
      } else if (e.key === 'c' || e.key === 'C') {
        handleClearTrail();
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      } else if (e.key === 'k' || e.key === 'K') {
        handleApply3DKick();
      } else if (e.key === 'e' || e.key === 'E') {
        handleToggleNodeMenu();
      } else if (e.key === 'p' || e.key === 'P') {
        handleToggleScriptEditor();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [numLinks, isFullscreen, nodeMenuOpen, scriptEditorOpen]);

  // Step 1 frame
  const handleStepForward = () => {
    const dt = 0.02 * simSpeed;
    const subSteps = 4;
    const subDt = dt / subSteps;
    let curr = nStateRef.current;
    const p = paramsRef.current;

    for (let i = 0; i < subSteps; i++) {
      curr = stepNPendulum(curr, p, subDt);
    }
    setNState(curr);
    nStateRef.current = curr;
  };

  // Primary 60fps Physics Animation Loop
  useEffect(() => {
    let animId;
    let lastTime = performance.now();
    let sampleCounter = 0;

    const loop = (time) => {
      const rawDelta = Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;

      if (!isPausedRef.current) {
        const p = paramsRef.current;
        const dtTotal = rawDelta * simSpeed;
        const subSteps = 6;
        const dt = dtTotal / subSteps;

        // Step main N-pendulum
        let currentMain = nStateRef.current;
        const dragInfo = activeDragRef.current;

        for (let s = 0; s < subSteps; s++) {
          currentMain = stepNPendulum(currentMain, p, dt, dragInfo.nodeIndex, dragInfo.targetPos);
        }
        nStateRef.current = currentMain;
        setNState(currentMain);

        // Sound update
        if (soundEnabled && currentMain.velocities.length > 0) {
          const v0 = currentMain.velocities[0];
          const vLast = currentMain.velocities[currentMain.velocities.length - 1];
          const spd1 = Math.sqrt(v0.x * v0.x + v0.y * v0.y + v0.z * v0.z);
          const spd2 = Math.sqrt(vLast.x * vLast.x + vLast.y * vLast.y + vLast.z * vLast.z);
          audioEngine.update(spd1, spd2);
        }

        // Tip position for 3D trail
        const tipPos = currentMain.positions[currentMain.numLinks];
        if (tipPos) {
          setTrailHistory((prev) => {
            const next = [...prev, { x: tipPos.x, y: tipPos.y, z: tipPos.z }];
            if (next.length > trailLength) {
              return next.slice(next.length - trailLength);
            }
            return next;
          });
        }

        // Step Ensemble
        if (isEnsembleRef.current && ensembleStatesRef.current.length > 0) {
          const nextEnsemble = ensembleStatesRef.current.map((state) => {
            let cur = state;
            for (let s = 0; s < subSteps; s++) {
              cur = stepNPendulum(cur, p, dt);
            }
            return cur;
          });
          ensembleStatesRef.current = nextEnsemble;

          setEnsembleTrails((prevTrails) => {
            return nextEnsemble.map((st, i) => {
              const ensTip = st.positions[st.numLinks];
              if (!ensTip) return [];
              const curTrail = prevTrails[i] || [];
              const updated = [...curTrail, { x: ensTip.x, y: ensTip.y, z: ensTip.z }];
              if (updated.length > Math.min(trailLength, 300)) {
                return updated.slice(updated.length - Math.min(trailLength, 300));
              }
              return updated;
            });
          });
        }

        // Diagnostics sampling (Energy & Phase portrait)
        sampleCounter++;
        if (sampleCounter % 2 === 0) {
          const energy = calculateNEnergy(currentMain, p);
          setCurrentEnergy(energy);

          if (currentMain.positions.length > 1 && currentMain.velocities.length > 0) {
            const p1 = currentMain.positions[1];
            const v1 = currentMain.velocities[0];
            const angle1 = Math.atan2(p1.x, -p1.y);
            const angVel1 = (v1.x * -p1.y - v1.y * p1.x) / (p1.x * p1.x + p1.y * p1.y || 1);

            setPhaseHistory((prev) => {
              const next = [...prev, { theta1: angle1, omega1: angVel1 }];
              return next.length > 350 ? next.slice(next.length - 350) : next;
            });
          }

          setEnergyHistory((prev) => {
            const next = [...prev, energy];
            return next.length > 150 ? next.slice(next.length - 150) : next;
          });
        }
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [simSpeed, trailLength, soundEnabled]);

  return (
    <div
      className={`w-screen h-screen h-[100dvh] overflow-hidden bg-black text-white relative flex select-none ${
        isFullscreen ? 'fixed inset-0 z-[9999]' : ''
      }`}
    >
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 mono-glass text-white px-4 py-2 rounded-xl shadow-2xl animate-fade-in border border-zinc-700">
          <Check size={14} className="text-white" />
          <span className="text-xs font-mono font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Top Floating Minimal Action Bar */}
      <MonoActionBar
        isPaused={isPaused}
        onTogglePlay={() => setIsPaused((p) => !p)}
        onStepForward={handleStepForward}
        onReset={handleReset}
        onClearTrail={handleClearTrail}
        onApply3DKick={handleApply3DKick}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
        drawerOpen={drawerOpen}
        onToggleDrawer={() => {
          setDrawerOpen((o) => !o);
          if (!drawerOpen) {
            setNodeMenuOpen(false);
            setScriptEditorOpen(false);
          }
        }}
        nodeMenuOpen={nodeMenuOpen}
        onToggleNodeMenu={handleToggleNodeMenu}
        selectedNodeIndex={selectedNodeIndex}
        scriptEditorOpen={scriptEditorOpen}
        onToggleScriptEditor={handleToggleScriptEditor}
        diagnosticsOpen={diagnosticsOpen}
        onToggleDiagnostics={() => setDiagnosticsOpen((o) => !o)}
        presetsOpen={presetsOpen}
        onTogglePresets={() => setPresetsOpen((o) => !o)}
        isEnsemble={isEnsemble}
        onToggleEnsemble={() => setIsEnsemble((e) => !e)}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled((s) => !s)}
        showGrid={showGrid}
        onToggleGrid={() => setShowGrid((g) => !g)}
        onResetCamera={() => resetCameraRef.current && resetCameraRef.current()}
        onOpenTheory={() => setTheoryOpen(true)}
      />

      {/* Main 3D Three.js Viewport (Full Screen No-Scroll) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <ThreeCanvas
          nState={nState}
          ensembleStates={ensembleStatesRef.current}
          params={params}
          trailHistory={trailHistory}
          ensembleTrails={ensembleTrails}
          trailLength={trailLength}
          trailFade={trailFade}
          showGrid={showGrid}
          isEnsemble={isEnsemble}
          selectedNodeIndex={selectedNodeIndex}
          onSelectNodeIndex={handleSelectNode}
          onJointDrag={handleJointDrag}
          isPaused={isPaused}
          onResetCameraRef={resetCameraRef}
        />
      </div>

      {/* Programmable Pythonic Script Editor (Right Side, Adjustable Width, Collapsible) */}
      <ScriptEditor
        isOpen={scriptEditorOpen}
        onClose={() => setScriptEditorOpen(false)}
        scriptCode={scriptCode}
        onChangeCode={handleScriptCodeChange}
        onApplyScript={(code) => applyScriptToState(code, true)}
        onRegenerateFromState={syncStateToScript}
        executionError={executionError}
        autoApply={autoApply}
        setAutoApply={setAutoApply}
        isPaused={isPaused}
        onTogglePlay={() => setIsPaused((p) => !p)}
      />

      {/* Interactive Floating Node Menu / Joint Inspector */}
      <NodeMenu
        isOpen={nodeMenuOpen}
        onClose={() => setNodeMenuOpen(false)}
        selectedNodeIndex={selectedNodeIndex}
        onSelectNodeIndex={setSelectedNodeIndex}
        nState={nState}
        onUpdateProperty={handleUpdateNodeProperty}
        onSetJointAngles={handleSetJointAngles}
        onSetJointPosition={handleSetJointPosition}
        onKickJoint={handleKickJoint}
        onFreezeJoint={handleFreezeJoint}
        onTogglePinJoint={handleTogglePinJoint}
        onAddLink={handleAddLink}
        onRemoveLink={handleRemoveLink}
        isPaused={isPaused}
        onTogglePlay={() => setIsPaused((p) => !p)}
      />

      {/* Minimal Floating Drawer: Physics & N-Links Parameters */}
      <MonoSettingsDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        numLinks={numLinks}
        setNumLinks={handleNumLinksChange}
        nState={nState}
        selectedNodeIndex={selectedNodeIndex}
        onSelectNodeIndex={handleSelectNode}
        onAddLink={handleAddLink}
        params={params}
        setParams={setParams}
        simSpeed={simSpeed}
        setSimSpeed={setSimSpeed}
        trailLength={trailLength}
        setTrailLength={setTrailLength}
        trailFade={trailFade}
        setTrailFade={setTrailFade}
        isEnsemble={isEnsemble}
        setIsEnsemble={setIsEnsemble}
        ensembleCount={ensembleCount}
        setEnsembleCount={setEnsembleCount}
        ensembleDelta={ensembleDelta}
        setEnsembleDelta={setEnsembleDelta}
        onReset={handleReset}
        onApply3DKick={handleApply3DKick}
      />

      {/* Minimal Floating Drawer: System Diagnostics & Energy */}
      <MonoDiagnostics
        isOpen={diagnosticsOpen}
        onClose={() => setDiagnosticsOpen(false)}
        energyHistory={energyHistory}
        currentEnergy={currentEnergy}
        phaseHistory={phaseHistory}
      />

      {/* Minimal Presets Selector Drawer */}
      <MonoPresetsDrawer
        isOpen={presetsOpen}
        onClose={() => setPresetsOpen(false)}
        activePresetId={activePresetId}
        onSelectPreset={handleSelectPreset}
      />

      {/* Theory Guide Modal */}
      <TheoryModal
        isOpen={theoryOpen}
        onClose={() => setTheoryOpen(false)}
      />
    </div>
  );
}
