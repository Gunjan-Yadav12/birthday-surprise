// ---------------------------------------------------------------------------
// All the personal, editable content for the site lives here.
// Change a name, date, or the password once, and it updates everywhere.
// ---------------------------------------------------------------------------

export const BIRTHDAY = {
  name: "Naman",
  nickname: "Naman❤️",
  birthday: "3 September 2003",
  ageTurning: 23,
  password: "030903",
  invitationDate: "3 September 2026",
};

// Text for the scrapbook invitation (Page 6). Edit freely — every field is
// plain text, no markup needed.
export const INVITATION = {
  venue: "[I'll write the venue]",
  location: "[I'll write the address]",
  time: "[I'll write the timing]",
  dressCode: "Come with your cutest smile ❤️",
};

// Order matters: this is rendered top-to-bottom as the scrapbook timeline.
export const TIMELINE = [
  { icon: "🏍️", label: "Ride Together" },
  { icon: "📍", label: "Reach Our Special Place" },
  { icon: "🍽️", label: "Enjoy Dinner" },
  { icon: "🎂", label: "Birthday Celebration" },
  { icon: "🎁", label: "Surprise Gift" },
  { icon: "📸", label: "Photos Together" },
  { icon: "❤️", label: "Make Beautiful Memories" },
];

// Session storage key used to remember that the password was already
// entered correctly, so refreshing Page 2+ doesn't bounce back to Page 1.
export const UNLOCK_KEY = "birthday-unlocked";
