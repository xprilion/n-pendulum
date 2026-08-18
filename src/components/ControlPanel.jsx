import React from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  StepForward,
  Trash2,
  Camera,
  Volume2,
  VolumeX,
  Layers,
  Activity,
  Compass,
  Eye,
  Sliders,
  Sparkles,
} from 'lucide-react';

export default function ControlPanel({
  params,
  setParams,
  initialAngles,
  setInitialAngles,
  isPaused,
  setIsPaused,
  onStepForward,
  onReset,
  onClearTrail,
  onSnapshot,
  simSpeed,
  setSimSpeed,
  trailLength,
  setTrailLength,
  trailStyle,
  setTrailStyle,
  trailFade,
  setTrailFade,
  showVectors,
  setShowVectors,
  showAngles,
  setShowAngles,
  showGrid,
  setShowGrid,
  isEnsemble,
  setIsEnsemble,
  ensembleCount,
  setEnsembleCount,
  ensembleDelta,
  setEnsembleDelta,
  soundEnabled,
  setSoundEnabled,
}) {
  const gravityPresets = [
    { label: 'Zero-G', val: 0.0 },
    { label: 'Moon (1.6)', val: 1.62 },
    { label: 'Mars (3.7)', val: 3.72 },
    { label: 'Earth (9.8)', val: 9.81 },
    { label: 'Jupiter (24.8)', val: 24.79 },
  ];

  return (
    <div className="flex flex-col gap-5 text-slate-200 text-sm">
      {/* Primary Playback Bar */}
      <div className="glass-panel p-3.5 rounded-xl flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg font-semibold transition-all ${
              isPaused
                ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.4)]'
            }`}
          >
            {isPaused ? <Play size={16} fill="currentColor" /> : <Pause size={16} fill="currentColor" />}
            {isPaused ? 'Start' : 'Pause'}
          </button>

          <button
            onClick={onStepForward}
            disabled={!isPaused}
            title="Step 1 frame (when paused)"
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed border border-slate-700 text-slate-300 transition"
          >
            <StepForward size={16} />
          </button>

          <button
            onClick={onReset}
            title="Reset to initial state"
            className="flex items-center gap-1 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 transition"
          >
            <RotateCcw size={15} />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onClearTrail}
            title="Clear trail history"
            className="flex items-center gap-1 px-3 py-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 border border-slate-700/80 text-slate-300 text-xs transition"
          >
            <Trash2 size={14} />
            <span className="hidden sm:inline">Clear Trail</span>
          </button>

          <button
            onClick={onSnapshot}
            title="Export high-res snapshot"
            className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 border border-slate-700/80 text-slate-300 transition"
          >
            <Camera size={16} />
          </button>

          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            title={soundEnabled ? 'Mute Kinetic Sound' : 'Enable Kinetic Sound'}
            className={`p-2 rounded-lg border transition ${
              soundEnabled
                ? 'bg-purple-600/30 border-purple-500/50 text-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.3)]'
                : 'bg-slate-800/80 border-slate-700/80 text-slate-400 hover:text-slate-200'
            }`}
          >
            {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>
        </div>
      </div>

      {/* Ensemble / Chaos Butterfly Effect Mode */}
      <div className="glass-panel p-4 rounded-xl border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.08)]">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 font-medium text-cyan-400">
            <Layers size={16} />
            <span>Chaos Butterfly Ensemble</span>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isEnsemble}
              onChange={(e) => setIsEnsemble(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-9 h-5 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-cyan-500"></div>
          </label>
        </div>

        {isEnsemble && (
          <div className="space-y-3 pt-2 border-t border-slate-800 text-xs">
            <p className="text-slate-400">
              Spawns identical pendulums with microscopic initial differences (<span className="text-cyan-300 font-mono">Δθ = {ensembleDelta.toExponential(1)} rad</span>) to demonstrate exponential divergence & chaos.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <div className="flex justify-between text-slate-300 mb-1">
                  <span>Pendulums Count:</span>
                  <span className="font-mono text-cyan-400">{ensembleCount}</span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="40"
                  value={ensembleCount}
                  onChange={(e) => setEnsembleCount(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>

              <div>
                <div className="flex justify-between text-slate-300 mb-1">
                  <span>Initial Delta (rad):</span>
                  <span className="font-mono text-cyan-400">{ensembleDelta.toExponential(1)}</span>
                </div>
                <select
                  value={ensembleDelta}
                  onChange={(e) => setEnsembleDelta(parseFloat(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-slate-200"
                >
                  <option value={0.000001}>10⁻⁶ rad (Ultra Micro)</option>
                  <option value={0.00001}>10⁻⁵ rad (Very Small)</option>
                  <option value={0.0001}>10⁻⁴ rad (Standard Micro)</option>
                  <option value={0.001}>10⁻³ rad (Small)</option>
                  <option value={0.01}>10⁻² rad (Visible)</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Physics Parameters */}
      <div className="glass-panel p-4 rounded-xl space-y-4">
        <div className="flex items-center gap-2 font-medium text-slate-200 border-b border-slate-800 pb-2">
          <Sliders size={16} className="text-cyan-400" />
          <span>Physics Parameters</span>
        </div>

        {/* Lengths */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-400">Rod 1 Length (l₁):</span>
              <span className="font-mono text-cyan-400">{params.l1.toFixed(2)} m</span>
            </div>
            <input
              type="range"
              min="0.3"
              max="2.0"
              step="0.05"
              value={params.l1}
              onChange={(e) => setParams({ ...params, l1: parseFloat(e.target.value) })}
              className="w-full"
            />
          </div>
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-400">Rod 2 Length (l₂):</span>
              <span className="font-mono text-pink-400">{params.l2.toFixed(2)} m</span>
            </div>
            <input
              type="range"
              min="0.3"
              max="2.0"
              step="0.05"
              value={params.l2}
              onChange={(e) => setParams({ ...params, l2: parseFloat(e.target.value) })}
              className="w-full"
            />
          </div>
        </div>

        {/* Masses */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-400">Bob 1 Mass (m₁):</span>
              <span className="font-mono text-cyan-400">{params.m1.toFixed(2)} kg</span>
            </div>
            <input
              type="range"
              min="0.2"
              max="4.0"
              step="0.1"
              value={params.m1}
              onChange={(e) => setParams({ ...params, m1: parseFloat(e.target.value) })}
              className="w-full"
            />
          </div>
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-400">Bob 2 Mass (m₂):</span>
              <span className="font-mono text-pink-400">{params.m2.toFixed(2)} kg</span>
            </div>
            <input
              type="range"
              min="0.2"
              max="4.0"
              step="0.1"
              value={params.m2}
              onChange={(e) => setParams({ ...params, m2: parseFloat(e.target.value) })}
              className="w-full"
            />
          </div>
        </div>

        {/* Initial Angles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-400">Initial Angle 1 (θ₁):</span>
              <span className="font-mono text-cyan-400">
                {((initialAngles.theta1 * 180) / Math.PI).toFixed(0)}° ({(initialAngles.theta1).toFixed(2)} rad)
              </span>
            </div>
            <input
              type="range"
              min="-180"
              max="180"
              step="1"
              value={Math.round((initialAngles.theta1 * 180) / Math.PI)}
              onChange={(e) => {
                const rad = (parseFloat(e.target.value) * Math.PI) / 180;
                setInitialAngles((prev) => ({ ...prev, theta1: rad }));
              }}
              className="w-full"
            />
          </div>
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-400">Initial Angle 2 (θ₂):</span>
              <span className="font-mono text-pink-400">
                {((initialAngles.theta2 * 180) / Math.PI).toFixed(0)}° ({(initialAngles.theta2).toFixed(2)} rad)
              </span>
            </div>
            <input
              type="range"
              min="-180"
              max="180"
              step="1"
              value={Math.round((initialAngles.theta2 * 180) / Math.PI)}
              onChange={(e) => {
                const rad = (parseFloat(e.target.value) * Math.PI) / 180;
                setInitialAngles((prev) => ({ ...prev, theta2: rad }));
              }}
              className="w-full"
            />
          </div>
        </div>

        {/* Gravity & Damping */}
        <div className="space-y-2 pt-2 border-t border-slate-800">
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-400">Gravitational Acceleration (g):</span>
            <span className="font-mono text-amber-400">{params.g.toFixed(2)} m/s²</span>
          </div>
          <div className="flex flex-wrap gap-1.5 mb-2">
            {gravityPresets.map((gp) => (
              <button
                key={gp.label}
                onClick={() => setParams({ ...params, g: gp.val })}
                className={`text-[11px] px-2.5 py-1 rounded transition ${
                  Math.abs(params.g - gp.val) < 0.05
                    ? 'bg-amber-500/30 text-amber-300 border border-amber-500/50'
                    : 'bg-slate-900 hover:bg-slate-800 text-slate-400 border border-slate-800'
                }`}
              >
                {gp.label}
              </button>
            ))}
          </div>
          <input
            type="range"
            min="0"
            max="25"
            step="0.1"
            value={params.g}
            onChange={(e) => setParams({ ...params, g: parseFloat(e.target.value) })}
            className="w-full"
          />

          <div className="pt-2">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-400">Damping (Air Friction):</span>
              <span className="font-mono text-slate-300">{params.damping?.toFixed(4) || '0.0000'}</span>
            </div>
            <input
              type="range"
              min="0"
              max="0.015"
              step="0.0005"
              value={params.damping || 0}
              onChange={(e) => setParams({ ...params, damping: parseFloat(e.target.value) })}
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Visual & Speed Settings */}
      <div className="glass-panel p-4 rounded-xl space-y-4">
        <div className="flex items-center gap-2 font-medium text-slate-200 border-b border-slate-800 pb-2">
          <Eye size={16} className="text-purple-400" />
          <span>Visual & Trail Settings</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-400">Simulation Speed:</span>
              <span className="font-mono text-purple-400">{simSpeed.toFixed(1)}×</span>
            </div>
            <input
              type="range"
              min="0.2"
              max="3.0"
              step="0.1"
              value={simSpeed}
              onChange={(e) => setSimSpeed(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-400">Trail Length:</span>
              <span className="font-mono text-purple-400">{trailLength} pts</span>
            </div>
            <input
              type="range"
              min="50"
              max="1200"
              step="50"
              value={trailLength}
              onChange={(e) => setTrailLength(parseInt(e.target.value))}
              className="w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div>
            <label className="block text-xs text-slate-400 mb-1">Trail Glow Color</label>
            <select
              value={trailStyle}
              onChange={(e) => setTrailStyle(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1.5 text-xs text-slate-200"
            >
              <option value="rainbow">🌈 Neon Rainbow Spectrum</option>
              <option value="heatmap">🔥 Velocity Heatmap</option>
              <option value="fire">⚡ Fire Flame</option>
              <option value="electric">🔮 Electric Violet</option>
              <option value="cyan">💠 Cyber Cyan</option>
            </select>
          </div>

          <div className="flex flex-col justify-end">
            <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer mb-2">
              <input
                type="checkbox"
                checked={trailFade}
                onChange={(e) => setTrailFade(e.target.checked)}
                className="rounded bg-slate-900 border-slate-700"
              />
              <span>Fade trail over time</span>
            </label>
            <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                checked={showVectors}
                onChange={(e) => setShowVectors(e.target.checked)}
                className="rounded bg-slate-900 border-slate-700"
              />
              <span>Show velocity vectors</span>
            </label>
          </div>
        </div>

        <div className="flex gap-4 pt-1 text-xs">
          <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
            <input
              type="checkbox"
              checked={showAngles}
              onChange={(e) => setShowAngles(e.target.checked)}
              className="rounded bg-slate-900 border-slate-700"
            />
            <span>Show angle arcs</span>
          </label>
          <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
            <input
              type="checkbox"
              checked={showGrid}
              onChange={(e) => setShowGrid(e.target.checked)}
              className="rounded bg-slate-900 border-slate-700"
            />
            <span>Show background grid</span>
          </label>
        </div>
      </div>
    </div>
  );
}
