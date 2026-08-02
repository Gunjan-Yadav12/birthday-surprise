import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import BackButton from "../components/BackButton";
import MusicToggle from "../components/MusicToggle";
import SkyBackground from "../components/SkyBackground";

const CANDLES = [0, 1, 2, 3, 4];

export default function Cake() {
  return (
    <>
      <SkyBackground cakes gifts hearts stars />

      <BackButton to="/choose" />
      <MusicToggle />

      <PageTransition>
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl sm:text-5xl text-gold-gradient mb-16 text-center"
          >
            Chotu's Birthday Cake ❤️
          </motion.h1>

          <div className="relative flex flex-col items-center">

            {/* Candles */}
            <motion.div
              initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 2.4,
                duration: 0.8,
                type: "spring",
              }}
              className="flex gap-3 mb-1 z-20"
            >
              {CANDLES.map((c) => (
                <div key={c} className="flex flex-col items-center">
                  <motion.div
                    className="w-2 h-6 rounded-full bg-gradient-to-t from-orange-500 via-yellow-300 to-yellow-100"
                    style={{
                      boxShadow: "0 0 15px rgba(255,255,0,0.9)",
                    }}
                    animate={{
                      scaleY: [1, 1.2, 0.9, 1.1, 1],
                      opacity: [1, 0.8, 1],
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                    }}
                  />
                  <div className="w-2 h-8 bg-red-500 rounded-sm" />
                </div>
              ))}
            </motion.div>

            {/* TOP TIER */}
            <motion.div
              initial={{ y: -700, rotate: -15 }}
              animate={{ y: 0, rotate: 0 }}
              transition={{
                delay: 1.6,
                duration: 0.9,
                type: "spring",
                stiffness: 80,
              }}
              className="w-40 h-16 rounded-t-2xl bg-gradient-to-b from-pink-200 via-pink-400 to-pink-500 shadow-2xl border-b-4 border-pink-300"
            />

            {/* MIDDLE TIER */}
            <motion.div
              initial={{ y: -700, rotate: 10 }}
              animate={{ y: 0, rotate: 0 }}
              transition={{
                delay: 0.8,
                duration: 0.9,
                type: "spring",
                stiffness: 80,
              }}
              className="w-56 h-20 bg-gradient-to-b from-rose-300 via-rose-500 to-rose-700 shadow-2xl border-b-4 border-rose-300"
            />

            {/* BOTTOM TIER */}
            <motion.div
              initial={{ y: -700 }}
              animate={{ y: 0 }}
              transition={{
                delay: 0,
                duration: 1,
                type: "spring",
                stiffness: 80,
              }}
              className="w-72 h-24 rounded-b-2xl bg-gradient-to-b from-red-400 via-red-600 to-red-800 shadow-2xl"
            />

            {/* Cake Complete Text */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 3.2,
                duration: 0.8,
              }}
              className="absolute -bottom-4 text-center"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-[#FFC0CB] drop-shadow-lg">
                🎂 Make A Wish 🎂
              </h2>
            </motion.div>

            {/* Sparkles */}
            {[...Array(20)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute text-xl"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 140 - 20}%`,
                }}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.3, 0.5],
                }}
                transition={{
                  delay: 3,
                  duration: 2 + Math.random(),
                  repeat: Infinity,
                }}
              >
                ✨
              </motion.span>
            ))}

            {/* Floating Gifts */}
            <motion.div
              className="absolute -left-24 top-1/2 text-5xl"
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            >
              🎁
            </motion.div>

            <motion.div
              className="absolute -right-24 top-1/3 text-5xl"
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            >
              🎁
            </motion.div>

            {/* Celebration Hearts */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`heart-${i}`}
                className="absolute text-3xl"
                initial={{
                  opacity: 0,
                  x: 0,
                  y: 0,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  x: (Math.random() - 0.5) * 500,
                  y: -300 - Math.random() * 200,
                }}
                transition={{
                  delay: 3,
                  duration: 4,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              >
                ❤️
              </motion.div>
            ))}
          </div>
        </div>
      </PageTransition>
    </>
  );
}