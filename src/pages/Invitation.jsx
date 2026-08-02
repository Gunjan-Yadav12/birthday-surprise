import { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";

import BackButton from "../components/BackButton";
import MusicToggle from "../components/MusicToggle";
import { BIRTHDAY, INVITATION, TIMELINE } from "../utils/constants";

export default function Invitation() {
  // The card "opens" once, on first view — after that it stays open so the
  // person can scroll and read without replaying the animation every time.
  const [opened, setOpened] = useState(false);

  return (
    <>
      
      <BackButton to="/choose" />
      <MusicToggle />

      <PageTransition>

      <div className="relative z-10 min-h-screen w-full px-4 py-20 flex flex-col items-center">
        {/* Notebook / scrapbook card */}
        <motion.div
          initial={{ scaleY: 0.05, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          onAnimationComplete={() => setOpened(true)}
          style={{ transformOrigin: "top center" }}
          className="relative w-full max-w-2xl rounded-2xl p-1"
        >
          {/* Washi-tape strip */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-6 bg-gold-400/70 rotate-[-3deg] rounded-sm shadow-md z-20" />

          <div
            className="relative rounded-2xl px-8 py-12 sm:px-14 sm:py-16 border-[3px] border-dashed border-gold-400/60"
            style={{
              background:
                "repeating-linear-gradient(0deg, rgba(244,224,163,0.05) 0px, rgba(244,224,163,0.05) 1px, transparent 1px, transparent 28px), radial-gradient(circle at top, rgba(41,71,163,0.55), rgba(10,17,40,0.9))",
            }}
          >
            {/* corner doodle stickers */}
            <span className="absolute top-3 left-3 text-2xl rotate-[-10deg]">🎈</span>
            <span className="absolute top-3 right-3 text-2xl rotate-[10deg]">🎂</span>
            <span className="absolute bottom-3 left-3 text-2xl">💖</span>
            <span className="absolute bottom-3 right-3 text-2xl">✨</span>

            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={opened ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-display text-5xl sm:text-6xl text-gold-gradient text-center mb-2"
            >
              Invitation hehe❤️
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={opened ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="font-script text-3xl text-crimson-500 text-center mb-10"
            >
              Happy Birthday {BIRTHDAY.nickname}
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 font-body text-silver mb-10">
              <InviteField label="Venue" value={INVITATION.venue} opened={opened} delay={0.5} />
              <InviteField label="Location" value={INVITATION.location} opened={opened} delay={0.55} />
              <InviteField label="Date" value={BIRTHDAY.invitationDate} opened={opened} delay={0.6} />
              <InviteField label="Time" value={INVITATION.time} opened={opened} delay={0.65} />
              <InviteField
                label="Dress Code"
                value={INVITATION.dressCode}
                opened={opened}
                delay={0.7}
                full
              />
            </div>

            {/* Timeline */}
            <div className="flex flex-col items-center gap-1 mb-4">
              {TIMELINE.map((step, i) => (
                <div key={step.label} className="flex flex-col items-center">
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={opened ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.9 + i * 0.18, duration: 0.5 }}
                    className="flex items-center gap-3 glass rounded-full px-5 py-2"
                  >
                    <span className="text-xl">{step.icon}</span>
                    <span className="text-gold-200 text-sm sm:text-base">{step.label}</span>
                  </motion.div>
                  {i < TIMELINE.length - 1 && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={opened ? { opacity: 1 } : {}}
                      transition={{ delay: 1.0 + i * 0.18 }}
                      className="text-gold-500 text-lg leading-none py-0.5"
                    >
                      ↓
                    </motion.span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={opened ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 + TIMELINE.length * 0.18 }}
          className="text-center mt-14 max-w-md"
        >
          <p className="font-script text-3xl text-black-500 mb-6">
            Can't wait to celebrate with you ❤️
          </p>
          <div className="flex items-center justify-center gap-6 text-5xl">
            <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}>
              🎁
            </motion.span>
            <motion.span
              animate={{ x: [0, 12, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            >
              🏍️
            </motion.span>
          </div>
        </motion.div>
      </div>
      </PageTransition>
    </>
  );
}

function InviteField({ label, value, opened, delay, full = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={opened ? { opacity: 1, x: 0 } : {}}
      transition={{ delay }}
      className={full ? "sm:col-span-2 text-center" : ""}
    >
      <span className="block text-xs uppercase tracking-widest text-gold-500 mb-1">
        {label}
      </span>
      <span className="font-display text-lg">{value}</span>
    </motion.div>
  );
}
