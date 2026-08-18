import React, { useEffect, useRef } from 'react';

export default function EnergyGraph({ energyHistory = [], currentEnergy }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, width, height);

    if (energyHistory.length < 2) return;

    // Draw baseline / grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 1;
    for (let y = 30; y < height; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Determine min/max energy for auto-scaling
    let minE = Infinity;
    let maxE = -Infinity;
    energyHistory.forEach((e) => {
      minE = Math.min(minE, e.kinetic, e.potential, e.total);
      maxE = Math.max(maxE, e.kinetic, e.potential, e.total);
    });

    const padding = Math.max(Math.abs(maxE - minE) * 0.15, 2);
    const rangeMin = minE - padding;
    const rangeMax = maxE + padding;
    const scaleY = (val) => height - 10 - ((val - rangeMin) / (rangeMax - rangeMin)) * (height - 20);

    const stepX = width / Math.max(energyHistory.length - 1, 1);

    // Draw zero line if visible
    if (rangeMin <= 0 && rangeMax >= 0) {
      const zeroY = scaleY(0);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(0, zeroY);
      ctx.lineTo(width, zeroY);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Helper to draw an energy curve
    const drawCurve = (prop, strokeColor, glowColor) => {
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      energyHistory.forEach((e, idx) => {
        const x = idx * stepX;
        const y = scaleY(e[prop]);
        if (idx === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();
    };

    // Kinetic (Cyan)
    drawCurve('kinetic', '#06b6d4', 'rgba(6, 182, 212, 0.4)');
    // Potential (Pink)
    drawCurve('potential', '#ec4899', 'rgba(236, 72, 153, 0.4)');
    // Total (Yellow / Gold)
    drawCurve('total', '#fbbf24', 'rgba(251, 191, 36, 0.5)');
  }, [energyHistory]);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between text-xs mb-2 font-mono">
        <span className="flex items-center gap-1.5 text-cyan-400">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4]"></span>
          T (Kinetic): {currentEnergy?.kinetic?.toFixed(1) ?? '0.0'} J
        </span>
        <span className="flex items-center gap-1.5 text-pink-400">
          <span className="w-2.5 h-2.5 rounded-full bg-pink-400 shadow-[0_0_8px_#ec4899]"></span>
          V (Potential): {currentEnergy?.potential?.toFixed(1) ?? '0.0'} J
        </span>
        <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24]"></span>
          E (Total): {currentEnergy?.total?.toFixed(1) ?? '0.0'} J
        </span>
      </div>
      <canvas
        ref={canvasRef}
        width={320}
        height={130}
        className="w-full h-[120px] rounded-lg border border-slate-700/60 shadow-inner"
      />
    </div>
  );
}
