# Veyrith — The Unfinished Vast · Design System

Veyrith is an original concept for a **single-player, third-person narrative action-adventure** set in a universe "where civilizations inhabit the futures that reality refused to finish." Power comes from *Exceptions* that need a conscious witness, cost something resembling their effect, and can never un-happen an event. Players pick one of three protagonists — **Tavra Sen** (courier, Clan Ivrask), **Oru Del** (rescue maker, Clan Ordelith), **Esi Venn** (memory bearer, unaligned child) — each with an 8-node beginner map, five chapters, three personal resolutions, and three shared world endings.

The only shipped *product surface* is a **self-contained browser interface prototype** (loading concept, character select, schematic beginner maps with quest nodes, journal, accessibility, designer-only story view). Everything else is narrative canon and derived presentation material.

## Sources
Mounted folder `VEYRITH- LAND OF UNFINISHED/` (also uploaded to `uploads/`):
- `[Canon}Veyrith-Game-and-Story-Bible.docx` — **primary design outline**: theme, palette, loading screen, character select, maps, economy, spoilers. Text extract in `_src/bible.txt`.
- `[Canon]Veyrith Universe Creation.docx` — clans, tribes, insignia rules, opening event (`_src/universe.txt`).
- `[Promotional_Interpretive]Why the "Unfinished Vast"….docx` — marketing voice (`_src/promo.txt`).
- `[Derived Canon]Veyrith Schematic.pptx` — 15 image-only slides (blueprint navy + copper). Extracted to `assets/schematic/slide-01…15.png`.
- `[Derived Canon]Veyrith__Decide_What_Remains.png` — infographic → `assets/imagery/decide-what-remains.png`.
- `veyrith-prototype.html`, `veyrith-loading.html`, `index.html` — the product code. **Source of truth for all tokens and components.**

Canon hierarchy: *Canon* (bible, universe, prototype) beats *Derived Canon* (deck, infographic, AI-generated via Gemini Notebook) beats *Promotional*.

---

## CONTENT FUNDAMENTALS
- **Case:** product copy is **all lowercase** — headings, buttons, names ("tavra sen", "the returning quay", "continue", "review and confirm"). Exceptions: the toolbar lockup `VEYRITH / THE UNFINISHED VAST`, toolbar buttons in Title Case ("Designer view"), and CSS-uppercased eyebrows/badges. Documents and the deck use normal sentence/Title Case.
- **Voice:** plain, declarative, literal, calm. Short aphoristic loading lines: *"a road can remember a traveler who no longer remembers home."* · *"a temporary possibility is not a lasting repair."* · *"remembering someone does not decide what they owe you."*
- **Person:** second person for the player ("you can review who is affected…", "choose what to prioritize"); third person for heroes. No "we" marketing voice in product.
- **Honesty is a brand value.** Copy states exactly what something is and isn't: *"the progress reading is a labelled demonstration, not a streamed game world."* Costs are disclosed before confirmation: *"oru permanently loses his possible future as master of the ward workshop. this cost cannot be undone in this save."*
- **Status lines** report what happened and what didn't: *"local attempts cleared. no confirmed decision was erased."*
- **Spoiler discipline:** player text names the next action, never the truth ("trace the tool mark", not "expose your brother's foundry"). Designer-only material is gated behind "spoiler boundary".
- **Consent & care vocabulary:** witness, consent, permission, testimony, regroup, grounding. Esi is always "a child supported by trusted adults".
- **No emoji, no exclamation marks, no hype.** Minimal punctuation — commas over dashes in product copy; lists joined with "+" for gates ("brace kit + rescue writ + stable gantry").
- **Accessibility is stated in copy:** "no puzzle depends solely on hearing or colour" (British "colour"/"behaviour" appear in the prototype).

