// Pythonic / BASIC-like Scripting Engine for Three.js N-Pendulum Experiment
import { createDefaultNPendulum, getJointSphericalAngles } from './physics.js';

const ENV_VARS = new Set([
  'gravity',
  'damping',
  'sim_speed',
  'trail_length',
  'trail_fade',
  'show_grid',
  'ensemble',
  'ensemble_count',
  'ensemble_delta',
]);

/**
 * Generate Pythonic DSL script from current simulator state
 */
export function generateScript({
  nState,
  params,
  simSpeed = 1.0,
  trailLength = 500,
  trailFade = true,
  showGrid = true,
  isEnsemble = false,
  ensembleCount = 12,
  ensembleDelta = 0.0001,
}) {
  const { numLinks = 2, lengths = [], masses = [], colors = [], pinned = [], positions = [], velocities = [] } = nState || {};

  let code = `# ========================================================\n`;
  code += `# Three.js N-Pendulum Experiment Script\n`;
  code += `# Define environment physics & articulated joint network\n`;
  code += `# ========================================================\n\n`;

  code += `# --- Global Environment Parameters ---\n`;
  code += `gravity = ${params.g.toFixed(2)}\n`;
  code += `damping = ${params.damping.toFixed(4)}\n`;
  code += `sim_speed = ${simSpeed.toFixed(1)}\n`;
  code += `trail_length = ${trailLength}\n`;
  code += `trail_fade = ${trailFade ? 'True' : 'False'}\n`;
  code += `show_grid = ${showGrid ? 'True' : 'False'}\n`;
  code += `ensemble = ${isEnsemble ? 'True' : 'False'}\n`;
  if (isEnsemble) {
    code += `ensemble_count = ${ensembleCount}\n`;
    code += `ensemble_delta = ${ensembleDelta.toExponential(2)}\n`;
  }
  code += `\n# --- Articulated Joint Network (N = ${numLinks}) ---\n`;
  code += `# node(id, length, mass, color, azimuth, elevation, [pos], [vel], pinned)\n`;
  code += `clear_nodes()\n\n`;

  for (let i = 1; i <= numLinks; i++) {
    const l = lengths[i - 1] !== undefined ? lengths[i - 1] : 1.0;
    const m = masses[i - 1] !== undefined ? masses[i - 1] : 1.0;
    const col = (colors && colors[i - 1]) || '#ffffff';
    const isPin = (pinned && pinned[i]) || false;
    const pos = positions[i] || { x: 0, y: 0, z: 0 };
    const pParent = positions[i - 1] || { x: 0, y: 0, z: 0 };
    const vel = velocities[i - 1] || { x: 0, y: 0, z: 0 };

    const angles = getJointSphericalAngles(pParent, pos);

    code += `node(\n`;
    code += `    id=${i},\n`;
    code += `    length=${l.toFixed(2)},\n`;
    code += `    mass=${m.toFixed(2)},\n`;
    code += `    color="${col}",\n`;
    code += `    azimuth=${angles.azimuthDeg.toFixed(1)},\n`;
    code += `    elevation=${angles.elevationDeg.toFixed(1)},\n`;
    code += `    pos=[${pos.x.toFixed(3)}, ${pos.y.toFixed(3)}, ${pos.z.toFixed(3)}],\n`;
    code += `    vel=[${vel.x.toFixed(3)}, ${vel.y.toFixed(3)}, ${vel.z.toFixed(3)}],\n`;
    code += `    pinned=${isPin ? 'True' : 'False'}\n`;
    code += `)\n`;
  }

  return code;
}

/**
 * Transpile Pythonic syntax into executable JavaScript inside a sandbox
 */
