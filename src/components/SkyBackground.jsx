import { useMemo } from "react";
import { motion } from "framer-motion";

export default function SkyBackground({
  cakes = true,
  gifts = true,
  balloons = false,
  hearts = true,
  stars = true,
}) {
  const pureFloaters = (emoji, count, opts = {}) =>
    Array.from({ length: count }, () => ({
      emoji,
      top: opts.topRange
        ? opts.topRange[0] +
          Math.random() * (opts.topRange[1] - opts.topRange[0])
        : Math.random() * 90,
      left: Math.random() * 92,
      size: opts.sizeRange
        ? opts.sizeRange[0] +
          Math.random() * (opts.sizeRange[1] - opts.sizeRange[0])
        : 24,
      delay: Math.random() * 5,
      duration: 4 + Math.random() * 4,
    }));

  const {
    cakeField,
    giftField,
    balloonField,
    heartField,
    starField,
  } = useMemo(
    () => ({
      cakeField: pureFloaters("🎂", 6, {
        topRange: [10, 90],
        sizeRange: [24, 36],
      }),

      giftField: pureFloaters("🎁", 8, {
        topRange: [10, 90],
        sizeRange: [22, 34],
      }),

      balloonField: pureFloaters("❤️", 10, {
        topRange: [10, 90],
        sizeRange: [22, 36],
      }),

      heartField: pureFloaters("💖", 12, {
        topRange: [5, 95],
        sizeRange: [18, 30],
      }),

      starField: pureFloaters("⭐", 10, {
        topRange: [5, 95],
        sizeRange: [16, 28],
      }),
    }),
    []
  );

  const FloatingItem = ({ item }) => (
    <motion.div
      className="absolute"
    style={{
      left: `${item.left}%`,
      fontSize: item.size,
    }}
      animate={{
      y: ["110vh", "-20vh"],
      opacity: [0, 1, 1, 0],
      rotate: [0, 360],
    }}
transition={{
  duration: 10 + Math.random() * 8,
  repeat: Infinity,
  delay: item.delay,
  ease: "linear",
}}
    >
      {item.emoji}
    </motion.div>
  );

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-gradient-to-br from-[#3B000A] via-[#8B0020] to-[#E6395A]">

      {/* Soft Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-pink-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-red-400/20 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full bg-rose-300/10 blur-3xl -translate-x-1/2 -translate-y-1/2" />

      {cakes &&
        cakeField.map((item, i) => (
          <FloatingItem key={`cake-${i}`} item={item} />
        ))}

      {gifts &&
        giftField.map((item, i) => (
          <FloatingItem key={`gift-${i}`} item={item} />
        ))}

      {balloons &&
        balloonField.map((item, i) => (
          <FloatingItem key={`heart-red-${i}`} item={item} />
        ))}

      {hearts &&
        heartField.map((item, i) => (
          <FloatingItem key={`heart-${i}`} item={item} />
        ))}

      {stars &&
        starField.map((item, i) => (
          <FloatingItem key={`star-${i}`} item={item} />
        ))}
    </div>
  );
}