import React from 'react';
import { X, Sparkles } from 'lucide-react';
import { PRESETS_3D } from '../physics';

export default function MonoPresetsDrawer({
  isOpen,
  onClose,
  activePresetId,
  onSelectPreset,
}) {
  if (!isOpen) return null;

  return (
    <div className="absolute top-20 left-1/2 -translate-x-1/2 z-40 w-[440px] max-w-[calc(100vw-2rem)] mono-glass rounded-2xl p-4 border border-zinc-800 shadow-2xl text-xs overflow-hidden animate-fade-in">
      <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2.5 mb-3">
        <div className="flex items-center gap-2 font-mono uppercase tracking-widest text-[11px] text-zinc-300 font-semibold">
          <Sparkles size={14} className="text-white" />
          <span>Spatial 3D & N-Pendulum Presets</span>
        </div>
        <button
          onClick={onClose}
          className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition"
        >
          <X size={14} />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[60vh] overflow-y-auto pr-1">
        {PRESETS_3D.map((preset) => {
          const isActive = activePresetId === preset.id;
          return (
            <button
              key={preset.id}
              onClick={() => {
                onSelectPreset(preset);
                onClose();
              }}
              className={`text-left p-3 rounded-xl border transition flex flex-col justify-between ${
                isActive
                  ? 'bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.3)]'
                  : 'bg-zinc-950/80 hover:bg-zinc-900 border-zinc-800 text-zinc-300'
              }`}
            >
              <div>
                <div className="flex justify-between items-center mb-0.5">
                  <span className={`text-[9px] font-mono uppercase tracking-wider ${
                    isActive ? 'text-zinc-700 font-semibold' : 'text-zinc-500'
                  }`}>
                    {preset.category}
                  </span>
                  <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ${
                    isActive ? 'bg-black text-white' : 'bg-zinc-800 text-zinc-300'
                  }`}>
                    N={preset.numLinks}
                  </span>
                </div>
                <span className="text-xs font-semibold block leading-tight">
                  {preset.name}
                </span>
              </div>
              <span className={`text-[10px] mt-1.5 line-clamp-2 ${
                isActive ? 'text-zinc-800' : 'text-zinc-400'
              }`}>
                {preset.description}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
