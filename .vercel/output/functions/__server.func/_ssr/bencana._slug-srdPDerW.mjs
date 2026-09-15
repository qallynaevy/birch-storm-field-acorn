import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as ArrowLeft } from "../_libs/lucide-react.mjs";
import { r as Route$1 } from "./router-BNZR9LX-.mjs";
import { t as AppShell } from "./app-shell-XWCqwARS.mjs";
import { n as DisasterIcon } from "./guide-icons-COTASQuj.mjs";
import { n as Card } from "./card-D4xF1cPv.mjs";
import { t as DrillDialog } from "./drill-dialog-BJ8pAMZX.mjs";
import { t as CallButton } from "./call-button-BRIMuIq6.mjs";
import { t as Badge } from "./badge-BeIlW4n4.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-2-wUrHnP.mjs";
import { r as getDisaster } from "./disasters-DD4Iooch.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bencana._slug-srdPDerW.js
var import_jsx_runtime = require_jsx_runtime();
function DisasterPage() {
	const { slug } = Route$1.useParams();
	const guide = getDisaster(slug);
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
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DisasterIcon, {
					name: guide.icon,
					className: "size-6"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-medium tracking-tight",
				children: guide.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-normal text-muted",
				children: guide.summary
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 flex flex-wrap gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CallButton, {
				tel: "112",
				label: "112",
				variant: "emergency",
				size: "default"
			}), slug === "gempa" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrillDialog, {}) : null]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
			defaultValue: "saat",
			className: "mt-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						value: "sebelum",
						children: "Sebelum"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						value: "saat",
						children: "Saat terjadi"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						value: "sesudah",
						children: "Sesudah"
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "sebelum",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepList, { items: guide.before })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "saat",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepList, { items: guide.during })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "sesudah",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepList, { items: guide.after })
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-medium",
					children: "Yang perlu di tas"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-wrap gap-2",
					children: guide.pack.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						children: item
					}, item))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/siaga",
					className: "mt-4 inline-flex min-h-11 items-center text-sm font-medium text-primary",
					children: "Buka ceklis tas siaga"
				})
			]
		})
	] });
}
function StepList({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "space-y-2",
		children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "flex gap-4 p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display w-6 shrink-0 text-lg font-medium tabular-nums text-primary",
				children: i + 1
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-normal",
				children: item
			})]
		}) }, item))
	});
}
//#endregion
export { DisasterPage as component };
