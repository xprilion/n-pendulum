# 🌀 Three.js N-Pendulum Experiment

An interactive, high-precision 3D WebGL physics simulation and dynamical systems laboratory for arbitrary **$N$-link spatial pendulum networks**, demonstrating **high-order deterministic chaos**, **Lyapunov sensitivity (the Butterfly Effect)**, **kinematic joint manipulation**, and **programmable Pythonic scripting with real-time 2-way synchronization**.

Built with **React**, **Three.js**, **Tailwind CSS**, and **Lucide Icons**.

---

## 🌟 Key Features

### 1. 🌐 Full 3D Spatial Degrees of Freedom ($N = 1, 2, 3, 4, 5, 7, 10+$)
- Simulates fully articulated 3D kinematic chains swinging, tumbling, orbiting, and twisting across all 3 Cartesian dimensions ($X, Y, Z$).
- Powered by **Position-Based Dynamics (PBD) and Verlet spatial relaxation** with 16 sub-steps per frame for unconditional stability, zero gimbal lock, and exact distance constraint preservation.

### 2. 🐍 Programmable Pythonic DSL & Scripting Engine
- Define the entire physics environment, N-link topology, node kinematics, masses, lengths, colors, and boundary conditions using an expressive Pythonic/BASIC-like scripting language:
```python
# Three.js N-Pendulum Experiment Configuration
gravity = 9.81
damping = 0.0002
sim_speed = 1.0
trail_length = 800
trail_fade = True

clear_nodes()
node(id=1, length=1.00, mass=1.20, color="#ffffff", azimuth=45.0, elevation=15.0, vel=[0.0, 0.0, 0.5])
node(id=2, length=0.85, mass=1.00, color="#00f5ff", azimuth=90.0, elevation=25.0, vel=[0.0, 0.0, -0.7])
node(id=3, length=0.70, mass=0.80, color="#ff0077", pos=[1.8, -0.4, 0.1], vel=[0.6, 0.0, 1.0], pinned=False)
```
- Includes procedural generation capabilities using Pythonic `for i in range(...)` loops, trigonometry (`sin`, `cos`), and array indexing.

### 3. 🔄 Real-Time Bidirectional 2-Way Sync
- **UI ➔ Code:** Modifying sliders, dragging joints in 3D, changing node properties, or switching presets regenerates the Pythonic script in real time.
- **Code ➔ UI:** Editing or pasting scripts in the editor immediately updates the 3D pendulum meshes, rigid constraints, velocity vectors, node count, and UI sliders.

### 4. 🎛️ Collapsible & Resizable Script Editor (Right Panel)
- **Adjustable Width:** Drag the left-edge resizer handle to freely expand or shrink the editor panel from `320px` up to `85vw`.
- **Keyboard Shortcuts:** `Cmd+Enter` / `Ctrl+Enter` to run script, `P` to toggle editor drawer.
- **1-Click Script Templates:** Load pre-configured scripts for *Double 3D Swirl*, *Triple 3D Helix*, *Quad Snake*, *Procedural 8-Link Wave Loop*, *Coupled Multi-Pivot Anchor*, and *Lyapunov Butterfly Ensemble*.

### 5. 🎯 Direct 3D Joint Manipulation & Posing
- **Click & Drag in 3D:** Grab any joint sphere in Three.js space to pull, fling, or pose the pendulum chain.
- **Live Kinetic Throw:** Imparts velocity when released during active simulation.
- **Tactile Pose Mode:** Pause the simulation (`Space`) to arrange joints into custom 3D spatial configurations.

### 6. 🔍 Click-to-Open Node Inspector Menu
- Clicking any node in 3D opens an inspector menu to configure:
  - **Spherical Angles:** Azimuth ($\phi$) & Elevation ($\theta$) sliders.
  - **Cartesian Position ($X, Y, Z$) & Velocities ($V_x, V_y, V_z$)**.
  - **Mass ($m_i$) & Length ($l_i$)**.
  - **Color Palette & Styling**.
  - **Pin / Unpin Joint:** Lock intermediate joints to create coupled multi-pivot anchor networks.
  - **Impulse Kick & Freeze Velocity**.

### 7. 🦋 Lyapunov Butterfly Ensemble
- Simulates a cluster of parallel shadow chains initialized with micro-spatial perturbations ($\Delta \approx 10^{-4}\text{ m}$), visually rendering phase space divergence in real time.

---

## 🚀 Quick Start

### Development Server
```bash
npm install
npm run dev
```
Open `http://localhost:5173/` in your browser.

### Production Build & Preview
```bash
npm run build
npm run preview
```

---

## 📜 License
MIT License
