import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { u as Phone } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./app-shell-XWCqwARS.mjs";
import { n as Card } from "./card-D4xF1cPv.mjs";
import { n as CopyNumber, t as CallButton } from "./call-button-BRIMuIq6.mjs";
import { t as Badge } from "./badge-BeIlW4n4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/darurat-Y3ib2EWA.js
var import_jsx_runtime = require_jsx_runtime();
var emergencyNumbers = [
	{
		id: "112",
		name: "Panggilan darurat",
		number: "112",
		tel: "112",
		blurb: "Nomor terpadu 24 jam untuk polisi, ambulans, pemadam, dan bencana. Gratis, bisa tanpa pulsa, dan tetap bisa dihubungi meski SIM tidak aktif di banyak daerah.",
		group: "utama",
		featured: true
	},
	{
		id: "119",
		name: "Ambulans & medis",
		number: "119",
		tel: "119",
		blurb: "Layanan medis darurat Kementerian Kesehatan. Untuk kecelakaan, sesak napas, nyeri dada, atau kondisi yang mengancam nyawa. Alternatif: 118.",
		group: "medis",
		featured: true
	},
	{
		id: "118",
		name: "Ambulans",
		number: "118",
		tel: "118",
		blurb: "Nomor ambulans yang masih dipakai di banyak kota. Jika 119 sibuk, coba 118.",
		group: "medis"
	},
	{
		id: "110",
		name: "Polisi",
		number: "110",
		tel: "110",
		blurb: "Kepolisian Republik Indonesia. Untuk kejahatan, kecelakaan lalu lintas, atau gangguan keamanan.",
		group: "utama",
		featured: true
	},
	{
		id: "113",
		name: "Pemadam kebakaran",
		number: "113",
		tel: "113",
		blurb: "Dinas pemadam kebakaran. Segera hubungi jika ada asap, api, atau kebocoran gas. Alternatif di beberapa kota: 1131.",
		group: "utama",
		featured: true
	},
	{
		id: "115",
		name: "Basarnas / SAR",
		number: "115",
		tel: "115",
		blurb: "Pencarian dan pertolongan: orang hilang, kecelakaan di laut, gunung, atau udara.",
		group: "bencana"
	},
	{
		id: "117",
		name: "BNPB",
		number: "117",
		tel: "117",
		blurb: "Badan Nasional Penanggulangan Bencana. Laporkan gempa, banjir, longsor, atau evakuasi massal.",
		group: "bencana"
	},
	{
		id: "129",
		name: "Posko bencana alam",
		number: "129",
		tel: "129",
		blurb: "Posko informasi bencana alam nasional.",
		group: "bencana"
	},
	{
		id: "pmi",
		name: "Palang Merah Indonesia",
		number: "021-7992325",
		tel: "0217992325",
		blurb: "PMI Jakarta. Donor darah, ambulans, dan bantuan kemanusiaan. Cek cabang PMI di kotamu untuk nomor lokal.",
		group: "medis"
	},
	{
		id: "bpom",
		name: "Info keracunan BPOM",
		number: "1500-533",
		tel: "1500533",
		blurb: "Sentra Informasi Keracunan BPOM. Hubungi jika ada keracunan makanan, obat, atau bahan kimia.",
		group: "medis"
	},
	{
		id: "pln",
		name: "PLN",
		number: "123",
		tel: "123",
		blurb: "Laporan pemadaman, kabel putus, atau bahaya listrik. Jangan sentuh kabel yang terjatuh.",
		group: "utilitas"
	},
	{
		id: "bpjs",
		name: "BPJS Kesehatan",
		number: "1500-400",
		tel: "1500400",
		blurb: "Informasi faskes, rujukan, dan layanan JKN. Bukan nomor gawat darurat.",
		group: "utilitas"
	}
];
var numberGroups = [
	{
		id: "utama",
		label: "Utama"
	},
	{
		id: "medis",
		label: "Medis"
	},
	{
		id: "bencana",
		label: "Bencana"
	},
	{
		id: "utilitas",
		label: "Layanan"
	}
];
function DaruratPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-medium tracking-widest text-muted uppercase",
			children: "Simpan di HP"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 font-display text-3xl font-medium tracking-tight lg:text-4xl",
			children: "Nomor darurat"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 max-w-lg text-sm leading-normal text-muted",
			children: "112 adalah nomor terpadu nasional. Tetap simpan nomor langsung — di beberapa daerah layanan terpadu belum merata."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CallButton, {
			tel: "112",
			label: "Panggil 112 sekarang",
			size: "xl",
			className: "mt-6 w-full"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 space-y-8",
			children: numberGroups.map((group) => {
				const items = emergencyNumbers.filter((n) => n.group === group.id);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-medium",
					children: group.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2",
					children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "flex flex-col gap-3 p-4 sm:flex-row sm:items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex size-11 shrink-0 items-center justify-center rounded-md bg-surface-2 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									className: "size-4",
									strokeWidth: 1.75
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-medium",
											children: item.name
										}), item.featured ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: "primary",
											children: "Utama"
										}) : null]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-0.5 font-display text-2xl font-medium tabular-nums leading-tight",
										children: item.number
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm leading-normal text-muted",
										children: item.blurb
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex shrink-0 gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyNumber, { number: item.number }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CallButton, {
									tel: item.tel,
									label: "Panggil",
									variant: "outline",
									size: "default"
								})]
							})
						]
					}) }, item.id))
				})] }, group.id);
			})
		})
	] });
}
//#endregion
export { DaruratPage as component };
