import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useMusic } from "../context/MusicContext";
import PageTransition from "../components/PageTransition";
import SkyBackground from "../components/SkyBackground";

export default function Excited() {
  const navigate = useNavigate();
  const { playMusic, isPlaying } = useMusic();

  return (
    <>
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
              onClick={() => {
                if (!isPlaying) {
                  playMusic();
                }
                navigate("/choose");
              }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-crimson-600 to-crimson-500 text-white font-semibold shadow-lg"
            >
              YES ❤️
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => navigate("/notexcited")}
              className="px-8 py-3 rounded-full glass text-gold-300 font-semibold"
            >
              NO 😒
            </motion.button>
          </div>
        </div>
      </PageTransition>
    </>
  );
}