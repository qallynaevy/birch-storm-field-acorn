import { n as CheckboxIndicator, p as require_jsx_runtime, t as Checkbox$1 } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { _ as Check, l as Plus, o as Trash2 } from "../_libs/lucide-react.mjs";
import { n as cn, t as AppShell } from "./app-shell-XWCqwARS.mjs";
import { n as Card, t as Button } from "./card-D4xF1cPv.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-2-wUrHnP.mjs";
import { t as Input } from "./input-DyPlXEf9.mjs";
import { a as useFamilyPlan, n as kitGroups, o as useKitProgress, r as kitItems, t as Progress } from "./siaga-store-D45tem82.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/siaga-CMyVr_0U.js
var import_jsx_runtime = require_jsx_runtime();
function Checkbox({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
		className: cn("flex size-5 shrink-0 items-center justify-center rounded-xs border border-border bg-surface text-primary-fg", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", "data-[state=checked]:border-primary data-[state=checked]:bg-primary", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
			className: "size-3.5",
			strokeWidth: 3
		}) })
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("text-sm font-medium text-fg", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-24 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-fg placeholder:text-subtle", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", "disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
function SiagaPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-medium tracking-widest text-muted uppercase",
			children: "Disimpan di perangkat ini"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 font-display text-3xl font-medium tracking-tight lg:text-4xl",
			children: "Tas & rencana"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 max-w-lg text-sm leading-normal text-muted",
			children: "Ceklis 72 jam dan titik kumpul keluarga. Data tidak dikirim ke server — hanya tersimpan di HP atau komputer ini."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
			defaultValue: "tas",
			className: "mt-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
					value: "tas",
					children: "Tas siaga"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
					value: "keluarga",
					children: "Rencana keluarga"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "tas",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KitPanel, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "keluarga",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FamilyPanel, {})
				})
			]
		})
	] });
}
function KitPanel() {
	const { checked, toggle, done, total, percent, ready } = useKitProgress();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-end justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium",
				children: "Kelengkapan tas"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "Target: siap 72 jam di rumah atau di pengungsian."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-2xl font-medium tabular-nums leading-none",
				children: ready ? `${done}/${total}` : "—"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
			value: ready ? percent : 0,
			className: "mt-4"
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-6 space-y-8",
		children: kitGroups.map((group) => {
			const items = kitItems.filter((i) => i.group === group.id);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-medium",
					children: group.label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: group.blurb
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2",
					children: items.map((item) => {
						const on = Boolean(checked[item.id]);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex cursor-pointer gap-3 rounded-xl border border-border bg-surface p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
								checked: on,
								onCheckedChange: () => toggle(item.id),
								className: "mt-0.5",
								"aria-label": item.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm font-medium",
								children: item.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 block text-sm leading-normal text-muted",
								children: item.hint
							})] })]
						}) }, item.id);
					})
				})
			] }, group.id);
		})
	})] });
}
function FamilyPanel() {
	const { plan, patch, ready } = useFamilyPlan();
	function addMember() {
		const member = {
			id: crypto.randomUUID(),
			name: "",
			phone: "",
			relation: ""
		};
		patch({ members: [...plan.members, member] });
	}
	function updateMember(id, field, value) {
		patch({ members: plan.members.map((m) => m.id === id ? {
			...m,
			[field]: value
		} : m) });
	}
	function removeMember(id) {
		patch({ members: plan.members.filter((m) => m.id !== id) });
	}
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-40 animate-pulse rounded-xl bg-surface-2" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "space-y-4 p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "meet",
					children: "Titik kumpul utama"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "meet",
					className: "mt-1.5",
					placeholder: "Contoh: gerbang masjid RT 04",
					value: plan.meetingPoint,
					onChange: (e) => patch({ meetingPoint: e.target.value })
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "alt",
					children: "Titik kumpul cadangan"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "alt",
					className: "mt-1.5",
					placeholder: "Contoh: lapangan sekolah",
					value: plan.altMeetingPoint,
					onChange: (e) => patch({ altMeetingPoint: e.target.value })
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "out",
						children: "Kontak luar kota"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "out",
						className: "mt-1.5",
						placeholder: "Nama dan nomor kerabat di kota lain",
						value: plan.outOfArea,
						onChange: (e) => patch({ outOfArea: e.target.value })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1.5 text-xs text-muted",
						children: "Saat jaringan lokal padat, relai lewat orang di kota lain sering lebih berhasil."
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "notes",
					children: "Catatan"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "notes",
					className: "mt-1.5",
					placeholder: "Alergi, obat rutin, kebutuhan khusus…",
					value: plan.notes,
					onChange: (e) => patch({ notes: e.target.value })
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-medium",
				children: "Anggota keluarga"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "button",
				variant: "outline",
				size: "sm",
				onClick: addMember,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "Tambah"]
			})]
		}), plan.members.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm text-muted",
			children: "Belum ada nama. Tambah orang yang harus saling mencari saat terpisah."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 space-y-3",
			children: plan.members.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "grid gap-3 p-4 sm:grid-cols-[1fr_1fr_8rem_auto]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						placeholder: "Nama",
						value: m.name,
						"aria-label": "Nama",
						onChange: (e) => updateMember(m.id, "name", e.target.value)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						placeholder: "Nomor HP",
						value: m.phone,
						inputMode: "tel",
						"aria-label": "Nomor HP",
						onChange: (e) => updateMember(m.id, "phone", e.target.value)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						placeholder: "Hubungan",
						value: m.relation,
						"aria-label": "Hubungan",
						onChange: (e) => updateMember(m.id, "relation", e.target.value)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "ghost",
						size: "icon",
						"aria-label": `Hapus ${m.name || "anggota"}`,
						onClick: () => removeMember(m.id),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
					})
				]
			}) }, m.id))
		})] })]
	});
}
//#endregion
export { SiagaPage as component };
