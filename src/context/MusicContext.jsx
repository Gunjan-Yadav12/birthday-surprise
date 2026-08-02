import { createContext, useContext, useRef, useState } from "react";
import song from "../assets/music/perfect.mp3";

const MusicContext = createContext();

export function MusicProvider({ children }) {
  const audioRef = useRef(new Audio(song));
  const [isPlaying, setIsPlaying] = useState(false);

  const playMusic = () => {
    audioRef.current.loop = true;
    audioRef.current.volume = 0.6;

    audioRef.current
      .play()
      .then(() => setIsPlaying(true))
      .catch((err) => console.log(err));
  };

  const pauseMusic = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const toggleMusic = () => {
    if (isPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
  };

  return (
    <MusicContext.Provider
      value={{
        isPlaying,
        playMusic,
        pauseMusic,
        toggleMusic,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  return useContext(MusicContext);
}