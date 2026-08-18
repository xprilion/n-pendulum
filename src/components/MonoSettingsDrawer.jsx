import React from 'react';
import {
  X,
  Sliders,
  Layers,
  RefreshCw,
  Zap,
  CircleDot,
  Plus,
  Pin,
  ChevronRight,
} from 'lucide-react';

export default function MonoSettingsDrawer({
  isOpen,
  onClose,
  numLinks,
  setNumLinks,
  nState,
  selectedNodeIndex,
  onSelectNodeIndex,
  onAddLink,
  params,
  setParams,
  simSpeed,
  setSimSpeed,
  trailLength,
  setTrailLength,
  trailFade,
  setTrailFade,
  isEnsemble,
  setIsEnsemble,
  ensembleCount,
  setEnsembleCount,
  ensembleDelta,
  setEnsembleDelta,
  onReset,
  onApply3DKick,
}) {
  if (!isOpen) return null;

  const gravityPresets = [
    { label: 'Zero-G', val: 0.0 },
    { label: 'Moon', val: 1.62 },
    { label: 'Mars', val: 3.72 },
    { label: 'Earth', val: 9.81 },
    { label: 'Jupiter', val: 24.79 },
  ];

  const { lengths = [], masses = [], colors = [], pinned = [] } = nState || {};

  return (
    <div className="absolute right-4 top-20 bottom-4 z-40 w-[350px] max-w-[calc(100vw-2rem)] mono-glass rounded-2xl p-4 flex flex-col justify-between border border-zinc-800 shadow-2xl text-xs overflow-hidden animate-fade-in select-none">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2.5 mb-2.5">
        <div className="flex items-center gap-2 font-mono uppercase tracking-widest text-[11px] text-zinc-300 font-semibold">
          <Sliders size={14} className="text-white" />
          <span>N-Pendulum Controls</span>
        </div>
        <button
          onClick={onClose}
          className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition"
        >
          <X size={14} />
        </button>
      </div>

      {/* Scrollable controls */}
      <div className="flex-1 overflow-y-auto space-y-4 pr-1 no-scrollbar">
        {/* N-Links Selector */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-zinc-300">
            <span className="font-mono uppercase text-[10px] text-zinc-400">Number of Links (N):</span>
            <span className="font-mono text-white font-bold text-sm">{numLinks}</span>
          </div>
          <div className="flex items-center gap-1.5 flex-wrap">
            {[1, 2, 3, 4, 5, 7, 10].map((n) => (
              <button
                key={n}
                onClick={() => setNumLinks(n)}
                className={`flex-1 py-1 rounded-lg border text-xs font-mono transition ${
                  numLinks === n
                    ? 'bg-white text-black font-bold border-white shadow-[0_0_10px_rgba(255,255,255,0.4)]'
                    : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'
                }`}
              >
                N={n}
              </button>
            ))}
          </div>
          <input
            type="range"
            min="1"
            max="12"
            step="1"
            value={numLinks}
            onChange={(e) => setNumLinks(parseInt(e.target.value))}
            className="w-full mt-1"
          />
        </div>

        {/* Joint / Node Inspector Manager List */}
        <div className="space-y-1.5 border-t border-zinc-800/60 pt-3">
          <div className="flex items-center justify-between">
            <span className="font-mono uppercase text-[10px] text-zinc-400 flex items-center gap-1">
              <CircleDot size={12} className="text-cyan-400" />
              <span>Articulated Joints ({numLinks})</span>
            </span>
            <button
              onClick={() => onAddLink(numLinks)}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-cyan-300 flex items-center gap-1 transition"
            >
              <Plus size={10} /> + Add Link
            </button>
          </div>

          <div className="max-h-36 overflow-y-auto space-y-1 pr-1 bg-zinc-950/60 p-1.5 rounded-xl border border-zinc-800/80">
            {Array.from({ length: numLinks }).map((_, i) => {
              const jIdx = i + 1;
              const isSel = selectedNodeIndex === jIdx;
              const col = colors[i] || '#ffffff';
              const isPin = pinned[jIdx];
              const len = lengths[i] || 1.0;
              const m = masses[i] || 1.0;

              return (
                <button
                  key={jIdx}
                  onClick={() => onSelectNodeIndex(jIdx)}
                  className={`w-full p-1.5 rounded-lg border text-left flex items-center justify-between transition ${
                    isSel
                      ? 'bg-cyan-950/40 border-cyan-500/60 text-white'
                      : 'bg-zinc-900/60 border-zinc-800/80 text-zinc-400 hover:bg-zinc-800/80 hover:text-zinc-200'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full border border-white/40 shadow-sm"
                      style={{ backgroundColor: col }}
                    />
                    <span className="font-mono text-[11px] font-semibold text-zinc-200">
                      Joint #{jIdx} {jIdx === numLinks ? '(Tip)' : ''}
                    </span>
                    {isPin && (
                      <span className="text-[9px] text-amber-400 flex items-center gap-0.5">
                        <Pin size={8} /> Pinned
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-400">
                    <span>{len.toFixed(1)}m</span>
                    <span>{m.toFixed(1)}kg</span>
                    <ChevronRight size={12} className={isSel ? 'text-cyan-400' : 'text-zinc-600'} />
                  </div>
                </button>
              );
            })}
          </div>
          <p className="text-[9px] text-zinc-500 text-center font-mono">
            Click any joint above or directly in 3D to edit properties.
          </p>
        </div>

        {/* 3D Spatial Impulse Kick */}
        <div className="border-t border-zinc-800/60 pt-3">
          <button
            onClick={onApply3DKick}
            className="w-full py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-amber-300 font-semibold flex items-center justify-center gap-2 transition active:scale-[0.98]"
          >
            <Zap size={14} className="text-amber-400 animate-pulse" />
            <span>Apply 3D Transverse Kick</span>
          </button>
        </div>

        {/* Gravity & Damping */}
        <div className="space-y-2 border-t border-zinc-800/60 pt-3">
          <div className="flex justify-between text-zinc-300">
            <span className="font-mono text-[10px] text-zinc-400 uppercase">Gravity (g):</span>
            <span className="font-mono text-white">{params.g.toFixed(2)} m/s²</span>
          </div>
          <div className="flex flex-wrap gap-1 mb-2">
            {gravityPresets.map((gp) => (
              <button
                key={gp.label}
                onClick={() => setParams({ ...params, g: gp.val })}
                className={`text-[10px] px-2 py-0.5 rounded border transition ${
                  Math.abs(params.g - gp.val) < 0.05
                    ? 'bg-white text-black font-semibold border-white'
                    : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'
                }`}
              >
                {gp.label}
              </button>
            ))}
          </div>

          <div className="space-y-1">
            <div className="flex justify-between font-mono text-[11px]">
              <span className="text-zinc-400">Joint Air Damping:</span>
              <span className="text-white font-bold">{params.damping.toFixed(4)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="0.01"
              step="0.0001"
              value={params.damping}
              onChange={(e) => setParams({ ...params, damping: parseFloat(e.target.value) })}
              className="w-full"
            />
          </div>
        </div>

        {/* Simulation Speed & 3D Trail Settings */}
        <div className="space-y-2.5 border-t border-zinc-800/60 pt-3">
          <div className="space-y-1">
            <div className="flex justify-between font-mono text-[11px]">
              <span className="text-zinc-400">Simulation Speed:</span>
              <span className="text-white font-bold">{simSpeed.toFixed(1)}x</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="3.0"
              step="0.1"
              value={simSpeed}
              onChange={(e) => setSimSpeed(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="space-y-1">
            <div className="flex justify-between font-mono text-[11px]">
              <span className="text-zinc-400">3D Trail Length:</span>
              <span className="text-white font-bold">{trailLength} pts</span>
            </div>
            <input
              type="range"
              min="50"
              max="1500"
              step="50"
              value={trailLength}
              onChange={(e) => setTrailLength(parseInt(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="flex items-center justify-between text-zinc-300 pt-1">
            <span className="font-mono text-[10px] text-zinc-400 uppercase">3D Trail Shaded Fade:</span>
            <input
              type="checkbox"
              checked={trailFade}
              onChange={(e) => setTrailFade(e.target.checked)}
              className="w-4 h-4 rounded bg-zinc-900 border-zinc-700 accent-white"
            />
          </div>
        </div>

        {/* Chaos Butterfly Ensemble Multi-Chain */}
        <div className="space-y-2.5 border-t border-zinc-800/60 pt-3">
          <div className="flex items-center justify-between text-zinc-300">
            <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase font-semibold">
              <Layers size={13} className="text-white" />
              <span>Butterfly Ensemble</span>
            </div>
            <input
              type="checkbox"
              checked={isEnsemble}
              onChange={(e) => setIsEnsemble(e.target.checked)}
              className="w-4 h-4 rounded bg-zinc-900 border-zinc-700 accent-white"
            />
          </div>

          {isEnsemble && (
            <div className="space-y-2 bg-zinc-950/70 p-2.5 rounded-xl border border-zinc-800">
              <div className="space-y-1">
                <div className="flex justify-between font-mono text-[10px]">
                  <span className="text-zinc-400">Perturbed Chains:</span>
                  <span className="text-white font-bold">{ensembleCount}</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="32"
                  step="2"
                  value={ensembleCount}
                  onChange={(e) => setEnsembleCount(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between font-mono text-[10px]">
                  <span className="text-zinc-400">Spatial Delta (Δ):</span>
                  <span className="text-white font-bold">{ensembleDelta.toExponential(2)}</span>
                </div>
                <input
                  type="range"
                  min="-6"
                  max="-2"
                  step="0.5"
                  value={Math.log10(ensembleDelta)}
                  onChange={(e) => setEnsembleDelta(Math.pow(10, parseFloat(e.target.value)))}
                  className="w-full"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer Reset */}
      <div className="pt-3 border-t border-zinc-800/80 mt-2">
        <button
          onClick={onReset}
          className="w-full py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center gap-1.5 transition font-semibold"
        >
          <RefreshCw size={13} />
          <span>Reset All Parameters</span>
        </button>
      </div>
    </div>
  );
}
