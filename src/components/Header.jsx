import React from 'react';
import { Activity, Info, Share2 } from 'lucide-react';

export default function Header({ onShare, onOpenInfo }) {
  return (
    <header className="flex items-center justify-between py-3 px-4 sm:px-6 border-b border-slate-800 bg-slate-950/60 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.4)]">
          <Activity size={20} className="text-white" />
        </div>
        <div>
          <h1 className="text-base sm:text-lg font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-cyan-400 bg-clip-text text-transparent">
            Double Pendulum Chaos Simulator
          </h1>
          <p className="text-[11px] text-slate-400">
            High-Precision RK4 Numerical Dynamics & Phase Space Exploration
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={onOpenInfo}
          title="Physics & Theory Guide"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-xs text-slate-300 transition"
        >
          <Info size={14} className="text-cyan-400" />
          <span className="hidden sm:inline">Physics Theory</span>
        </button>

        <button
          onClick={onShare}
          title="Copy shareable link"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-950/50 hover:bg-cyan-900/50 border border-cyan-800/60 text-xs text-cyan-300 transition"
        >
          <Share2 size={14} />
          <span className="hidden sm:inline">Share Preset</span>
        </button>
      </div>
    </header>
  );
}
