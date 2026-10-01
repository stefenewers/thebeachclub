"use client";

/**
 * V1 ambient sound: a small Web Audio afro-house loop, synthesised in the
 * browser so no audio asset is needed yet. A low-pass filter makes it sound
 * like music heard through the trees; scroll opens the filter as the beach is
 * revealed. Replace with the `audio.ambient` asset in pass two.
 */

const BPM = 122;
const STEP = 60 / BPM / 4; // 16th note
const LOOKAHEAD = 0.12;

// Am9 → Fmaj9 → Cmaj9 → G6 pad, one chord per bar
const CHORDS = [
  [220, 261.63, 329.63, 493.88],
  [174.61, 220, 261.63, 392],
  [130.81, 196, 246.94, 293.66],
  [196, 246.94, 293.66, 329.63],
];
// percussion pattern (16 steps): 1 = conga low, 2 = conga high
const CONGA = [0, 0, 0, 1, 0, 0, 2, 0, 0, 1, 0, 0, 2, 0, 1, 0];

export class AmbientEngine {
  private ctx: AudioContext;
  private master: GainNode;
  private filter: BiquadFilterNode;
  private noise: AudioBuffer;
  private step = 0;
  private nextTime = 0;
  private timer: number | null = null;
  private padVoices: { osc: OscillatorNode; gain: GainNode }[] = [];
  private padGain: GainNode;
  private open = 0;

  constructor() {
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0;
    this.filter = this.ctx.createBiquadFilter();
    this.filter.type = "lowpass";
    this.filter.Q.value = 0.9;
    this.filter.frequency.value = 260;
    const comp = this.ctx.createDynamicsCompressor();
    comp.threshold.value = -18;
    comp.ratio.value = 3;
    this.filter.connect(comp).connect(this.master).connect(this.ctx.destination);

    this.padGain = this.ctx.createGain();
    this.padGain.gain.value = 0.05;
    const padLp = this.ctx.createBiquadFilter();
    padLp.type = "lowpass";
    padLp.frequency.value = 1400;
    this.padGain.connect(padLp).connect(this.filter);

    const len = this.ctx.sampleRate * 0.5;
    this.noise = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const data = this.noise.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
  }

  async start() {
    await this.ctx.resume();
    this.nextTime = this.ctx.currentTime + 0.05;
    this.startPad();
    this.timer = window.setInterval(() => this.schedule(), 25);
    const t = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(t);
    this.master.gain.setValueAtTime(this.master.gain.value, t);
    this.master.gain.linearRampToValueAtTime(0.75, t + 1.6);
  }

  async stop() {
    const t = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(t);
    this.master.gain.setValueAtTime(this.master.gain.value, t);
    this.master.gain.linearRampToValueAtTime(0, t + 0.6);
    await new Promise((r) => setTimeout(r, 650));
    if (this.timer) window.clearInterval(this.timer);
    this.timer = null;
    this.padVoices.forEach((v) => v.osc.stop());
    this.padVoices = [];
    await this.ctx.suspend();
  }

  /** 0 = heard through the trees, 1 = on the sand. */
  setOpenness(v: number) {
    const o = Math.max(0, Math.min(1, v));
    if (Math.abs(o - this.open) < 0.005) return;
    this.open = o;
    const freq = 260 * Math.pow(14000 / 260, o);
    this.filter.frequency.setTargetAtTime(freq, this.ctx.currentTime, 0.15);
  }

  dispose() {
    if (this.timer) window.clearInterval(this.timer);
    this.ctx.close();
  }

  private startPad() {
    const chord = CHORDS[0];
    this.padVoices = chord.flatMap((f) =>
      [-6, 6].map((detune) => {
        const osc = this.ctx.createOscillator();
        osc.type = "sawtooth";
        osc.frequency.value = f;
        osc.detune.value = detune;
        const gain = this.ctx.createGain();
        gain.gain.value = 0.12;
        osc.connect(gain).connect(this.padGain);
        osc.start();
        return { osc, gain };
      }),
    );
  }

  private schedule() {
    while (this.nextTime < this.ctx.currentTime + LOOKAHEAD) {
      this.playStep(this.step, this.nextTime);
      this.nextTime += STEP;
      this.step = (this.step + 1) % 64;
    }
  }

  private playStep(step: number, t: number) {
    const s = step % 16;
    if (s % 4 === 0) this.kick(t);
    if (s % 4 === 2) this.hat(t, 0.16, 0.05);
    if (s % 2 === 1) this.hat(t, 0.05, 0.025);
    if (CONGA[s]) this.conga(t, CONGA[s] === 1 ? 190 : 260);
    if (s === 0) this.setChord(Math.floor(step / 16) % CHORDS.length, t);
  }

  private setChord(i: number, t: number) {
    CHORDS[i].forEach((f, n) => {
      this.padVoices[n * 2]?.osc.frequency.setTargetAtTime(f, t, 0.08);
      this.padVoices[n * 2 + 1]?.osc.frequency.setTargetAtTime(f, t, 0.08);
    });
  }

  private kick(t: number) {
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    osc.frequency.setValueAtTime(140, t);
    osc.frequency.exponentialRampToValueAtTime(46, t + 0.12);
    g.gain.setValueAtTime(0.95, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.42);
    osc.connect(g).connect(this.filter);
    osc.start(t);
    osc.stop(t + 0.45);
  }

  private hat(t: number, level: number, dur: number) {
    const src = this.ctx.createBufferSource();
    src.buffer = this.noise;
    const hp = this.ctx.createBiquadFilter();
    hp.type = "highpass";
    hp.frequency.value = 7000;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(level, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    src.connect(hp).connect(g).connect(this.filter);
    src.start(t);
    src.stop(t + dur + 0.02);
  }

  private conga(t: number, f: number) {
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(f * 1.25, t);
    osc.frequency.exponentialRampToValueAtTime(f, t + 0.04);
    g.gain.setValueAtTime(0.22, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.22);
    osc.connect(g).connect(this.filter);
    osc.start(t);
    osc.stop(t + 0.25);
  }
}
