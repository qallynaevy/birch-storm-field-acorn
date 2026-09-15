import { i as __toESM } from "../_runtime.mjs";
import { m as require_react, p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { n as X } from "../_libs/lucide-react.mjs";
import { n as cn } from "./app-shell-XWCqwARS.mjs";
import { t as Button } from "./card-D4xF1cPv.mjs";
import { a as DialogOverlay$1, c as DialogTrigger$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/drill-dialog-BJ8pAMZX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Dialog = Dialog$1;
var DialogTrigger = DialogTrigger$1;
function DialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
		className: cn("fixed inset-0 z-50 bg-fg/40", className),
		...props
	});
}
function DialogContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
		className: cn("fixed top-1/2 right-4 left-4 z-50 mx-auto max-w-md -translate-y-1/2 rounded-2xl border border-border bg-surface p-6 text-fg shadow-soft", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "icon",
				className: "absolute top-3 right-3 size-10",
				"aria-label": "Tutup",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
			})
		})]
	})] });
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		className: cn("font-display pr-10 text-xl font-medium leading-snug", className),
		...props
	});
}
function DialogDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
		className: cn("mt-2 text-sm leading-normal text-muted", className),
		...props
	});
}
var STEPS = [
	{
		title: "Jatuhkan diri",
		body: "Turun ke lantai. Jangan berdiri di dekat kaca atau lemari."
	},
	{
		title: "Lindungi kepala",
		body: "Masuk ke bawah meja kuat, atau lindungi kepala dan leher dengan tangan."
	},
	{
		title: "Bertahan",
		body: "Pegang kaki meja. Tunggu guncangan selesai. Hitung sampai tenang."
	}
];
function DrillDialog({ triggerClassName }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [running, setRunning] = (0, import_react.useState)(false);
	const [seconds, setSeconds] = (0, import_react.useState)(60);
	const [step, setStep] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!open) {
			setRunning(false);
			setSeconds(60);
			setStep(0);
		}
	}, [open]);
	(0, import_react.useEffect)(() => {
		if (!running) return;
		if (seconds <= 0) {
			setRunning(false);
			return;
		}
		const t = window.setTimeout(() => {
			setSeconds((s) => s - 1);
			setStep(seconds - 1 > 40 ? 0 : seconds - 1 > 20 ? 1 : 2);
		}, 1e3);
		return () => window.clearTimeout(t);
	}, [running, seconds]);
	const current = STEPS[step] ?? STEPS[2];
	const done = seconds === 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				className: triggerClassName,
				children: "Latihan 60 detik"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Latihan gempa" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Drop, Cover, Hold On. Ikuti tiga langkah ini bersama keluarga." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 rounded-lg bg-surface-2 px-4 py-6 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-5xl font-medium tabular-nums leading-none",
					children: done ? "Selesai" : seconds
				}), !done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs font-medium tracking-wide text-muted uppercase",
					children: "detik"
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs font-medium tracking-wide text-muted uppercase",
						children: [
							"Langkah ",
							step + 1,
							" dari 3"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-display text-xl font-medium",
						children: current.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm leading-normal text-muted",
						children: current.body
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex gap-2",
				children: [done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "flex-1",
					onClick: () => setOpen(false),
					children: "Tutup"
				}) : running ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					className: "flex-1",
					onClick: () => setRunning(false),
					children: "Jeda"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "flex-1",
					onClick: () => {
						if (seconds === 0) setSeconds(60);
						setRunning(true);
					},
					children: seconds === 60 ? "Mulai" : "Lanjut"
				}), running || seconds < 60 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					onClick: () => {
						setRunning(false);
						setSeconds(60);
						setStep(0);
					},
					children: "Ulang"
				}) : null]
			})
		] })]
	});
}
//#endregion
export { DrillDialog as t };
