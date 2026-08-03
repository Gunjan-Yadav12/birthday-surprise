import { useNavigate } from "react-router-dom";
import funnyVideo from "../assets/videos/funny.mp4";
import SkyBackground from "../components/SkyBackground";
import PageTransition from "../components/PageTransition";

export default function NotExcited() {
  const navigate = useNavigate();

  return (
    <>
      <SkyBackground cakes gifts hearts stars />

      <PageTransition>
        <div className="relative z-20 min-h-screen flex flex-col items-center justify-center px-6 text-center">

          <video
            autoPlay
            muted
            controls
            playsInline
            className="w-[400px] max-w-[90vw] rounded-2xl shadow-2xl border-2 border-pink-300"
          >
            <source src={funnyVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-6">
            Ab hui excitement? 😏❤️
          </h2>

          <p className="text-white/80 mt-2 text-lg">
            Dabayega NO... bol.. bol na.... abb bol naa... 😂
          </p>

          <div className="flex gap-4 mt-8">
            <button
              onClick={() => navigate("/excited")}
              className="px-6 py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white font-semibold"
            >
              Go Back 🔙
            </button>

            <button
              onClick={() => navigate("/choose")}
              className="px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold"
            >
              Yes, I'm Excited ❤️
            </button>
          </div>
        </div>
      </PageTransition>
    </>
  );
}