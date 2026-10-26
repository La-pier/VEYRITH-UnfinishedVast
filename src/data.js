// World data for the codex, carried over verbatim from Veyrith World Codex.dc.html.
// Every fact carries a provenance tag: canon (with source), inferred, undecided or spoiler.
const CANON = "canon", INF = "inferred", UND = "undecided", SP = "spoiler", PROP = "proposal";
const F = (text, tag, src) => ({ text, tag, src });
const U = (text) => F(text, UND);

const G = {
  open_hinge: [["p","M19 12H12V36H19"],["p","M29 12H36V36H29"],["d",24,24,3]],
  unmet_stair: [["p","M6 40H16V32H6Z"],["p","M32 40H42V12H32Z"],["p","M19 40H29V22",true]],
  closed_tomorrow: [["p","M9 9H39V39H9Z"],["p","M18 18H30V30H18Z"]],
  shared_cup: [["p","M7 13H41Q39 27 24 27Q9 27 7 13Z"],["p","M15 25V38"],["p","M24 27V43"],["p","M33 25V34"]],
  bearing_line: [["p","M7 12H41"],["p","M7 30h5v5h-5z"],["p","M15.5 30h5v5h-5z"],["p","M24 30h5v5h-5z"],["p","M32.5 30h5v5h-5z"],["p","M36 22v0"]],
  single_pillar: [["p","M7 6H41V22H7Z"],["p","M22 22V42H26V22"]],
  near_knot: [["p","M8 8H24V24H8Z"],["p","M24 24H40V40H24Z"]],
  folded_mile: [["p","M8 37L40 13"],["p","M14 8V28"],["p","M14 35V41"],["p","M24 8V20"],["p","M24 28V41"],["p","M34 8V12"],["p","M34 20V41"]],
  severed_road: [["p","M5 24H34"],["o",34,24,8]],
  unclaimed_frame: [["p","M36 9H11V39H29"]],
  walking_gap: [["p","M12 8H21V33H12Z"],["p","M27 15H36V40H27Z"]],
  borrowed_face: [["p","M16 7Q30 8 30 19L35 24L30 27Q30 40 16 41"],["p","M31 14Q22 15 22 21L18 25L22 27Q22 34 31 35"]],
  common_edge: [["p","M5 35H43"],["p","M7 35L12 22L17 35"],["p","M19 35V24H29V35"],["p","M31 35A5 5 0 0 1 41 35"]],
  held_angle: [["p","M18 12L8 24L18 36"],["p","M30 12L40 24L30 36"],["d",24,24,3]],
  perfect_cell: [["p","M24 6L40 15V33L24 42L8 33V15Z"]],
  vauleni: [["p","M8 12L13 19L18 12"],["p","M19 21L24 28L29 21"],["p","M30 30L35 37L40 30"]],
  ossari: [["p","M18 6H27V12H33V20H36V30H33V36H27V42H18"],["p","M18 6V12H23V20H25V30H23V36H18V42"]],
  delketh: [["p","M10 10H22M26 10H38V38H10V10"],["p","M24 10V24L16 32M24 24L32 32"]],
  emruli: [["p","M7 27Q24 13 41 27"],["d",18,34,2.6],["d",30,34,2.6]],
  kethavai: [["p","M18 10H10V38H20V31H28V38H38V10H30"]],
  concord: [["o",24,24,15],["d",24,24,4]],
  uncounted: [["p","M10 10H38V38H10Z",true],["p","M22 21H26V27H22Z"]]
};

