import React, { useState, useEffect } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Zap,
  Pause,
  Pin,
  Plus,
  Trash2,
  Sliders,
  Move3d,
  Compass,
  Palette,
  CircleDot,
  RotateCw,
} from 'lucide-react';
import { getJointSphericalAngles } from '../physics';

const COLOR_PALETTES = [
  { name: 'Studio White', color: '#ffffff' },
  { name: 'Electric Cyan', color: '#00f5ff' },
  { name: 'Neon Pink', color: '#ff0077' },
  { name: 'Amber Gold', color: '#ffd000' },
  { name: 'Emerald', color: '#10b981' },
  { name: 'Violet Pulse', color: '#a855f7' },
  { name: 'Flame Orange', color: '#fb923c' },
  { name: 'Crimson', color: '#ef4444' },
];

export default function NodeMenu({
  isOpen,
  onClose,
  selectedNodeIndex,
  onSelectNodeIndex,
  nState,
  onUpdateProperty,
  onSetJointAngles,
  onSetJointPosition,
  onKickJoint,
  onFreezeJoint,
  onTogglePinJoint,
  onAddLink,
  onRemoveLink,
  isPaused,
  onTogglePlay,
}) {
  if (!isOpen || selectedNodeIndex === null || !nState) return null;

  const { numLinks, lengths = [], masses = [], colors = [], pinned = [], positions = [], velocities = [] } = nState;

  // Selected node bounds
  const idx = Math.max(1, Math.min(numLinks, selectedNodeIndex));
  const isTip = idx === numLinks;
  const isPinned = pinned[idx] || false;
  const mass = masses[idx - 1] || 1.0;
  const length = lengths[idx - 1] || 1.0;
  const color = colors[idx - 1] || '#ffffff';
  const pos = positions[idx] || { x: 0, y: 0, z: 0 };
  const parentPos = positions[idx - 1] || { x: 0, y: 0, z: 0 };
  const vel = velocities[idx - 1] || { x: 0, y: 0, z: 0 };
  const speed = Math.sqrt(vel.x * vel.x + vel.y * vel.y + vel.z * vel.z);

  // Compute spherical angles
  const angles = getJointSphericalAngles(parentPos, pos);

  const [localAzimuth, setLocalAzimuth] = useState(angles.azimuthDeg);
  const [localElevation, setLocalElevation] = useState(angles.elevationDeg);

  useEffect(() => {
    setLocalAzimuth(angles.azimuthDeg);
    setLocalElevation(angles.elevationDeg);
  }, [pos.x, pos.y, pos.z, parentPos.x, parentPos.y, parentPos.z]);

  const handleAngleChange = (newAz, newEl) => {
    setLocalAzimuth(newAz);
    setLocalElevation(newEl);
    onSetJointAngles(idx, newAz, newEl);
  };

  const handlePosChange = (axis, val) => {
    const updated = { ...pos, [axis]: parseFloat(val) || 0 };
    onSetJointPosition(idx, updated);
  };

  return (
    <div className="absolute top-20 right-4 z-40 w-[340px] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-6rem)] mono-glass rounded-2xl p-4 flex flex-col border border-zinc-700 shadow-2xl text-xs overflow-hidden animate-fade-in">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-2.5 mb-3">
        <div className="flex items-center gap-2">
          <span
            className="w-3.5 h-3.5 rounded-full border border-white/40 shadow-sm"
            style={{ backgroundColor: color }}
          />
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-mono font-bold text-white text-sm">
                Joint #{idx}
              </span>
              {isTip && (
                <span className="bg-white/10 text-zinc-300 text-[9px] px-1.5 py-0.5 rounded font-mono uppercase tracking-wider">
                  Tip
                </span>
              )}
              {isPinned && (
                <span className="bg-amber-500/20 text-amber-300 text-[9px] px-1.5 py-0.5 rounded font-mono uppercase tracking-wider flex items-center gap-0.5">
                  <Pin size={8} /> Pinned
                </span>
              )}
            </div>
            <span className="text-[10px] font-mono text-zinc-400">
              Speed: {speed.toFixed(2)} m/s
            </span>
          </div>
        </div>

        {/* Node Navigator & Close */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => onSelectNodeIndex(Math.max(1, idx - 1))}
            disabled={idx <= 1}
            title="Previous Joint"
            className="w-6 h-6 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition"
          >
            <ChevronLeft size={13} />
          </button>
          <span className="text-[10px] font-mono text-zinc-400 px-1">
            {idx}/{numLinks}
          </span>
          <button
            onClick={() => onSelectNodeIndex(Math.min(numLinks, idx + 1))}
            disabled={idx >= numLinks}
            title="Next Joint"
            className="w-6 h-6 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition"
          >
            <ChevronRight size={13} />
          </button>
          <button
            onClick={onClose}
            title="Close Inspector"
            className="w-6 h-6 ml-1.5 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition"
          >
            <X size={13} />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto space-y-3.5 pr-1 no-scrollbar">
        {/* Quick Node Actions */}
        <div className="grid grid-cols-4 gap-1.5">
          <button
            onClick={() => onKickJoint(idx)}
            title="Give 3D Impulse Kick"
            className="p-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 hover:bg-zinc-800 hover:text-white flex flex-col items-center gap-1 text-[10px] text-zinc-300 transition"
          >
            <Zap size={13} className="text-amber-400" />
            <span>Kick</span>
          </button>
          <button
            onClick={() => onFreezeJoint(idx)}
            title="Freeze Joint Momentum"
            className="p-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 hover:bg-zinc-800 hover:text-white flex flex-col items-center gap-1 text-[10px] text-zinc-300 transition"
          >
            <Pause size={13} className="text-cyan-400" />
            <span>Freeze</span>
          </button>
          <button
            onClick={() => onTogglePinJoint(idx)}
            title={isPinned ? 'Unpin Joint' : 'Pin Joint in Space'}
            className={`p-1.5 rounded-lg border flex flex-col items-center gap-1 text-[10px] transition ${
              isPinned
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/50'
                : 'bg-zinc-900/90 text-zinc-300 border-zinc-800 hover:bg-zinc-800'
            }`}
          >
            <Pin size={13} className={isPinned ? 'text-amber-400' : 'text-zinc-400'} />
            <span>{isPinned ? 'Pinned' : 'Pin'}</span>
          </button>
          <button
            onClick={() => onAddLink(idx)}
            title="Insert Link After This Joint"
            className="p-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 hover:bg-zinc-800 hover:text-white flex flex-col items-center gap-1 text-[10px] text-zinc-300 transition"
          >
            <Plus size={13} className="text-emerald-400" />
            <span>+ Link</span>
          </button>
        </div>

        {/* 3D Kinematic Pose Sliders (Azimuth & Elevation) */}
        <div className="bg-zinc-950/70 border border-zinc-800/80 rounded-xl p-2.5 space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-zinc-400 uppercase font-semibold">
              <Compass size={12} className="text-white" />
              <span>3D Joint Angle Pose</span>
            </div>
            {!isPaused && (
              <button
                onClick={onTogglePlay}
                className="text-[9px] font-mono text-zinc-400 hover:text-white underline"
              >
                (Pause to Pose)
              </button>
            )}
          </div>

          {/* Azimuth Angle */}
          <div className="space-y-1">
            <div className="flex justify-between text-[11px] font-mono">
              <span className="text-zinc-400">Azimuth (Yaw φ):</span>
              <span className="text-white font-bold">{localAzimuth}°</span>
            </div>
            <input
              type="range"
              min="-180"
              max="180"
              step="1"
              value={localAzimuth}
              onChange={(e) => handleAngleChange(parseFloat(e.target.value), localElevation)}
              className="w-full"
            />
          </div>

          {/* Elevation Angle */}
          <div className="space-y-1">
            <div className="flex justify-between text-[11px] font-mono">
              <span className="text-zinc-400">Elevation (Pitch θ):</span>
              <span className="text-white font-bold">{localElevation}°</span>
            </div>
            <input
              type="range"
              min="-90"
              max="90"
              step="1"
              value={localElevation}
              onChange={(e) => handleAngleChange(localAzimuth, parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
        </div>

        {/* 3D Cartesian Coordinates */}
        <div className="bg-zinc-950/70 border border-zinc-800/80 rounded-xl p-2.5 space-y-2">
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-zinc-400 uppercase font-semibold">
            <Move3d size={12} className="text-white" />
            <span>Cartesian Position (m)</span>
          </div>
          <div className="grid grid-cols-3 gap-1.5 font-mono">
            {['x', 'y', 'z'].map((axis) => (
              <div key={axis} className="bg-zinc-900 border border-zinc-800 rounded p-1 flex flex-col items-center">
                <span className="text-[9px] uppercase text-zinc-500 font-bold">{axis}</span>
                <input
                  type="number"
                  step="0.05"
                  value={pos[axis] !== undefined ? Math.round(pos[axis] * 100) / 100 : 0}
                  onChange={(e) => handlePosChange(axis, e.target.value)}
                  className="w-full bg-transparent text-center text-xs text-white focus:outline-none"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Physical Parameters (Mass & Length) */}
        <div className="space-y-2.5 border-t border-zinc-800/80 pt-2.5">
          {/* Mass Slider */}
          <div className="space-y-1">
            <div className="flex justify-between font-mono text-[11px]">
              <span className="text-zinc-400">Bob Mass ($m_{idx}$):</span>
              <span className="text-white font-bold">{mass.toFixed(2)} kg</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="8.0"
              step="0.1"
              value={mass}
              onChange={(e) => onUpdateProperty(idx - 1, 'mass', parseFloat(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Link Length Slider */}
          <div className="space-y-1">
            <div className="flex justify-between font-mono text-[11px]">
              <span className="text-zinc-400">Rod Length ($l_{idx}$):</span>
              <span className="text-white font-bold">{length.toFixed(2)} m</span>
            </div>
            <input
              type="range"
              min="0.2"
              max="3.0"
              step="0.05"
              value={length}
              onChange={(e) => onUpdateProperty(idx - 1, 'length', parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
        </div>

        {/* Node Color Theme */}
        <div className="space-y-1.5 border-t border-zinc-800/80 pt-2.5">
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-zinc-400 uppercase font-semibold">
            <Palette size={12} className="text-white" />
            <span>Node Color Theme</span>
          </div>
          <div className="flex items-center gap-1.5 flex-wrap">
            {COLOR_PALETTES.map((p) => (
              <button
                key={p.color}
                onClick={() => onUpdateProperty(idx - 1, 'color', p.color)}
                title={p.name}
                className={`w-6 h-6 rounded-full border transition flex items-center justify-center ${
                  color.toLowerCase() === p.color.toLowerCase()
                    ? 'border-white scale-110 shadow-[0_0_8px_rgba(255,255,255,0.6)]'
                    : 'border-zinc-700 hover:scale-105 opacity-70 hover:opacity-100'
                }`}
                style={{ backgroundColor: p.color }}
              >
                {color.toLowerCase() === p.color.toLowerCase() && (
                  <CircleDot size={10} className="text-black" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Delete Link Action */}
        {numLinks > 1 && (
          <div className="pt-2 border-t border-zinc-800/80">
            <button
              onClick={() => onRemoveLink(idx)}
              className="w-full py-1.5 rounded-lg bg-red-950/40 hover:bg-red-900/60 border border-red-900/60 text-red-300 font-semibold flex items-center justify-center gap-1.5 text-[11px] transition"
            >
              <Trash2 size={12} />
              <span>Delete Joint #{idx}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