## VISUAL FOUNDATIONS
- **Theme:** "monumental absence" — settlements built around missing volumes; copper joints hold pale ceramic structures around dark openings. Dark UI only (`color-scheme: dark`).
- **Colour:** deep ink backgrounds (`#090f14` page, `#101b22` surface, `#18272f` raised), warm ivory text `#f2eadb`, muted sage `#b9c2bf`, slate hairlines `#43575c`. Accents with fixed meaning: **copper `#ce9974`** = structure/eyebrows/insignia/dialog border; **teal `#89d5c2`** = relationship paths, primary action, rewards, completion, selection; **amber `#f0c381`** = restrained warnings, prerequisites, focus ring, danger border. "Shape and labels always accompany color. No faction is identified as evil simply by its palette." A full `.high-contrast` theme exists.
- **Type:** Inter everywhere in product. Display wordmark is *light* (350) and very tracked (.14em); h2 450; card titles 1.8rem 450; h3 600; eyebrows .72rem 750 uppercase .17em copper; body line-height 1.55. Odd variable weights (350/450/750) are intentional. Deck uses a transitional serif (→ Noto Serif), mono callouts (→ IBM Plex Mono); infographic uses a bold condensed grotesk (→ Oswald).
- **Backgrounds:** flat solid ink. No images, textures or patterns in product UI. The deck adds a blueprint-navy vignette, paper edges and drafting marks. The one gradient in product: complete-banner `linear-gradient(120deg,#19352f,#101b22)`.
- **Signature motif:** a tall dark opening inside **three offset rectangular frames** (copper, teal, ivory) that slowly approach alignment and never close. Hero shape language: Tavra = narrow directional (skewed), Oru = stepped masses, Esi = offset frames.
- **Borders over shadows:** every surface is `1px solid #43575c`. Selected = teal border + `inset 0 3px teal` top rule. Locked = dashed. Current = 2px teal outline offset 2px. Only shadow in the system: dialog `0 22px 70px #0006`; portal opening has a faint `0 0 80px #608f8322` glow.
- **Radii:** 5px controls, 6px details, 8px cards/panels, 10px dialog, pill for status. Frames and sigils are square-cornered.
- **Cards:** surface fill, 1px line border, 8px radius, 1.4rem padding, no shadow. Notice = 3px copper left rule on 6% copper tint (source pattern, used sparingly).
- **Hover:** border → teal and bg → `#20373d`. No scale, no fades. **Press:** no special state. **Disabled:** opacity .55, not-allowed. **Focus:** 3px amber outline, 4px offset.
- **Motion:** only the frame drift — 13s `ease-in-out` infinite alternate, staggered −4s/−8s, translate to (8px,4px). Loading canvas uses a sine drift. Everything honours `prefers-reduced-motion` and a user "reduced" toggle.
- **Transparency/blur:** none except the dialog backdrop `#02070be8` and frame-ivory at 48% alpha. No blur.
- **Layout:** max 1440px, page padding `clamp(1rem,4vw,3.5rem)`; three-column workspace (map .9fr · objective 1.2fr · journal .7fr); 3-up hero cards; designer view 960px. Topbar and footer are simple ruled bars, not fixed. Game surfaces render at a fixed 1920×1080 logical canvas, letterboxed.
- **Imagery vibe (derived):** cool navy, warm copper and ivory ceramic, slight grain, blueprint annotations. Never bright, never saturated purple/blue gradients.

## ICONOGRAPHY
- The product uses **no icon font, no SVG icon set, no emoji, no unicode glyph icons.** Iconography is the *insignia system*: sigils built from CSS borders (`.vy-sigil--direction|steps|frames`) and the canvas-drawn frames.
- Insignia rules (canon): every insignia must remain identifiable in a single colour; three parts — clan center, tribe lower edge, personal witness outer detail. Named marks: Near Knot, Folded Mile, Open Hinge, Unmet Stair, Unclaimed Frame, etc. (see `_src/universe.txt`).
- Raster insignia/illustrations cropped from the derived-canon infographic and deck live in `assets/illustrations/` (sigil-tavra/oru/esi, insignia-near-knot/open-hinge/unclaimed-frame, portal-copper, portal-ivory). They are AI-generated derived canon — fine for decks and marketing; product UI keeps the CSS sigils.
- **No logo exists.** The wordmark is typeset Inter ("veyrith" lowercase 350/.14em, or VEYRITH 600/.2em). Do not draw one.
- If a UI genuinely needs utility icons, none are defined — ask first; nearest match would be a thin 1.5px outline set (e.g. Lucide) in copper/ink. *Not* currently used.

---

## Index
- `styles.css` — entry; imports `tokens/fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css`, `components/components.css`.
- `tokens/` — CSS custom properties (base `--vy-*` + semantic `--bg`, `--surface`, `--text-*`, `--border-*`).
- `assets/fonts/` — Inter, Noto Serif, IBM Plex Mono, Oswald (woff2, Google Fonts).
- `assets/illustrations/`, `assets/imagery/`, `assets/schematic/` — brand imagery.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `components/` — React primitives + one `*.card.html` per folder.
- `ui_kits/game-prototype/` — interactive recreation of the prototype (see its README).
- `slides/` — 5 sample slides in the schematic deck style.
- `_src/` — plain-text extracts of the docx sources.
- `SKILL.md` — Agent Skill entry.

## Components
Namespace `window.VeyrithDesignSystem_668858`. CSS classes `vy-*` in `components/components.css`.
- **core:** Button, ButtonRow, Chip, ChipGroup, Badge, StatusPill, Eyebrow, StatusLine
- **brand:** Wordmark, Sigil, Portal
- **surfaces:** Panel, HeroCard, SpecList, Notice, CompleteBanner, Dialog, SpoilerDetails, DataTable
- **quest:** MapNode, MapGrid, TaskCheck, ChoiceCard, WitnessBox, RewardBlock, BlockedList, InventoryList, JournalEntry
- **forms:** SettingToggle, Select
- **navigation:** Topbar, Footer
- **feedback:** ProgressBar

### Intentional additions
- **Chip `on` style** — the source renders chips with `class="chip on"` but defines no CSS for them; the selected look reuses HeroCard's teal border + inset rule.
- **Dialog as overlay div** — source uses native `<dialog>`; the component is a portable div with the same styling.
- **ButtonRow / ChipGroup / StatusLine / MapGrid** — thin wrappers for source layout classes (`.wide-actions`, `.chips`, `.save-status`, `.map-grid`).

## Font substitutions (flagged)
Inter is the real product face (loaded from system in source; now bundled). **Noto Serif, IBM Plex Mono and Oswald are nearest Google Fonts matches** for faces seen only in AI-generated deck/infographic images — replace if real files exist.
