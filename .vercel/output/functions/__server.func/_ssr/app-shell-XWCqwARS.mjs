import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { d as useRouterState, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as House, u as Phone, x as Backpack, y as BookOpen } from "../_libs/lucide-react.mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app-shell-XWCqwARS.js
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Logo({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-2.5", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 32 32",
			className: "size-8 shrink-0",
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "32",
					height: "32",
					rx: "8",
					className: "fill-primary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M16 7.5c.4 0 .8.1 1.1.3l6.2 3.1c.7.4 1.2 1.1 1.2 1.9V18c0 4.2-3.1 6.6-8.1 8.8-.2.1-.5.1-.8 0C10.6 24.6 7.5 22.2 7.5 18v-5.2c0-.8.5-1.5 1.2-1.9l6.2-3.1c.3-.2.7-.3 1.1-.3z",
					className: "fill-primary-fg"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M16 12.2l-4.2 3.1v4.2h2.4v-2.7h3.6v2.7h2.4v-4.2L16 12.2z",
					className: "fill-primary"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-lg font-medium tracking-tight",
			children: "SiagaKu"
		})]
	});
}
var nav = [
	{
		to: "/",
		label: "Beranda",
		icon: House,
		match: (p) => p === "/"
	},
	{
		to: "/darurat",
		label: "Darurat",
		icon: Phone,
		match: (p) => p.startsWith("/darurat")
	},
	{
		to: "/panduan",
		label: "Panduan",
		icon: BookOpen,
		match: (p) => p.startsWith("/panduan") || p.startsWith("/pertolongan") || p.startsWith("/bencana")
	},
	{
		to: "/siaga",
		label: "Siaga",
		icon: Backpack,
		match: (p) => p.startsWith("/siaga")
	}
];
function AppShell({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "fixed inset-y-0 left-0 z-20 hidden w-60 flex-col border-r border-border bg-surface lg:flex",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-5 py-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							"aria-label": "Beranda SiagaKu",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs leading-normal text-muted",
							children: "Siap sebelum bencana"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex flex-1 flex-col gap-1 px-3",
						children: nav.map((item) => {
							const active = item.match(pathname);
							const Icon = item.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: item.to,
								className: cn("flex h-11 items-center gap-3 rounded-md px-3 text-sm font-medium transition-colors duration-quick", active ? "bg-primary text-primary-fg" : "text-muted hover:bg-surface-2 hover:text-fg"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-4",
									strokeWidth: 1.75
								}), item.label]
							}, item.to);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-5 py-5 text-xs leading-normal text-subtle",
						children: "Edukasi, bukan pengganti 112."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:pl-60",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
					className: "sticky top-0 z-10 flex items-center justify-between border-b border-border bg-bg/90 px-4 py-3 backdrop-blur-sm lg:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						"aria-label": "Beranda SiagaKu",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "app-main mx-auto w-full max-w-3xl px-4 pt-5 lg:px-8 lg:pt-10",
					children
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "app-bottom-nav fixed inset-x-0 bottom-0 z-20 border-t border-border bg-surface lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid grid-cols-4",
					children: nav.map((item) => {
						const active = item.match(pathname);
						const Icon = item.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: item.to,
							className: cn("flex min-h-12 flex-col items-center justify-center gap-0.5 pt-2 text-[11px] font-medium", active ? "text-primary" : "text-muted"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-5",
								strokeWidth: active ? 2.2 : 1.75
							}), item.label]
						}) }, item.to);
					})
				})
			})
		]
	});
}
//#endregion
export { cn as n, AppShell as t };
