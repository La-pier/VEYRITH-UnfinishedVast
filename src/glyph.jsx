import { G } from "./data.js";

// Insignia glyphs drawn from the canon descriptions. "p" = path (third item: dashed),
// "d" = filled dot, "o" = open circle.
export function glyph(key, size, color) {
  const parts = G[key] || [];
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} fill="none" stroke={color} strokeWidth={2.2} strokeLinecap="square" aria-hidden style={{ flex: "none", display: "block" }}>
      {parts.map((p, i) =>
        p[0] === "p" ? <path key={i} d={p[1]} strokeDasharray={p[2] ? "3 3" : undefined} /> :
        p[0] === "d" ? <circle key={i} cx={p[1]} cy={p[2]} r={p[3]} fill={color} stroke="none" /> :
        <circle key={i} cx={p[1]} cy={p[2]} r={p[3]} />
      )}
    </svg>
  );
}