function transpilePythonToJS(pyCode) {
  const lines = pyCode.split('\n');
  const jsLines = [];
  const indentStack = [0];

  for (let lineIdx = 0; lineIdx < lines.length; lineIdx++) {
    let line = lines[lineIdx];

    // Handle full-line or trailing comments (preserve # inside quotes if any)
    let inString = false;
    let stringChar = '';
    let commentStart = -1;
    for (let c = 0; c < line.length; c++) {
      const ch = line[c];
      if ((ch === '"' || ch === "'") && (c === 0 || line[c - 1] !== '\\')) {
        if (!inString) {
          inString = true;
          stringChar = ch;
        } else if (stringChar === ch) {
          inString = false;
        }
      } else if (ch === '#' && !inString) {
        commentStart = c;
        break;
      }
    }

    let comment = '';
    if (commentStart !== -1) {
      comment = '//' + line.slice(commentStart + 1);
      line = line.slice(0, commentStart);
    }

    const trimmed = line.trim();
    if (!trimmed) {
      jsLines.push(comment);
      continue;
    }

    // Determine indentation
    const indent = line.search(/\S/);
    while (indentStack.length > 1 && indent < indentStack[indentStack.length - 1]) {
      indentStack.pop();
      jsLines.push(' '.repeat(indentStack[indentStack.length - 1]) + '}');
    }

    let transLine = trimmed;

    // Python keyword conversions
    transLine = transLine
      .replace(/\bTrue\b/g, 'true')
      .replace(/\bFalse\b/g, 'false')
      .replace(/\bNone\b/g, 'null')
      .replace(/\band\b/g, '&&')
      .replace(/\bor\b/g, '||')
      .replace(/\bnot\b/g, '!');

    // Convert Python ternary inside parens: (A if COND else B)
    transLine = transLine.replace(/\(([^()]+?)\s+if\s+([^()]+?)\s+else\s+([^()]+?)\)/g, '(( $2 ) ? ( $1 ) : ( $3 ))');

    // Convert Python ternary without parens: A if COND else B
    transLine = transLine.replace(/([a-zA-Z0-9_\.\'\"]+?)\s+if\s+([a-zA-Z0-9_\.\=\!\<\>\%\+\-\*\/\s]+?)\s+else\s+([a-zA-Z0-9_\.\'\"]+)/g, '(( $2 ) ? ( $1 ) : ( $3 ))');

    // Handle Python for loop: for i in range(start, end, step):
    const forRangeMatch = transLine.match(/^for\s+([a-zA-Z_]\w*)\s+in\s+range\(([^)]+)\)\s*:?$/);
    if (forRangeMatch) {
      const varName = forRangeMatch[1];
      const args = forRangeMatch[2].split(',').map((a) => a.trim());
      let start = '0';
      let end = args[0];
      let step = '1';

      if (args.length === 2) {
        start = args[0];
        end = args[1];
      } else if (args.length >= 3) {
        start = args[0];
        end = args[1];
        step = args[2];
      }

      transLine = `for (let ${varName} = ${start}; ${varName} < ${end}; ${varName} += ${step}) {`;
      indentStack.push(indent + 4);
    } else if (transLine.endsWith(':')) {
      transLine = transLine.slice(0, -1) + ' {';
      indentStack.push(indent + 4);
    }

    // Keyword argument transform for function calls, e.g., node(id=1, length=2.0) -> node({id: 1, length: 2.0})
    transLine = transformKwargs(transLine);

    // Variable assignments
    const assignMatch = transLine.match(/^([a-zA-Z_]\w*)\s*=\s*(.+)$/);
    if (assignMatch) {
      const varName = assignMatch[1];
      const val = assignMatch[2];
      if (ENV_VARS.has(varName)) {
        transLine = `env.${varName} = ${val}`;
      } else {
        transLine = `var ${varName} = ${val}`;
      }
    }

    const fullJsLine = ' '.repeat(Math.max(0, indent)) + transLine + (comment ? ' ' + comment : '');
    jsLines.push(fullJsLine);
  }

  while (indentStack.length > 1) {
    indentStack.pop();
    jsLines.push(' '.repeat(indentStack[indentStack.length - 1]) + '}');
  }

  return jsLines.join('\n');
}

/**
 * Transforms function calls with kwargs like `node(id=1, mass=2.0)` to pass a unified object
 */
function transformKwargs(codeLine) {
  // Matches node(...) or link(...) or joint(...)
  return codeLine.replace(/\b(node|link|joint|add_node)\s*\(([\s\S]*?)\)/g, (match, fnName, innerArgs) => {
    const rawArgs = innerArgs.trim();
    if (!rawArgs) return `${fnName}()`;

    // Check if arguments contain keyword assignments (e.g. `id=1` or `length=1.0`)
    if (rawArgs.includes('=')) {
      // Parse key=val pairs
      const parts = splitArgs(rawArgs);
      const objProps = [];
      parts.forEach((part) => {
        const eqIdx = part.indexOf('=');
        if (eqIdx !== -1) {
          const k = part.slice(0, eqIdx).trim();
          const v = part.slice(eqIdx + 1).trim();
          objProps.push(`${k}: ${v}`);
        } else {
          // Positional argument placed first
          objProps.push(`_pos_${objProps.length}: ${part.trim()}`);
        }
      });
      return `${fnName}({ ${objProps.join(', ')} })`;
    }
    return match;
  });
}

function splitArgs(str) {
  const result = [];
  let current = '';
  let depth = 0;
  let inQuote = false;
  let quoteChar = '';

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if ((ch === '"' || ch === "'") && (i === 0 || str[i - 1] !== '\\')) {
      if (!inQuote) {
        inQuote = true;
        quoteChar = ch;
      } else if (quoteChar === ch) {
        inQuote = false;
      }
    }
    if (!inQuote) {
      if (ch === '[' || ch === '(' || ch === '{') depth++;
      else if (ch === ']' || ch === ')' || ch === '}') depth--;
      else if (ch === ',' && depth === 0) {
        result.push(current.trim());
        current = '';
        continue;
      }
    }
    current += ch;
  }
  if (current.trim()) result.push(current.trim());
  return result;
}

/**
 * Parse and execute the Pythonic script, returning updated state
 */
export function parseAndExecuteScript(scriptCode, currentState, currentParams) {
  const result = {
    success: true,
    error: null,
    params: { ...currentParams },
    simSpeed: 1.0,
    trailLength: 500,
    trailFade: true,
    showGrid: true,
    isEnsemble: false,
    ensembleCount: 12,
    ensembleDelta: 0.0001,
    nState: null,
  };

  try {
    const nodesList = [];

    // Environment store
    const env = {
      gravity: currentParams.g !== undefined ? currentParams.g : 9.81,
      damping: currentParams.damping !== undefined ? currentParams.damping : 0.0,
      sim_speed: 1.0,
      trail_length: 500,
      trail_fade: true,
      show_grid: true,
      ensemble: false,
      ensemble_count: 12,
      ensemble_delta: 0.0001,
    };

    // Helper functions exposed to script
    const clear_nodes = () => {
      nodesList.length = 0;
    };

    const node = (opts = {}) => {
      let config = {};
      if (typeof opts === 'object' && opts !== null) {
        config = { ...opts };
        // Map positional args if passed as _pos_0
        if (config._pos_0 !== undefined && config.id === undefined) config.id = config._pos_0;
        if (config._pos_1 !== undefined && config.length === undefined) config.length = config._pos_1;
        if (config._pos_2 !== undefined && config.mass === undefined) config.mass = config._pos_2;
        if (config._pos_3 !== undefined && config.color === undefined) config.color = config._pos_3;
      }

      const id = config.id || (nodesList.length + 1);
      const length = parseFloat(config.length) || 1.0;
      const mass = parseFloat(config.mass) || 1.0;
      const color = config.color || '#ffffff';
      const pinned = !!config.pinned;
      const azimuth = config.azimuth !== undefined ? parseFloat(config.azimuth) : 45;
      const elevation = config.elevation !== undefined ? parseFloat(config.elevation) : -45;
      const pos = Array.isArray(config.pos) ? { x: config.pos[0] || 0, y: config.pos[1] || 0, z: config.pos[2] || 0 } : null;
      const vel = Array.isArray(config.vel) ? { x: config.vel[0] || 0, y: config.vel[1] || 0, z: config.vel[2] || 0 } : { x: 0, y: 0, z: 0 };

      nodesList.push({
        id,
        length,
        mass,
        color,
        pinned,
        azimuth,
        elevation,
        pos,
        vel,
      });
    };

    const add_node = (len = 1.0, m = 1.0, col = '#ffffff') => {
      node({ length: len, mass: m, color: col });
    };

    // Math & utility functions
    const sin = Math.sin;
    const cos = Math.cos;
    const tan = Math.tan;
    const sqrt = Math.sqrt;
    const abs = Math.abs;
    const pow = Math.pow;
    const PI = Math.PI;
    const pi = Math.PI;
    const len = (x) => (x && x.length !== undefined ? x.length : 0);
    const rad = (deg) => (deg * Math.PI) / 180;
    const deg = (rad) => (rad * 180) / Math.PI;
    const random = (min = 0, max = 1) => min + Math.random() * (max - min);

    // Transpile
    const transpiledJS = transpilePythonToJS(scriptCode);

    // Sandbox execution
    const runner = new Function(
      'env',
      'node',
      'link',
      'joint',
      'add_node',
      'clear_nodes',
      'sin',
      'cos',
      'tan',
      'sqrt',
      'abs',
      'pow',
      'PI',
      'pi',
      'len',
      'rad',
      'deg',
      'random',
      `"use strict";
      ${transpiledJS}
      `
    );

    runner(
      env,
      node,
      node, // alias link
      node, // alias joint
      add_node,
      clear_nodes,
      sin,
      cos,
      tan,
      sqrt,
      abs,
      pow,
      PI,
      pi,
      len,
      rad,
      deg,
      random
    );

    // Collect environment outputs
    result.params = {
      g: parseFloat(env.gravity) || 9.81,
      damping: parseFloat(env.damping) || 0.0,
    };
    result.simSpeed = Math.max(0.1, Math.min(5.0, parseFloat(env.sim_speed) || 1.0));
    result.trailLength = Math.max(10, Math.min(2000, parseInt(env.trail_length) || 500));
    result.trailFade = !!env.trail_fade;
    result.showGrid = !!env.show_grid;
    result.isEnsemble = !!env.ensemble;
    result.ensembleCount = Math.max(2, Math.min(64, parseInt(env.ensemble_count) || 12));
    result.ensembleDelta = parseFloat(env.ensemble_delta) || 0.0001;

    // Build N-Pendulum state from nodesList
    const numLinks = Math.max(1, nodesList.length);
    const lengths = [];
    const masses = [];
    const colors = [];
    const pinned = [true]; // origin is pinned
    const positions = [{ x: 0, y: 0, z: 0 }];
    const velocities = [];

    if (nodesList.length === 0) {
      // Fallback to current state
      result.nState = currentState;
    } else {
      nodesList.forEach((n, i) => {
        lengths.push(n.length);
        masses.push(n.mass);
        colors.push(n.color);
        pinned.push(n.pinned);

        if (n.pos) {
          positions.push({ ...n.pos });
        } else {
          // Compute forward kinematics from spherical angles
          const pParent = positions[i];
          const azRad = (n.azimuth * Math.PI) / 180;
          const elRad = (n.elevation * Math.PI) / 180;
          positions.push({
            x: pParent.x + n.length * Math.cos(elRad) * Math.cos(azRad),
            y: pParent.y + n.length * Math.sin(elRad),
            z: pParent.z + n.length * Math.cos(elRad) * Math.sin(azRad),
          });
        }

        velocities.push({ ...n.vel });
      });

      result.nState = {
        numLinks,
        lengths,
        masses,
        colors,
        pinned,
        positions,
        velocities,
      };
    }
  } catch (err) {
    result.success = false;
    result.error = err.message;
  }

  return result;
}

// Preset Script Templates for the Editor
export const SCRIPT_TEMPLATES = [
  {
    id: 'double_chaos',
    name: 'Double 3D Swirl',
    code: `# Three.js N-Pendulum Experiment
# Double Pendulum with 3D Out-of-Plane Swirl
gravity = 9.81
damping = 0.0000
sim_speed = 1.0
trail_length = 600
trail_fade = True
show_grid = True
ensemble = False

clear_nodes()
node(id=1, length=1.00, mass=1.00, color="#ffffff", pos=[0.90, 0.20, 0.40], vel=[0.00, 0.00, 0.80])
node(id=2, length=1.00, mass=1.00, color="#00f5ff", pos=[1.50, -0.40, -0.50], vel=[0.40, 0.00, -1.20])
`,
  },
  {
    id: 'triple_helix',
    name: 'Triple 3D Helix',
    code: `# Three.js N-Pendulum Experiment
# 3-Link Spatial Helix Vortex
gravity = 9.81
damping = 0.0002
sim_speed = 1.0
trail_length = 800
trail_fade = True
show_grid = True
ensemble = False

clear_nodes()
node(id=1, length=0.85, mass=1.00, color="#ffffff", azimuth=45, elevation=15, vel=[0.0, 0.0, 0.5])
node(id=2, length=0.85, mass=1.00, color="#00f5ff", azimuth=90, elevation=25, vel=[0.0, 0.0, -0.7])
node(id=3, length=0.85, mass=0.80, color="#ff0077", azimuth=135, elevation=-30, vel=[0.6, 0.0, 1.0])
`,
  },
  {
    id: 'quad_snake',
    name: 'Quad 3D Vortex',
    code: `# Three.js N-Pendulum Experiment
# 4-Link Articulated Spatial Snake
gravity = 9.81
damping = 0.0003
sim_speed = 1.0
trail_length = 1000
trail_fade = True
show_grid = True

clear_nodes()
node(id=1, length=0.65, mass=1.20, color="#ffffff", azimuth=30, elevation=20, vel=[0.0, 0.0, 0.4])
node(id=2, length=0.65, mass=1.00, color="#00f5ff", azimuth=60, elevation=45, vel=[0.2, 0.0, -0.6])
node(id=3, length=0.65, mass=0.80, color="#ff0077", azimuth=120, elevation=20, vel=[-0.3, 0.0, 0.8])
node(id=4, length=0.65, mass=0.60, color="#ffd000", azimuth=180, elevation=-20, vel=[0.5, 0.0, -1.0])
`,
  },
  {
    id: 'procedural_whip',
    name: 'Procedural 8-Link Wave (Loop)',
    code: `# Three.js N-Pendulum Experiment
# Procedurally generated 8-link whip using Pythonic for-loop
gravity = 9.81
damping = 0.0004
sim_speed = 1.0
trail_length = 1200
trail_fade = True

clear_nodes()
colors = ["#ffffff", "#00f5ff", "#38bdf8", "#818cf8", "#a855f7", "#ec4899", "#f43f5e", "#ffd000"]

for i in range(1, 9):
    l = 0.35
    m = 1.5 - (i * 0.12)
    c = colors[(i - 1) % len(colors)]
    az = 30 * i
    el = 15 * sin(i * 0.8)
    v_z = 0.15 * (1 if i % 2 == 0 else -1)
    node(id=i, length=l, mass=m, color=c, azimuth=az, elevation=el, vel=[0.0, 0.0, v_z])
`,
  },
  {
    id: 'pinned_bridge',
    name: 'Coupled Multi-Pivot Anchor',
    code: `# Three.js N-Pendulum Experiment
# 5-Link Chain with an Intermediate Pinned Anchor at Joint #3
gravity = 9.81
damping = 0.0002
sim_speed = 1.0
trail_length = 600

clear_nodes()
node(id=1, length=0.8, mass=1.0, color="#ffffff", pos=[0.7, -0.3, 0.2], vel=[0.0, 0.0, 0.5])
node(id=2, length=0.8, mass=1.0, color="#00f5ff", pos=[1.4, -0.6, 0.4], vel=[0.2, 0.0, -0.4])
# Intermediate Anchor (Fixed in 3D Space)
node(id=3, length=0.7, mass=2.0, color="#ffd000", pos=[1.8, -0.4, 0.8], pinned=True)
node(id=4, length=0.7, mass=0.8, color="#a855f7", pos=[2.3, -0.8, 0.5], vel=[0.0, 0.0, 0.8])
node(id=5, length=0.6, mass=0.5, color="#ff0077", pos=[2.8, -1.2, 0.2], vel=[0.4, 0.0, -1.0])
`,
  },
  {
    id: 'butterfly_ensemble',
    name: 'Lyapunov Butterfly Ensemble',
    code: `# Three.js N-Pendulum Experiment
# 3D Double Pendulum with 16 Parallel Perturbed Shadow Chains
gravity = 9.81
damping = 0.0000
sim_speed = 1.0
trail_length = 500
trail_fade = True
show_grid = True

ensemble = True
ensemble_count = 16
ensemble_delta = 0.0001

clear_nodes()
node(id=1, length=1.00, mass=1.00, color="#ffffff", pos=[0.90, 0.20, 0.40], vel=[0.00, 0.00, 0.80])
node(id=2, length=1.00, mass=1.00, color="#00f5ff", pos=[1.50, -0.40, -0.50], vel=[0.40, 0.00, -1.20])
`,
  },
];
