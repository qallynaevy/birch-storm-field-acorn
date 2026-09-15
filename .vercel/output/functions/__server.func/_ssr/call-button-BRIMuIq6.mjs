import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { u as Phone } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as cn } from "./app-shell-XWCqwARS.mjs";
import { r as buttonVariants, t as Button } from "./card-D4xF1cPv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/call-button-BRIMuIq6.js
var import_jsx_runtime = require_jsx_runtime();
function CallButton({ tel, label, variant = "emergency", size = "lg", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: `tel:${tel}`,
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), label]
	});
}
function CopyNumber({ number }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		type: "button",
		variant: "ghost",
		size: "sm",
		onClick: () => {
			navigator.clipboard.writeText(number).then(() => toast("Nomor disalin"), () => toast("Tidak bisa menyalin"));
		},
		children: "Salin"
	});
}
//#endregion
export { CopyNumber as n, CallButton as t };
