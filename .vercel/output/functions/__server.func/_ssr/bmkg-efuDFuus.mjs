import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bmkg-efuDFuus.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var getLatestQuake_createServerFn_handler = createServerRpc({
	id: "8ee6f26ab16c4d1fafd9941a7a905d566d65fef23b15832831e585ca82407ceb",
	name: "getLatestQuake",
	filename: "src/lib/bmkg.ts"
}, (opts) => getLatestQuake.__executeServer(opts));
var getLatestQuake = createServerFn({ method: "GET" }).handler(getLatestQuake_createServerFn_handler, async () => {
	try {
		const res = await fetch("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json", {
			headers: { Accept: "application/json" },
			signal: AbortSignal.timeout(8e3)
		});
		if (!res.ok) return null;
		const g = (await res.json()).Infogempa?.gempa;
		if (!g) return null;
		return {
			magnitude: String(g.Magnitude ?? ""),
			wilayah: String(g.Wilayah ?? ""),
			tanggal: String(g.Tanggal ?? ""),
			jam: String(g.Jam ?? ""),
			kedalaman: String(g.Kedalaman ?? ""),
			potensi: String(g.Potensi ?? ""),
			dirasakan: String(g.Dirasakan ?? ""),
			shakemap: g.Shakemap ? `https://data.bmkg.go.id/DataMKG/TEWS/${g.Shakemap}` : void 0
		};
	} catch {
		return null;
	}
});
//#endregion
export { getLatestQuake_createServerFn_handler };