const HEROES = {
  tavra: { name: "tavra sen", role: "courier", tribe: "ossari", clan: "ivrask", sigil: "direction", node: "d_quay", map: "the returning quay",
    ability: "nearfold: shorten a marked route between reciprocally connected locations while a companion witnesses the change.",
    cost: "major story-scale folds permanently erode one named attachment, after player confirmation.",
    motivation: "deliver a reply that no one admits sending." },
  oru: { name: "oru del", role: "rescue maker", tribe: "delketh", clan: "ordelith", sigil: "steps", node: "d_ward", map: "the unbuilt ward",
    ability: "almost: borrow an object's physically plausible alternate state for a short interval.",
    cost: "permanent or large-scale restorations require a confirmed personal future cost.",
    motivation: "complete a rescue while investigating why he can no longer imagine forgiving his brother." },
  esi: { name: "esi venn", role: "memory bearer", tribe: "kethavai", clan: "unaligned", sigil: "frames", node: "d_house", map: "the house that forgot",
    ability: "afterimage: perceive memories displaced by nemevra power.",
    cost: "sharing a coherent afterimage needs a consenting living witness and temporarily muddles her present surroundings.",
    motivation: "help a parent recognize a child without forcing either person to resume a relationship." }
};
const CH = {
  tavra: ["the returning quay", "the bell beneath", "a home without arrival", "the unanswered mile", "the last delivery"],
  oru: ["the unbuilt ward", "beneath the blueprint", "the future foundry", "the empty blueprint", "what we refuse to build"],
  esi: ["the house that forgot", "the kindly absence", "the archive of unsaid names", "the second audience", "a name is not a key"]
};
const hooks = (k, sec) => ({ title: "hero storyline hooks · " + HEROES[k].name, items: CH[k].map((c, i) => F("chapter " + (i + 1) + ": " + c, SP, "bible " + sec)) });
const FALLOUT = F("at the assembly of thresholds the loss of insignia centers disables established shortcuts and certifications, not every character's basic ability. personal witness relationships allow continued play.", SP, "bible §9");

