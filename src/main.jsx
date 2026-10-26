import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./ds/styles.css";
import "./index.css";
import App from "./App.jsx";

// The design's tweakable props, exposed as URL parameters:
// ?tab=atlas|factions|audit  ?still=1 (reduced motion)  ?provenance=0 (hide source labels)
const q = new URLSearchParams(window.location.search);
const tab = ["atlas", "factions", "audit"].includes(q.get("tab")) ? q.get("tab") : "atlas";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App startTab={tab} reducedMotion={q.get("still") === "1"} showProvenance={q.get("provenance") !== "0"} />
  </StrictMode>
);
