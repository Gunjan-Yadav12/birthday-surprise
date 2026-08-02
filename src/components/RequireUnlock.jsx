import { Navigate } from "react-router-dom";
import { UNLOCK_KEY } from "../utils/constants";

// Guards every page after the password gate. Without this, someone could
// type the URL for /invitation directly and skip the unlock moment entirely.
// sessionStorage (not localStorage) is deliberate: it clears when the tab
// closes, so the surprise resets for the next visit instead of staying
// unlocked forever on a shared device.
export default function RequireUnlock({ children }) {
  const unlocked = sessionStorage.getItem(UNLOCK_KEY) === "true";
  if (!unlocked) return <Navigate to="/" replace />;
  return children;
}
