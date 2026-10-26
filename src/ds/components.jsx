// React primitives of the Veyrith design system, ported from _ds_bundle.js.
const cx = (...a) => a.filter(Boolean).join(" ");

export function Portal({ still, caption, height }) {
  return (
    <div className={cx("vy-portal", still && "vy-portal--still")} style={height ? { height } : undefined} aria-hidden={!caption}>
      <span className="vy-frame" />
      <span className="vy-frame vy-frame--b" />
      <span className="vy-frame vy-frame--c" />
      {caption && <span className="vy-portal__caption">{caption}</span>}
    </div>
  );
}

export function Sigil({ shape = "frames" }) {
  return <span className={"vy-sigil vy-sigil--" + shape} aria-hidden="true" />;
}

export function Wordmark() {
  return (
    <div className="vy-brand">
      VEYRITH<span>THE UNFINISHED VAST</span>
    </div>
  );
}

export function Badge({ tone = "teal", children }) {
  return <p className={cx("vy-badge", tone !== "teal" && "vy-badge--" + tone)}>{children}</p>;
}

export function Button({ variant = "default", size = "default", type = "button", className, children, ...rest }) {
  return (
    <button type={type} className={cx("vy-btn", variant !== "default" && "vy-btn--" + variant, size === "small" && "vy-btn--small", className)} {...rest}>
      {children}
    </button>
  );
}

export function Chip({ on, onClick, children }) {
  return (
    <button type="button" aria-pressed={!!on} onClick={onClick} className={cx("vy-chip", on && "vy-chip--on")}>
      {children}
    </button>
  );
}

export function Eyebrow({ children }) {
  return <p className="vy-eyebrow">{children}</p>;
}

export function Notice({ title, children }) {
  return (
    <div className="vy-notice">
      <strong>{title}</strong>
      <p>{children}</p>
    </div>
  );
}

export function SpoilerDetails({ title, spoiler, open, children }) {
  return (
    <details className="vy-details" open={open}>
      <summary>
        {title}
        {spoiler && <span className="vy-details__spoiler">spoiler boundary</span>}
      </summary>
      <div className="vy-details__body">{children}</div>
    </details>
  );
}

export function Topbar({ children }) {
  return (
    <header className="vy-topbar">
      <Wordmark />
      <nav className="vy-tools" aria-label="Prototype controls">
        {children}
      </nav>
    </header>
  );
}

export function Footer({ left, right }) {
  return (
    <footer className="vy-footer">
      <span>{left}</span>
      <span>{right}</span>
    </footer>
  );
}
