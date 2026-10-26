/* @ds-bundle: {"format":4,"namespace":"VeyrithDesignSystem_668858","components":[{"name":"Portal","sourcePath":"components/brand/Portal.jsx"},{"name":"Sigil","sourcePath":"components/brand/Sigil.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"ButtonRow","sourcePath":"components/core/ButtonRow.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"ChipGroup","sourcePath":"components/core/ChipGroup.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"StatusLine","sourcePath":"components/core/StatusLine.jsx"},{"name":"StatusPill","sourcePath":"components/core/StatusPill.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"SettingToggle","sourcePath":"components/forms/SettingToggle.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"Topbar","sourcePath":"components/navigation/Topbar.jsx"},{"name":"BlockedList","sourcePath":"components/quest/BlockedList.jsx"},{"name":"ChoiceCard","sourcePath":"components/quest/ChoiceCard.jsx"},{"name":"InventoryList","sourcePath":"components/quest/InventoryList.jsx"},{"name":"JournalEntry","sourcePath":"components/quest/JournalEntry.jsx"},{"name":"MapGrid","sourcePath":"components/quest/MapGrid.jsx"},{"name":"MapNode","sourcePath":"components/quest/MapNode.jsx"},{"name":"RewardBlock","sourcePath":"components/quest/RewardBlock.jsx"},{"name":"TaskCheck","sourcePath":"components/quest/TaskCheck.jsx"},{"name":"WitnessBox","sourcePath":"components/quest/WitnessBox.jsx"},{"name":"CompleteBanner","sourcePath":"components/surfaces/CompleteBanner.jsx"},{"name":"DataTable","sourcePath":"components/surfaces/DataTable.jsx"},{"name":"Dialog","sourcePath":"components/surfaces/Dialog.jsx"},{"name":"HeroCard","sourcePath":"components/surfaces/HeroCard.jsx"},{"name":"Notice","sourcePath":"components/surfaces/Notice.jsx"},{"name":"Panel","sourcePath":"components/surfaces/Panel.jsx"},{"name":"SpecList","sourcePath":"components/surfaces/SpecList.jsx"},{"name":"SpoilerDetails","sourcePath":"components/surfaces/SpoilerDetails.jsx"}],"sourceHashes":{"components/brand/Portal.jsx":"05cc47c99c9c","components/brand/Sigil.jsx":"94a7691e1329","components/brand/Wordmark.jsx":"3bb336da1144","components/core/Badge.jsx":"0bef83658c49","components/core/Button.jsx":"faa2884f1f5a","components/core/ButtonRow.jsx":"e09581636e55","components/core/Chip.jsx":"e0e39c5e5f7a","components/core/ChipGroup.jsx":"a185eef27a33","components/core/Eyebrow.jsx":"3bb075fc5727","components/core/StatusLine.jsx":"20b5f3891041","components/core/StatusPill.jsx":"dace51f23309","components/feedback/ProgressBar.jsx":"6729b3b76450","components/forms/Select.jsx":"b61a31f9c74e","components/forms/SettingToggle.jsx":"24613e9297c0","components/navigation/Footer.jsx":"5b3a8e3647a4","components/navigation/Topbar.jsx":"634b3c70da3e","components/quest/BlockedList.jsx":"36c04b87cfbf","components/quest/ChoiceCard.jsx":"b85cc727efa5","components/quest/InventoryList.jsx":"c5d14e8b0e4a","components/quest/JournalEntry.jsx":"7b54d86e6786","components/quest/MapGrid.jsx":"6fc667ee7b76","components/quest/MapNode.jsx":"92cb0b1813d4","components/quest/RewardBlock.jsx":"339810218919","components/quest/TaskCheck.jsx":"4b354a42f934","components/quest/WitnessBox.jsx":"772146f4a0be","components/surfaces/CompleteBanner.jsx":"37317e7f3d27","components/surfaces/DataTable.jsx":"a844a10ec541","components/surfaces/Dialog.jsx":"8b632010b371","components/surfaces/HeroCard.jsx":"6db93ade28c7","components/surfaces/Notice.jsx":"4453f4efe803","components/surfaces/Panel.jsx":"2440e950465c","components/surfaces/SpecList.jsx":"f2c594e07d5b","components/surfaces/SpoilerDetails.jsx":"8316323a4a38","ui_kits/game-prototype/MapWorkspace.jsx":"689dbbc97f41","ui_kits/game-prototype/Screens.jsx":"fb8ad863bce5","ui_kits/game-prototype/Stage.jsx":"fbd1f163a25f","ui_kits/game-prototype/data.js":"a8b37ebd05ed"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VeyrithDesignSystem_668858 = window.VeyrithDesignSystem_668858 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Portal.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function Portal({
  still,
  caption,
  height
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: cx('vy-portal', still && 'vy-portal--still'),
    style: height ? {
      height
    } : undefined,
    "aria-hidden": !caption
  }, /*#__PURE__*/React.createElement("span", {
    className: "vy-frame"
  }), /*#__PURE__*/React.createElement("span", {
    className: "vy-frame vy-frame--b"
  }), /*#__PURE__*/React.createElement("span", {
    className: "vy-frame vy-frame--c"
  }), caption && /*#__PURE__*/React.createElement("span", {
    className: "vy-portal__caption"
  }, caption));
}
Object.assign(__ds_scope, { Portal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Portal.jsx", error: String((e && e.message) || e) }); }

// components/brand/Sigil.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function Sigil({
  shape = 'frames'
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: 'vy-sigil vy-sigil--' + shape,
    "aria-hidden": "true"
  });
}
Object.assign(__ds_scope, { Sigil });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Sigil.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function Wordmark({
  variant = 'bar'
}) {
  if (variant === 'display') return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "vy-display"
  }, "veyrith"), /*#__PURE__*/React.createElement("p", {
    className: "vy-subtitle"
  }, "the unfinished vast"));
  return /*#__PURE__*/React.createElement("div", {
    className: "vy-brand"
  }, "VEYRITH", /*#__PURE__*/React.createElement("span", null, "THE UNFINISHED VAST"));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function Badge({
  tone = 'teal',
  children
}) {
  return /*#__PURE__*/React.createElement("p", {
    className: cx('vy-badge', tone !== 'teal' && 'vy-badge--' + tone)
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
function Button({
  variant = 'default',
  size = 'default',
  disabled,
  onClick,
  type = 'button',
  children,
  className,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    className: cx('vy-btn', variant !== 'default' && 'vy-btn--' + variant, size === 'small' && 'vy-btn--small', className)
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/ButtonRow.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function ButtonRow({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "vy-actions"
  }, children);
}
Object.assign(__ds_scope, { ButtonRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ButtonRow.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function Chip({
  on,
  onClick,
  children
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-pressed": !!on,
    onClick: onClick,
    className: cx('vy-chip', on && 'vy-chip--on')
  }, children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/ChipGroup.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function ChipGroup({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "vy-chips"
  }, children);
}
Object.assign(__ds_scope, { ChipGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ChipGroup.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function Eyebrow({
  children
}) {
  return /*#__PURE__*/React.createElement("p", {
    className: "vy-eyebrow"
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusLine.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function StatusLine({
  children
}) {
  return /*#__PURE__*/React.createElement("p", {
    className: "vy-status",
    role: "status"
  }, children);
}
Object.assign(__ds_scope, { StatusLine });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusLine.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusPill.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function StatusPill({
  tone = 'ok',
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: cx('vy-pill', tone === 'warn' && 'vy-pill--warn')
  }, children);
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function ProgressBar({
  value,
  label
}) {
  const ind = value == null;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "vy-muted",
    style: {
      margin: '.2rem 0',
      fontSize: 'var(--fs-small)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    className: cx('vy-progress', ind && 'vy-progress--indeterminate'),
    role: "progressbar",
    "aria-valuenow": ind ? undefined : value,
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-label": label
  }, /*#__PURE__*/React.createElement("div", {
    className: "vy-progress__fill",
    style: ind ? undefined : {
      width: value + '%'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function Select({
  label,
  value,
  options = [],
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: "vy-field"
  }, label, /*#__PURE__*/React.createElement("select", {
    className: "vy-select",
    value: value,
    onChange: e => onChange && onChange(e.target.value)
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/SettingToggle.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function SettingToggle({
  name,
  description,
  checked,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: "vy-setting"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: !!checked,
    onChange: onChange
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, name), description && /*#__PURE__*/React.createElement("small", null, description)));
}
Object.assign(__ds_scope, { SettingToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SettingToggle.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function Footer({
  left,
  right
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "vy-footer"
  }, /*#__PURE__*/React.createElement("span", null, left), /*#__PURE__*/React.createElement("span", null, right));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Topbar.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function Topbar({
  items = [],
  children
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "vy-topbar"
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, null), /*#__PURE__*/React.createElement("nav", {
    className: "vy-tools",
    "aria-label": "Prototype controls"
  }, items.map(it => /*#__PURE__*/React.createElement(__ds_scope.Button, {
    key: it.label,
    size: "small",
    onClick: it.onClick
  }, it.label)), children));
}
Object.assign(__ds_scope, { Topbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Topbar.jsx", error: String((e && e.message) || e) }); }

// components/quest/BlockedList.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function BlockedList({
  items = [],
  note
}) {
  if (!items.length) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "vy-blocked"
  }, /*#__PURE__*/React.createElement("strong", null, "immediate prerequisites"), /*#__PURE__*/React.createElement("ul", null, items.map((b, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, b))), note && /*#__PURE__*/React.createElement("p", null, note));
}
Object.assign(__ds_scope, { BlockedList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/quest/BlockedList.jsx", error: String((e && e.message) || e) }); }

// components/quest/ChoiceCard.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function ChoiceCard({
  label,
  effect,
  picked,
  disabled,
  onConfirm
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: cx('vy-choice', picked && 'vy-choice--picked')
  }, /*#__PURE__*/React.createElement("strong", null, label), /*#__PURE__*/React.createElement("p", null, effect), picked ? /*#__PURE__*/React.createElement("p", {
    className: "vy-choice__confirmed"
  }, "confirmed and recorded in the journal") : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "small",
    disabled: disabled,
    onClick: onConfirm
  }, "review and confirm")));
}
Object.assign(__ds_scope, { ChoiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/quest/ChoiceCard.jsx", error: String((e && e.message) || e) }); }

// components/quest/InventoryList.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function InventoryList({
  inventory = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "vy-inventory"
  }, Object.entries(inventory).map(([k, list]) => /*#__PURE__*/React.createElement("section", {
    key: k
  }, /*#__PURE__*/React.createElement("h4", null, k), list.length ? /*#__PURE__*/React.createElement("ul", null, list.map((i, j) => /*#__PURE__*/React.createElement("li", {
    key: j
  }, i))) : /*#__PURE__*/React.createElement("p", {
    className: "vy-empty"
  }, "none recorded"))));
}
Object.assign(__ds_scope, { InventoryList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/quest/InventoryList.jsx", error: String((e && e.message) || e) }); }

// components/quest/JournalEntry.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function JournalEntry({
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: "vy-journal"
  }, /*#__PURE__*/React.createElement("h3", null, title), /*#__PURE__*/React.createElement("p", null, children));
}
Object.assign(__ds_scope, { JournalEntry });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/quest/JournalEntry.jsx", error: String((e && e.message) || e) }); }

// components/quest/MapGrid.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function MapGrid({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "vy-mapgrid"
  }, children);
}
Object.assign(__ds_scope, { MapGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/quest/MapGrid.jsx", error: String((e && e.message) || e) }); }

// components/quest/MapNode.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function MapNode({
  title,
  meta,
  kind = 'main',
  complete,
  locked,
  current,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    "aria-current": current ? 'true' : 'false',
    className: cx('vy-node', 'vy-node--' + kind, complete && 'vy-node--complete', locked && 'vy-node--locked', current && 'vy-node--current')
  }, /*#__PURE__*/React.createElement("strong", null, title), /*#__PURE__*/React.createElement("em", null, meta || (kind === 'side' ? 'optional task' : 'main route') + (complete ? ', complete' : locked ? ', locked' : '')));
}
Object.assign(__ds_scope, { MapNode });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/quest/MapNode.jsx", error: String((e && e.message) || e) }); }

// components/quest/RewardBlock.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function RewardBlock({
  rewards,
  gate
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "vy-reward"
  }, /*#__PURE__*/React.createElement("strong", null, "rewards"), /*#__PURE__*/React.createElement("p", null, rewards), gate && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "exit gate to the next node"), /*#__PURE__*/React.createElement("p", null, gate)));
}
Object.assign(__ds_scope, { RewardBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/quest/RewardBlock.jsx", error: String((e && e.message) || e) }); }

// components/quest/TaskCheck.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function TaskCheck({
  label,
  checked,
  disabled,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: cx('vy-task', disabled && 'vy-task--disabled')
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: !!checked,
    disabled: disabled,
    onChange: onChange
  }), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { TaskCheck });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/quest/TaskCheck.jsx", error: String((e && e.message) || e) }); }

