import { i as __toESM } from "../_runtime.mjs";
import { m as require_react, p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { n as cn } from "./app-shell-XWCqwARS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/siaga-store-D45tem82.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Progress({ value, className }) {
	const clamped = Math.max(0, Math.min(100, value));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("h-2 w-full overflow-hidden rounded-full bg-surface-2", className),
		role: "progressbar",
		"aria-valuenow": clamped,
		"aria-valuemin": 0,
		"aria-valuemax": 100,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-full rounded-full bg-primary transition-[width] duration-fast ease-out",
			style: { width: `${clamped}%` }
		})
	});
}
var kitGroups = [
	{
		id: "air",
		label: "Air & pangan",
		blurb: "Cukup untuk 3 hari di rumah, plus sedikit untuk dibawa."
	},
	{
		id: "p3k",
		label: "P3K & obat",
		blurb: "Obat rutin keluarga jangan sampai ketinggalan."
	},
	{
		id: "alat",
		label: "Alat & penerangan",
		blurb: "Listrik bisa padam berhari-hari."
	},
	{
		id: "dokumen",
		label: "Dokumen & uang",
		blurb: "Fotokopi di tas, aslinya di tempat kedap air."
	},
	{
		id: "rumah",
		label: "Rumah & pribadi",
		blurb: "Yang membuat 72 jam pertama lebih manusiawi."
	}
];
var kitItems = [
	{
		id: "water",
		label: "Air minum 3 liter per orang / hari",
		hint: "Botol isi ulang atau galon kecil yang mudah dibawa.",
		group: "air"
	},
	{
		id: "food",
		label: "Makanan tahan lama 3 hari",
		hint: "Biskuit, sarden, kacang, makanan siap saji tanpa masak.",
		group: "air"
	},
	{
		id: "can-opener",
		label: "Pembuka kaleng & sendok",
		hint: "Alat makan sederhana, tidak bergantung listrik.",
		group: "air"
	},
	{
		id: "first-aid",
		label: "Kotak P3K",
		hint: "Plester, kasa, perban, antiseptik, gunting, sarung tangan.",
		group: "p3k"
	},
	{
		id: "meds",
		label: "Obat rutin 7 hari",
		hint: "Masukkan resep, vitamin, dan obat demam/diare.",
		group: "p3k"
	},
	{
		id: "mask",
		label: "Masker & kacamata debu",
		hint: "Penting saat abu vulkanik atau debu reruntuhan.",
		group: "p3k"
	},
	{
		id: "flashlight",
		label: "Senter + baterai cadangan",
		hint: "Jangan andalkan lampu HP saja.",
		group: "alat"
	},
	{
		id: "radio",
		label: "Radio baterai / putar tangan",
		hint: "Untuk kabar BMKG dan instruksi evakuasi jika sinyal HP hilang.",
		group: "alat"
	},
	{
		id: "powerbank",
		label: "Power bank terisi penuh",
		hint: "Isi ulang setiap minggu. Kabel cadangan ikut.",
		group: "alat"
	},
	{
		id: "whistle",
		label: "Peluit",
		hint: "Lebih jauh terdengar daripada teriak saat terperangkap.",
		group: "alat"
	},
	{
		id: "multitool",
		label: "Pisau lipat / multitool",
		hint: "Gunting, pembuka, dan pisau dalam satu alat.",
		group: "alat"
	},
	{
		id: "docs",
		label: "Fotokopi KTP, KK, BPJS, ijazah",
		hint: "Masukkan ke map plastik kedap air.",
		group: "dokumen"
	},
	{
		id: "cash",
		label: "Uang tunai pecahan kecil",
		hint: "ATM dan mesin kartu bisa mati saat listrik padam.",
		group: "dokumen"
	},
	{
		id: "contacts",
		label: "Kartu nomor darurat & keluarga",
		hint: "Tulis di kertas. HP bisa habis atau rusak.",
		group: "dokumen"
	},
	{
		id: "clothes",
		label: "Pakaian ganti + jas hujan",
		hint: "Satu set per orang, sepatu yang nyaman berjalan.",
		group: "rumah"
	},
	{
		id: "blanket",
		label: "Selimut / sleeping bag tipis",
		hint: "Malam di pengungsian bisa dingin dan lembap.",
		group: "rumah"
	},
	{
		id: "hygiene",
		label: "Sabun, tisu basah, pembalut",
		hint: "Kesehatan di pengungsian bergantung pada kebersihan.",
		group: "rumah"
	},
	{
		id: "kid",
		label: "Keperluan anak / bayi",
		hint: "Susu, popok, mainan kecil, atau obat anak jika ada di rumah.",
		group: "rumah"
	}
];
var KIT_KEY = "siagaku:kit";
var FAMILY_KEY = "siagaku:family";
var emptyPlan = {
	members: [],
	meetingPoint: "",
	altMeetingPoint: "",
	outOfArea: "",
	notes: ""
};
function readJson(key, fallback) {
	try {
		const raw = localStorage.getItem(key);
		if (!raw) return fallback;
		return JSON.parse(raw);
	} catch {
		return fallback;
	}
}
function useKitProgress() {
	const [checked, setChecked] = (0, import_react.useState)({});
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setChecked(readJson(KIT_KEY, {}));
		setReady(true);
	}, []);
	const toggle = (0, import_react.useCallback)((id) => {
		setChecked((prev) => {
			const next = {
				...prev,
				[id]: !prev[id]
			};
			localStorage.setItem(KIT_KEY, JSON.stringify(next));
			return next;
		});
	}, []);
	const done = kitItems.filter((item) => checked[item.id]).length;
	const total = kitItems.length;
	return {
		checked,
		toggle,
		done,
		total,
		percent: total === 0 ? 0 : Math.round(done / total * 100),
		ready
	};
}
function useFamilyPlan() {
	const [plan, setPlan] = (0, import_react.useState)(emptyPlan);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setPlan(readJson(FAMILY_KEY, emptyPlan));
		setReady(true);
	}, []);
	const save = (0, import_react.useCallback)((next) => {
		setPlan(next);
		localStorage.setItem(FAMILY_KEY, JSON.stringify(next));
	}, []);
	const patch = (0, import_react.useCallback)((partial) => {
		setPlan((prev) => {
			const next = {
				...prev,
				...partial
			};
			localStorage.setItem(FAMILY_KEY, JSON.stringify(next));
			return next;
		});
	}, []);
	const filled = (plan.meetingPoint.trim() ? 1 : 0) + (plan.altMeetingPoint.trim() ? 1 : 0) + (plan.outOfArea.trim() ? 1 : 0) + (plan.members.length > 0 ? 1 : 0);
	const total = 4;
	return {
		plan,
		save,
		patch,
		filled,
		total,
		percent: Math.round(filled / total * 100),
		ready
	};
}
function readinessScore(kitPercent, familyPercent) {
	return Math.round(kitPercent * .65 + familyPercent * .35);
}
//#endregion
export { useFamilyPlan as a, readinessScore as i, kitGroups as n, useKitProgress as o, kitItems as r, Progress as t };
