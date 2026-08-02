import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";

import MusicToggle from "../components/MusicToggle";

const CARDS = [
  { emoji: "💌", label: "Letter", to: "/letter" },
  { emoji: "🎂", label: "Cake", to: "/cake" },
  { emoji: "🎉", label: "Invitation", to: "/invitation" },
];

export default function ChooseSurprise() {
  const navigate = useNavigate();

  return (
    <>
    
      <MusicToggle />
      <PageTransition>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl sm:text-6xl text-gold-gradient text-center mb-14"
        >
          Choose Your Surprise ❤️
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl">
          {CARDS.map((card, i) => (
            <motion.button
              key={card.label}
              onClick={() => navigate(card.to)}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 * i, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -6 }}
              whileTap={{ scale: 0.96 }}
              className="glass rounded-3xl py-12 px-6 flex flex-col items-center gap-4 shadow-goldSoft hover:shadow-gold transition-shadow"
            >
              <span className="text-6xl animate-float">{card.emoji}</span>
              <span className="font-display text-2xl text-gold-300">{card.label}</span>
            </motion.button>
          ))}
        </div>

        <motion.button
          onClick={() => navigate("/final")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          className="font-script text-3xl text-crimson-500 mt-16 hover:text-gold-400 transition-colors"
        >
          Final Surprise ❤️
        </motion.button>
      </div>
      </PageTransition>
    </>
  );
}
