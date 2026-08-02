import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function BackButton({ to = -1, label = "Back" }) {
  const navigate = useNavigate();

  return (
    <motion.button
      onClick={() => navigate(to)}
      className="fixed top-5 left-5 z-50 flex items-center gap-2 px-4 py-2 rounded-full glass text-gold-300 text-sm tracking-wide"
      whileHover={{ scale: 1.05, x: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaArrowLeft /> {label}
    </motion.button>
  );
}
