import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMusic } from "../context/MusicContext";
import { motion, AnimatePresence } from "framer-motion";

import PageTransition from "../components/PageTransition";
import useConfetti from "../hooks/useConfetti";
import { BIRTHDAY, UNLOCK_KEY } from "../utils/constants";

export default function Landing() {
  const navigate = useNavigate();
  const { fireworks, burstConfetti } = useConfetti();
  const { playMusic, isPlaying } = useMusic();

  const [input, setInput] = useState("");
  const [isWrong, setIsWrong] = useState(false);
  const [phase, setPhase] = useState("form");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim() === BIRTHDAY.password) {
      // Start music after user interaction
      if (!isPlaying) {
        playMusic();
      }

      setIsWrong(false);
      setPhase("blackout");
      sessionStorage.setItem(UNLOCK_KEY, "true");

      setTimeout(() => {
        setPhase("reveal");
        fireworks();
        burstConfetti();
      }, 1000);

      setTimeout(() => {
        navigate("/excited");
      }, 4200);
    } else {
      setIsWrong(true);
      setTimeout(() => setIsWrong(false), 600);
    }
  };

  return (
    <>
      <PageTransition>
        <AnimatePresence mode="wait">
          {phase === "form" && (
            <motion.div
              key="form"
              exit={{ opacity: 0 }}
              className="relative z-10 min-h-screen w-full flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 px-6 py-16"
            >
              {/* Birthday Card */}
              <motion.div
                className="glass rounded-3xl px-10 py-12 text-center max-w-sm shadow-gold"
                animate={{ y: [0, -14, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <h1 className="font-display text-5xl sm:text-6xl text-gold-gradient mb-2">
                  Happy Birthday
                </h1>

                <p className="font-script text-4xl text-blue-500 mt-4 mb-6">
                  {BIRTHDAY.nickname}
                </p>

                <p className="font-display text-2xl text-silver mb-6">
                  Cheers to {BIRTHDAY.ageTurning}!
                </p>

                <p className="font-body text-sm text-gold-300 tracking-wide uppercase">
                  Unlock it with your number
                </p>
              </motion.div>

              {/* Password Card */}
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, x: 40 }}
                animate={{
                  opacity: 1,
                  x: isWrong ? [0, -12, 12, -8, 8, 0] : 0,
                }}
                transition={{
                  duration: isWrong ? 0.5 : 0.7,
                }}
                className="glass rounded-3xl px-10 py-12 max-w-sm w-full text-center"
              >
                <h2 className="font-display text-3xl text-gold-400 mb-6">
                  Enter Password
                </h2>

                <input
                  type="password"
                  inputMode="numeric"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="••••••"
                  autoFocus
                  className="w-full text-center tracking-[0.5em] text-xl bg-navy-900/60 border border-gold-500/40 rounded-xl py-3 px-4 text-gold-300 placeholder-gold-500/30 outline-none focus:border-gold-400 focus:shadow-goldSoft transition"
                />

                <AnimatePresence>
                  {isWrong && (
                    <motion.p
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-4 text-crimson-500 font-semibold"
                      style={{
                        textShadow:
                          "0 0 12px rgba(220,38,38,0.7)",
                      }}
                    >
                      Wrong Password
                    </motion.p>
                  )}
                </AnimatePresence>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="mt-8 w-full py-3 rounded-xl bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 text-navy-950 font-semibold tracking-wide shadow-gold"
                >
                  Unlock
                </motion.button>
              </motion.form>
            </motion.div>
          )}

          {phase === "blackout" && (
            <motion.div
              key="blackout"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed inset-0 z-20 bg-black"
            />
          )}

          {phase === "reveal" && (
            <motion.div
              key="reveal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed inset-0 z-20 bg-black flex items-center justify-center"
            >
              <motion.h2
                initial={{
                  opacity: 0,
                  scale: 0.7,
                  letterSpacing: "0.2em",
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  letterSpacing: "0.35em",
                }}
                transition={{
                  duration: 1.2,
                  ease: "easeOut",
                }}
                className="font-display text-6xl sm:text-8xl text-gold-gradient animate-pulseGlow px-4"
              >
                03 / 09 / 03
              </motion.h2>
            </motion.div>
          )}
        </AnimatePresence>
      </PageTransition>
    </>
  );
}