// 3D N-Pendulum Spatial Physics Engine (Arbitrary N links with 3D Degrees of Freedom)

export function createDefaultNPendulum(numLinks = 2, customLengths = null, customMasses = null, customColors = null) {
  const lengths = customLengths ? [...customLengths] : Array(numLinks).fill(1.0);
  const masses = customMasses ? [...customMasses] : Array(numLinks).fill(1.0);
  const colors = customColors ? [...customColors] : Array(numLinks).fill('#ffffff');
  const pinned = Array(numLinks + 1).fill(false);
  pinned[0] = true; // Fixed pivot origin is always pinned

  const positions = [{ x: 0, y: 0, z: 0 }]; // Pivot origin at index 0
  const velocities = [];

  for (let i = 0; i < numLinks; i++) {
    const l = lengths[i] || 1.0;
    // Initial launch configuration: horizontal along X with small out-of-plane Z deflection
    positions.push({
      x: (i + 1) * l * 0.707,
      y: -(i + 1) * l * 0.707,
      z: (i + 1) * 0.15, // Out-of-plane 3D angle
    });
    velocities.push({ x: 0, y: 0, z: 0.1 * (i + 1) });
  }

  return {
    numLinks,
    lengths,
    masses,
    colors,
    pinned,
    positions, // array of length numLinks + 1 (index 0 is fixed pivot)
    velocities, // array of length numLinks
  };
}

export function stepNPendulum(state, params, dt, draggedNodeIndex = null, dragTargetPos = null) {
  const { numLinks, lengths, masses, positions, velocities, pinned = [] } = state;
  const { g = 9.81, damping = 0 } = params;

  const subSteps = 16; // High micro-stepping for exact rigid constraint stability
  const subDt = dt / subSteps;
  const dampingFactor = Math.max(0, 1 - damping * subDt);

  // Deep clone positions & velocities
  const curPos = positions.map((p) => ({ ...p }));
  const curVel = velocities.map((v) => ({ ...v }));

  for (let step = 0; step < subSteps; step++) {
    const oldPos = curPos.map((p) => ({ ...p }));

    // 1. Apply gravity & velocity integration to all free nodes (indices 1 to numLinks)
    for (let i = 1; i <= numLinks; i++) {
      const vIdx = i - 1;
      const isPinned = pinned[i] || false;
      const isBeingDragged = draggedNodeIndex === i && dragTargetPos;

      if (isBeingDragged) {
        curPos[i].x = dragTargetPos.x;
        curPos[i].y = dragTargetPos.y;
        curPos[i].z = dragTargetPos.z;
        continue;
      }

      if (isPinned) {
        // Pinned node remains stationary
        curVel[vIdx].x = 0;
        curVel[vIdx].y = 0;
        curVel[vIdx].z = 0;
        continue;
      }

      // Damping
      curVel[vIdx].x *= dampingFactor;
      curVel[vIdx].y *= dampingFactor;
      curVel[vIdx].z *= dampingFactor;

      // Gravity (acting along -Y)
      curVel[vIdx].y -= g * subDt;

      // Position update
      curPos[i].x += curVel[vIdx].x * subDt;
      curPos[i].y += curVel[vIdx].y * subDt;
      curPos[i].z += curVel[vIdx].z * subDt;
    }

    // Fixed pivot stays at origin (or its pinned position)
    curPos[0].x = 0;
    curPos[0].y = 0;
    curPos[0].z = 0;

    // 2. Rigid Distance Constraint Relaxation (PBD / Verlet Relaxation)
    const constraintIterations = 20;
    for (let iter = 0; iter < constraintIterations; iter++) {
      for (let i = 1; i <= numLinks; i++) {
        const pA = curPos[i - 1];
        const pB = curPos[i];
        const targetLen = lengths[i - 1] || 1.0;

        const dx = pB.x - pA.x;
        const dy = pB.y - pA.y;
        const dz = pB.z - pA.z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz) || 0.00001;
        const error = (dist - targetLen) / dist;

        // Weights: 0 if pinned or dragged, else 1/mass
        const isAPinned = i === 1 || pinned[i - 1] || (draggedNodeIndex === i - 1);
        const isBPinned = pinned[i] || (draggedNodeIndex === i);

        const mA = isAPinned ? 0 : 1 / (masses[i - 2] || 1.0);
        const mB = isBPinned ? 0 : 1 / (masses[i - 1] || 1.0);
        const sumM = mA + mB;

        if (sumM > 0) {
          const ratioA = mA / sumM;
          const ratioB = mB / sumM;

          if (!isAPinned && i > 1) {
            pA.x += dx * error * ratioA;
            pA.y += dy * error * ratioA;
            pA.z += dz * error * ratioA;
          }

          if (!isBPinned) {
            pB.x -= dx * error * ratioB;
            pB.y -= dy * error * ratioB;
            pB.z -= dz * error * ratioB;
          }
        }
      }
    }

    // 3. Recompute velocities from position displacement
    for (let i = 1; i <= numLinks; i++) {
      const vIdx = i - 1;
      if (pinned[i]) {
        curVel[vIdx].x = 0;
        curVel[vIdx].y = 0;
        curVel[vIdx].z = 0;
      } else {
        curVel[vIdx].x = (curPos[i].x - oldPos[i].x) / subDt;
        curVel[vIdx].y = (curPos[i].y - oldPos[i].y) / subDt;
        curVel[vIdx].z = (curPos[i].z - oldPos[i].z) / subDt;
      }
    }
  }

  return {
    ...state,
    numLinks,
    lengths,
    masses,
    colors: state.colors || Array(numLinks).fill('#ffffff'),
    pinned: state.pinned || Array(numLinks + 1).fill(false),
    positions: curPos,
    velocities: curVel,
  };
}

