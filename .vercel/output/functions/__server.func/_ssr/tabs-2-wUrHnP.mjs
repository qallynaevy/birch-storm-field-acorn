import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { n as cn } from "./app-shell-XWCqwARS.mjs";
import { i as Trigger, n as List, r as Root2, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tabs-2-wUrHnP.js
var import_jsx_runtime = require_jsx_runtime();
var Tabs = Root2;
function TabsList({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
		className: cn("inline-flex h-11 w-full items-center rounded-lg bg-surface-2 p-1", className),
		...props
	});
}
function TabsTrigger({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
		className: cn("inline-flex h-9 flex-1 items-center justify-center rounded-md px-3 text-sm font-medium text-muted", "transition-colors duration-quick", "data-[state=active]:bg-surface data-[state=active]:text-fg data-[state=active]:shadow-soft", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", className),
		...props
	});
}
function TabsContent({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
		className: cn("mt-5 outline-none", className),
		...props
	});
}
//#endregion
export { TabsTrigger as i, TabsContent as n, TabsList as r, Tabs as t };
