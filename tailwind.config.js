/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#050914",
          900: "#0a1128",
          800: "#0f1a3d",
          700: "#152352",
        },
        royal: {
          600: "#1e3a8a",
          500: "#2947a3",
          400: "#3a5bc7",
        },
        gold: {
          300: "#f4e0a3",
          400: "#e8c468",
          500: "#d4af37",
          600: "#b8912a",
        },
        crimson: {
          500: "#dc2626",
          600: "#b91c1c",
        },
        silver: "#c8d0e0",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        script: ["'Great Vibes'", "cursive"],
        body: ["'Poppins'", "sans-serif"],
      },
      boxShadow: {
        gold: "0 0 25px rgba(212, 175, 55, 0.45)",
        goldSoft: "0 0 15px rgba(212, 175, 55, 0.25)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        floatSlow: "float 10s ease-in-out infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
        driftX: "driftX 40s linear infinite",
        driftXSlow: "driftX 70s linear infinite",
        pulseGlow: "pulseGlow 2.5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        twinkle: {
          "0%, 100%": { opacity: 0.2 },
          "50%": { opacity: 1 },
        },
        driftX: {
          "0%": { transform: "translateX(-10vw)" },
          "100%": { transform: "translateX(110vw)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(212,175,55,0.3)" },
          "50%": { boxShadow: "0 0 30px rgba(212,175,55,0.7)" },
        },
      },
    },
  },
  plugins: [],
}
