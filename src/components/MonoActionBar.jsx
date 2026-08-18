import React from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  StepForward,
  Trash2,
  Maximize2,
  Minimize2,
  Sliders,
  Activity,
  Layers,
  Volume2,
  VolumeX,
  Compass,
  Grid,
  Info,
  Sparkles,
  Zap,
  CircleDot,
  Code,
} from 'lucide-react';

export default function MonoActionBar({
  isPaused,
  onTogglePlay,
  onStepForward,
  onReset,
  onClearTrail,
  onApply3DKick,
  isFullscreen,
  onToggleFullscreen,
  drawerOpen,
  onToggleDrawer,
  nodeMenuOpen,
  onToggleNodeMenu,
  selectedNodeIndex,
  scriptEditorOpen,
  onToggleScriptEditor,
  diagnosticsOpen,
  onToggleDiagnostics,
  presetsOpen,
  onTogglePresets,
  isEnsemble,
  onToggleEnsemble,
  soundEnabled,
  onToggleSound,
  showGrid,
  onToggleGrid,
  onResetCamera,
  onOpenTheory,
}) {
  return (
    <div className="absolute top-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1.5 p-1.5 rounded-2xl mono-glass border border-zinc-800 shadow-2xl max-w-[96vw] overflow-x-auto no-scrollbar select-none">
      {/* Title / Project Brand Badge */}
      <div className="hidden lg:flex items-center gap-2 pl-2 pr-3 border-r border-zinc-800 text-left font-mono">
        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
        <div className="flex flex-col">
          <span className="text-[11px] font-bold text-white uppercase tracking-wider whitespace-nowrap">
            Three.js N-Pendulum Experiment
          </span>
          <span className="text-[9px] text-zinc-400">
            {isPaused ? '⏸ Paused (Pose Mode)' : '▶ Running Spatial Chaos'}
          </span>
        </div>
      </div>

      {/* Play / Pause */}
      <button
        onClick={onTogglePlay}
        title={isPaused ? 'Resume Simulation (Space)' : 'Pause Simulation (Space)'}
        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all ${
          isPaused
            ? 'bg-amber-400 text-black font-bold shadow-[0_0_12px_rgba(251,191,36,0.6)]'
            : 'bg-zinc-900 text-white border border-zinc-700 hover:bg-zinc-800'
        }`}
      >
        {isPaused ? <Play size={16} fill="currentColor" /> : <Pause size={16} fill="currentColor" />}
      </button>

      {/* Step Forward (when paused) */}
      <button
        onClick={onStepForward}
        disabled={!isPaused}
        title="Step 1 Frame (when paused)"
        className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center bg-zinc-900/90 text-zinc-300 border border-zinc-800 hover:bg-zinc-800 disabled:opacity-25 disabled:cursor-not-allowed transition"
      >
        <StepForward size={15} />
      </button>

      {/* Direct Node Inspector Toggle */}
      <button
        onClick={onToggleNodeMenu}
        title="Edit Selected Joint / Node Menu (E)"
        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border transition relative ${
          nodeMenuOpen
            ? 'bg-cyan-500 text-black border-cyan-400 font-bold shadow-[0_0_12px_rgba(6,182,212,0.5)]'
            : 'bg-zinc-900/90 text-zinc-300 border-zinc-800 hover:bg-zinc-800 hover:text-white'
        }`}
      >
        <CircleDot size={15} />
        {selectedNodeIndex && (
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-cyan-400 text-black text-[8px] font-mono font-bold rounded-full flex items-center justify-center">
            {selectedNodeIndex}
          </span>
        )}
      </button>

      {/* Pythonic Script Editor Toggle */}
      <button
        onClick={onToggleScriptEditor}
        title="Programmable Pythonic Script Editor"
        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border transition ${
          scriptEditorOpen
            ? 'bg-white text-black border-white shadow-[0_0_12px_rgba(255,255,255,0.4)]'
            : 'bg-zinc-900/90 text-cyan-300 border-zinc-800 hover:bg-zinc-800 hover:text-white'
        }`}
      >
        <Code size={15} />
      </button>

      {/* 3D Transverse Kick / Impulse */}
      <button
        onClick={onApply3DKick}
        title="Apply 3D Transverse Impulse Kick (K)"
        className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center bg-zinc-900/90 text-amber-300 border border-zinc-800 hover:bg-zinc-800 hover:text-amber-200 transition"
      >
        <Zap size={15} />
      </button>

      {/* Reset */}
      <button
        onClick={onReset}
        title="Reset Conditions (R)"
        className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center bg-zinc-900/90 text-zinc-300 border border-zinc-800 hover:bg-zinc-800 hover:text-white transition"
      >
        <RotateCcw size={15} />
      </button>

      {/* Clear Trail */}
      <button
        onClick={onClearTrail}
        title="Clear Trail (C)"
        className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center bg-zinc-900/90 text-zinc-300 border border-zinc-800 hover:bg-zinc-800 hover:text-white transition"
      >
        <Trash2 size={15} />
      </button>

      <div className="w-[1px] h-6 bg-zinc-800 mx-0.5" />

      {/* Chaos Butterfly Ensemble Mode Toggle */}
      <button
        onClick={onToggleEnsemble}
        title="Toggle Chaos Butterfly Ensemble"
        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border transition ${
          isEnsemble
            ? 'bg-white text-black border-white shadow-[0_0_12px_rgba(255,255,255,0.4)]'
            : 'bg-zinc-900/90 text-zinc-400 border-zinc-800 hover:text-zinc-200'
        }`}
      >
        <Layers size={15} />
      </button>

      {/* Presets Menu Toggle */}
      <button
        onClick={onTogglePresets}
        title="Physics Presets"
        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border transition ${
          presetsOpen
            ? 'bg-white text-black border-white'
            : 'bg-zinc-900/90 text-zinc-400 border-zinc-800 hover:text-zinc-200'
        }`}
      >
        <Sparkles size={15} />
      </button>

      {/* Diagnostics / Energy Monitor Toggle */}
      <button
        onClick={onToggleDiagnostics}
        title="Phase Space & Energy HUD"
        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border transition ${
          diagnosticsOpen
            ? 'bg-white text-black border-white'
            : 'bg-zinc-900/90 text-zinc-400 border-zinc-800 hover:text-zinc-200'
        }`}
      >
        <Activity size={15} />
      </button>

      {/* Settings / N-Links Drawer Toggle */}
      <button
        onClick={onToggleDrawer}
        title="N-Links & Simulation Settings"
        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border transition ${
          drawerOpen
            ? 'bg-white text-black border-white'
            : 'bg-zinc-900/90 text-zinc-400 border-zinc-800 hover:text-zinc-200'
        }`}
      >
        <Sliders size={15} />
      </button>

      <div className="w-[1px] h-6 bg-zinc-800 mx-0.5" />

      {/* Sound Toggle */}
      <button
        onClick={onToggleSound}
        title={soundEnabled ? 'Disable Kinetic Audio' : 'Enable Kinetic Audio'}
        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border transition ${
          soundEnabled
            ? 'bg-white text-black border-white'
            : 'bg-zinc-900/90 text-zinc-400 border-zinc-800 hover:text-zinc-200'
        }`}
      >
        {soundEnabled ? <Volume2 size={15} /> : <VolumeX size={15} />}
      </button>

      {/* Grid Helper Toggle */}
      <button
        onClick={onToggleGrid}
        title={showGrid ? 'Hide 3D Grid' : 'Show 3D Grid'}
        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border transition ${
          showGrid
            ? 'bg-zinc-800 text-white border-zinc-700'
            : 'bg-zinc-900/90 text-zinc-500 border-zinc-800 hover:text-zinc-300'
        }`}
      >
        <Grid size={15} />
      </button>

      {/* Reset Camera View */}
      <button
        onClick={onResetCamera}
        title="Reset 3D Camera View"
        className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center bg-zinc-900/90 text-zinc-400 border border-zinc-800 hover:bg-zinc-800 hover:text-white transition"
      >
        <Compass size={15} />
      </button>

      {/* Fullscreen Toggle */}
      <button
        onClick={onToggleFullscreen}
        title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen (F)'}
        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border transition ${
          isFullscreen
            ? 'bg-white text-black border-white'
            : 'bg-zinc-900/90 text-zinc-400 border-zinc-800 hover:text-zinc-200'
        }`}
      >
        {isFullscreen ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
      </button>

      {/* Physics Theory Guide Modal */}
      <button
        onClick={onOpenTheory}
        title="Theory & Dynamical Systems Docs"
        className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center bg-zinc-900/90 text-zinc-400 border border-zinc-800 hover:bg-zinc-800 hover:text-white transition"
      >
        <Info size={15} />
      </button>
    </div>
  );
}