const FACTIONS = [
  { id: "ordelith", kind: "clan", name: "clan ordelith", epithet: "the keepers of almost", motto: "what failed still belongs to us.", glyph: "open_hinge",
    about: [F("founders survived a citywide evacuation through a doorway that had never been built. since then the clan preserves unrealized possibilities: bridges abandoned before construction, reconciliations never attempted, cures almost discovered.", CANON, "universe doc"),
      F("careful makers, archivists and rescue specialists. they disagree fiercely over whether saving a stranger justifies sacrificing a future child, vocation or reconciliation.", CANON, "universe doc")],
    power: "they borrow an object's nearby, unrealized state. a shattered shield briefly becomes the shield that survived the blow.",
    cost: "each use permanently closes one genuine possibility in the user's own future. the possibility lost is not theirs to choose.",
    weakness: "they cannot create an outcome that was never possible.",
    insignia: [["civic", "the open hinge", "two ivory brackets joined by a copper dot. shelter and second chances.", "open_hinge"], ["field", "the unmet stair", "three rising steps, with the middle step missing. impossible passage.", "unmet_stair"], ["forbidden", "the closed tomorrow", "a copper square enclosing a smaller, unbroken square. those who spend other people's futures.", "closed_tomorrow"]],
    homeland: [F("origin reality: the city of the doorway never built. its name and present state are not stated.", UND), F("no ordelith settlement or clan hall is described.", UND)],
    figures: ["oru"], nodes: [["o_ordelith", "origin"], ["d_ward", "oru del works here"], ["s_foundry", "oru and rell"], ["s_assembly", "insignia center lost"]],
    spoilers: [{ title: "story truths", items: [F("rell, oru's brother, helped design a system that transfers future costs without valid consent.", SP, "bible §11 ch2"), F("rell joined sere to prevent a larger structural collapse, but concealed who paid for the repairs.", SP, "bible §11 ch3"), F("some of the uncounted are people whose viable futures were closed by large restorations.", SP, "bible §11 ch4"), F("rell's clan is not stated.", UND)] },
      { title: "opening event fallout", items: [FALLOUT, U("ordelith-specific fallout is not described.")] },
      { title: "forbidden-mark users", items: [U("no wearer of the closed tomorrow is named."), F("rell's cost-transfer system matches the closed tomorrow's meaning. the sources do not connect them.", INF, "thematic parallel")] }, hooks("oru", "§11")] },
  { id: "suthren", kind: "clan", name: "clan suthren", epithet: "the bearers of weight", motto: "nothing carried is carried alone.", glyph: "shared_cup",
    about: [F("during the first collapse between realities, a group of strangers agreed to share the force of a falling continent. their descendants still inherit a fraction of that burden.", CANON, "universe doc"),
      F("communal households, public meals, and leadership measured by responsibility assumed rather than wealth accumulated.", CANON, "universe doc"),
      F("suthren companions can share a stated burden only after specific consent.", CANON, "bible §3")],
    power: "they redistribute an existing burden among consenting participants: weight, fatigue, pain, or the strain of an injury. sharing does not heal.",
    cost: "a share of every transferred burden remains with the bearer until its source is resolved.",
    weakness: "consent must be specific and understood. deception invalidates a transfer.",
    insignia: [["civic", "the shared cup", "a broad bowl supported by three unequal stems. mutual care.", "shared_cup"], ["field", "the bearing line", "five small squares beneath one suspended bar. collective endurance.", "bearing_line"], ["forbidden", "the single pillar", "one narrow stem holding an oversized block. rulers who claim only they can carry society.", "single_pillar"]],
    homeland: [F("origin: the reality of the falling continent. whether it survived is not stated.", UND), U("no named suthren settlement.")],
    figures: [], nodes: [["o_suthren", "origin"], ["s_assembly", "insignia center lost"]],
    spoilers: [{ title: "story truths", items: [U("the bible gives clan suthren no campaign role beyond companions.")] }, { title: "opening event fallout", items: [FALLOUT, U("suthren-specific fallout is not described.")] }, { title: "forbidden-mark users", items: [U("no wearer of the single pillar is named.")] }] },
  { id: "ivrask", kind: "clan", name: "clan ivrask", epithet: "the distance weavers", motto: "near is something we do.", glyph: "near_knot",
    about: [F("founders were separated when one homeland fractured into distant realities. they discovered distance could be folded between places that kept a reciprocal relationship.", CANON, "universe doc"),
      F("couriers, diplomats, caravan builders and occasionally siege engineers. they consider unanswered messages a serious social injury.", CANON, "universe doc")],
    power: "they shorten or lengthen a route between places with a living connection: correspondence, shared work, mutual dependence or sustained conflict.",
    cost: "each major passage erodes the traveler's feeling of attachment to the destination.",
    weakness: "they cannot reach a place with which they have no reciprocal connection.",
    insignia: [["civic", "the near knot", "two angular loops sharing one corner. correspondence.", "near_knot"], ["field", "the folded mile", "three parallel strokes interrupted by a diagonal seam. passage.", "folded_mile"], ["forbidden", "the severed road", "a continuous line ending inside an isolated circle. deliberate exile.", "severed_road"]],
    homeland: [F("origin: the fractured homeland, now spread across several realities. their names are not stated.", UND), F("tavra works from the returning quay, a folded harbor of paired mail towers.", CANON, "bible §5")],
    figures: ["tavra"], nodes: [["o_ivrask", "origin"], ["d_quay", "tavra sen works here"], ["s_harbor", "anet's homeland"], ["s_assembly", "insignia center lost"]],
    spoilers: [{ title: "story truths", items: [F("the reply came from tavra's former mentor, anet, in a homeland recorded as inaccessible.", SP, "bible §10 ch2"), F("anet offered the final concord exclusive access in exchange for protection.", SP, "bible §10 ch3"), U("anet's clan and tribe are not stated.")] },
      { title: "opening event fallout", items: [FALLOUT, F("established ivrask shortcuts would be among those disabled.", INF, "from bible §9")] }, { title: "forbidden-mark users", items: [U("no wearer of the severed road is named.")] }, hooks("tavra", "§10")] },
  { id: "nemevra", kind: "clan", name: "clan nemevra", epithet: "the unowned", motto: "a person is not a possession, even of their past.", glyph: "unclaimed_frame",
    about: [F("in one reality, names functioned as deeds of ownership. the founders escaped by becoming impossible to identify as the same people twice, without losing their own memories.", CANON, "universe doc"),
      F("sanctuary builders, identity stewards and infiltrators. they keep consent-based records so members can reconstruct relationships without being forced back into them.", CANON, "universe doc")],
    power: "they temporarily interrupt recognition. a pursuer cannot connect a face to a wanted notice.",
    cost: "someone close to the user loses one shared memory. the user retains it and cannot choose who forgets.",
    weakness: "recognition fails, not perception. a guard can still see a stranger entering a forbidden room.",
    insignia: [["civic", "the unclaimed frame", "an asymmetrical outline with one side open. sanctuary.", "unclaimed_frame"], ["field", "the walking gap", "two offset vertical shapes separated by a narrow passage. escape.", "walking_gap"], ["forbidden", "the borrowed face", "two nested profiles facing opposite directions. identity theft.", "borrowed_face"]],
    homeland: [F("origin: the reality where names were deeds. whether it still enforces name-ownership is not stated.", UND), U("no named nemevra sanctuary.")],
    figures: [], nodes: [["o_nemevra", "origin"], ["d_house", "displaced memories"], ["s_assembly", "insignia center lost"]],
    spoilers: [{ title: "story truths", items: [F("some nemevra acts saved people from owners who tracked them by name.", SP, "bible §12 ch2"), F("esi was an ordinary child caught between a nemevra escape and an external act of witnessing.", SP, "bible §12 ch4")] },
      { title: "opening event fallout", items: [FALLOUT, U("nemevra-specific fallout is not described.")] }, { title: "forbidden-mark users", items: [U("no wearer of the borrowed face is named.")] }, hooks("esi", "§12")] },
  { id: "othessil", kind: "clan", name: "clan othessil", epithet: "the accord makers", motto: "a law should have someone answer for it.", glyph: "common_edge",
    about: [F("their first settlement occupied a reality where gravity changed direction whenever its inhabitants disagreed. they survived by making small, precisely bounded agreements the world itself began to obey.", CANON, "universe doc"),
      F("negotiators, experimental architects and exacting hosts.", CANON, "universe doc")],
    power: "they establish one temporary physical rule within a marked area, provided everyone inside understands and accepts it.",
    cost: "the maker is personally bound by the rule until its agreed duration expires, even after leaving the area.",
    weakness: "a nonconsenting entrant breaks the effect. coerced acceptance does not count.",
    insignia: [["civic", "the common edge", "three different shapes sharing one straight boundary. agreement.", "common_edge"], ["field", "the held angle", "two opposing chevrons enclosing a dot. a protected accord.", "held_angle"], ["forbidden", "the perfect cell", "a seamless hexagon with no opening. those who exclude dissenters to achieve permanent order.", "perfect_cell"]],
    homeland: [F("their cities display local rules at every entrance.", CANON, "universe doc"), U("no othessil city is named, and whether they stand in the first settlement's reality is not stated.")],
    figures: [], nodes: [["o_othessil", "origin"], ["s_assembly", "insignia center lost"]],
    spoilers: [{ title: "story truths", items: [U("the bible gives clan othessil no campaign role beyond partners.")] }, { title: "opening event fallout", items: [FALLOUT, U("othessil-specific fallout is not described.")] }, { title: "forbidden-mark users", items: [U("no wearer of the perfect cell is named.")] }] },
  { id: "vauleni", kind: "tribe", name: "the vauleni", epithet: "keepers of the first sound", glyph: "vauleni",
    about: [F("their ancestors lived through a winter during which light vanished but sound continued to travel.", CANON, "universe doc"), F("they still introduce themselves through a short rhythm before speaking their names.", CANON, "universe doc")],
    mark: "three descending notches.",
    homeland: [F("settlements are built around resonant chambers. historical archives are acoustic spaces that reproduce testimony from particular listening positions.", CANON, "universe doc"), U("whether the winter was a separate reality or an event in one is not stated.")],
    figures: [], nodes: [["o_vauleni", "origin"]], spoilers: [{ title: "story truths", items: [U("no vauleni material in the bible.")] }] },
  { id: "ossari", kind: "tribe", name: "the ossari", epithet: "children of the moving shore", glyph: "ossari",
    about: [F("their homeland's boundary migrates across the vast. instead of abandoning it, they designed homes that unfold along its edge.", CANON, "universe doc"), F("hospitality lasts for a journey rather than a number of nights.", CANON, "universe doc"), F("their central political dispute: whether a permanent capital would protect their culture or destroy its purpose.", CANON, "universe doc")],
    mark: "a stepped crescent.",
    homeland: [F("the moving shore, with homes that unfold along its edge.", CANON, "universe doc"), F("the returning quay straddles a migrating shore. it may be the ossari shore.", INF, "bible §5")],
    figures: ["tavra"], nodes: [["o_ossari", "origin"], ["d_quay", "migrating shore"]],
    spoilers: [{ title: "story truths", items: [F("in chapter 4 tavra must lose attachment to her childhood home, or ask a consenting network to distribute the fold.", SP, "bible §10 ch4")] }, hooks("tavra", "§10")] },
  { id: "delketh", kind: "tribe", name: "the delketh", epithet: "the second makers", glyph: "delketh",
    about: [F("their ancestors inherited an abandoned civilization's machinery but refused to imitate its creators. every recovered object must be changed before it becomes part of delketh life.", CANON, "universe doc"), F("craftspeople preserve a visible account of each object's transformations.", CANON, "universe doc")],
    mark: "a square interrupted by a branching seam.",
    homeland: [U("the abandoned civilization and the delketh homeland are not named or described.")],
    figures: ["oru"], nodes: [["o_delketh", "origin"], ["d_ward", "oru del works here"], ["s_foundry", "rell"]],
    spoilers: [{ title: "story truths", items: [F("rell is oru's brother. his tribe is not stated; delketh is likely.", INF, "bible §11")] }, hooks("oru", "§11")] },
  { id: "emruli", kind: "tribe", name: "the emruli", epithet: "gardeners of quiet", glyph: "emruli",
    about: [F("they descend from refugees who survived by sheltering in regions where events unfolded slowly.", CANON, "universe doc"), F("they distinguish patience from passivity and have a strong tradition of deliberate, sudden revolt.", CANON, "universe doc")],
    mark: "two dots beneath a shallow arch.",
    homeland: [F("their settlements keep quiet gardens in which a conversation may occupy an afternoon outside and only minutes within.", CANON, "universe doc"), U("no emruli settlement is named.")],
    figures: [], nodes: [["o_emruli", "origin"]], spoilers: [{ title: "story truths", items: [U("no emruli material in the bible.")] }] },
  { id: "kethavai", kind: "tribe", name: "the kethavai", epithet: "houses of the returning guest", glyph: "kethavai",
    about: [F("their ancestors rescued travelers whose home realities no longer existed, and built a culture in which belonging can be renewed rather than presumed.", CANON, "universe doc"), F("at adulthood, members choose which household, if any, they wish to remain part of. departure ceremonies are celebrations, not expulsions.", CANON, "universe doc")],
    mark: "an open rectangle with an inward-facing notch.",
    homeland: [F("kethavai life is organized by households.", CANON, "universe doc"), U("whether the house that forgot is a kethavai household is not stated.")],
    figures: ["esi"], nodes: [["o_kethavai", "origin"], ["d_house", "esi venn"], ["s_audience", "esi, chapter 4"]],
    spoilers: [{ title: "story truths", items: [F("esi holds displaced memories because neither observer fully retained them. she is not a predestined ruler or vessel.", SP, "bible §12 ch4")] }, hooks("esi", "§12")] },
  { id: "concord", kind: "movement", name: "the final concord", epithet: "a movement, not a clan", glyph: "concord",
    about: [F("a movement that wants to help the first witness finish the decision. its members believe a single stable universe would end the disasters caused by incompatible realities.", CANON, "universe doc"), F("only one version of each contradictory place, person and history could remain.", CANON, "universe doc")],
    homeland: [U("no headquarters or territory is described.")],
    figures: [], nodes: [["s_assembly", "seeks completion here"], ["s_harbor", "offered exclusive access"], ["s_foundry", "rell joined sere"]],
    spoilers: [{ title: "final concord plans", items: [F("the organizer, sere, wants completion because her settlement repeatedly loses the same harvest and evacuates the same homes as its laws shift.", SP, "bible §9"), F("at the assembly, sere asks each protagonist to help trigger or anchor a single completed reality.", SP, "bible §10–12 ch5"), F("world ending b, the completed world: the first witness chooses one coherent reality. incompatible populations do not continue.", SP, "bible §13"), U("sere's clan, tribe and settlement name are not stated.")] }] },
  { id: "uncounted", kind: "movement", designerOnly: true, name: "the uncounted", epithet: "behind the opening symbol", glyph: "uncounted",
    about: [F("a new symbol appears on doors, skin, ship hulls and the pale interval: a small opening inside a shape that has no exterior.", CANON, "universe doc"), F("conscious people stranded in possibilities the first witness never perceived.", SP, "bible §9")],
    homeland: [F("they built the second audience, an imperfect network of witnesses outside the familiar universe.", SP, "bible §9")],
    figures: [], nodes: [["s_audience", "their network"], ["s_assembly", "seek recognition"]],
    spoilers: [{ title: "story truths", items: [F("they can perform apparently unwitnessed acts because the witness is on their side of a threshold.", SP, "bible §9"), F("some propose replacing the first witness and selecting their own preferred reality. their negotiator, the listener, initially hides this division.", SP, "bible §9")] }] }
];
const FX = Object.fromEntries(FACTIONS.map(f => [f.id, f]));

