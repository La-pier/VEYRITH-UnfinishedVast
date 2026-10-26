import { useState } from "react";
import { Badge, Button, Chip, Eyebrow, Footer, Notice, Portal, Sigil, SpoilerDetails, Topbar } from "./ds/components.jsx";
import { glyph } from "./glyph.jsx";
import { AUDIT, FACTIONS, FX, HEROES, NODES, SP, SPECIAL, TAGC, brightOf, colorOf, groundOf, tagLabel } from "./data.js";

const LEGEND = [
  ["canon", "var(--muted)", "stated in the universe document or the game bible, with section."],
  ["inferred", "var(--copper)", "a reading that follows from canon but is not stated."],
  ["undecided", "var(--amber)", "missing from both sources. needs your decision."],
  ["spoiler boundary", "var(--amber)", "designer-only canon. hidden in player view."],
  ["design-system proposal", "var(--muted)", "faction colours and drawn glyphs. presentation only, not lore."],
].map(([label, color, desc]) => ({ label, color, desc }));

const fx = (list, showTags) => list.map(f => ({ text: f.text, label: showTags ? tagLabel(f) : "", color: TAGC[f.tag] }));

const labelStyle = (color) => ({ fontSize: ".64rem", letterSpacing: ".13em", textTransform: "uppercase", color });
const sectionLabel = { fontSize: ".7rem", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--muted)" };

// One labelled fact: provenance label above, text below, ruled at the top.
function FactRow({ f, pad = ".7rem", size = ".9rem", lh = "1.55", pretty = true }) {
  return (
    <div style={{ display: "grid", gap: ".25rem", alignContent: "start", padding: pad + " 0", borderTop: "1px solid var(--line)" }}>
      <span style={labelStyle(f.color)}>{f.label}</span>
      <span style={{ fontSize: size, lineHeight: lh, textWrap: pretty ? "pretty" : undefined }}>{f.text}</span>
    </div>
  );
}

const GlyphLabel = ({ glyph: g, label, nowrap }) => (
  <span style={{ display: "inline-flex", gap: ".4rem", alignItems: "center", whiteSpace: nowrap ? "nowrap" : undefined }}>
    {g}
    <span>{label}</span>
  </span>
);

