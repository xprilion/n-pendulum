import React from 'react';
import { X, BookOpen, Layers, Zap, Compass, Move3d } from 'lucide-react';

export default function TheoryModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in select-none">
      <div className="mono-glass w-full max-w-xl max-h-[85vh] overflow-y-auto rounded-2xl p-6 border border-zinc-700 shadow-2xl relative text-zinc-300 text-xs sm:text-sm no-scrollbar">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition"
        >
          <X size={16} />
        </button>

        <div className="flex items-center gap-2.5 mb-5 border-b border-zinc-800 pb-3">
          <BookOpen size={20} className="text-white" />
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white font-mono uppercase tracking-wide">
              Three.js N-Pendulum Experiment
            </h2>
            <span className="text-[10px] text-zinc-400 font-mono">
              Spatial Chaos, Position-Based Dynamics & Joint Kinematics
            </span>
          </div>
        </div>

        <div className="space-y-4 leading-relaxed">
          <div>
            <h3 className="text-white font-semibold text-sm mb-1 font-mono uppercase text-[12px] tracking-wider flex items-center gap-1.5">
              <Move3d size={14} className="text-cyan-400" />
              1. Arbitrary $N$-Link Spatial Degrees of Freedom
            </h3>
            <p className="text-zinc-400">
              Unlike classical planar pendulums constrained to a 2D sheet, this system models fully articulated 3D kinematic chains swinging, tumbling, and twisting across all 3 spatial Cartesian dimensions ($X, Y, Z$).
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-1 font-mono uppercase text-[12px] tracking-wider flex items-center gap-1.5">
              <Compass size={14} className="text-white" />
              2. Position-Based Dynamics (PBD) & Constraint Relaxation
            </h3>
            <p className="text-zinc-400">
              Rigid distance constraints $|\mathbf{p}_i - \mathbf{p}_{i-1}| = l_i$ are solved using iterative projection relaxation (PBD/Verlet), guaranteeing unconditional numerical stability, zero gimbal lock, and realistic multi-body mass distribution even under high-energy chaotic motion.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-1 font-mono uppercase text-[12px] tracking-wider flex items-center gap-1.5">
              <Zap size={14} className="text-amber-400" />
              3. Interactive Joint Kinematics & Manual Posing
            </h3>
            <p className="text-zinc-400">
              Pause the simulation at any time to freely grab and position individual joints in 3D space, adjust spherical azimuth and elevation angles, modify masses and rod lengths, or pin intermediate joints to create complex multi-anchor kinetic structures.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-1 font-mono uppercase text-[12px] tracking-wider flex items-center gap-1.5">
              <Layers size={14} className="text-purple-400" />
              4. Lyapunov Butterfly Ensemble
            </h3>
            <p className="text-zinc-400">
              Enable the Butterfly Ensemble mode to simulate a cluster of parallel shadow chains initialized with micro-spatial perturbations ($\Delta \approx 10^{-4}$ m), visually rendering the exponential divergence of phase trajectories in real time.
            </p>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-white text-black font-semibold text-xs transition hover:bg-zinc-200"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}