const ring = ["o_ordelith", "o_delketh", "o_suthren", "o_emruli", "o_othessil", "o_vauleni", "o_nemevra", "o_kethavai", "o_ivrask", "o_ossari"];
const pos = (deg, rx, ry) => [50 + rx * Math.cos(deg * Math.PI / 180), 50 + ry * Math.sin(deg * Math.PI / 180)];
const NODES = {
  o_ordelith: { name: "the doorway never built", kind: "origin · ordelith", facts: [F("founders survived a citywide evacuation through a doorway that had never been built.", CANON, "universe doc"), U("this reality's name, location and present state.")] },
  o_delketh: { name: "the abandoned machinery", kind: "origin · delketh", facts: [F("ancestors inherited an abandoned civilization's machinery but refused to imitate its creators.", CANON, "universe doc"), U("the abandoned civilization's identity, and whether this is a separate reality.")] },
  o_suthren: { name: "the falling continent", kind: "origin · suthren", facts: [F("during the first collapse between realities, strangers agreed to share the force of a falling continent.", CANON, "universe doc"), U("whether the continent's reality survives.")] },
  o_emruli: { name: "the slow regions", kind: "origin · emruli", facts: [F("refugees sheltered in regions where events unfolded slowly.", CANON, "universe doc"), F("quiet gardens: an afternoon outside, minutes within.", CANON, "universe doc")] },
  o_othessil: { name: "the gravity of disagreement", kind: "origin · othessil", facts: [F("gravity changed direction whenever inhabitants disagreed.", CANON, "universe doc"), F("small bounded agreements that the world itself began to obey.", CANON, "universe doc")] },
  o_vauleni: { name: "the winter of sound", kind: "origin · vauleni", facts: [F("light vanished but sound continued to travel.", CANON, "universe doc"), F("settlements built around resonant chambers.", CANON, "universe doc"), U("whether the winter was a separate reality or an event.")] },
  o_nemevra: { name: "where names were deeds", kind: "origin · nemevra", facts: [F("names functioned as deeds of ownership.", CANON, "universe doc"), U("whether that reality still enforces name-ownership.")] },
  o_kethavai: { name: "houses of the returning guest", kind: "origin · kethavai", facts: [F("ancestors rescued travelers whose home realities no longer existed.", CANON, "universe doc"), U("the kethavai homeland reality.")] },
  o_ivrask: { name: "the fractured homeland", kind: "origin · ivrask", facts: [F("one homeland fractured into distant realities, separating the founders.", CANON, "universe doc"), U("names of the fractured realities.")] },
  o_ossari: { name: "the moving shore", kind: "origin · ossari", facts: [F("the homeland's boundary migrates across the vast. homes unfold along its edge.", CANON, "universe doc"), F("dispute: whether a permanent capital would protect the culture or destroy its purpose.", CANON, "universe doc")] },
  d_quay: { name: "the returning quay", kind: "beginner map · tavra", district: true, facts: [F("a folded harbor straddling a migrating shore. sails hang beneath walkways, ferries dock against vertical water, paired mail towers lean toward one another.", CANON, "bible §5"), F("companion witness: kel, an adult dock apprentice.", CANON, "bible §5"), F("eight locations, from the arrival berth to the blank horizon.", CANON, "bible §5"), F("the migrating shore may be the ossari moving shore.", INF, "bible §5")] },
  d_ward: { name: "the unbuilt ward", kind: "beginner map · oru", district: true, facts: [F("a rescue district suspended around the outline of an unfinished public building.", CANON, "bible §6"), F("chalk elevation marks, clay roof plates and suspended counterweights make structural logic readable.", CANON, "bible §6"), F("companion witness: rescue foreperson bren.", CANON, "bible §6"), U("which reality the ward sits in.")] },
  d_house: { name: "the house that forgot", kind: "beginner map · esi", district: true, facts: [F("a warm communal dwelling whose rooms retain habits their residents no longer recognize. meal settings are laid for missing people.", CANON, "bible §7"), F("companion witness: adult household steward pell.", CANON, "bible §7"), F("its displaced memories are nemevra effects, since esi's afterimage perceives memories displaced by nemevra power.", INF, "bible §3"), U("which tribe the household belongs to.")] },
  d_vest: { name: "the unclaimed vestibule", kind: "selection room · hub", district: true, facts: [F("three freestanding thresholds around an empty center.", CANON, "bible §3"), F("after chapter 1 it becomes a hub with a workbench, companion conversations, a discovery-only codex and a route board.", CANON, "bible §8"), U("where the vestibule sits in the vast.")] },
  s_assembly: { name: "assembly of thresholds", kind: "spoiler · shared climax", spoiler: true, x: 10, y: 8, facts: [F("the shared climax, where the clan insignia lose their centers.", SP, "bible §9"), F("the three campaigns arrive with different evidence about who has been excluded from the decision.", SP, "bible §9"), U("whether this is the same gathering as the universe doc's opening event. see audit c1.")] },
  s_audience: { name: "the second audience", kind: "spoiler · uncounted network", spoiler: true, x: 90, y: 8, facts: [F("an imperfect network of witnesses outside the familiar universe, built by the uncounted.", SP, "bible §9"), F("esi enters through a guide's reciprocal invitation in chapter 4.", SP, "bible §12")] },
  s_harbor: { name: "the lost harbor", kind: "spoiler · tavra ch3", spoiler: true, x: 10, y: 92, facts: [F("anet's homeland, recorded as inaccessible.", SP, "bible §10"), F("residents remain real, but no outside institution counts them as living constituents.", SP, "bible §10 ch3")] },
  s_foundry: { name: "the future foundry", kind: "spoiler · oru ch3", spoiler: true, x: 90, y: 92, facts: [F("site of a system that transfers future costs without valid consent.", SP, "bible §11 ch2"), F("every path rescues the workers; the dispute concerns the institution and its beneficiaries.", SP, "bible §11 ch3")] }
};
ring.forEach((id, i) => { const [x, y] = pos(i * 36 - 90, 40, 38); NODES[id].x = x; NODES[id].y = y; NODES[id].origin = true; });
[["d_quay", 216, 21, 25], ["d_ward", -72, 21, 25], ["d_house", 144, 21, 25], ["d_vest", 90, 25, 26.5]].forEach(([id, a, rx, ry]) => { const [x, y] = pos(a, rx, ry); NODES[id].x = x; NODES[id].y = y; });
NODES.o_ordelith.factions = ["ordelith"]; NODES.o_delketh.factions = ["delketh"]; NODES.o_suthren.factions = ["suthren"]; NODES.o_emruli.factions = ["emruli"]; NODES.o_othessil.factions = ["othessil"]; NODES.o_vauleni.factions = ["vauleni"]; NODES.o_nemevra.factions = ["nemevra"]; NODES.o_kethavai.factions = ["kethavai"]; NODES.o_ivrask.factions = ["ivrask"]; NODES.o_ossari.factions = ["ossari"];
const SPECIAL = {
  pale: { eyebrow: "center of the vast", name: "the pale interval", facts: [F("a person-shaped absence larger than a solar system, hanging at the center of the vast.", CANON, "universe doc"), F("recently it moved, and every living being remembered a childhood moment that had never happened.", CANON, "universe doc"), F("the opening symbol appears on its surface: a small opening inside a shape that has no exterior.", CANON, "universe doc"), F("it is the first witness, the consciousness that observed existence beginning its unfinished decision.", SP, "universe doc · gated here, see audit c2"), F("it was overwhelmed by incompatible outcomes and deferred completion. its awakening threatens to complete the decision by reflex.", SP, "bible §9")] },
  underside: { eyebrow: "connecting space", name: "the underside", facts: [F("a vast expanse of unfinished space that keeps the realities connected.", CANON, "universe doc"), F("travelers cross inside vessels carrying a small, self-contained law of nature.", CANON, "universe doc"), F("beyond a vessel's boundary, bones might become directions, a voice might acquire mass, or yesterday might start happening again.", CANON, "universe doc"), F("as the pale interval stirs, routes are straightening and realities are becoming mutually exclusive.", CANON, "universe doc"), U("specific routes between individual realities.")] }
};

