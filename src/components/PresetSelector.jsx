import React from 'react';
import { PRESETS } from '../physics';
import { Sparkles } from 'lucide-react';

export default function PresetSelector({ activePresetId, onSelectPreset }) {
  return (
    <div className="glass-panel p-3.5 rounded-xl space-y-2.5">
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 uppercase tracking-wider">
        <Sparkles size={14} className="text-amber-400" />
        <span>Curated Physics Presets</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {PRESETS.map((preset) => {
          const isActive = activePresetId === preset.id;
          return (
            <button
              key={preset.id}
              onClick={() => onSelectPreset(preset)}
              className={`text-left p-2.5 rounded-lg border transition-all flex flex-col justify-between ${
                isActive
                  ? 'bg-cyan-950/60 border-cyan-500/60 text-cyan-200 shadow-[0_0_12px_rgba(6,182,212,0.2)]'
                  : 'bg-slate-900/60 hover:bg-slate-800/80 border-slate-800 text-slate-300'
              }`}
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400/80 block mb-0.5">
                  {preset.category}
                </span>
                <span className="text-xs font-medium block leading-tight">
                  {preset.name}
                </span>
              </div>
              <span className="text-[10px] text-slate-400 mt-1 line-clamp-2">
                {preset.description}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
