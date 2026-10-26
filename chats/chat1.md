# UI Mockups for Game World

_Started 2026-10-26 14:24 UTC_

---

## User

Make UI mockups for the world where the game and each tribe/clan will take place in

## Assistant



## Assistant

_[tool: list_files]_

_[tool: list_files]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: ask_user]_

I've put up a short form asking about screen type, which factions to cover, how much spoiler material to show, how the map should look and how much interactivity you want. I'll start building once you've answered.

## User

Answered — Asked for follow-up questions; surface: All of the above as a connected flow; scope: All 5 clans, All 5 tribes, The Underside / Pale Interval; spoilers: Include designer view; content: Motto + backstory, Power / cost / weakness, 3 insignia (civic, field, forbidden), Settlement / homeland, Notable figures (Tavra, Oru, Esi); layout: Abstract node graph of linked realities; variations: One polished direction; interactive: Clickable prototype

## Assistant



## Assistant

_[tool: ask_user]_

I've added follow-up questions to the same form: whether I can invent settlement details, how the node graph should be organised, what sits behind the spoiler boundary, and room for your own questions. I'll start once you submit.

## User

Answered — homeland_detail: Only use canon facts; graph_logic: Realities as nodes, factions overlaid; designer_content: Final Concord plans, Forbidden-mark users, Opening event fallout per faction, Hero storyline hooks; open_q: 1. Please use my existing *Veyrith: The Unfinished Vast* Game and Story Bible as the primary source of truth. I want this prototype to represent the established universe accurately while remaining ex…

## Assistant

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: list_files]_

_[tool: read_file]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: update_todos]_

_[tool: dc_write]_

_[tool: ready_for_verification]_

I've built **Veyrith World Codex**, a clickable world reference with three tabs. A background check is still running.

- **atlas:** the Pale Interval sits at the centre, with the ten origin realities in a ring linked through the Underside. The four bible locations (the three beginner maps plus the Unclaimed Vestibule) sit inside the ring. Picking any clan or tribe highlights where it comes from and where its people appear. Clicking a place opens its details, each fact tagged with its source.
- **clans and tribes:** motto, backstory, culture, power, cost and weakness, all three insignia for clans, homeland, and character cards for Tavra, Oru and Esi. Every fact is labelled canon (with section), inferred or undecided.
- **canon audit:** four places where the universe doc and the bible disagree, and nine gaps (c1–c4, m1–m9).
- **designer view:** asks you to confirm before showing spoilers. It then reveals the story truths, the Final Concord's plans, the Uncounted, four spoiler-only places on the atlas, how the opening event affects each clan, wearers of forbidden marks, and chapter hooks for each hero.

I didn't invent any lore. Realities have no names in canon, so their labels are descriptions taken from the source wording. Settlements, named members and forbidden-mark wearers that neither source gives are marked "undecided".

Things you should know:
- The insignia glyphs are my drawings from the canon descriptions, and the faction colours come from the design system's palette rather than canon. Both are labelled that way.
- I've hidden the Pale Interval's identity as the First Witness behind designer view until you settle c2.

Decisions I need from you:
- **c1:** do the clan insignia lose their centres at the opening event or at the climax? The universe doc and the bible disagree.
- **m1:** do you want to give the realities official names?

Settings you can change in the design: which tab it opens on, reduced motion, and whether the source labels are shown.

## User

Found issues — fixing…

## User

Found issues — fixing…

## User

Found issues — fixing…

## User

Found issues — fixing…

## User

Send this design to Vercel: `Veyrith World Codex.dc.html`

