import { motion } from "framer-motion";
import bgImage from "../assets/photos/final-bg.png"; // yahan 2nd image add karo

const emojis = ["❤️", "🎂", "🎁", "⭐", "💖", "✨"];

export default function FinalSurprise() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Cherry Red Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-red-800 to-red-600" />

      {/* Couple Photo Background */}
      <div
        className="absolute inset-0 opacity-25 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Floating Emojis */}
      {emojis.map((emoji, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl"
          initial={{
            y: "110vh",
            x: `${Math.random() * 100}vw`,
            opacity: 0,
          }}
          animate={{
            y: "-10vh",
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Infinity,
            delay: index * 1.2,
          }}
        >
          {emoji}
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center text-white">

        <h1 className="mb-6 text-6xl font-bold">
          Happy Birthday Beeech "Te amo" ❤️
        </h1>

        <p className="max-w-2xl text-xl leading-relaxed">
          You are the most beautiful surprise that ever happened in my life.
        </p>

      </div>
    </div>
  );
}