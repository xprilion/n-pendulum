// Procedural Web Audio synthesizer for kinetic resonance

class PendulumAudioEngine {
  constructor() {
    this.ctx = null;
    this.osc1 = null;
    this.osc2 = null;
    this.gain1 = null;
    this.gain2 = null;
    this.masterGain = null;
    this.filter = null;
    this.isEnabled = false;
  }

  init() {
    if (this.ctx) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    this.ctx = new AudioContext();

    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.12, this.ctx.currentTime);

    this.filter = this.ctx.createBiquadFilter();
    this.filter.type = 'lowpass';
    this.filter.frequency.setValueAtTime(800, this.ctx.currentTime);
    this.filter.Q.setValueAtTime(4, this.ctx.currentTime);

    this.osc1 = this.ctx.createOscillator();
    this.osc1.type = 'sine';
    this.gain1 = this.ctx.createGain();
    this.gain1.gain.setValueAtTime(0, this.ctx.currentTime);
    this.osc1.connect(this.gain1);
    this.gain1.connect(this.filter);

    this.osc2 = this.ctx.createOscillator();
    this.osc2.type = 'triangle';
    this.gain2 = this.ctx.createGain();
    this.gain2.gain.setValueAtTime(0, this.ctx.currentTime);
    this.osc2.connect(this.gain2);
    this.gain2.connect(this.filter);

    this.filter.connect(this.masterGain);
    this.masterGain.connect(this.ctx.destination);

    this.osc1.start();
    this.osc2.start();
  }

  toggle(enable) {
    if (enable) {
      this.init();
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      this.isEnabled = true;
    } else {
      this.isEnabled = false;
      if (this.gain1 && this.gain2 && this.ctx) {
        this.gain1.gain.setTargetAtTime(0, this.ctx.currentTime, 0.05);
        this.gain2.gain.setTargetAtTime(0, this.ctx.currentTime, 0.05);
      }
    }
  }

  update(omega1, omega2) {
    if (!this.isEnabled || !this.ctx) return;

    const absW1 = Math.abs(omega1);
    const absW2 = Math.abs(omega2);

    const f1 = 120 + Math.min(absW1 * 40, 600);
    const f2 = 180 + Math.min(absW2 * 55, 900);

    const now = this.ctx.currentTime;
    this.osc1.frequency.setTargetAtTime(f1, now, 0.03);
    this.osc2.frequency.setTargetAtTime(f2, now, 0.03);

    const targetGain1 = Math.min(absW1 * 0.03, 0.15);
    const targetGain2 = Math.min(absW2 * 0.03, 0.15);

    this.gain1.gain.setTargetAtTime(targetGain1, now, 0.03);
    this.gain2.gain.setTargetAtTime(targetGain2, now, 0.03);

    this.filter.frequency.setTargetAtTime(300 + (absW1 + absW2) * 80, now, 0.03);
  }
}

export const audioEngine = new PendulumAudioEngine();
