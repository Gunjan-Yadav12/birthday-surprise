import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import NotExcited from "./pages/NotExcited";
import { AnimatePresence } from "framer-motion";
import { MusicProvider } from "./context/MusicContext";
import RequireUnlock from "./components/RequireUnlock";
import SkyBackground from "./components/SkyBackground";
import Landing from "./pages/Landing";
import Excited from "./pages/Excited";
import ChooseSurprise from "./pages/ChooseSurprise";
import Letter from "./pages/Letter";
import Cake from "./pages/Cake";
import Invitation from "./pages/Invitation";
import FinalSurprise from "./pages/FinalSurprise";

// AnimatePresence needs to see route changes to animate the *outgoing*
// page before it unmounts. That only works if it lives *inside* the
// Router (so it can read useLocation) but *outside* <Routes> isn't enough
// on its own — Routes must also be keyed by location.pathname, which is
// what makes React treat "/letter" -> "/cake" as an exit+enter instead of
// an in-place update.
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />
        <Route
          path="/excited"
          element={
            <RequireUnlock>
              <Excited />
            </RequireUnlock>
          }
        />
        <Route
          path="/choose"
          element={
            <RequireUnlock>
              <ChooseSurprise />
            </RequireUnlock>
          }
        />
        <Route
          path="/letter"
          element={
            <RequireUnlock>
              <Letter />
            </RequireUnlock>
          }
        />
        <Route
          path="/cake"
          element={
            <RequireUnlock>
              <Cake />
            </RequireUnlock>
          }
        />
        <Route
          path="/invitation"
          element={
            <RequireUnlock>
              <Invitation />
            </RequireUnlock>
          }
        />
        <Route
          path="/final"
          element={
            <RequireUnlock>
              <FinalSurprise />
            </RequireUnlock>
          }
        />
        <Route
          path="/notexcited"
          element={
            <RequireUnlock>
              <NotExcited />
            </RequireUnlock>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MusicProvider>
  <SkyBackground
    cakes
    gifts
    hearts
    stars
  />
  <AnimatedRoutes />
</MusicProvider>
    </BrowserRouter>
  );
}
