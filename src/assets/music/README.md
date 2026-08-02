# Adding background music

Add a file named `birthday.mp3` in this folder. src/context/MusicContext.jsx
already points at `/src/assets/music/birthday.mp3` — no code changes needed,
just add the file and it will play when the floating music button is tapped.

Note: browsers block audio with sound from autoplaying without a user
gesture (a click/tap). That's why the music never starts on page-load by
itself — it can only start from the toggle button, which counts as a
user gesture.
