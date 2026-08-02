import confetti from "canvas-confetti";

// canvas-confetti draws directly onto a <canvas> it manages itself — it does
// NOT go through React's render cycle. That's intentional: confetti physics
// running 60 times a second would be wasteful to push through React state.
// This hook just exposes a couple of named "presets" so pages call
// `burstConfetti()` or `fireworks()` instead of re-tuning particle configs
// in every component.
export default function useConfetti() {
  const burstConfetti = () => {
    confetti({
      particleCount: 140,
      spread: 90,
      origin: { y: 0.6 },
      colors: ["#d4af37", "#f4e0a3", "#ffffff", "#dc2626"],
    });
  };

  const fireworks = () => {
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 70,
        origin: { x: 0 },
        colors: ["#d4af37", "#f4e0a3", "#ffffff"],
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 70,
        origin: { x: 1 },
        colors: ["#dc2626", "#d4af37", "#ffffff"],
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  };

  const heartBurst = () => {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.6 },
      shapes: ["circle"],
      colors: ["#dc2626", "#f4e0a3"],
      scalar: 0.9,
    });
  };

  return { burstConfetti, fireworks, heartBurst };
}