export function calculateNEnergy(state, params) {
  const { numLinks, masses, positions, velocities } = state;
  const { g = 9.81 } = params;

  let kinetic = 0;
  let potential = 0;

  for (let i = 0; i < numLinks; i++) {
    const m = masses[i] || 1.0;
    const v = velocities[i] || { x: 0, y: 0, z: 0 };
    const p = positions[i + 1] || { x: 0, y: 0, z: 0 };

    const speedSq = v.x * v.x + v.y * v.y + v.z * v.z;
    kinetic += 0.5 * m * speedSq;
    potential += m * g * p.y; // Reference y=0 at pivot
  }

  return {
    kinetic,
    potential,
    total: kinetic + potential,
  };
}

// Compute spherical angles (azimuth & elevation) for a link relative to parent
export function getJointSphericalAngles(pParent, pCurrent) {
  const dx = pCurrent.x - pParent.x;
  const dy = pCurrent.y - pParent.y;
  const dz = pCurrent.z - pParent.z;
  const r = Math.sqrt(dx * dx + dy * dy + dz * dz) || 0.0001;

  // Azimuth in X-Z plane (deg: -180 to 180)
  const azimuthRad = Math.atan2(dz, dx);
  const azimuthDeg = (azimuthRad * 180) / Math.PI;

  // Elevation from horizontal (deg: -90 to 90)
  const elevationRad = Math.asin(Math.max(-1, Math.min(1, dy / r)));
  const elevationDeg = (elevationRad * 180) / Math.PI;

  return {
    azimuthDeg: Math.round(azimuthDeg * 10) / 10,
    elevationDeg: Math.round(elevationDeg * 10) / 10,
    length: Math.round(r * 100) / 100,
  };
}

