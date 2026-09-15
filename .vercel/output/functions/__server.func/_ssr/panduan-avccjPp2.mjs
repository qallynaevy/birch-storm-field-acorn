import { i as __toESM } from "../_runtime.mjs";
import { m as require_react, p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Search } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./app-shell-XWCqwARS.mjs";
import { n as DisasterIcon, t as AidIcon } from "./guide-icons-COTASQuj.mjs";
import { t as Badge } from "./badge-BeIlW4n4.mjs";
import { n as disasterGuides } from "./disasters-DD4Iooch.mjs";
import { t as Input } from "./input-DyPlXEf9.mjs";
import { t as firstAidGuides } from "./first-aid-Pz02zLcp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/panduan-avccjPp2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var urgencyLabel = {
	segera: "Segera 112",
	cepat: "Cepat",
	pantau: "Pantau"
};
function PanduanPage() {
	const [q, setQ] = (0, import_react.useState)("");
	const query = q.trim().toLowerCase();
	const aids = (0, import_react.useMemo)(() => firstAidGuides.filter((g) => !query || g.title.toLowerCase().includes(query) || g.summary.toLowerCase().includes(query)), [query]);
	const disasters = (0, import_react.useMemo)(() => disasterGuides.filter((g) => !query || g.title.toLowerCase().includes(query) || g.summary.toLowerCase().includes(query)), [query]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-medium tracking-widest text-muted uppercase",
			children: "Baca sebelum dibutuhkan"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 font-display text-3xl font-medium tracking-tight lg:text-4xl",
			children: "Panduan"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 max-w-lg text-sm leading-normal text-muted",
			children: "Pertolongan pertama dan langkah siaga bencana. Ringkas, bisa dibuka tanpa sinyal jika sudah pernah dimuat."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mt-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value: q,
				onChange: (e) => setQ(e.target.value),
				placeholder: "Cari: gempa, tersedak, ular…",
				className: "pl-10",
				"aria-label": "Cari panduan"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-medium",
				children: "Pertolongan pertama"
			}), aids.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: "Tidak ada yang cocok."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 grid gap-2 sm:grid-cols-2",
				children: aids.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/pertolongan/$slug",
					params: { slug: g.slug },
					className: "flex h-full gap-3 rounded-xl border border-border bg-surface p-4 shadow-soft transition-colors duration-quick hover:bg-surface-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-10 shrink-0 items-center justify-center rounded-md bg-surface-2 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AidIcon, { name: g.icon })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex flex-wrap items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: g.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: g.urgency === "segera" ? "emergency" : "outline",
								children: urgencyLabel[g.urgency]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-sm leading-normal text-muted",
							children: g.summary
						})]
					})]
				}) }, g.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-medium",
				children: "Siaga bencana"
			}), disasters.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: "Tidak ada yang cocok."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 grid gap-2 sm:grid-cols-2",
				children: disasters.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/bencana/$slug",
					params: { slug: g.slug },
					className: "flex h-full gap-3 rounded-xl border border-border bg-surface p-4 shadow-soft transition-colors duration-quick hover:bg-surface-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-10 shrink-0 items-center justify-center rounded-md bg-surface-2 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DisasterIcon, { name: g.icon })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: g.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-sm leading-normal text-muted",
							children: g.summary
						})]
					})]
				}) }, g.slug))
			})]
		})
	] });
}
//#endregion
export { PanduanPage as component };
