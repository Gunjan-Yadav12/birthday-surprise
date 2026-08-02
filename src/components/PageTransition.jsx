import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
    y: 80,
    scale: 0.95,
    filter: "blur(15px)",
  },

  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
  },

  exit: {
    opacity: 0,
    y: -80,
    scale: 1.05,
    filter: "blur(10px)",
  },
};

export default function PageTransition({ children, className = "" }) {
  return (
    <motion.div
      className={`relative min-h-screen w-full ${className}`}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}