import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import funnyVideo from "../assets/videos/funny.mp4";

export default function NotExcited() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">

      <motion.video
        autoPlay
        controls
        className="w-full max-w-3xl rounded-2xl shadow-xl"
      >
        <source src={funnyVideo} type="video/mp4" />
      </motion.video>

      <h2 className="text-3xl font-bold text-white mt-8">
        Ab toh excited ho? 😏❤️
      </h2>

      <div className="flex gap-4 mt-8">
        <button
          onClick={() => navigate("/excited")}
          className="px-6 py-3 rounded-xl bg-red-500 text-white"
        >
          Go Back
        </button>

        <button
          onClick={() => navigate("/choose")}
          className="px-6 py-3 rounded-xl bg-green-500 text-white"
        >
          Yes, I'm Excited ❤️
        </button>
      </div>

    </div>
  );
}