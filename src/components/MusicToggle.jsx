import { motion } from "framer-motion";
import { FaMusic, FaVolumeMute } from "react-icons/fa";
import { useMusic } from "../context/MusicContext";

export default function MusicToggle() {
  const { isPlaying, toggleMusic } = useMusic();

  return (
    <motion.button
      onClick={toggleMusic}
      aria-label={isPlaying ? "Mute background music" : "Play background music"}
      className="fixed bottom-5 right-5 z-50 w-12 h-12 rounded-full glass shadow-gold flex items-center justify-center text-gold-400 text-lg"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      animate={isPlaying ? { rotate: [0, 360] } : {}}
      transition={isPlaying ? { duration: 6, repeat: Infinity, ease: "linear" } : {}}
    >
      {isPlaying ? <FaMusic /> : <FaVolumeMute />}
    </motion.button>
  );
}