const TAGC = { canon: "var(--muted)", inferred: "var(--copper)", undecided: "var(--amber)", spoiler: "var(--amber)", proposal: "var(--muted)" };
const tagLabel = (f) => f.tag === CANON ? "canon · " + f.src : f.tag === INF ? "inferred · " + (f.src || "not stated") : f.tag === UND ? "undecided · needs author decision" : f.tag === SP ? "spoiler boundary · " + f.src : "design-system proposal · not canon";
const colorOf = (f) => f.kind === "clan" ? "var(--vy-clan-" + f.id + "-mark)" : f.kind === "tribe" ? "var(--vy-tribe-" + f.id + "-mark)" : "var(--copper)";
const brightOf = (f) => f.kind === "clan" ? "var(--vy-clan-" + f.id + "-bright)" : f.kind === "tribe" ? "var(--vy-tribe-" + f.id + "-bright)" : "var(--ink)";
const groundOf = (f) => f.kind === "clan" ? "var(--vy-clan-" + f.id + "-ground)" : f.kind === "tribe" ? "var(--vy-tribe-" + f.id + "-ground)" : "var(--raised)";

const AUDIT = [
  { title: "contradictions between sources", color: "var(--amber)", border: "solid", items: [
    { id: "c1", title: "when do clan insignia lose their centers?", affects: "all five clans, the assembly of thresholds, character select", lines: [{ k: "universe doc", v: "the opening event: at a gathering to negotiate safe passage between five realities, every clan insignia loses its center." }, { k: "bible §9", v: "the shared climax at the assembly of thresholds is where the clan insignia lose their centers." }, { k: "also", v: "bible §3 lets players pick a clan center (near knot, open hinge) at character select. if the loss happens at the opening, that choice needs a framing." }] },
    { id: "c2", title: "is the pale interval's identity a spoiler?", affects: "atlas center, loading tips, codex", lines: [{ k: "universe doc", v: "states openly that the pale interval is the first witness." }, { k: "bible §9", v: "places the first witness's nature behind the spoiler boundary." }, { k: "here", v: "the name is gated in designer view until you decide." }] },
    { id: "c3", title: "are memories erased or displaced?", affects: "clan nemevra, esi venn, the house that forgot", lines: [{ k: "universe doc", v: "esi remembers every memory erased by nemevra powers. the nemevra cost makes someone close lose one shared memory." }, { k: "bible §3, §7", v: "afterimage perceives memories displaced by nemevra power, and the bible treats them as recoverable testimony." }] },
    { id: "c4", title: "tavra's opening hook is framed two ways", affects: "tavra sen, clan ivrask", lines: [{ k: "universe doc", v: "she discovers a working route to a destination that has never answered anyone." }, { k: "bible §3, §5", v: "she sets out to deliver a reply no one admits sending; a reply arrives in her own handwriting." }, { k: "note", v: "these may both be true. confirm which is the player-facing hook." }] }
  ] },
  { title: "missing information the atlas needs", color: "var(--copper)", border: "dashed", items: [
    { id: "m1", title: "no reality has a canonical name", affects: "every atlas node", lines: [{ k: "canon", v: "only the vast, the underside and the pale interval are named. origin realities are described, not named." }, { k: "here", v: "nodes use working labels taken from the source wording." }] },
    { id: "m2", title: "how realities connect", affects: "atlas links, travel design", lines: [{ k: "canon", v: "all realities link through the underside; ivrask routes need reciprocal relationships." }, { k: "missing", v: "which realities border or route to each other." }] },
    { id: "m3", title: "where the beginner maps sit", affects: "the returning quay, the unbuilt ward, the house that forgot, the vestibule", lines: [{ k: "missing", v: "the reality and tribe of each district. only the quay's migrating shore suggests the ossari." }] },
    { id: "m4", title: "which five realities attended the opening gathering", affects: "opening event", lines: [{ k: "missing", v: "the universe doc gives the number five but no list." }] },
    { id: "m5", title: "settlements for most factions", affects: "suthren, ordelith, nemevra, delketh, emruli", lines: [{ k: "canon", v: "only othessil cities, vauleni resonant chambers, ossari unfolding homes, emruli gardens and kethavai households are described." }] },
    { id: "m6", title: "named members outside the three heroes", affects: "suthren, othessil, nemevra, vauleni, emruli", lines: [{ k: "missing", v: "no named character, and no named wearer of any forbidden mark." }] },
    { id: "m7", title: "affiliations of canon side characters", affects: "anet, rell, sere, kel, bren, pell, the listener", lines: [{ k: "missing", v: "clan and tribe for all of them. rell as delketh is inferred from being oru's brother." }] },
    { id: "m8", title: "the factions that defend plurality", affects: "opposition to the final concord", lines: [{ k: "universe doc", v: "mentions factions opposing the concord, but does not name them or say whether they are clans." }] },
    { id: "m9", title: "faction colours are not canon", affects: "overlay colours", lines: [{ k: "source", v: "colours come from the design system's faction palette. canon only fixes ordelith's copper dot and ivory brackets." }] }
  ] }
];

export { CANON, INF, UND, SP, PROP, G, HEROES, FACTIONS, FX, NODES, SPECIAL, TAGC, AUDIT, tagLabel, colorOf, brightOf, groundOf };
