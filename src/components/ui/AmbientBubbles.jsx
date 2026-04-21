/**
 * Site-wide decorative layer: soft purple bubbles + tiny dots (pointer-events none).
 */
const BUBBLES = [
  { left: '4%', top: '12%', w: 14, blur: true, anim: 1, dur: 26, delay: 0 },
  { left: '88%', top: '8%', w: 10, blur: true, anim: 2, dur: 22, delay: 1.2 },
  { left: '72%', top: '38%', w: 18, blur: true, anim: 3, dur: 28, delay: 0.4 },
  { left: '12%', top: '48%', w: 11, blur: true, anim: 2, dur: 24, delay: 2.1 },
  { left: '52%', top: '6%', w: 9, blur: true, anim: 1, dur: 30, delay: 0.8 },
  { left: '28%', top: '22%', w: 16, blur: true, anim: 3, dur: 21, delay: 1.5 },
  { left: '92%', top: '62%', w: 12, blur: true, anim: 1, dur: 25, delay: 0.2 },
  { left: '8%', top: '78%', w: 13, blur: true, anim: 2, dur: 27, delay: 3 },
  { left: '62%', top: '72%', w: 10, blur: true, anim: 3, dur: 23, delay: 1.8 },
  { left: '42%', top: '88%', w: 15, blur: true, anim: 1, dur: 29, delay: 0.6 },
];

const DOTS = [
  { left: '18%', top: '18%', anim: 2, dur: 18, delay: 0.3 },
  { left: '35%', top: '55%', anim: 1, dur: 20, delay: 1.1 },
  { left: '58%', top: '28%', anim: 3, dur: 16, delay: 0.7 },
  { left: '78%', top: '52%', anim: 1, dur: 22, delay: 2.4 },
  { left: '22%', top: '92%', anim: 3, dur: 19, delay: 0.9 },
  { left: '48%', top: '42%', anim: 2, dur: 21, delay: 1.6 },
  { left: '95%', top: '28%', anim: 1, dur: 17, delay: 0.1 },
  { left: '6%', top: '35%', anim: 2, dur: 24, delay: 2.8 },
  { left: '66%', top: '12%', anim: 3, dur: 20, delay: 1.3 },
  { left: '38%', top: '72%', anim: 1, dur: 23, delay: 0.5 },
  { left: '84%', top: '88%', anim: 2, dur: 18, delay: 1.9 },
  { left: '14%', top: '62%', anim: 3, dur: 25, delay: 0.2 },
];

const AmbientBubbles = () => {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(139,92,246,0.06),transparent_50%)] dark:bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(139,92,246,0.12),transparent_55%)]" />

      {BUBBLES.map((b, i) => (
        <div
          key={`b-${i}`}
          className={`ambient-float-${b.anim} absolute rounded-full bg-gradient-to-br from-violet-400/35 via-purple-500/25 to-fuchsia-500/30 dark:from-violet-400/25 dark:via-purple-500/20 dark:to-fuchsia-500/25 ${
            b.blur ? 'blur-[1px] sm:blur-sm' : ''
          }`}
          style={{
            left: b.left,
            top: b.top,
            width: b.w,
            height: b.w,
            animationDuration: `${b.dur}s`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}

      {DOTS.map((d, i) => (
        <div
          key={`d-${i}`}
          className={`ambient-float-${d.anim} absolute rounded-full bg-violet-500/45 shadow-[0_0_12px_rgba(139,92,246,0.35)] dark:bg-violet-400/35 dark:shadow-[0_0_14px_rgba(167,139,250,0.25)] w-1.5 h-1.5 sm:w-2 sm:h-2`}
          style={{
            left: d.left,
            top: d.top,
            animationDuration: `${d.dur}s`,
            animationDelay: `${d.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default AmbientBubbles;
