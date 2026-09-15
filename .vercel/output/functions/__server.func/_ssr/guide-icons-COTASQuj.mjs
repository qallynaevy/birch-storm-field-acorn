import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { b as Bone, d as Mountain, g as Droplets, h as Flame, i as Waves, m as Frown, p as HeartPulse, r as Wind, s as Sun, t as Zap, v as Bug, w as Activity } from "../_libs/lucide-react.mjs";
import { n as cn } from "./app-shell-XWCqwARS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/guide-icons-COTASQuj.js
var import_jsx_runtime = require_jsx_runtime();
var aidIcons = {
	heart: HeartPulse,
	wind: Wind,
	droplet: Droplets,
	flame: Flame,
	frown: Frown,
	bone: Bone,
	bug: Bug,
	waves: Waves,
	zap: Zap,
	sun: Sun
};
var disasterIcons = {
	earth: Activity,
	droplet: Droplets,
	waves: Waves,
	mountain: Mountain,
	flame: Flame,
	landslide: Mountain,
	wind: Wind
};
function AidIcon({ name, className }) {
	const Icon = aidIcons[name];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
		className: cn("size-5", className),
		strokeWidth: 1.75
	});
}
function DisasterIcon({ name, className }) {
	const Icon = disasterIcons[name];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
		className: cn("size-5", className),
		strokeWidth: 1.75
	});
}
//#endregion
export { DisasterIcon as n, AidIcon as t };
