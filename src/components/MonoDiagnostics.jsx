import React, { useEffect, useRef } from 'react';
import { X, Activity, Zap } from 'lucide-react';

export default function MonoDiagnostics({
  isOpen,
  onClose,
  energyHistory = [],
  currentEnergy,
  phaseHistory = [],
}) {
  const energyCanvasRef = useRef(null);
  const phaseCanvasRef = useRef(null);

  // Render Energy Graph
  useEffect(() => {
    if (!isOpen) return;
    const canvas = energyCanvasRef.current;
    if (!canvas || energyHistory.length < 2) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, width, height);

    // Subtle grid
    ctx.strokeStyle = '#18181b';
    ctx.lineWidth = 1;
    for (let y = 20; y < height; y += 30) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    let minE = Infinity;
    let maxE = -Infinity;
    energyHistory.forEach((e) => {
      minE = Math.min(minE, e.kinetic, e.potential, e.total);
      maxE = Math.max(maxE, e.kinetic, e.potential, e.total);
    });

    const padding = Math.max(Math.abs(maxE - minE) * 0.15, 2);
    const rangeMin = minE - padding;
    const rangeMax = maxE + padding;
    const scaleY = (val) => height - 8 - ((val - rangeMin) / (rangeMax - rangeMin)) * (height - 16);
    const stepX = width / Math.max(energyHistory.length - 1, 1);

    // Plot curves (Monochrome shades)
    // Kinetic (Off-white / 70% white)
    ctx.strokeStyle = '#a1a1aa';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    energyHistory.forEach((e, idx) => {
      const x = idx * stepX;
      const y = scaleY(e.kinetic);
      if (idx === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Potential (Medium gray)
    ctx.strokeStyle = '#52525b';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    energyHistory.forEach((e, idx) => {
      const x = idx * stepX;
      const y = scaleY(e.potential);
      if (idx === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Total (Pure crisp white)
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    energyHistory.forEach((e, idx) => {
      const x = idx * stepX;
      const y = scaleY(e.total);
      if (idx === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
  }, [isOpen, energyHistory]);

  // Render Phase Space Portrait
  useEffect(() => {
    if (!isOpen) return;
    const canvas = phaseCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, width, height);

    // Axes
    ctx.strokeStyle = '#27272a';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.moveTo(width / 2, 0);
    ctx.lineTo(width / 2, height);
    ctx.stroke();

    if (phaseHistory.length < 2) return;

    const maxAngle = Math.PI * 2;
    const maxOmega = 12;

    const mapX = (val) => {
      let norm = ((val + Math.PI) % (2 * Math.PI) + (2 * Math.PI)) % (2 * Math.PI) - Math.PI;
      return width / 2 + (norm / maxAngle) * (width * 0.9);
    };

    const mapY = (val) => {
      return height / 2 - (val / maxOmega) * (height * 0.42);
    };

    const len = phaseHistory.length;
    for (let i = 1; i < len; i++) {
      const pPrev = phaseHistory[i - 1];
      const pCurr = phaseHistory[i];

      const x0 = mapX(pPrev.theta1);
      const y0 = mapY(pPrev.omega1);
      const x1 = mapX(pCurr.theta1);
      const y1 = mapY(pCurr.omega1);

      if (Math.abs(x1 - x0) > width * 0.4 || Math.abs(y1 - y0) > height * 0.4) continue;

      const alpha = (i / len) * 0.85 + 0.15;
      ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
      ctx.lineWidth = 1.0;
      ctx.beginPath();
      ctx.moveTo(x0, y0);
      ctx.lineTo(x1, y1);
      ctx.stroke();
    }
  }, [isOpen, phaseHistory]);

  if (!isOpen) return null;

  return (
    <div className="absolute left-4 top-20 bottom-4 z-40 w-[320px] max-w-[calc(100vw-2rem)] mono-glass rounded-2xl p-4 flex flex-col justify-between border border-zinc-800 shadow-2xl text-xs overflow-hidden animate-fade-in">
      <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2.5 mb-2">
        <div className="flex items-center gap-2 font-mono uppercase tracking-widest text-[11px] text-zinc-300 font-semibold">
          <Activity size={14} className="text-white" />
          <span>System Diagnostics</span>
        </div>
        <button
          onClick={onClose}
          className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition"
        >
          <X size={14} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 pr-1">
        {/* Energy Conservation Monitor */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-zinc-400 font-mono text-[10px] uppercase">
            <span>Mechanical Energy</span>
            <span className="text-white font-semibold">{currentEnergy?.total?.toFixed(2) ?? '0.00'} J</span>
          </div>

          <canvas
            ref={energyCanvasRef}
            width={280}
            height={90}
            className="w-full h-[85px] rounded-lg border border-zinc-800 bg-black"
          />

          <div className="flex justify-between text-[10px] font-mono text-zinc-400">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-zinc-400"></span>
              T: {currentEnergy?.kinetic?.toFixed(1) ?? '0.0'} J
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-zinc-600"></span>
              V: {currentEnergy?.potential?.toFixed(1) ?? '0.0'} J
            </span>
            <span className="flex items-center gap-1 text-white font-semibold">
              <span className="w-2 h-2 rounded-full bg-white"></span>
              E: {currentEnergy?.total?.toFixed(1) ?? '0.0'} J
            </span>
          </div>
        </div>

        {/* Phase Space Portrait */}
        <div className="space-y-2 border-t border-zinc-800/60 pt-3">
          <div className="flex justify-between items-center text-zinc-400 font-mono text-[10px] uppercase">
            <span>Phase Space (θ₁ vs ω₁)</span>
            <span className="text-zinc-500">Poincaré</span>
          </div>

          <canvas
            ref={phaseCanvasRef}
            width={280}
            height={130}
            className="w-full h-[120px] rounded-lg border border-zinc-800 bg-black"
          />
        </div>
      </div>
    </div>
  );
}
