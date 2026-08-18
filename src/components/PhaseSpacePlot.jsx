import React, { useEffect, useRef } from 'react';

export default function PhaseSpacePlot({ history = [], mode = 'theta1_omega1' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Clear background
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, width, height);

    // Draw axes
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.moveTo(width / 2, 0);
    ctx.lineTo(width / 2, height);
    ctx.stroke();

    // Axis labels
    ctx.fillStyle = 'rgba(156, 163, 175, 0.7)';
    ctx.font = '10px monospace';
    let xLabel = 'θ₁ (rad)';
    let yLabel = 'ω₁ (rad/s)';
    if (mode === 'theta2_omega2') {
      xLabel = 'θ₂ (rad)';
      yLabel = 'ω₂ (rad/s)';
    } else if (mode === 'theta1_theta2') {
      xLabel = 'θ₁ (rad)';
      yLabel = 'θ₂ (rad)';
    }

    ctx.fillText(xLabel, width - 60, height / 2 - 6);
    ctx.fillText(yLabel, width / 2 + 6, 14);

    if (history.length < 2) return;

    // Scale factors
    const maxAngle = Math.PI * 2;
    const maxOmega = 12;

    const mapX = (val) => {
      // Normalize angle to [-PI, PI] for cleaner portrait wrapping
      let norm = ((val + Math.PI) % (2 * Math.PI) + (2 * Math.PI)) % (2 * Math.PI) - Math.PI;
      return width / 2 + (norm / maxAngle) * (width * 0.9);
    };

    const mapY = (val, isAngle = false) => {
      if (isAngle) {
        let norm = ((val + Math.PI) % (2 * Math.PI) + (2 * Math.PI)) % (2 * Math.PI) - Math.PI;
        return height / 2 - (norm / maxAngle) * (height * 0.85);
      }
      return height / 2 - (val / maxOmega) * (height * 0.42);
    };

    // Plot trajectory
    const len = history.length;
    for (let i = 1; i < len; i++) {
      const pPrev = history[i - 1];
      const pCurr = history[i];

      let x0, y0, x1, y1;
      if (mode === 'theta1_omega1') {
        x0 = mapX(pPrev.theta1);
        y0 = mapY(pPrev.omega1);
        x1 = mapX(pCurr.theta1);
        y1 = mapY(pCurr.omega1);
      } else if (mode === 'theta2_omega2') {
        x0 = mapX(pPrev.theta2);
        y0 = mapY(pPrev.omega2);
        x1 = mapX(pCurr.theta2);
        y1 = mapY(pCurr.omega2);
      } else {
        x0 = mapX(pPrev.theta1);
        y0 = mapY(pPrev.theta2, true);
        x1 = mapX(pCurr.theta1);
        y1 = mapY(pCurr.theta2, true);
      }

      // Skip line wrap-around jumps
      if (Math.abs(x1 - x0) > width * 0.4 || Math.abs(y1 - y0) > height * 0.4) {
        continue;
      }

      const alpha = (i / len) * 0.85 + 0.15;
      ctx.strokeStyle = mode === 'theta1_omega1' 
        ? `rgba(6, 182, 212, ${alpha})` 
        : mode === 'theta2_omega2' 
        ? `rgba(236, 72, 153, ${alpha})` 
        : `rgba(168, 85, 247, ${alpha})`;
      ctx.lineWidth = 1.2;

      ctx.beginPath();
      ctx.moveTo(x0, y0);
      ctx.lineTo(x1, y1);
      ctx.stroke();
    }

    // Current point highlight
    const last = history[len - 1];
    let curX, curY;
    if (mode === 'theta1_omega1') {
      curX = mapX(last.theta1);
      curY = mapY(last.omega1);
    } else if (mode === 'theta2_omega2') {
      curX = mapX(last.theta2);
      curY = mapY(last.omega2);
    } else {
      curX = mapX(last.theta1);
      curY = mapY(last.theta2, true);
    }

    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = '#06b6d4';
    ctx.shadowBlur = 8;
    ctx.beginPath();
    ctx.arc(curX, curY, 3.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
  }, [history, mode]);

  return (
    <div className="w-full">
      <canvas
        ref={canvasRef}
        width={320}
        height={220}
        className="w-full h-[180px] sm:h-[200px] rounded-lg border border-slate-700/60 shadow-inner"
      />
    </div>
  );
}
