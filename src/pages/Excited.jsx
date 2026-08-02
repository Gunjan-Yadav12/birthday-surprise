import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../components/PageTransition";
import SkyBackground from "../components/SkyBackground";

export default function Excited() {
  const navigate = useNavigate();
  const [showTease, setShowTease] = useState(false);

  const handleNo = () => {
    setShowTease(true);
    // Auto-hide the teasing message after 2s, exactly as the brief asks —
    // it never navigates anywhere, it's just a bit of harmless fun.
    setTimeout(() => setShowTease(false), 2000);
  };

  return (
    <>
      {/*
        No couple photo has been supplied yet (see src/assets/photos/couple.jpg
        placeholder). Swapping in the real photo is a one-line change: drop
        the file in src/assets/photos/couple.jpg and replace this gradient
        div with an <img src={couple} className="..." /> using the import
        pattern documented in src/assets/photos/README.md.
      */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-navy-950 via-royal-600 to-navy-900" />
      <SkyBackground cakes gifts balloons hearts />
      <div className="fixed inset-0 -z-10 bg-black/40 backdrop-blur-[1px]" />

      <PageTransition>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl sm:text-6xl text-gold-gradient mb-12 max-w-2xl"
        >
          Excited to go further?
        </motion.h1>

        <div className="flex gap-6">
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            onClick={() => navigate("/choose")}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-crimson-600 to-crimson-500 text-white font-semibold shadow-lg"
          >
            YES ❤️
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            onClick={handleNo}
            className="px-8 py-3 rounded-full glass text-gold-300 font-semibold"
          >
            NO 😒
          </motion.button>
        </div>

        <AnimatePresence>
          {showTease && (
            <motion.div
              initial={{ opacity: 0, scale: 0.3, y: 40 }}
              animate={{ opacity: 1, scale: [0.3, 1.3, 1], y: 0 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 flex items-center justify-center pointer-events-none z-30"
            >
              <span className="font-display text-6xl sm:text-8xl text-crimson-500 drop-shadow-[0_0_20px_rgba(220,38,38,0.8)]">
                BKL 😂
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      </PageTransition>
    </>
  );
}