// components/quest/WitnessBox.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function WitnessBox({
  companion,
  present = true,
  onToggle
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "vy-witness"
  }, /*#__PURE__*/React.createElement("strong", null, "conscious living witness"), /*#__PURE__*/React.createElement("p", null, "this node requires ", companion, ", an adult companion who understands the relevant change."), present ? /*#__PURE__*/React.createElement("span", {
    className: "vy-ok"
  }, "witness present") : /*#__PURE__*/React.createElement("span", {
    className: "vy-warn"
  }, "witness unavailable"), /*#__PURE__*/React.createElement("div", {
    className: "vy-actions"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "small",
    onClick: onToggle
  }, present ? 'simulate a regroup moment' : 'regroup at shelter')));
}
Object.assign(__ds_scope, { WitnessBox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/quest/WitnessBox.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/CompleteBanner.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function CompleteBanner({
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "vy-banner"
  }, /*#__PURE__*/React.createElement("h2", null, title), /*#__PURE__*/React.createElement("p", null, children));
}
Object.assign(__ds_scope, { CompleteBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/CompleteBanner.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/DataTable.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function DataTable({
  rows = []
}) {
  return /*#__PURE__*/React.createElement("table", {
    className: "vy-table"
  }, /*#__PURE__*/React.createElement("tbody", null, rows.map(([k, v], i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("th", {
    scope: "row"
  }, k), /*#__PURE__*/React.createElement("td", null, v)))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Dialog.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function Dialog({
  title,
  open = true,
  onClose,
  actions,
  children
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "vy-backdrop",
    onClick: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "vy-dialog",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title
  }, /*#__PURE__*/React.createElement("h2", null, title), children, actions && /*#__PURE__*/React.createElement("div", {
    className: "vy-dialog__actions"
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Notice.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function Notice({
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "vy-notice"
  }, /*#__PURE__*/React.createElement("strong", null, title), /*#__PURE__*/React.createElement("p", null, children));
}
Object.assign(__ds_scope, { Notice });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Notice.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Panel.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function Panel({
  as = 'section',
  children,
  style
}) {
  const T = as;
  return /*#__PURE__*/React.createElement(T, {
    className: "vy-panel",
    style: style
  }, children);
}
Object.assign(__ds_scope, { Panel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Panel.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/SpecList.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function SpecList({
  rows = []
}) {
  return /*#__PURE__*/React.createElement("dl", {
    className: "vy-spec"
  }, rows.map(([k, v], i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("dt", null, k), /*#__PURE__*/React.createElement("dd", null, v))));
}
Object.assign(__ds_scope, { SpecList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/SpecList.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/HeroCard.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function HeroCard({
  name,
  role,
  shape,
  spec = [],
  description,
  motive,
  cost,
  selected,
  onChoose
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: cx('vy-card', selected && 'vy-card--selected')
  }, /*#__PURE__*/React.createElement(__ds_scope.Sigil, {
    shape: shape
  }), /*#__PURE__*/React.createElement(__ds_scope.Badge, null, role), /*#__PURE__*/React.createElement("h3", null, name), spec.length > 0 && /*#__PURE__*/React.createElement(__ds_scope.SpecList, {
    rows: spec
  }), description && /*#__PURE__*/React.createElement("p", null, description), motive && /*#__PURE__*/React.createElement("p", {
    className: "vy-muted"
  }, motive), cost && /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "power cost"), " ", cost), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: selected ? 'primary' : 'default',
    onClick: onChoose
  }, selected ? 'selected' : 'choose this hero'));
}
Object.assign(__ds_scope, { HeroCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/HeroCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/SpoilerDetails.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function SpoilerDetails({
  title,
  spoiler,
  open,
  children
}) {
  return /*#__PURE__*/React.createElement("details", {
    className: "vy-details",
    open: open
  }, /*#__PURE__*/React.createElement("summary", null, title, spoiler && /*#__PURE__*/React.createElement("span", {
    className: "vy-details__spoiler"
  }, "spoiler boundary")), /*#__PURE__*/React.createElement("div", {
    className: "vy-details__body"
  }, children));
}
Object.assign(__ds_scope, { SpoilerDetails });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/SpoilerDetails.jsx", error: String((e && e.message) || e) }); }

// ui_kits/game-prototype/MapWorkspace.jsx
try { (() => {
// Beginner map workspace — mapView / objectiveView / inventoryView from veyrith-prototype.html
function MapWorkspace({
  state,
  setState,
  say,
  message
}) {
  const {
    Eyebrow,
    Panel,
    MapGrid,
    MapNode,
    TaskCheck,
    ChoiceCard,
    WitnessBox,
    RewardBlock,
    BlockedList,
    InventoryList,
    Button,
    ButtonRow,
    StatusLine
  } = window.VeyrithDesignSystem_668858;
  const hero = HEROES[state.hero];
  const ids = Object.keys(NODES).filter(id => id[0] === hero.prefix).sort();
  const main = ids.filter(id => !NODES[id].optional),
    side = ids.filter(id => NODES[id].optional);
  const mutate = fn => {
    const s = JSON.parse(JSON.stringify(state));
    const ok = fn(s);
    setState(s);
    return ok;
  };
  const node = id => {
    const n = NODES[id],
      done = state.done.includes(id),
      open = !prerequisites(state, id).length;
    return /*#__PURE__*/React.createElement(MapNode, {
      key: id,
      title: n.title,
      kind: n.optional ? 'side' : 'main',
      complete: done,
      locked: !open,
      current: state.selected === id,
      onClick: () => {
        setState({
          ...state,
          selected: id
        });
        say('');
      }
    });
  };
  const id = state.selected,
    n = NODES[id];
  const blocked = prerequisites(state, id),
    done = state.done.includes(id),
    tasks = state.tasks[id] || [];
  const picked = n.choices && state.choices[n.choiceKey];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(260px,.9fr) minmax(340px,1.2fr) minmax(210px,.7fr)',
      gap: '1rem',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    as: "aside"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "schematic beginner map"), /*#__PURE__*/React.createElement("h2", {
    className: "vy-h2"
  }, hero.map), /*#__PURE__*/React.createElement("p", {
    className: "vy-muted",
    style: {
      fontSize: '.9rem'
    }
  }, "approximate footprint ", hero.extent[0], " by ", hero.extent[1], " logical units, laid out as connected districts rather than an unlimited procedural universe."), /*#__PURE__*/React.createElement(MapGrid, null, main.map(node), side.map(node)), /*#__PURE__*/React.createElement("p", {
    className: "vy-mapfoot"
  }, "the schematic is decorative. every node is reachable by keyboard and readable by a screen reader in the objective panel.")), /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 470
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, n.optional ? 'optional task' : 'main route'), /*#__PURE__*/React.createElement("h2", {
    className: "vy-h2",
    style: {
      fontSize: '1.8rem'
    }
  }, n.title), /*#__PURE__*/React.createElement("p", null, n.desc), n.witness && /*#__PURE__*/React.createElement(WitnessBox, {
    companion: hero.witness,
    present: state.witness,
    onToggle: () => {
      mutate(s => {
        if (s.witness) s.witness = false;else retry(s);
      });
      say(state.witness ? 'your companion is regrouping at a safe point. ordinary climbing, bracing, conversation, and retreat remain available.' : 'companion regrouped. no checkpoint traps you without an essential witness.');
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "vy-checklist"
  }, n.tasks.map((t, i) => /*#__PURE__*/React.createElement(TaskCheck, {
    key: i,
    label: t,
    checked: tasks.includes(i),
    disabled: done || blocked.length > 0,
    onChange: () => mutate(s => task(s, id, i))
  }))), n.choices && /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h3", {
    className: "vy-h3"
  }, picked ? 'confirmed decision' : 'first meaningful choice'), /*#__PURE__*/React.createElement("div", {
    className: "vy-choices"
  }, n.choices.map(c => /*#__PURE__*/React.createElement(ChoiceCard, {
    key: c.id,
    label: c.label,
    effect: c.effect,
    picked: picked === c.id,
    disabled: !!picked || done || blocked.length > 0,
    onConfirm: () => {
      mutate(s => choose(s, id, c.id));
      say('decision confirmed and recorded in the journal. a checkpoint was taken first.');
    }
  }))), /*#__PURE__*/React.createElement("p", {
    className: "vy-muted",
    style: {
      fontSize: '.8rem'
    }
  }, "you can review who is affected, what is at stake, and whether the decision is irreversible before confirming.")), /*#__PURE__*/React.createElement(RewardBlock, {
    rewards: Object.values(n.rewards).flat().join(', '),
    gate: hero.gate
  }), /*#__PURE__*/React.createElement(BlockedList, {
    items: blocked,
    note: "a locked node reports its immediate prerequisites only, and optional branches cannot soft lock the exit."
  }), /*#__PURE__*/React.createElement(ButtonRow, null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    disabled: done,
    onClick: () => {
      const ok = mutate(s => complete(s, id));
      say(ok ? 'node complete. rewards recorded in the journal.' : 'still needed: ' + blockers(state, id).join(', ') + '.');
    }
  }, done ? 'node complete' : 'confirm the described actions'), /*#__PURE__*/React.createElement(Button, {
    disabled: done,
    onClick: () => {
      mutate(s => wipe(s));
      say('local attempts cleared. no confirmed decision was erased.');
    }
  }, "clear local attempts")), /*#__PURE__*/React.createElement(StatusLine, null, message))), /*#__PURE__*/React.createElement(Panel, {
    as: "aside"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "vy-h3"
  }, "journal categories"), /*#__PURE__*/React.createElement("p", {
    className: "vy-muted",
    style: {
      fontSize: '.8rem'
    }
  }, "an item can operate a device, knowledge can reveal how it works, and permission can determine whether using it is accepted."), /*#__PURE__*/React.createElement(InventoryList, {
    inventory: state.inventory
  })));
}
window.MapWorkspace = MapWorkspace;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/game-prototype/MapWorkspace.jsx", error: String((e && e.message) || e) }); }

// ui_kits/game-prototype/Screens.jsx
try { (() => {
// Landing, hero select, journal, accessibility, designer screens — markup mirrors *View() functions in veyrith-prototype.html
const DS = window.VeyrithDesignSystem_668858;
function Landing({
  state,
  message,
  go
}) {
  const {
    Eyebrow,
    Wordmark,
    Notice,
    Button,
    ButtonRow,
    StatusLine
  } = DS;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      minHeight: '68vh',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.15fr) minmax(0,1fr)',
      alignItems: 'center',
      gap: '2rem'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "concept development, narrative systems"), /*#__PURE__*/React.createElement(Wordmark, {
    variant: "display"
  }), /*#__PURE__*/React.createElement("p", {
    className: "vy-lead",
    style: {
      marginTop: '1rem'
    }
  }, "a self contained interface prototype, running with no network dependencies. character cards, cosmetic insignia selection, three schematic beginner maps, quest node inspection, reward tracking, prerequisite gates, and a designer only story section."), /*#__PURE__*/React.createElement(Notice, {
    title: "prototype distinction"
  }, "the canvas beside this text draws the three offset frames of the loading screen at a fixed logical resolution of 1920 by 1080, letterboxed by the rendering engine to fit the panel. the progress reading is a labelled demonstration, not a streamed game world."), /*#__PURE__*/React.createElement("p", {
    className: "vy-tip"
  }, HEROES[state.hero].opening), /*#__PURE__*/React.createElement(ButtonRow, null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => go('hero')
  }, "continue"), /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('designer')
  }, "open designer view"), /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('loading')
  }, "open the animated loading concept")), /*#__PURE__*/React.createElement(StatusLine, null, message)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StageCanvas, {
    state: null,
    highcontrast: state.settings.highcontrast
  })));
}
function HeroSelect({
  state,
  setState,
  go,
  say
}) {
  const {
    Eyebrow,
    HeroCard,
    Panel,
    Chip,
    ChipGroup,
    Notice,
    Button,
    ButtonRow
  } = DS;
  const h = HEROES[state.hero];
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(Eyebrow, null, "the unclaimed vestibule"), /*#__PURE__*/React.createElement("h2", {
    className: "vy-h2"
  }, "character selection"), /*#__PURE__*/React.createElement("p", {
    className: "vy-lead"
  }, "three freestanding thresholds around an empty center. selecting a hero reveals their silhouette, readable insignia, role, difficulty, non spoiler motivation, power cost, and starter map. no late game ability or storyline title appears here."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
      gap: '1rem'
    }
  }, Object.keys(HEROES).map(k => {
    const x = HEROES[k];
    return /*#__PURE__*/React.createElement(HeroCard, {
      key: k,
      name: x.name,
      role: x.role,
      shape: x.shape,
      selected: k === state.hero,
      spec: [['tribe', x.tribe], ['clan', x.clan], ['beginner complexity', x.complexity], ['starter map', x.map], ['core ability', x.power]],
      description: x.description,
      motive: x.motive,
      cost: x.cost,
      onChoose: () => {
        setState(fresh(k));
        say(x.name + ' will travel with ' + x.witness + '.');
      }
    });
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
      gap: '1rem',
      marginTop: '1rem'
    }
  }, /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement("h3", {
    className: "vy-h3"
  }, "insignia selection"), /*#__PURE__*/React.createElement("p", {
    className: "vy-muted",
    style: {
      fontSize: '.9rem'
    }
  }, "begin with the established mark of the clan shown on the card. these choices are cosmetic and never stat modifiers."), /*#__PURE__*/React.createElement(ChipGroup, null, h.marks.map(m => /*#__PURE__*/React.createElement(Chip, {
    key: m,
    on: state.mark === m,
    onClick: () => {
      setState({
        ...state,
        mark: m
      });
      say('cosmetic insignia choice recorded.');
    }
  }, m)))), /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement("h3", {
    className: "vy-h3"
  }, "material finish"), /*#__PURE__*/React.createElement("p", {
    className: "vy-muted",
    style: {
      fontSize: '.9rem'
    }
  }, "three cosmetic finishes, drawn on the insignia of the loading surface."), /*#__PURE__*/React.createElement(ChipGroup, null, FINISHES.map(f => /*#__PURE__*/React.createElement(Chip, {
    key: f,
    on: state.finish === f,
    onClick: () => {
      setState({
        ...state,
        finish: f
      });
      say('cosmetic finish recorded.');
    }
  }, f))))), /*#__PURE__*/React.createElement(Notice, {
    title: "customization and authored identity"
  }, "clothing layers, assist settings, insignia finish, and pronoun display where compatible with the authored voice track. names, cultural origins, central biographies, and defining costs remain authored. esi remains a child and receives age appropriate presentation throughout."), /*#__PURE__*/React.createElement(ButtonRow, null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => go('player')
  }, "begin ", h.map), /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('landing')
  }, "back to the introduction")));
}
function JournalView({
  state,
  go
}) {
  const {
    Eyebrow,
    JournalEntry,
    Button,
    ButtonRow
  } = DS;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 960,
      margin: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "player facing record"), /*#__PURE__*/React.createElement("h2", {
    className: "vy-h2"
  }, "journal"), /*#__PURE__*/React.createElement("p", {
    className: "vy-lead"
  }, "the journal records observed facts and clearly labels the interpretation of the hero. players see natural language records of what they actually did, never exact state values."), state.journal.length ? state.journal.map((j, i) => /*#__PURE__*/React.createElement(JournalEntry, {
    key: i,
    title: j.title
  }, j.text)) : /*#__PURE__*/React.createElement("p", {
    className: "vy-muted"
  }, "nothing recorded yet."), /*#__PURE__*/React.createElement(ButtonRow, null, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('hero')
  }, "start a fresh run"), /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('close')
  }, "close")));
}
const SETTING_ROWS = [['guided', 'guided investigation, highlighting search zones and confirming each described action'], ['reduced', 'reduced motion, replacing animation with a static composition and a simple transition'], ['highcontrast', 'high contrast text and outlines for the schematic and the cards'], ['sts', 'subtitle and caption behaviour, naming direction and speaker for every sound cue']];
function SettingsView({
  state,
  setState,
  go
}) {
  const {
    Eyebrow,
    SettingToggle,
    Button,
    ButtonRow
  } = DS;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 960,
      margin: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "assist settings"), /*#__PURE__*/React.createElement("h2", {
    className: "vy-h2"
  }, "accessibility"), /*#__PURE__*/React.createElement("p", {
    className: "vy-lead"
  }, "assist settings preserve story flags. difficulty changes and accessibility assists never count as story choices, and no puzzle depends solely on hearing or colour."), SETTING_ROWS.map(([k, d]) => /*#__PURE__*/React.createElement(SettingToggle, {
    key: k,
    name: k,
    description: d,
    checked: state.settings[k],
    onChange: () => setState({
      ...state,
      settings: {
        ...state.settings,
        [k]: !state.settings[k]
      }
    })
  })), /*#__PURE__*/React.createElement(ButtonRow, null, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('close')
  }, "close")));
}
function DesignerView({
  state,
  go
}) {
  const {
    Eyebrow,
    Notice,
    DataTable,
    SpoilerDetails,
    Button,
    ButtonRow
  } = DS;
  const rows = [['hero', state.hero], ['active node', state.active], ['selected node', state.selected], ['completed nodes', state.done.join(', ') || 'none'], ['task flags', JSON.stringify(state.tasks)], ['choices', JSON.stringify(state.choices)], ['witness present', String(state.witness)], ['insignia', state.mark + ' / ' + state.finish], ['recorded decisions', RECORDED_DECISIONS[state.hero].join(', ')], ['ending composition', ENDING_COMPOSITION]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 960,
      margin: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "designer only view"), /*#__PURE__*/React.createElement("h2", {
    className: "vy-h2"
  }, "state inspector and story bible"), /*#__PURE__*/React.createElement(Notice, {
    title: "spoiler boundary"
  }, "everything from the truth behind the opening onward belongs in this explicitly revealed designer view, not early loading text, character cards, or quest descriptions."), /*#__PURE__*/React.createElement("h3", {
    className: "vy-h3",
    style: {
      color: 'var(--copper)',
      marginTop: '1.6rem'
    }
  }, "exact state values"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, /*#__PURE__*/React.createElement(DataTable, {
    rows: rows
  })), /*#__PURE__*/React.createElement("h3", {
    className: "vy-h3",
    style: {
      color: 'var(--copper)',
      marginTop: '1.6rem'
    }
  }, "the five clans and five tribes"), /*#__PURE__*/React.createElement(DataTable, {
    rows: CLANS.map(c => [c.name, c.note || 'established clan with its own civic and field marks.']).concat(TRIBES.map(t => [t, 'established tribe, appearing as a society rather than a character class.']))
  }), /*#__PURE__*/React.createElement("h3", {
    className: "vy-h3",
    style: {
      color: 'var(--copper)',
      marginTop: '1.6rem'
    }
  }, "campaign and ending material"), SPOILER_SECTIONS.map(s => /*#__PURE__*/React.createElement(SpoilerDetails, {
    key: s.title,
    title: s.title,
    spoiler: s.spoiler,
    open: !s.spoiler
  }, s.intro && /*#__PURE__*/React.createElement("p", null, s.intro), /*#__PURE__*/React.createElement(DataTable, {
    rows: s.rows
  }))), /*#__PURE__*/React.createElement(ButtonRow, null, /*#__PURE__*/React.createElement(Button, null, "export state as json"), /*#__PURE__*/React.createElement(Button, null, "import a state file"), /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('close')
  }, "close")));
}
Object.assign(window, {
  Landing,
  HeroSelect,
  JournalView,
  SettingsView,
  DesignerView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/game-prototype/Screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/game-prototype/Stage.jsx
try { (() => {
// Stage canvas + loading screen — ported from drawCanvas() / veyrith-loading.html
const {
  ProgressBar: VyProgress,
  Button: VyBtn
} = window.VeyrithDesignSystem_668858;
function drawStage(g, {
  t = 0,
  reduced = true,
  state = null,
  highcontrast = false,
  withTitle = true
}) {
  g.setTransform(1, 0, 0, 1, 0, 0);
  g.fillStyle = highcontrast ? '#000000' : '#070d12';
  g.fillRect(0, 0, 1920, 1080);
  const cx = 1180,
    cy = 520,
    shift = reduced ? 0 : Math.sin(t / 1400) * 10;
  g.fillStyle = '#010407';
  g.fillRect(cx - 92, cy - 190, 184, 380);
  g.lineWidth = 7;
  g.strokeStyle = '#ce9974';
  g.strokeRect(cx - 128 - shift, cy - 166 - shift, 184, 380);
  g.strokeStyle = '#89d5c2';
  g.strokeRect(cx - 96 + shift * 0.6, cy - 186 + shift * 0.7, 196, 360);
  g.strokeStyle = '#ded8c7';
  g.strokeRect(cx - 112, cy - 206 + shift * 1.1, 240, 364);
  if (withTitle) {
    g.fillStyle = '#f2eadb';
    g.font = '600 132px Inter,system-ui,sans-serif';
    g.fillText('veyrith', 140, 300);
    g.font = '500 40px Inter,system-ui,sans-serif';
    g.fillStyle = '#b9c2bf';
    g.fillText('the unfinished vast', 146, 368);
  }
  if (state) {
    const h = HEROES[state.hero];
    g.strokeStyle = '#ce9974';
    g.lineWidth = 6;
    if (h.shape === 'direction') {
      g.save();
      g.translate(260, 780);
      g.rotate(-0.5);
      g.strokeRect(-16, -40, 32, 120);
      g.strokeRect(-40, -10, 80, 40);
      g.restore();
    } else if (h.shape === 'steps') {
      g.strokeRect(220, 820, 110, 70);
      g.strokeRect(250, 750, 80, 70);
    } else {
      g.strokeRect(220, 750, 72, 100);
      g.strokeRect(262, 792, 72, 100);
    }
    g.fillStyle = '#f2eadb';
    g.font = '500 30px Inter,system-ui,sans-serif';
    g.fillText(h.name, 220, 975);
    g.fillStyle = '#b9c2bf';
    g.font = '400 26px Inter,system-ui,sans-serif';
    g.fillText('chapter, ' + NODES[state.active].title + '   insignia, ' + state.mark + '   finish, ' + state.finish, 220, 1020);
    g.fillStyle = '#43575c';
    g.fillRect(0, 1068, 1920, 12);
    g.fillStyle = '#89d5c2';
    g.fillRect(0, 1068, 1632, 12);
  }
}
function useFit(ref, canvasRef) {
  React.useEffect(() => {
    const fit = () => {
      const r = ref.current.getBoundingClientRect();
      const s = Math.min(r.width / 1920, r.height / 1080);
      canvasRef.current.style.transform = 'translate(-50%,-50%) scale(' + s.toFixed(5) + ')';
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);
}
function StageCanvas({
  state,
  highcontrast
}) {
  const wrap = React.useRef(),
    cv = React.useRef();
  useFit(wrap, cv);
  React.useEffect(() => {
    drawStage(cv.current.getContext('2d'), {
      state,
      highcontrast
    });
  });
  return /*#__PURE__*/React.createElement("figure", {
    ref: wrap,
    role: "img",
    "aria-label": "fixed logical resolution demonstration canvas",
    style: {
      position: 'relative',
      aspectRatio: '16/9',
      overflow: 'hidden',
      margin: 0,
      background: 'var(--surface-loading)'
    }
  }, /*#__PURE__*/React.createElement("canvas", {
    ref: cv,
    width: "1920",
    height: "1080",
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      width: 1920,
      height: 1080,
      transformOrigin: 'center center'
    }
  }));
}
function LoadingScreen({
  onContinue
}) {
  const wrap = React.useRef(),
    cv = React.useRef();
  const [reduced, setReduced] = React.useState(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [pct, setPct] = React.useState(34);
  const [dim, setDim] = React.useState(false);
  useFit(wrap, cv);
  React.useEffect(() => {
    let t = 0,
      raf;
    const loop = () => {
      drawStage(cv.current.getContext('2d'), {
        t,
        reduced,
        withTitle: true
      });
      t += 16;
      setPct(Math.round((Math.sin(t / 900) * 0.5 + 0.5) * 100));
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(raf);
  }, [reduced]);
  return /*#__PURE__*/React.createElement("div", {
    ref: wrap,
    style: {
      position: 'relative',
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
      background: 'var(--surface-loading)'
    }
  }, /*#__PURE__*/React.createElement("canvas", {
    ref: cv,
    width: "1920",
    height: "1080",
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      width: 1920,
      height: 1080,
      transformOrigin: 'center center'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '3vh 4vw',
      opacity: dim ? .45 : 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: '2rem'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'clamp(1.6rem,3vw,3rem)',
      fontWeight: 350,
      letterSpacing: '.14em'
    }
  }, "veyrith"), /*#__PURE__*/React.createElement("p", {
    className: "vy-subtitle",
    style: {
      fontSize: 'clamp(.65rem,1.1vw,1rem)',
      color: 'var(--muted)'
    }
  }, "the unfinished vast")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '36rem',
      fontSize: 'clamp(.65rem,1.1vw,1rem)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '.2rem 0'
    }
  }, "a road can remember a traveler who no longer remembers home."), /*#__PURE__*/React.createElement("p", {
    className: "vy-muted",
    style: {
      margin: '.2rem 0',
      letterSpacing: '.06em'
    }
  }, "the frames slowly approach alignment and never close. on arrival the central opening becomes the next map doorway."))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(VyProgress, {
    value: pct,
    label: 'loading concept, indeterminate activity indicator, demonstration only, ' + pct + ' percent'
  }), /*#__PURE__*/React.createElement("div", {
    className: "vy-actions",
    style: {
      marginTop: '.8rem'
    }
  }, /*#__PURE__*/React.createElement(VyBtn, {
    onClick: () => {
      setDim(true);
      setTimeout(onContinue, 250);
    }
  }, "continue"), /*#__PURE__*/React.createElement(VyBtn, {
    onClick: () => setReduced(r => !r)
  }, "toggle reduced motion")))));
}
Object.assign(window, {
  StageCanvas,
  LoadingScreen,
  drawStage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/game-prototype/Stage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/game-prototype/data.js
try { (() => {
// Verbatim game data + rules from uploads/veyrith-prototype.html
const HEROES = {
  tavra: {
    name: 'tavra sen',
    role: 'courier',
    tribe: 'ossari',
    clan: 'ivrask',
    shape: 'direction',
    complexity: 'moderate',
    map: 'the returning quay',
    witness: 'kel',
    power: 'nearfold',
    motive: 'deliver a reply that no one admits sending.',
    description: 'traversal, route planning, and diplomacy. shorten a known route between reciprocally connected places with a living companion as witness.',
    cost: 'practice uses recoverable concentration. story scale folds require an explicitly confirmed loss of a named attachment.',
    marks: ['near knot', 'folded mile'],
    tools: ['courier line', 'route chalk', 'correspondence spool'],
    prefix: 't',
    exit: 'follow the reply beyond the gate.',
    opening: 'a road can remember a traveler who no longer remembers home.',
    extent: [2600, 1500],
    gate: 'paired address + permit + connected cable + safe ferry'
  },
  oru: {
    name: 'oru del',
    role: 'rescue maker',
    tribe: 'delketh',
    clan: 'ordelith',
    shape: 'steps',
    complexity: 'low to moderate',
    map: 'the unbuilt ward',
    witness: 'bren',
    power: 'almost',
    motive: 'complete a rescue, and investigate why you can no longer imagine forgiving his brother.',
    description: 'environmental problem solving, protection, and construction. borrow a physically plausible alternate state, then make lasting repairs with ordinary materials.',
    cost: 'small uses draw on recoverable possibilities. a permanent restoration requires a disclosed and confirmed personal future cost.',
    marks: ['open hinge', 'unmet stair'],
    tools: ['brace staff', 'repair clamps', 'possibility lens'],
    prefix: 'o',
    exit: 'trace the tool mark.',
    opening: 'a temporary possibility is not a lasting repair.',
    extent: [2400, 1700],
    gate: 'brace kit + rescue writ + stable gantry'
  },
  esi: {
    name: 'esi venn',
    role: 'memory bearer',
    tribe: 'kethavai',
    clan: 'unaligned',
    shape: 'frames',
    complexity: 'moderate, guided investigation available',
    map: 'the house that forgot',
    witness: 'pell',
    power: 'afterimage',
    motive: 'help a parent recognize a child without forcing either to resume a relationship.',
    description: 'observation, evasion, rescue, and consent based testimony. esi is a child supported by trusted adults, not a soldier or a ruler.',
    cost: 'passive perception is not an exception. sharing requires a consenting living witness and temporarily muddles the present. grounding restores orientation.',
    marks: ['witness frame one', 'witness frame two', 'witness frame three'],
    tools: ['blank witness book', 'soft soled wraps', 'household token'],
    prefix: 'e',
    exit: 'ask who left the height mark.',
    opening: 'remembering someone does not decide what they owe you.',
    extent: [2200, 1400],
    gate: 'ledger + household seal + grounded stair sequence'
  }
};
const NODES = {};
function node(id, title, desc, tasks, rewards, extra = {}) {
  NODES[id] = {
    id,
    title,
    desc,
    tasks,
    rewards,
    ...extra
  };
}
node('t1', 'arrival berth', 'painted rails wind above vertical water. an adult dock apprentice offers to travel with you.', ['meet kel and agree to travel together', 'walk the painted rail', 'retrieve the correspondence spool'], {
  items: ['correspondence spool'],
  knowledge: ['map orientation']
});
node('t2', 'two way booth', 'a route needs a reply, not simply a destination. establish a harmless reciprocal connection.', ['send a test phrase from the first booth', "receive kel's reply at the paired booth"], {
  knowledge: ['two way seal']
});
node('t3', 'slackline court', 'two existing landings share an established connection. practice only within that safe route.', ['mark both existing landings', 'ask kel to witness the crossing', 'shorten the crossing, cross, and release the fold'], {
  items: ['route chalk'],
  skills: ['nearfold']
}, {
  witness: true
});
node('t4', 'letter basin', 'three connected channels carry a letter already bearing your receipt mark. a gantry provides a way around the patrol.', ['trace the three connected letter channels', 'rotate the junction plates and recover the letter', 'compare both halves of the paired address'], {
  items: ['insulated satchel'],
  knowledge: ['paired address']
});
node('t5', 'counterweight walk', 'the winch can secure only one cradle first. kel has a safe evacuation procedure in either case. choose what to prioritize.', ['inspect both cradles with kel', 'review and confirm the winch priority', 'finish the winch sequence'], {
  permissions: ['route permit']
}, {
  choiceKey: 'rescuepriority',
  choices: [{
    id: 'rescue',
    label: 'secure the evacuation cradle first',
    effect: 'everyone survives. a community witness signs the route permit. the parcel is recovered damaged.',
    record: 'the crew was evacuated first and the parcel was damaged.'
  }, {
    id: 'parcel',
    label: 'secure the parcel cradle first',
    effect: 'everyone survives by a slower evacuation. the dispatch token is secured, but a family loses its workshop. the route permit is still awarded.',
    record: 'the parcel was secured first and a family lost its workshop.'
  }]
});
node('t6', 'salt archive', 'return address impressions survive beneath the archive shelves. preserve names only with their owners permission.', ['match three return address impressions', 'request permission from the owners', 'preserve only the authorized names'], {
  knowledge: ['route of the missing'],
  cosmetics: ['stitched insignia finish'],
  leads: ['refugee route lead']
}, {
  optional: true
});
node('t7', 'returning gate', 'reconnect a reply cable and hold the route for a ferry. use your permit to talk past a patrol or take the overhead gantry.', ['present the paired address and route permit', 'reconnect the reply cable while kel witnesses', 'hold the passage until the ferry is safe'], {
  items: ['passage knot'],
  facts: ['reply cable connected', 'ferry safe']
}, {
  witness: true,
  requires: ['paired address', 'route permit', 'nearfold']
});
node('t8', 'blank horizon', 'a bell sounds from beneath dry stone. a fresh reply arrives in your own handwriting.', ['record the reply', 'leave through the safe gate'], {
  facts: ['beginner map complete']
}, {
  requires: ['paired address', 'route permit', 'reply cable connected', 'ferry safe']
});
node('o1', 'triage yard', 'bren, the rescue foreperson, needs an ordinary stretcher carry before any exceptional work begins.', ['meet bren and hear the rescue briefing', 'assist with the stretcher carry', 'equip repair clamps and inspect the marked exit'], {
  items: ['repair clamps'],
  facts: ['shelter checkpoint']
});
node('o2', 'split stair', 'compare the fracture with its construction diagram. a plausible intact step still needs actual supports.', ['inspect the fracture through the possibility lens', 'compare the construction diagram', 'brace the supports and demonstrate a witnessed restoration'], {
  knowledge: ['load path']
}, {
  witness: true
});
node('o3', 'brace hall', 'a borrowed intact state can get you across. physical clamps must keep the crossing safe after the power ends.', ['ask bren to witness a plausible intact state', 'cross during the temporary restoration', 'install permanent physical clamps'], {
  skills: ['almost', 'brace staff technique']
}, {
  witness: true
});
node('o4', 'material court', 'three nearby work areas contain distinct parts for a field brace. required parts cannot be discarded.', ['inspect and recover one ceramic joint', 'redirect a mechanism to recover one counterweight pin', 'climb to recover one brace strap', 'assemble the field brace kit'], {
  items: ['field brace kit']
});
node('o5', 'suspended clinic', 'both approaches save every patient. ordinary reinforcement preserves a blockage. permanent restoration spends a personal future.', ['survey both clinic wings', 'review and confirm the repair method', 'evacuate all patients and stabilize the clinic'], {
  permissions: ['rescue writ'],
  knowledge: ['structural anchor access']
}, {
  choiceKey: 'clinicmethod',
  choices: [{
    id: 'reinforce',
    label: 'reinforce with the physical brace kit',
    effect: 'every patient is saved. the second access route stays closed until a later physical rebuild. no personal future is spent.',
    record: 'the clinic was physically reinforced and the second route remains closed.'
  }, {
    id: 'restore',
    label: 'permanently restore both wings',
    effect: 'every patient is saved and both wings open now. oru permanently loses his possible future as master of the ward workshop. this cost cannot be undone in this save.',
    record: 'both clinic wings were restored and the workshop master future was permanently spent.'
  }]
});
node('o6', 'unfinished nursery', 'the intended occupants decide what this unused room should become. completion is not automatically a gift.', ['ask whether the occupants want completion, repurposing, or no change', 'respect their chosen use with ordinary materials', 'record the habitation testimony'], {
  knowledge: ['habitation testimony'],
  cosmetics: ["maker's seam finish"]
}, {
  optional: true
});
node('o7', 'load bearing silence', 'read three supports. only one missing support has a plausible alternative. the rest require physical repair.', ['read the load path of all three supports', 'ask bren to witness almost on the plausible support', 'secure the gantry with the brace kit'], {
  items: ['structural anchor'],
  facts: ['stable gantry']
}, {
  witness: true,
  requires: ['field brace kit', 'rescue writ', 'load path', 'almost']
});
node('o8', 'sealed foundation', "a hollow repeats your hammer pattern one strike early. a tool grip bears your brother's distinctive repair work.", ['inspect the marked tool grip', 'open the safe foundation exit'], {
  facts: ['beginner map complete']
}, {
  requires: ['field brace kit', 'rescue writ', 'stable gantry']
});
node('e1', 'guest threshold', 'the house is warm, familiar, and quietly incomplete. pell, an adult household steward, offers support.', ['choose a household token', 'practice walking, crouching, and inspecting', 'meet pell and request help'], {
  items: ['household token', 'witness book']
});
node('e2', 'supper room', 'keep observable facts separate from your impressions. search without a time limit.', ['inspect the unused cup', 'inspect the worn stool', 'inspect the extra place setting'], {
  knowledge: ['absent guest']
});
node('e3', 'listening nook', 'ask before sharing. if you do not ask pell, a willing adult guest can take part in the exercise instead.', ['choose a willing adult and ask permission', 'align three short sensory fragments with their consent', 'use grounding to identify the present room'], {
  skills: ['afterimage sharing', 'grounding technique']
}, {
  witness: true,
  choiceKey: 'exercisewitness',
  choices: [{
    id: 'pell',
    label: 'ask pell to take part',
    effect: 'pell agrees to hear this exercise. permission applies to this sharing only, not to later copies.',
    record: 'pell consented to the introductory sharing.'
  }, {
    id: 'guest',
    label: 'do not share with pell and ask the willing guest',
    effect: 'the adult guest agrees to the exercise. pell remains available as your traveling companion.',
    record: 'a willing adult guest consented to the introductory sharing.'
  }]
});
node('e4', 'quiet gallery', "a recognition warden watches the corridor. alcoves and pell's help provide a safe route. detection returns you to shelter.", ['choose alcoves or the guided escort', 'recover the guest ledger', 'inspect its altered binding and doorway sequence'], {
  items: ['guest ledger'],
  knowledge: ['doorway sequence']
});
node('e5', 'name chamber', 'the parent agrees to view the displaced memory but initially asks you not to copy it. recognition does not compel reconciliation.', ['hear the terms of the parent', 'review and confirm the record permission', 'present the verified testimony to pell'], {
  knowledge: ['verified testimony'],
  permissions: ['household seal']
}, {
  choiceKey: 'copypermission',
  choices: [{
    id: 'anonymous',
    label: 'honor the request and make an anonymous factual note',
    effect: 'no memory is copied. record only anonymized facts. the parent and child decide for themselves whether to meet.',
    record: 'no memory was copied and an anonymous factual note was made.'
  }, {
    id: 'sealed',
    label: 'request separate permission for one sealed account',
    effect: 'the parent replies: one sealed account, for me to control, not to distribute. confirming preserves only that expressly authorized private copy and does not permit public sharing.',
    record: 'the parent separately permitted one sealed private account and distribution remains forbidden.'
  }, {
    id: 'refused',
    label: 'ask for separate permission and respect a refusal',
    effect: 'the parent declines separate copying permission. that refusal is binding. anonymized facts still establish the testimony and the household seal.',
    record: 'separate copying permission was refused and respected and no copy was made.'
  }]
});
node('e6', 'token garden', "a communal nameplate should use its owners' chosen terms, with room for people who want no recorded name.", ['ask the owners which terms they want', 'repair the nameplate with a blank guest space', 'record only the authorized visitor terms'], {
  knowledge: ['visitor consent record'],
  cosmetics: ['thread insignia finish'],
  leads: ['sanctuary ally']
}, {
  optional: true
});
node('e7', 'witness stair', "distinguish the present stair from displaced memories. ground at every landing with pell.", ["read the ledger's doorway sequence and household seal", 'ask pell for consent to share an afterimage', 'identify all present landings and guide both travelers through'], {
  items: ['present thread'],
  facts: ['grounded stair sequence']
}, {
  witness: true,
  requires: ['guest ledger', 'doorway sequence', 'household seal', 'afterimage sharing']
});
node('e8', 'unmarked door', 'a child’s height mark appears beyond a locked adult sized door. a voice says: you kept something we set down.', ['record the height mark without naming its source', 'leave with pell by the public stair'], {
  facts: ['beginner map complete']
}, {
  requires: ['guest ledger', 'household seal', 'grounded stair sequence']
});
const CATEGORIES = ['items', 'knowledge', 'permissions', 'skills', 'cosmetics', 'leads', 'facts'];
const FINISHES = ['chalk', 'copper', 'stitched thread'];
const CLANS = [{
  id: 'ivrask',
  name: 'ivrask'
}, {
  id: 'ordelith',
  name: 'ordelith'
}, {
  id: 'suthren',
  name: 'suthren',
  note: 'a suthren companion can share a stated burden only after specific consent.'
}, {
  id: 'othessil',
  name: 'othessil',
  note: 'an othessil partner can establish a local rule only if everyone inside accepts it.'
}, {
  id: 'nemevra',
  name: 'nemevra',
  note: 'nemevra allies interrupt recognition, not vision.'
}];
const TRIBES = ['ossari', 'delketh', 'kethavai', 'tavrin', 'mehl'];
const SPOILER_SECTIONS = [{
  title: 'the truth behind the opening',
  spoiler: true,
  intro: 'the first witness did not create reality.',
  rows: [['the first witness', 'it observed the initial decision and was overwhelmed by incompatible outcomes. it deferred completion to preserve lives it could not choose between. its awakening threatens to complete that decision by reflex.'], ['the uncounted', 'conscious people stranded in possibilities the first witness never perceived. they built the second audience, an imperfect network of witnesses outside the familiar universe. they can perform apparently unwitnessed acts because the witness is on their side of a threshold.'], ['the listener', 'the negotiator of the uncounted, who initially hides the division among them.'], ['sere', 'the organizer of the final concord, whose settlement repeatedly loses the same harvest as its laws shift. a legitimate grievance with a catastrophic solution.'], ['the assembly of thresholds', 'the shared climax, where clan insignia lose their centers. established shortcuts and certifications fail, not every basic ability.']]
}, {
  title: 'tavra campaign chapters',
  spoiler: true,
  rows: [['chapter 2 the bell beneath', 'reestablish two reciprocal relay links, trace the underground bell through maintenance shafts, and escort a technician to the submerged exchange. reward: reply compass. revelation: the letter came from tavra’s former mentor, anet, in a homeland recorded as inaccessible.'], ['chapter 3 a home without arrival', 'enter the lost harbor, reconcile two competing route ledgers, and arrange a witnessed meeting with anet. revelation: residents remain real, but no outside institution counts them as living constituents.'], ['chapter 4 the unanswered mile', 'carry testimony from the lost harbor, repair three existing relationship anchors, and traverse the gap to the listener. tavra must make one major fold: lose attachment to her childhood home, or distribute the work through many smaller folds.'], ['chapter 5 the last delivery', 'at the assembly, sere asks tavra to deliver the sole address from which completion can be triggered. the listener instead wants a route that bypasses all existing representation.']]
}, {
  title: 'oru campaign chapters',
  spoiler: true,
  rows: [['chapter 2 beneath the blueprint', 'compare three construction revisions, repair a ventilation route with ordinary materials, and free a survey crew. revelation: oru’s brother, rell, helped design a system that transfers future costs without valid consent.'], ['chapter 3 the future foundry', 'interview workers away from supervisors, isolate three cost transfer conduits, and open the audit chamber. every path rescues the workers. the dispute concerns the institution.'], ['chapter 4 the empty blueprint', 'reconstruct the foundry’s original feasible design, gather testimony from three affected households, and reach the uncounted workshop. rell admits the first bridge repair could have been achieved by a slower evacuation.'], ['chapter 5 what we refuse to build', 'at the assembly, sere asks oru to anchor a single completed reality while the listener wants the machinery repurposed. his lost capacity to imagine forgiving rell is not restored as a reward.']]
}, {
  title: 'esi campaign chapters',
  spoiler: true,
  rows: [['chapter 2 the kindly absence', 'deliver the household seal, interview three sanctuary residents on their chosen terms, and trace a recognition warden without entering its sightline. reward: privacy veil.'], ['chapter 3 the archive of unsaid names', 'compare public records with volunteered testimony, expose three forged consent forms, and help residents choose which true accounts remain sealed.'], ['chapter 4 the second audience', 'enter through a reciprocal invitation, ground three overlapping memories with the present thread, and locate the source of the shared pause. esi is not a predestined ruler or vessel.'], ['chapter 5 a name is not a key', 'at the assembly, both sere and the listener want esi to reveal private memories that could undermine their opponents. no sequence requires esi to absorb everyone else’s distress.']]
}, {
  title: 'shared world endings',
  spoiler: true,
  rows: [['world ending a the living accord', 'establish a distributed witness assembly that admits the uncounted without erasing existing realities. plurality survives, but disasters require continuing cooperative management.'], ['world ending b the completed world', 'ratify the proposal of sere and authorize the first witness to choose one coherent reality. incompatible populations will not continue in the resulting world. physical stability improves at an irreversible human cost.'], ['world ending c the open interval', 'evacuate the convergence region and sever the central authority without installing a single replacement. communities become more autonomous and more isolated. people retain their histories and losses.']]
}, {
  title: 'acceptance checks',
  spoiler: false,
  rows: [['main route', 'every map’s main route works with optional tasks skipped.'], ['choice branches', 'every choice branch awards the required exit permission.'], ['companions', 'lost companions can regroup and failures never charge irreversible costs.'], ['assists', 'assist settings preserve story flags and required items cannot be discarded.'], ['spoilers', 'spoiler text is gated by discovery and designers see exact state values in a separate view.'], ['endings', 'every personal ending composes with all three world endings and each expansion respects irreversible losses.'], ['access', 'keyboard and screen reader users can inspect map nodes without relying on the schematic.']]
}];
const ENDING_COMPOSITION = 'one explicit world decision plus one explicit protagonist resolution plus prior behaviour epilogues. each protagonist therefore has nine world and personal ending combinations. no hidden morality score overrides a selected outcome.';
const RECORDED_DECISIONS = {
  tavra: ['rescue priority', 'archive lead', 'route publication', 'charter ownership', 'attachment cost', 'personal resolution', 'world ending'],
  oru: ['clinic method', 'nursery testimony', 'evidence release', 'foundry governance', 'rell testimony status', 'personal resolution', 'world ending'],
  esi: ['copy permission', 'garden lead', 'sanctuary disclosure', 'index policy', 'custodian choice', 'personal resolution', 'world ending']
};
function fresh(hero, mark, finish, settings = {}) {
  if (!HEROES[hero]) throw Error('unknown hero');
  return {
    version: 1,
    hero,
    mark: mark || HEROES[hero].marks[0],
    finish: finish || 'chalk',
    active: HEROES[hero].prefix + '1',
    selected: HEROES[hero].prefix + '1',
    done: [],
    tasks: {},
    choices: {},
    inventory: Object.fromEntries(CATEGORIES.map(k => [k, []])),
    witness: true,
    settings: {
      guided: true,
      reduced: false,
      highcontrast: false,
      sts: true,
      ...settings
    },
    journal: [],
    checkpoint: null
  };
}
function order(id) {
  const n = +String(id).slice(1);
  return n === 6 ? 3 : n === 7 ? 5 : n === 8 ? 7 : n - 1;
}
function prerequisites(s, id) {
  const n = NODES[id];
  if (!n || id[0] !== HEROES[s.hero].prefix) return ['choose a node in this campaign'];
  const prior = order(id);
  const out = [];
  if (prior >= 1 && !s.done.includes(id[0] + prior)) out.push('complete ' + NODES[id[0] + prior].title);
  const have = Object.values(s.inventory).flat();
  for (const r of n.requires || []) if (!have.includes(r)) out.push('obtain ' + r);
  return out;
}
function task(s, id, index) {
  if (prerequisites(s, id).length || s.done.includes(id)) return false;
  const n = NODES[id];
  if (!Number.isInteger(index) || index < 0 || index >= n.tasks.length) return false;
  s.tasks[id] ??= [];
  s.tasks[id] = s.tasks[id].includes(index) ? s.tasks[id].filter(x => x !== index) : [...s.tasks[id], index].sort((a, b) => a - b);
  return true;
}
function choose(s, id, value) {
  const n = NODES[id];
  if (!n || !n.choices || prerequisites(s, id).length || s.done.includes(id) || s.choices[n.choiceKey] || !n.choices.some(c => c.id === value)) return false;
  s.checkpoint = JSON.parse(JSON.stringify({
    ...s,
    checkpoint: null
  }));
  s.choices[n.choiceKey] = value;
  s.journal.push({
    title: n.title,
    text: n.choices.find(c => c.id === value).record
  });
  return true;
}
function blockers(s, id) {
  const n = NODES[id];
  const b = prerequisites(s, id);
  if (s.done.includes(id)) b.push('already complete');
  if (!n) return b;
  if ((s.tasks[id] || []).length !== n.tasks.length) b.push('confirm each described task');
  if (n.choices && !s.choices[n.choiceKey]) b.push('confirm a choice after reviewing its consequences');
  if (n.witness && !s.witness) b.push('regroup with a conscious living witness');
  return b;
}
function complete(s, id) {
  if (blockers(s, id).length) return false;
  const n = NODES[id];
  for (const k of Object.keys(n.rewards)) for (const v of n.rewards[k]) if (!s.inventory[k].includes(v)) s.inventory[k].push(v);
  s.done.push(id);
  s.done.sort();
  s.journal.push({
    title: n.title,
    text: 'completed. ' + Object.values(n.rewards).flat().join(', ') + '.'
  });
  const nxt = n.id[0] + (order(id) + 1);
  if (NODES[nxt]) {
    s.active = nxt;
    s.selected = nxt;
  }
  return true;
}
function retry(s) {
  s.witness = true;
  s.tasks[s.selected] = [];
  return s;
}
function wipe(s) {
  s.tasks[s.selected] = [];
  s.witness = true;
  return s;
}
Object.assign(window, {
  HEROES,
  NODES,
  CATEGORIES,
  FINISHES,
  CLANS,
  TRIBES,
  SPOILER_SECTIONS,
  ENDING_COMPOSITION,
  RECORDED_DECISIONS,
  fresh,
  order,
  prerequisites,
  task,
  choose,
  blockers,
  complete,
  retry,
  wipe
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/game-prototype/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Portal = __ds_scope.Portal;

__ds_ns.Sigil = __ds_scope.Sigil;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.ButtonRow = __ds_scope.ButtonRow;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.ChipGroup = __ds_scope.ChipGroup;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.StatusLine = __ds_scope.StatusLine;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.SettingToggle = __ds_scope.SettingToggle;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Topbar = __ds_scope.Topbar;

__ds_ns.BlockedList = __ds_scope.BlockedList;

__ds_ns.ChoiceCard = __ds_scope.ChoiceCard;

__ds_ns.InventoryList = __ds_scope.InventoryList;

__ds_ns.JournalEntry = __ds_scope.JournalEntry;

__ds_ns.MapGrid = __ds_scope.MapGrid;

__ds_ns.MapNode = __ds_scope.MapNode;

__ds_ns.RewardBlock = __ds_scope.RewardBlock;

__ds_ns.TaskCheck = __ds_scope.TaskCheck;

__ds_ns.WitnessBox = __ds_scope.WitnessBox;

__ds_ns.CompleteBanner = __ds_scope.CompleteBanner;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.HeroCard = __ds_scope.HeroCard;

__ds_ns.Notice = __ds_scope.Notice;

__ds_ns.Panel = __ds_scope.Panel;

__ds_ns.SpecList = __ds_scope.SpecList;

__ds_ns.SpoilerDetails = __ds_scope.SpoilerDetails;

})();