// Set joint angles and forward-kinematically reposition the joint and its subtree
export function setJointSphericalAngles(state, linkIndex, azimuthDeg, elevationDeg) {
  const { numLinks, lengths, positions, velocities } = state;
  if (linkIndex < 1 || linkIndex > numLinks) return state;

  const newPositions = positions.map((p) => ({ ...p }));
  const pParent = newPositions[linkIndex - 1];
  const len = lengths[linkIndex - 1] || 1.0;

  const azRad = (azimuthDeg * Math.PI) / 180;
  const elRad = (elevationDeg * Math.PI) / 180;

  const cosEl = Math.cos(elRad);
  const sinEl = Math.sin(elRad);
  const cosAz = Math.cos(azRad);
  const sinAz = Math.sin(azRad);

  const oldJointPos = { ...newPositions[linkIndex] };
  const targetX = pParent.x + len * cosEl * cosAz;
  const targetY = pParent.y + len * sinEl;
  const targetZ = pParent.z + len * cosEl * sinAz;

  const deltaX = targetX - oldJointPos.x;
  const deltaY = targetY - oldJointPos.y;
  const deltaZ = targetZ - oldJointPos.z;

  newPositions[linkIndex] = { x: targetX, y: targetY, z: targetZ };

  // Shift subsequent children by the delta so the chain moves together
  for (let j = linkIndex + 1; j <= numLinks; j++) {
    newPositions[j].x += deltaX;
    newPositions[j].y += deltaY;
    newPositions[j].z += deltaZ;
  }

  // Reset velocities of moved joints to prevent explosive velocity spikes
  const newVelocities = velocities.map((v, idx) => {
    if (idx >= linkIndex - 1) {
      return { x: 0, y: 0, z: 0 };
    }
    return { ...v };
  });

  return {
    ...state,
    positions: newPositions,
    velocities: newVelocities,
  };
}

// Set joint Cartesian position manually and relax constraints
export function setJointCartesianPosition(state, nodeIndex, newPos) {
  const { numLinks, lengths, masses, positions, velocities, pinned = [] } = state;
  if (nodeIndex < 1 || nodeIndex > numLinks) return state;

  const newPositions = positions.map((p) => ({ ...p }));
  newPositions[nodeIndex] = { ...newPos };

  // Run a quick PBD relaxation pass to keep distance constraints valid
  for (let iter = 0; iter < 15; iter++) {
    for (let i = 1; i <= numLinks; i++) {
      const pA = newPositions[i - 1];
      const pB = newPositions[i];
      const targetLen = lengths[i - 1] || 1.0;

      const dx = pB.x - pA.x;
      const dy = pB.y - pA.y;
      const dz = pB.z - pA.z;
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz) || 0.00001;
      const error = (dist - targetLen) / dist;

      const isAPinned = i === 1 || pinned[i - 1] || (i - 1 === nodeIndex);
      const isBPinned = pinned[i] || (i === nodeIndex);

      const mA = isAPinned ? 0 : 1 / (masses[i - 2] || 1.0);
      const mB = isBPinned ? 0 : 1 / (masses[i - 1] || 1.0);
      const sumM = mA + mB;

      if (sumM > 0) {
        const ratioA = mA / sumM;
        const ratioB = mB / sumM;

        if (!isAPinned && i > 1) {
          pA.x += dx * error * ratioA;
          pA.y += dy * error * ratioA;
          pA.z += dz * error * ratioA;
        }

        if (!isBPinned) {
          pB.x -= dx * error * ratioB;
          pB.y -= dy * error * ratioB;
          pB.z -= dz * error * ratioB;
        }
      }
    }
  }

  // Zero velocities of edited node
  const newVelocities = velocities.map((v, idx) => {
    if (idx === nodeIndex - 1) return { x: 0, y: 0, z: 0 };
    return { ...v };
  });

  return {
    ...state,
    positions: newPositions,
    velocities: newVelocities,
  };
}

// Add a new link to the chain
export function addLinkToNPendulum(state, afterIndex = null) {
  const { numLinks, lengths, masses, colors, pinned, positions, velocities } = state;
  const newNumLinks = numLinks + 1;
  const idx = afterIndex !== null ? afterIndex : numLinks;

  const newLengths = [...lengths];
  const newMasses = [...masses];
  const newColors = [...(colors || Array(numLinks).fill('#ffffff'))];
  const newPinned = [...(pinned || Array(numLinks + 1).fill(false))];
  const newPositions = positions.map((p) => ({ ...p }));
  const newVelocities = velocities.map((v) => ({ ...v }));

  const defaultLength = 0.8;
  const defaultMass = 1.0;
  const defaultColor = '#ffffff';

  const lastPos = newPositions[idx];
  const newBobPos = {
    x: lastPos.x + 0.5 * defaultLength,
    y: lastPos.y - 0.7 * defaultLength,
    z: lastPos.z + 0.2 * defaultLength,
  };

  newLengths.splice(idx, 0, defaultLength);
  newMasses.splice(idx, 0, defaultMass);
  newColors.splice(idx, 0, defaultColor);
  newPinned.splice(idx + 1, 0, false);
  newPositions.splice(idx + 1, 0, newBobPos);
  newVelocities.splice(idx, 0, { x: 0, y: 0, z: 0 });

  return {
    numLinks: newNumLinks,
    lengths: newLengths,
    masses: newMasses,
    colors: newColors,
    pinned: newPinned,
    positions: newPositions,
    velocities: newVelocities,
  };
}