export default function App({ startTab = "atlas", reducedMotion = false, showProvenance = true }) {
  const [s, setS] = useState({ tab: startTab, designer: false, confirm: false, overlay: null, sel: "pale", faction: "ordelith" });
  const setState = (o) => setS(prev => ({ ...prev, ...o }));
  const set = (o) => () => setState(o);
  const d = s.designer, showTags = showProvenance;

  const visible = FACTIONS.filter(f => d || !f.designerOnly);
  const tabs = [["atlas", "atlas"], ["factions", "clans and tribes"], ["audit", "canon audit"]].map(([k, l]) => ({ key: k, label: l, on: s.tab === k, select: set({ tab: k }) }));

  const toggleDesigner = () => d
    ? setState({ designer: false, sel: NODES[s.sel] && NODES[s.sel].spoiler ? "pale" : s.sel })
    : setState({ confirm: true });

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--ink)" }}>
      <Topbar>
        <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap", alignItems: "center" }}>
          {tabs.map(t => <Chip key={t.key} on={t.on} onClick={t.select}>{t.label}</Chip>)}
          <span style={{ width: 1, height: 24, background: "var(--line)", margin: "0 .4rem" }} />
          <Button size="small" variant={d ? "danger" : "default"} onClick={toggleDesigner}>{d ? "Player view" : "Designer view"}</Button>
        </div>
      </Topbar>

      <main style={{ maxWidth: 1440, margin: "0 auto", padding: "2rem var(--space-page) 3rem", display: "grid", gap: "1.4rem" }}>
        {d && (
          <div style={{ border: "1px solid var(--amber)", borderRadius: 6, padding: ".8rem 1rem", display: "flex", gap: "1rem", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
            <span style={{ fontSize: ".86rem", color: "var(--amber)" }}>designer view is on. material marked spoiler boundary must not appear in player text, loading tips or character select.</span>
            <Button size="small" onClick={toggleDesigner}>return to player view</Button>
          </div>
        )}
        {s.tab === "atlas" && <Atlas s={s} set={set} d={d} visible={visible} showTags={showTags} still={!!reducedMotion} />}
        {s.tab === "factions" && <Factions s={s} set={set} d={d} visible={visible} showTags={showTags} />}
        {s.tab === "audit" && <Audit />}
      </main>

      <Footer left="world reference prototype. labels state whether each fact is canon, inferred or undecided." />

      {s.confirm && (
        <div className="vy-backdrop">
          <div className="vy-dialog" role="dialog" aria-modal="true" aria-labelledby="dv-title">
            <h2 id="dv-title">open designer view</h2>
            <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.55 }}>designer view crosses the spoiler boundary. the truth behind the opening, campaign chapters, the final concord's plans and spoiler places on the atlas become visible.</p>
            <div className="vy-dialog__actions">
              <Button onClick={set({ confirm: false })}>cancel</Button>
              <Button variant="danger" onClick={set({ confirm: false, designer: true })}>reveal designer material</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Atlas({ s, set, d, visible, showTags, still }) {
  const ov = s.overlay && FX[s.overlay];
  const ovMap = ov ? Object.fromEntries(ov.nodes) : {};
  const nodeIds = Object.keys(NODES).filter(id => d || !NODES[id].spoiler);

  const lines = [];
  nodeIds.forEach(id => { const n = NODES[id]; if (n.origin) lines.push({ x1: n.x, y1: n.y, x2: 50, y2: 50, c: ov && ovMap[id] ? colorOf(ov) : "var(--line)", dash: null, w: ov && ovMap[id] ? 1.6 : 1 }); });
  lines.push({ x1: NODES.d_quay.x, y1: NODES.d_quay.y, x2: NODES.o_ossari.x, y2: NODES.o_ossari.y, c: "var(--copper)", dash: "4 4", w: 1 });
  if (d) {
    lines.push({ x1: NODES.s_harbor.x, y1: NODES.s_harbor.y, x2: NODES.o_ivrask.x, y2: NODES.o_ivrask.y, c: "var(--amber)", dash: "2 5", w: 1 });
    lines.push({ x1: NODES.s_foundry.x, y1: NODES.s_foundry.y, x2: NODES.d_ward.x, y2: NODES.d_ward.y, c: "var(--amber)", dash: "2 5", w: 1 });
  }

  const overlayChips = [{ key: "none", label: "none", on: !s.overlay, select: set({ overlay: null }), glyph: null }]
    .concat(visible.map(f => ({ key: f.id, label: f.name.replace("clan ", "").replace("the ", ""), on: s.overlay === f.id, select: set({ overlay: f.id }), glyph: glyph(f.glyph, 14, colorOf(f)) })));

  // selection panel
  const selNode = NODES[s.sel];
  const selData = SPECIAL[s.sel] || { eyebrow: selNode.kind, name: selNode.name, facts: selNode.facts };
  const isSpoilerNode = !!(selNode && selNode.spoiler);
  const conn = visible.filter(f => f.nodes.some(([nid]) => nid === s.sel));
  const playerFacts = selData.facts.filter(f => f.tag !== SP);
  const spoilerFacts = d ? selData.facts.filter(f => f.tag === SP || isSpoilerNode) : [];
  const facts = fx(isSpoilerNode ? [] : playerFacts, showTags);
  const spoilers = fx(isSpoilerNode ? selData.facts : spoilerFacts, showTags);
  const hasSpoilers = d && (spoilerFacts.length > 0 || isSpoilerNode);

  return (
    <>
      <div style={{ display: "grid", gap: ".4rem" }}>
        <Eyebrow>world atlas · realities of the vast</Eyebrow>
        <h1 className="vy-h2" style={{ fontSize: "2.2rem", margin: 0 }}>the unfinished vast</h1>
        <p className="vy-lead" style={{ margin: 0, textWrap: "pretty" }}>each node is a reality or a place named in the bible. every reality connects through the underside. choose a clan or tribe to overlay where it originates and where its people appear. canon does not name most realities, so their labels are working descriptions taken from the source text.</p>
      </div>

      <div style={{ display: "grid", gap: ".6rem" }}>
        <span style={sectionLabel}>overlay</span>
        <div style={{ display: "flex", gap: ".45rem", flexWrap: "wrap" }}>
          {overlayChips.map(c => <Chip key={c.key} on={c.on} onClick={c.select}><GlyphLabel glyph={c.glyph} label={c.label} nowrap /></Chip>)}
        </div>
      </div>

      <div style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap", alignItems: "flex-start" }}>
        <div style={{ flex: "1 1 640px", minWidth: 0, overflowX: "auto", border: "1px solid var(--line)", borderRadius: 8, background: "var(--surface)" }}>
          <div style={{ position: "relative", minWidth: 780, aspectRatio: "10/7" }}>
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
              {lines.map((l, i) => <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke={l.c} strokeWidth={l.w} strokeDasharray={l.dash ?? undefined} vectorEffect="non-scaling-stroke" />)}
            </svg>
            <button type="button" onClick={set({ sel: "pale" })} aria-label="the pale interval" style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: 120, height: 200, background: "none", border: 0, padding: 0, cursor: "pointer", outline: s.sel === "pale" ? "2px solid var(--teal)" : "none", outlineOffset: 6, borderRadius: 2 }}>
              <div style={{ position: "absolute", left: "50%", top: "50%", width: 320, height: 460, transform: "translate(-50%,-50%) scale(.42)", pointerEvents: "none" }}>
                <Portal still={still} />
              </div>
            </button>
            <span style={{ position: "absolute", left: "50%", top: "calc(50% + 92px)", transform: "translateX(-50%)", fontSize: ".68rem", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--muted)", whiteSpace: "nowrap", pointerEvents: "none" }}>the pale interval</span>
            {nodeIds.map(id => {
              const n = NODES[id], hit = ov && id in ovMap;
              const cls = "vy-node" + (s.sel === id ? " vy-node--current" : "") + (n.spoiler ? " vy-node--locked" : "");
              return (
                <button key={id} type="button" className={cls} onClick={set({ sel: id })} style={{ position: "absolute", left: n.x + "%", top: n.y + "%", transform: "translate(-50%,-50%)", width: 138, minHeight: 0, padding: ".5rem .6rem", opacity: ov && !hit ? 0.35 : 1, borderColor: hit ? colorOf(ov) : (n.district ? "var(--copper)" : undefined), borderStyle: n.spoiler ? "dashed" : "solid" }}>
                  <strong style={{ fontSize: ".78rem", lineHeight: 1.25 }}>{n.name}</strong>
                  <em style={{ fontSize: ".64rem", marginTop: ".15rem", lineHeight: 1.3 }}>{n.kind}</em>
                  {hit && (
                    <span style={{ display: "flex", gap: ".35rem", alignItems: "center", marginTop: ".35rem", fontSize: ".64rem", lineHeight: 1.3, color: colorOf(ov) }}>
                      {glyph(ov.glyph, 14, colorOf(ov))}<span>{ovMap[id]}</span>
                    </span>
                  )}
                </button>
              );
            })}
          </div>
          <div style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap", alignItems: "center", padding: ".7rem 1rem", borderTop: "1px solid var(--line)", fontSize: ".72rem", color: "var(--muted)" }}>
            <span style={{ display: "flex", gap: ".4rem", alignItems: "center" }}><span style={{ width: 22, borderTop: "1px solid var(--line)" }} />underside link (canon)</span>
            <span style={{ display: "flex", gap: ".4rem", alignItems: "center" }}><span style={{ width: 22, borderTop: "1px dashed var(--copper)" }} />inferred link</span>
            <span style={{ display: "flex", gap: ".4rem", alignItems: "center" }}><span style={{ width: 14, height: 10, border: "1px dashed var(--muted)", borderRadius: 2 }} />spoiler place (designer)</span>
            <Button size="small" onClick={set({ sel: "underside" })}>the underside</Button>
          </div>
        </div>

        <aside className="vy-panel" style={{ flex: "1 1 320px", maxWidth: "100%", display: "grid", gap: ".2rem", alignContent: "start" }}>
          <Eyebrow>{selData.eyebrow}</Eyebrow>
          <h2 className="vy-h2" style={{ margin: "0 0 .3rem" }}>{selData.name}</h2>
          {facts.map((f, i) => <FactRow key={i} f={f} size=".88rem" lh="1.5" />)}
          {hasSpoilers && (
            <SpoilerDetails title="designer material" spoiler open>
              <div style={{ display: "grid" }}>
                {spoilers.map((f, i) => <FactRow key={i} f={f} pad=".6rem" size=".86rem" lh="1.5" pretty={false} />)}
              </div>
            </SpoilerDetails>
          )}
          {conn.length > 0 && (
            <div style={{ display: "grid", gap: ".5rem", paddingTop: ".9rem", borderTop: "1px solid var(--line)" }}>
              <span style={sectionLabel}>connected peoples</span>
              <div style={{ display: "flex", gap: ".45rem", flexWrap: "wrap" }}>
                {conn.map(f => <Chip key={f.id} onClick={set({ tab: "factions", faction: f.id })}><GlyphLabel glyph={glyph(f.glyph, 14, colorOf(f))} label={f.name} /></Chip>)}
              </div>
            </div>
          )}
        </aside>
      </div>
    </>
  );
}

function Factions({ s, set, d, visible, showTags }) {
  const groups = [["clans · the allegiance you choose", "clan"], ["tribes · the people who shaped you", "tribe"], ["movements", "movement"]].map(([label, k]) => ({ label, items: visible.filter(f => f.kind === k) }));
  const cur = FX[s.faction] && (d || !FX[s.faction].designerOnly) ? FX[s.faction] : FX.ordelith;
  const col = colorOf(cur);
  const insignia = cur.kind === "clan"
    ? cur.insignia.map(([type, name, desc, g]) => ({ type: type + " mark", name, desc, glyph: glyph(g, 60, col), tone: type === "forbidden" ? "amber" : type === "civic" ? "teal" : "copper", borderStyle: type === "forbidden" ? "dashed" : "solid",
        note: showTags ? (type === "forbidden" ? "canon · universe doc · not selectable until earned" : "canon · universe doc · glyph drawn from description") : "" }))
    : cur.kind === "tribe"
      ? [{ type: "cultural mark", name: cur.mark, desc: "worn at the lower edge of a full insignia, only through recognized membership.", glyph: glyph(cur.glyph, 60, col), tone: "copper", borderStyle: "solid", note: showTags ? "canon · universe doc · glyph drawn from description" : "" }]
      : [];
  const pf = (list) => fx(list.filter(x => d || x.tag !== SP), showTags);
  const figures = cur.figures || [];
  const kindLabel = cur.kind === "clan" ? "clan · allegiance and power discipline" : cur.kind === "tribe" ? "tribe · living culture" : "movement";

  return (
    <div style={{ display: "flex", gap: "1.4rem", flexWrap: "wrap", alignItems: "flex-start" }}>
      <nav style={{ flex: "0 1 270px", display: "grid", gap: "1.2rem", minWidth: 240 }}>
        {groups.map(g => (
          <div key={g.label} style={{ display: "grid", gap: ".45rem" }}>
            <span style={sectionLabel}>{g.label}</span>
            {g.items.map(it => (
              <button key={it.id} type="button" className={"vy-node" + (s.faction === it.id ? " vy-node--current" : "")} onClick={set({ faction: it.id })} style={{ display: "flex", gap: ".7rem", alignItems: "center", minHeight: "auto", height: "auto", padding: ".6rem .7rem" }}>
                {glyph(it.glyph, 26, colorOf(it))}
                <span style={{ display: "grid", gap: ".1rem", flex: 1, minWidth: 0 }}><strong style={{ fontSize: ".86rem" }}>{it.name}</strong><em style={{ lineHeight: 1.35 }}>{it.epithet}</em></span>
              </button>
            ))}
          </div>
        ))}
      </nav>

      <article style={{ flex: "1 1 600px", minWidth: 0, display: "grid", gap: "1.6rem" }}>
        <header style={{ display: "flex", gap: "1.6rem", alignItems: "center", flexWrap: "wrap", paddingBottom: "1.4rem", borderBottom: "1px solid var(--line)" }}>
          <div style={{ width: 112, height: 112, display: "grid", placeItems: "center", border: "1px solid var(--line)", borderRadius: 2, background: groundOf(cur) }}>{glyph(cur.glyph, 72, col)}</div>
          <div style={{ display: "grid", gap: ".35rem", flex: "1 1 320px" }}>
            <Eyebrow>{kindLabel}</Eyebrow>
            <h1 className="vy-h2" style={{ fontSize: "2.4rem", margin: 0 }}>{cur.name}</h1>
            <span style={{ color: "var(--muted)", fontSize: "1rem" }}>{cur.epithet}</span>
            {cur.motto && <p style={{ margin: ".4rem 0 0", fontSize: "1.15rem", fontWeight: 350, color: brightOf(cur) }}>“{cur.motto}”</p>}
          </div>
          <Button size="small" onClick={set({ tab: "atlas", overlay: cur.id, sel: cur.nodes[0][0] })}>show on atlas</Button>
        </header>

        <section style={{ display: "grid", gap: ".8rem" }}>
          <h3 className="vy-h3" style={{ margin: 0 }}>origin and culture</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "0 1.6rem" }}>
            {pf(cur.about).map((x, i) => <FactRow key={i} f={x} />)}
          </div>
        </section>

        {cur.kind === "clan" && (
          <section style={{ display: "grid", gap: ".8rem" }}>
            <h3 className="vy-h3" style={{ margin: 0 }}>exception discipline</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: ".8rem" }}>
              <div className="vy-card"><Badge>power</Badge><p style={{ lineHeight: 1.55 }}>{cur.power}</p></div>
              <div className="vy-card"><Badge tone="amber">cost</Badge><p style={{ lineHeight: 1.55 }}>{cur.cost}</p></div>
              <div className="vy-card"><Badge tone="copper">weakness</Badge><p style={{ lineHeight: 1.55 }}>{cur.weakness}</p></div>
            </div>
          </section>
        )}
        {cur.kind === "tribe" && (
          <Notice title="tribes are living cultures, not power classes.">each tribe includes members of several clans, nonmembers, internal disagreement, and people who leave or join through adoption. its mark sits beneath a clan insignia rather than replacing it.</Notice>
        )}

        {insignia.length > 0 && (
          <section style={{ display: "grid", gap: ".8rem" }}>
            <h3 className="vy-h3" style={{ margin: 0 }}>{cur.kind === "clan" ? "insignia · civic, field, forbidden" : "cultural mark"}</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: ".8rem" }}>
              {insignia.map(i => (
                <div key={i.type} className="vy-card" style={{ borderStyle: i.borderStyle, gap: ".6rem" }}>
                  <div style={{ height: 72, display: "flex", alignItems: "center" }}>{i.glyph}</div>
                  <Badge tone={i.tone}>{i.type}</Badge>
                  <h3 style={{ fontSize: "1.25rem" }}>{i.name}</h3>
                  <p style={{ lineHeight: 1.55, color: "var(--muted)" }}>{i.desc}</p>
                  <span style={{ ...labelStyle("var(--muted)"), marginTop: "auto" }}>{i.note}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        <section style={{ display: "grid", gap: ".8rem" }}>
          <h3 className="vy-h3" style={{ margin: 0 }}>homeland and settlement</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "0 1.6rem" }}>
            {pf(cur.homeland).map((x, i) => <FactRow key={i} f={x} />)}
          </div>
        </section>

        <section style={{ display: "grid", gap: ".8rem" }}>
          <h3 className="vy-h3" style={{ margin: 0 }}>notable figures</h3>
          {figures.length > 0 ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: ".8rem" }}>
              {figures.map(k => {
                const p = HEROES[k];
                return (
                  <div key={k} className="vy-card" style={{ flexDirection: "row", gap: "1.2rem", alignItems: "flex-start" }}>
                    <Sigil shape={p.sigil} />
                    <div style={{ display: "grid", gap: ".45rem", flex: 1 }}>
                      <Badge>{p.role}</Badge>
                      <h3>{p.name}</h3>
                      <dl className="vy-spec">
                        <dt>tribe</dt><dd>{p.tribe}</dd>
                        <dt>clan</dt><dd>{p.clan}</dd>
                        <dt>ability</dt><dd>{p.ability}</dd>
                        <dt>cost</dt><dd>{p.cost}</dd>
                        <dt>opening</dt><dd>{p.motivation}</dd>
                        <dt>first map</dt><dd>{p.map}</dd>
                      </dl>
                      <span style={labelStyle("var(--muted)")}>canon · bible §3</span>
                      <div><Button size="small" onClick={set({ tab: "atlas", sel: p.node, overlay: cur.id })}>open first map on atlas</Button></div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div style={{ display: "grid", gap: ".25rem", alignContent: "start", padding: ".7rem 0", borderTop: "1px solid var(--line)" }}>
              <span style={labelStyle("var(--amber)")}>undecided · needs author decision</span>
              <span style={{ fontSize: ".9rem", lineHeight: 1.55 }}>no named member appears in the universe document or the bible.</span>
            </div>
          )}
        </section>

        {d && (
          <section style={{ display: "grid", gap: ".4rem" }}>
            <h3 className="vy-h3" style={{ margin: "0 0 .3rem", color: "var(--amber)" }}>designer material</h3>
            {(cur.spoilers || []).map(sp => (
              <SpoilerDetails key={sp.title} title={sp.title} spoiler open>
                <div style={{ display: "grid" }}>
                  {fx(sp.items, showTags).map((x, i) => <FactRow key={i} f={x} pad=".6rem" size=".88rem" />)}
                </div>
              </SpoilerDetails>
            ))}
          </section>
        )}
      </article>
    </div>
  );
}

