import React, { useRef, useEffect, useState, useCallback } from 'react';
import { calculatePositions } from '../physics';

export default function CanvasSimulator({
  mainState,
  ensembleStates = [],
  params,
  trailHistory = [],
  ensembleTrails = [],
  trailLength = 400,
  trailStyle = 'rainbow',
  trailFade = true,
  showVectors = false,
  showAngles = false,
  showGrid = true,
  isPaused = false,
  onBobDragStart,
  onBobDragMove,
  onBobDragEnd,
  isEnsemble = false,
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [draggedBob, setDraggedBob] = useState(null); // null | 1 | 2
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Get canvas coordinates relative to origin
  const getSimCoordinates = useCallback((clientX, clientY) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0, originX: 0, originY: 0, scale: 1 };

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const originX = rect.width / 2;
    const originY = rect.height * 0.38;
    const totalLength = params.l1 + params.l2;
    const scale = (Math.min(rect.width, rect.height) * 0.42) / Math.max(totalLength, 0.1);

    return {
      canvasX: x,
      canvasY: y,
      relX: (x - originX) / scale,
      relY: (y - originY) / scale,
      originX,
      originY,
      scale,
    };
  }, [params.l1, params.l2]);

  // Handle pointer interactions for dragging bobs
  const handlePointerDown = (e) => {
    const coords = getSimCoordinates(e.clientX, e.clientY);
    const origin = { x: coords.originX, y: coords.originY };
    const pos = calculatePositions(mainState, params, origin, coords.scale);

    const hitRadius = 24; // Generous hit area
    const distToBob2 = Math.hypot(coords.canvasX - pos.x2, coords.canvasY - pos.y2);
    const distToBob1 = Math.hypot(coords.canvasX - pos.x1, coords.canvasY - pos.y1);

    if (distToBob2 < hitRadius) {
      setDraggedBob(2);
      onBobDragStart && onBobDragStart(2);
    } else if (distToBob1 < hitRadius) {
      setDraggedBob(1);
      onBobDragStart && onBobDragStart(1);
    }
  };

  const handlePointerMove = (e) => {
    const coords = getSimCoordinates(e.clientX, e.clientY);
    setMousePos({ x: coords.canvasX, y: coords.canvasY });

    if (!draggedBob) return;

    if (draggedBob === 1) {
      // Dragging bob 1 updates theta1
      // Angle theta1 relative to vertical downwards
      const newTheta1 = Math.atan2(coords.relX, coords.relY);
      onBobDragMove && onBobDragMove({ theta1: newTheta1, bob: 1 });
    } else if (draggedBob === 2) {
      // Dragging bob 2 relative to bob 1
      const x1 = params.l1 * Math.sin(mainState.theta1);
      const y1 = params.l1 * Math.cos(mainState.theta1);
      const dx = coords.relX - x1;
      const dy = coords.relY - y1;
      const newTheta2 = Math.atan2(dx, dy);
      onBobDragMove && onBobDragMove({ theta2: newTheta2, bob: 2 });
    }
  };

  const handlePointerUp = () => {
    if (draggedBob) {
      setDraggedBob(null);
      onBobDragEnd && onBobDragEnd();
    }
  };

  // Main Render Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;
    const originX = width / 2;
    const originY = height * 0.38;
    const origin = { x: originX, y: originY };

    const totalLength = params.l1 + params.l2;
    const scale = (Math.min(width, height) * 0.42) / Math.max(totalLength, 0.1);

    // Background clearing
    ctx.fillStyle = '#0b0f19';
    ctx.fillRect(0, 0, width, height);

    // 1. Optional background grid & origin circular guides
    if (showGrid) {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Range boundary circles
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.08)';
      ctx.beginPath();
      ctx.arc(originX, originY, params.l1 * scale, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(236, 72, 153, 0.06)';
      ctx.beginPath();
      ctx.arc(originX, originY, (params.l1 + params.l2) * scale, 0, Math.PI * 2);
      ctx.stroke();
    }

    // 2. Render Ensemble Trails if active
    if (isEnsemble && ensembleTrails.length > 0) {
      const numEnsemble = ensembleTrails.length;
      ensembleTrails.forEach((trail, ensIdx) => {
        if (trail.length < 2) return;
        const hue = (ensIdx / numEnsemble) * 360;
        ctx.beginPath();
        trail.forEach((p, idx) => {
          if (idx === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        });
        ctx.strokeStyle = `hsla(${hue}, 85%, 60%, ${trailFade ? 0.35 : 0.6})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      });
    }

    // 3. Render Main Pendulum Trail
    if (trailHistory.length > 1) {
      const len = trailHistory.length;
      for (let i = 1; i < len; i++) {
        const p1 = trailHistory[i - 1];
        const p2 = trailHistory[i];
        const progress = i / len;
        const alpha = trailFade ? Math.pow(progress, 2.5) : 0.8;

        let strokeColor = `rgba(6, 182, 212, ${alpha})`;
        if (trailStyle === 'rainbow') {
          strokeColor = `hsla(${progress * 300 + 160}, 90%, 65%, ${alpha})`;
        } else if (trailStyle === 'fire') {
          strokeColor = `hsla(${progress * 60}, 100%, 60%, ${alpha})`;
        } else if (trailStyle === 'electric') {
          strokeColor = `rgba(168, 85, 247, ${alpha})`;
        } else if (trailStyle === 'heatmap') {
          const speed = Math.hypot(p2.x - p1.x, p2.y - p1.y);
          const heatHue = Math.max(0, 240 - Math.min(speed * 30, 240));
          strokeColor = `hsla(${heatHue}, 100%, 60%, ${alpha})`;
        }

        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = Math.max(1, progress * 3.5);
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    }

    // 4. Render Ensemble ghost arms
    if (isEnsemble && ensembleStates.length > 0) {
      const numEns = ensembleStates.length;
      ensembleStates.forEach((state, idx) => {
        const pos = calculatePositions(state, params, origin, scale);
        const hue = (idx / numEns) * 360;

        ctx.strokeStyle = `hsla(${hue}, 80%, 65%, 0.22)`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(originX, originY);
        ctx.lineTo(pos.x1, pos.y1);
        ctx.lineTo(pos.x2, pos.y2);
        ctx.stroke();

        ctx.fillStyle = `hsla(${hue}, 90%, 60%, 0.6)`;
        ctx.beginPath();
        ctx.arc(pos.x2, pos.y2, 3, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    // 5. Render Main Double Pendulum
    const pos = calculatePositions(mainState, params, origin, scale);

    // Rod 1
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 3.5;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(originX, originY);
    ctx.lineTo(pos.x1, pos.y1);
    ctx.stroke();

    // Rod 2
    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 3.0;
    ctx.beginPath();
    ctx.moveTo(pos.x1, pos.y1);
    ctx.lineTo(pos.x2, pos.y2);
    ctx.stroke();

    // Pivot Origin
    ctx.fillStyle = '#f8fafc';
    ctx.shadowColor = '#06b6d4';
    ctx.shadowBlur = 12;
    ctx.beginPath();
    ctx.arc(originX, originY, 6.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Bob 1 (Radius proportional to mass)
    const r1 = Math.max(7, Math.min(16, 7 + Math.sqrt(params.m1) * 3.5));
    ctx.fillStyle = '#06b6d4';
    ctx.shadowColor = '#06b6d4';
    ctx.shadowBlur = draggedBob === 1 ? 24 : 14;
    ctx.beginPath();
    ctx.arc(pos.x1, pos.y1, r1, 0, Math.PI * 2);
    ctx.fill();

    // Bob 1 inner ring
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(pos.x1, pos.y1, r1 * 0.45, 0, Math.PI * 2);
    ctx.stroke();

    // Bob 2
    const r2 = Math.max(7, Math.min(18, 7 + Math.sqrt(params.m2) * 3.5));
    ctx.fillStyle = '#ec4899';
    ctx.shadowColor = '#ec4899';
    ctx.shadowBlur = draggedBob === 2 ? 28 : 16;
    ctx.beginPath();
    ctx.arc(pos.x2, pos.y2, r2, 0, Math.PI * 2);
    ctx.fill();

    // Bob 2 inner ring
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(pos.x2, pos.y2, r2 * 0.45, 0, Math.PI * 2);
    ctx.stroke();
    ctx.shadowBlur = 0;

    // 6. Optional Angle indicators
    if (showAngles) {
      // Bob 1 angle arc
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.4)';
      ctx.setLineDash([2, 2]);
      ctx.beginPath();
      ctx.moveTo(originX, originY);
      ctx.lineTo(originX, originY + 45);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(originX, originY, 30, Math.PI / 2, Math.PI / 2 + mainState.theta1, mainState.theta1 < 0);
      ctx.stroke();

      // Bob 2 angle arc
      ctx.strokeStyle = 'rgba(236, 72, 153, 0.4)';
      ctx.beginPath();
      ctx.moveTo(pos.x1, pos.y1);
      ctx.lineTo(pos.x1, pos.y1 + 45);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(pos.x1, pos.y1, 30, Math.PI / 2, Math.PI / 2 + mainState.theta2, mainState.theta2 < 0);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // 7. Optional Velocity vectors
    if (showVectors) {
      const v1Scale = 15;
      const vx1 = -params.l1 * mainState.omega1 * Math.cos(mainState.theta1) * v1Scale;
      const vy1 = params.l1 * mainState.omega1 * Math.sin(mainState.theta1) * v1Scale;

      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(pos.x1, pos.y1);
      ctx.lineTo(pos.x1 + vx1, pos.y1 + vy1);
      ctx.stroke();

      const vx2 = vx1 - params.l2 * mainState.omega2 * Math.cos(mainState.theta2) * v1Scale;
      const vy2 = vy1 + params.l2 * mainState.omega2 * Math.sin(mainState.theta2) * v1Scale;

      ctx.strokeStyle = '#f43f5e';
      ctx.beginPath();
      ctx.moveTo(pos.x2, pos.y2);
      ctx.lineTo(pos.x2 + vx2, pos.y2 + vy2);
      ctx.stroke();
    }

    ctx.restore();
  }, [
    mainState,
    ensembleStates,
    params,
    trailHistory,
    ensembleTrails,
    trailStyle,
    trailFade,
    showVectors,
    showAngles,
    showGrid,
    isEnsemble,
    draggedBob,
  ]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[460px] flex items-center justify-center select-none overflow-hidden rounded-xl bg-slate-950 border border-slate-800 shadow-2xl"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab active:cursor-grabbing touch-none"
      />

      {/* Floating hint on canvas */}
      <div className="absolute top-3 left-3 pointer-events-none flex items-center gap-2 text-[11px] font-mono bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-md border border-slate-700/60 text-slate-300">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
        <span>Drag bobs to position • Space to pause</span>
      </div>

      {isPaused && (
        <div className="absolute top-3 right-3 pointer-events-none text-xs font-semibold uppercase tracking-wider bg-amber-500/20 border border-amber-500/40 text-amber-300 px-2.5 py-1 rounded-md">
          Paused
        </div>
      )}
    </div>
  );
}