// Remove a link from the chain
export function removeLinkFromNPendulum(state, removeIndex) {
  const { numLinks, lengths, masses, colors, pinned, positions, velocities } = state;
  if (numLinks <= 1 || removeIndex < 1 || removeIndex > numLinks) return state;

  const newNumLinks = numLinks - 1;
  const newLengths = lengths.filter((_, i) => i !== removeIndex - 1);
  const newMasses = masses.filter((_, i) => i !== removeIndex - 1);
  const newColors = (colors || Array(numLinks).fill('#ffffff')).filter((_, i) => i !== removeIndex - 1);
  const newPinned = (pinned || Array(numLinks + 1).fill(false)).filter((_, i) => i !== removeIndex);
  const newPositions = positions.filter((_, i) => i !== removeIndex);
  const newVelocities = velocities.filter((_, i) => i !== removeIndex - 1);

  return {
    numLinks: newNumLinks,
    lengths: newLengths,
    masses: newMasses,
    colors: newColors,
    pinned: newPinned,
    positions: newPositions,
    velocities: newVelocities,
  };
}

export const PRESETS_3D = [
  {
    id: 'double_3d_swirl',
    name: 'Double 3D Swirl',
    numLinks: 2,
    category: 'Spatial 3D',
    description: 'Double pendulum with out-of-plane transverse impulse creating 3D chaotic loops.',
    params: { g: 9.81, damping: 0 },
    initialConfig: () => {
      return {
        numLinks: 2,
        lengths: [1.0, 1.0],
        masses: [1.0, 1.0],
        colors: ['#ffffff', '#00f5ff'],
        pinned: [true, false, false],
        positions: [
          { x: 0, y: 0, z: 0 },
          { x: 0.9, y: 0.2, z: 0.4 },
          { x: 1.5, y: -0.4, z: -0.5 },
        ],
        velocities: [
          { x: 0, y: 0, z: 0.8 },
          { x: 0.4, y: 0, z: -1.2 },
        ],
      };
    },
  },
  {
    id: 'triple_helix',
    name: 'Triple 3D Helix',
    numLinks: 3,
    category: 'N = 3 Spatial',
    description: '3-link spatial pendulum tumbling across all 3 Cartesian dimensions.',
    params: { g: 9.81, damping: 0.0002 },
    initialConfig: () => {
      return {
        numLinks: 3,
        lengths: [0.85, 0.85, 0.85],
        masses: [1.0, 1.0, 0.8],
        colors: ['#ffffff', '#00f5ff', '#ff0077'],
        pinned: [true, false, false, false],
        positions: [
          { x: 0, y: 0, z: 0 },
          { x: 0.8, y: 0.1, z: 0.3 },
          { x: 1.4, y: 0.3, z: 0.8 },
          { x: 1.8, y: -0.4, z: 0.1 },
        ],
        velocities: [
          { x: 0, y: 0, z: 0.5 },
          { x: 0, y: 0, z: -0.7 },
          { x: 0.6, y: 0, z: 1.0 },
        ],
      };
    },
  },
  {
    id: 'quad_snake',
    name: 'Quad 3D Vortex',
    numLinks: 4,
    category: 'N = 4 Spatial',
    description: '4-link spatial snake chain folding and twisting into 3D vortex knots.',
    params: { g: 9.81, damping: 0.0003 },
    initialConfig: () => {
      return {
        numLinks: 4,
        lengths: [0.65, 0.65, 0.65, 0.65],
        masses: [1.2, 1.0, 0.8, 0.6],
        colors: ['#ffffff', '#00f5ff', '#ff0077', '#ffd000'],
        pinned: [true, false, false, false, false],
        positions: [
          { x: 0, y: 0, z: 0 },
          { x: 0.6, y: 0.2, z: 0.2 },
          { x: 1.1, y: 0.5, z: 0.5 },
          { x: 1.5, y: 0.3, z: 0.8 },
          { x: 1.9, y: -0.2, z: 0.4 },
        ],
        velocities: [
          { x: 0, y: 0, z: 0.4 },
          { x: 0.2, y: 0, z: -0.6 },
          { x: -0.3, y: 0, z: 0.8 },
          { x: 0.5, y: 0, z: -1.0 },
        ],
      };
    },
  },
  {
    id: 'penta_whip',
    name: '5-Link Spatial Whip',
    numLinks: 5,
    category: 'N = 5 Spatial',
    description: '5-link articulated chain demonstrating high-order nonlinear chaos.',
    params: { g: 9.81, damping: 0.0004 },
    initialConfig: () => {
      return {
        numLinks: 5,
        lengths: [0.55, 0.55, 0.55, 0.55, 0.55],
        masses: [1.5, 1.2, 1.0, 0.8, 0.5],
        colors: ['#ffffff', '#a855f7', '#00f5ff', '#ff0077', '#ffd000'],
        pinned: [true, false, false, false, false, false],
        positions: [
          { x: 0, y: 0, z: 0 },
          { x: 0.5, y: 0.1, z: 0.1 },
          { x: 1.0, y: 0.2, z: 0.3 },
          { x: 1.4, y: 0.1, z: 0.6 },
          { x: 1.8, y: -0.2, z: 0.4 },
          { x: 2.2, y: -0.5, z: 0.1 },
        ],
        velocities: [
          { x: 0, y: 0, z: 0.3 },
          { x: 0, y: 0, z: -0.5 },
          { x: 0.2, y: 0, z: 0.7 },
          { x: -0.4, y: 0, z: 0.9 },
          { x: 0.6, y: 0, z: -1.1 },
        ],
      };
    },
  },
  {
    id: 'heavy_tip',
    name: 'Heavy Tip Inverted',
    numLinks: 3,
    category: 'Extreme Dynamics',
    description: 'Massive tip bob creating intense centrifugal reaction forces.',
    params: { g: 9.81, damping: 0.0001 },
    initialConfig: () => {
      return {
        numLinks: 3,
        lengths: [0.9, 0.9, 0.7],
        masses: [0.5, 0.5, 5.0],
        colors: ['#ffffff', '#ffffff', '#ff0077'],
        pinned: [true, false, false, false],
        positions: [
          { x: 0, y: 0, z: 0 },
          { x: 0.8, y: 0.4, z: 0.2 },
          { x: 1.6, y: 0.7, z: 0.5 },
          { x: 2.2, y: 0.3, z: 0.8 },
        ],
        velocities: [
          { x: 0, y: 0, z: 0.2 },
          { x: 0, y: 0, z: 0.4 },
          { x: 0, y: 0, z: -0.8 },
        ],
      };
    },
  },
  {
    id: 'deca_whip',
    name: '10-Link Spatial Ribbon',
    numLinks: 10,
    category: 'N = 10 Chain',
    description: '10-link flexible chain demonstrating wave propagation and 3D chaotic ribboning.',
    params: { g: 9.81, damping: 0.0005 },
    initialConfig: () => {
      const n = 10;
      const l = 0.26;
      const pos = [{ x: 0, y: 0, z: 0 }];
      const vel = [];
      const colPalette = ['#ffffff', '#e4e4e7', '#00f5ff', '#38bdf8', '#818cf8', '#a855f7', '#ec4899', '#f43f5e', '#fb923c', '#ffd000'];
      for (let i = 1; i <= n; i++) {
        pos.push({
          x: i * l * 0.9,
          y: 0.1 * Math.sin(i * 0.6),
          z: i * l * 0.4,
        });
        vel.push({ x: 0, y: 0, z: 0.2 * (i % 2 === 0 ? 1 : -1) });
      }
      return {
        numLinks: n,
        lengths: Array(n).fill(l),
        masses: Array.from({ length: n }, (_, i) => Math.max(0.2, 1.5 - i * 0.12)),
        colors: colPalette,
        pinned: Array(n + 1).fill(false),
        positions: pos,
        velocities: vel,
      };
    },
  },
];
