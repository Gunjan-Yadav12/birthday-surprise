import { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import SkyBackground from "../components/SkyBackground";
import BackButton from "../components/BackButton";
import MusicToggle from "../components/MusicToggle";

import photo1 from "../assets/photos/photo1.png";
import photo2 from "../assets/photos/photo2.png";
import photo3 from "../assets/photos/photo3.png";
import photo4 from "../assets/photos/photo4.png";
import photo5 from "../assets/photos/photo5.png";

const PHOTOS = [photo1, photo2, photo3, photo4, photo5];

const POLAROIDS = [
  { id: 1, top: "8%", left: "6%", rotate: -8 },
  { id: 2, top: "14%", left: "78%", rotate: 6 },
  { id: 3, top: "62%", left: "4%", rotate: 5 },
  { id: 4, top: "70%", left: "80%", rotate: -6 },
  { id: 5, top: "4%", left: "42%", rotate: 3 },
];

export default function Letter() {
  const [letterText] = useState(`Hello Birthday Boy ❤️,

Cheers to 23! 🎉

Arey yaar, buddha ho gaya tu toh 😭😂 Ek saal aur bada ho gaya. Ab tere safed baal aayenge, beard bhi safed ho jayegi aur mere saamne poora uncle lagne lagega 🤣.

Waise... I'll still love you 😤❤️

Happy happy happiest birthday to the boy I love the most, and I'll always choose you. ❤️

"Baby, my eyes are on you, don't worry about the eyes one me..." 🤭
Hehe, accha tha na?

Ek pucchi 😘 aur ek tight hug 🤗 toh banta hai yaar itni cutu si website aur gifts ke liye.

"As long as I'm with you, your birthday will never be just another normal day. It'll always be a day that reminds you how deeply you're loved." ❤️

No matter what happens, I want you to remember that you are loved, appreciated, and cherished more than you know.

Thank you for all your ragebaits, faltu ke jokes, bakchodi, aur mujhe baar-baar gussa dilake muh banane ke liye. 😒😂

Tu kisi din bahut pitega merse, samjha na? Zyada putul putul nahi karna merse. 😤

But jokes apart...

I love you. ❤️

You’re the reason behind my random silly smiles, the one who comforts me when I cry, and the one who keeps me motivated every single time.

I’ll always care for you, even if I don’t always express it in words. I’ll make sure you always feel loved.

No matter what happens or who stays or leaves, I’ll always love you, care for you, support you, and stand by your side.

Everyone will be there during your highs, but I promise to be there during your lows too, because that's when you need someone the most.

Mujhe nahi pata future ka kya hoga, but whether we stay together forever or our paths someday become different, you'll always have a place in my heart. Always. ❤️

Thank you for being you.
Thank you for existing.
And thank you for loving your Baingan. 🍆❤️

Happy Birthday, Naman. 🎂✨

With all my love,

Your Baingan ❤️`);

  return (
    <>
      <SkyBackground cakes gifts hearts stars />

      <BackButton to="/choose" />
      <MusicToggle />

      <PageTransition>
        <div className="relative z-10 min-h-screen w-full py-24 px-4">
          
          {POLAROIDS.map((p) => (
            <motion.div
              key={p.id}
              className="hidden md:block absolute w-36 h-44 bg-white rounded-md shadow-xl p-2"
              style={{
                top: p.top,
                left: p.left,
                rotate: `${p.rotate}deg`,
              }}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{
                scale: 1.08,
                rotate: 0,
                zIndex: 20,
              }}
              transition={{
                delay: p.id * 0.1,
                duration: 0.6,
              }}
            >
              <img
                src={PHOTOS[p.id - 1]}
                alt={`Memory ${p.id}`}
                className="w-full h-[85%] object-cover rounded-sm"
              />

              <p className="text-[10px] text-center text-gray-800 mt-1">
                Memory {p.id}
              </p>
            </motion.div>
          ))}

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative font-display text-4xl sm:text-5xl text-gold-gradient text-center mb-10"
          >
            A Letter For Naman 💌
          </motion.h1>

          <motion.div
            initial={{ rotateX: -90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            style={{ transformPerspective: 1200 }}
            className="relative max-w-3xl mx-auto glass rounded-2xl p-8 shadow-gold"
          >
            <div
              className="
                  max-h-[600px]
                  overflow-y-auto
                  whitespace-pre-line
                  font-body
                  text-lg
                  leading-8
                  text-gold-100
                  pr-3
                "
            >
              {letterText}
            </div>
          </motion.div>
        </div>
      </PageTransition>
    </>
  );
}