function Audit() {
  return (
    <>
      <div style={{ display: "grid", gap: ".4rem", maxWidth: 860 }}>
        <Eyebrow>canon audit · before new world-building</Eyebrow>
        <h1 className="vy-h2" style={{ fontSize: "2.2rem", margin: 0 }}>open questions in the sources</h1>
        <p className="vy-lead" style={{ margin: 0, textWrap: "pretty" }}>these are places where the universe document and the game bible disagree, or where the atlas needs information neither source gives. none of them has been resolved here. each needs your decision before it becomes canon.</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: ".6rem", maxWidth: 860 }}>
        {LEGEND.map(l => (
          <div key={l.label} style={{ display: "grid", gap: ".3rem", padding: ".7rem .8rem", border: "1px solid var(--line)", borderRadius: 6 }}>
            <span style={labelStyle(l.color)}>{l.label}</span>
            <span style={{ fontSize: ".78rem", color: "var(--muted)", lineHeight: 1.45 }}>{l.desc}</span>
          </div>
        ))}
      </div>
      {AUDIT.map(g => (
        <section key={g.title} style={{ display: "grid", gap: ".7rem" }}>
          <h3 className="vy-h3" style={{ margin: ".6rem 0 0" }}>{g.title}</h3>
          {g.items.map(a => (
            <div key={a.id} className="vy-panel" style={{ display: "grid", gridTemplateColumns: "56px minmax(0,1fr)", gap: "1rem", borderStyle: g.border }}>
              <span style={{ fontSize: ".78rem", fontWeight: 600, color: g.color, letterSpacing: ".08em" }}>{a.id}</span>
              <div style={{ display: "grid", gap: ".5rem" }}>
                <strong style={{ fontSize: "1rem", fontWeight: 600 }}>{a.title}</strong>
                {a.lines.map((ln, i) => (
                  <div key={i} style={{ display: "grid", gridTemplateColumns: "120px minmax(0,1fr)", gap: ".8rem", fontSize: ".86rem", lineHeight: 1.5 }}>
                    <span style={{ color: "var(--copper)", fontSize: ".74rem", paddingTop: ".1rem" }}>{ln.k}</span>
                    <span style={{ textWrap: "pretty" }}>{ln.v}</span>
                  </div>
                ))}
                <span style={{ fontSize: ".74rem", color: "var(--muted)" }}>affects: {a.affects}</span>
              </div>
            </div>
          ))}
        </section>
      ))}
    </>
  );
}
