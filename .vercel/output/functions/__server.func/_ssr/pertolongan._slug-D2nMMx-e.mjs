import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as ArrowLeft } from "../_libs/lucide-react.mjs";
import { n as Route } from "./router-BNZR9LX-.mjs";
import { t as AppShell } from "./app-shell-XWCqwARS.mjs";
import { t as AidIcon } from "./guide-icons-COTASQuj.mjs";
import { n as Card } from "./card-D4xF1cPv.mjs";
import { t as CallButton } from "./call-button-BRIMuIq6.mjs";
import { t as Badge } from "./badge-BeIlW4n4.mjs";
import { n as getFirstAid } from "./first-aid-Pz02zLcp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pertolongan._slug-D2nMMx-e.js
var import_jsx_runtime = require_jsx_runtime();
function FirstAidPage() {
	const { slug } = Route.useParams();
	const guide = getFirstAid(slug);
	if (!guide) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: "Panduan tidak ditemukan."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/panduan",
		className: "mt-3 inline-flex text-sm font-medium text-primary",
		children: "Kembali ke panduan"
	})] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/panduan",
			className: "inline-flex min-h-11 items-center gap-2 text-sm font-medium text-muted hover:text-fg",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "Panduan"]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 flex items-start gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex size-12 shrink-0 items-center justify-center rounded-lg bg-surface-2 text-primary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AidIcon, {
					name: guide.icon,
					className: "size-6"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-medium tracking-tight",
					children: guide.title
				}), guide.call112 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "emergency",
					children: "Hubungi 112"
				}) : null]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-normal text-muted",
				children: guide.summary
			})] })]
		}),
		guide.call112 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CallButton, {
			tel: "112",
			label: "Panggil 112",
			className: "mt-5 w-full",
			size: "lg"
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-8 space-y-3",
			children: guide.steps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs font-medium tabular-nums tracking-wide text-muted uppercase",
						children: ["Langkah ", i + 1]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-xl font-medium",
						children: step.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-normal text-muted",
						children: step.body
					})
				]
			}) }, step.title))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-medium",
				children: "Jangan"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 space-y-2",
				children: guide.avoid.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-lg border border-border bg-surface px-4 py-3 text-sm leading-normal",
					children: item
				}, item))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-medium",
				children: "Sesudahnya"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 space-y-2",
				children: guide.after.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-lg border border-border bg-surface px-4 py-3 text-sm leading-normal text-muted",
					children: item
				}, item))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-8 text-xs leading-normal text-subtle",
			children: "Ini edukasi awam, bukan pelatihan medis. Jika ragu, anggap darurat dan hubungi 112."
		})
	] });
}
//#endregion
export { FirstAidPage as component };
