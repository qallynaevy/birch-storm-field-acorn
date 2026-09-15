import { i as __toESM } from "../_runtime.mjs";
import { m as require_react, p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as ArrowRight, u as Phone, w as Activity, x as Backpack, y as BookOpen } from "../_libs/lucide-react.mjs";
import { n as cn, t as AppShell } from "./app-shell-XWCqwARS.mjs";
import { n as Card } from "./card-D4xF1cPv.mjs";
import { t as DrillDialog } from "./drill-dialog-BJ8pAMZX.mjs";
import { t as CallButton } from "./call-button-BRIMuIq6.mjs";
import { t as Badge } from "./badge-BeIlW4n4.mjs";
import { t as dailyTips } from "./disasters-DD4Iooch.mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { a as useFamilyPlan, i as readinessScore, o as useKitProgress, t as Progress } from "./siaga-store-D45tem82.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BE_vYLM9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var getLatestQuake = createServerFn({ method: "GET" }).handler(createSsrRpc("8ee6f26ab16c4d1fafd9941a7a905d566d65fef23b15832831e585ca82407ceb"));
function QuakeCard() {
	const [quake, setQuake] = (0, import_react.useState)(void 0);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		getLatestQuake().then((data) => {
			if (!cancelled) setQuake(data);
		}).catch(() => {
			if (!cancelled) setQuake(null);
		});
		return () => {
			cancelled = true;
		};
	}, []);
	if (quake === void 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-medium tracking-wide text-muted uppercase",
			children: "Gempa terkini BMKG"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-3 h-16 animate-pulse rounded-md bg-surface-2" })]
	});
	if (!quake) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-medium tracking-wide text-muted uppercase",
			children: "Gempa terkini BMKG"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-muted",
			children: "Data BMKG sedang tidak tersedia. Buka bmkg.go.id untuk info resmi."
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-wide text-muted uppercase",
					children: "Gempa terkini BMKG"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 font-display text-3xl font-medium tabular-nums leading-none",
					children: ["M ", quake.magnitude]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex size-10 items-center justify-center rounded-md bg-surface-2 text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {
						className: "size-5",
						strokeWidth: 1.75
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-normal text-fg",
				children: quake.wilayah
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-xs text-muted",
				children: [
					quake.tanggal,
					" · ",
					quake.jam,
					" · Kedalaman ",
					quake.kedalaman
				]
			}),
			quake.potensi ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				variant: "outline",
				className: "mt-3",
				children: quake.potensi
			}) : null
		]
	});
}
function ScoreRing({ value, size = 132, className }) {
	const clamped = Math.max(0, Math.min(100, value));
	const stroke = 8;
	const r = (size - stroke) / 2;
	const c = 2 * Math.PI * r;
	const offset = c * (1 - clamped / 100);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative inline-flex items-center justify-center", className),
		style: {
			width: size,
			height: size
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			width: size,
			height: size,
			className: "-rotate-90",
			"aria-hidden": "true",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: size / 2,
				cy: size / 2,
				r,
				fill: "none",
				className: "stroke-surface-2",
				strokeWidth: stroke
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: size / 2,
				cy: size / 2,
				r,
				fill: "none",
				className: "stroke-primary",
				strokeWidth: stroke,
				strokeLinecap: "round",
				strokeDasharray: c,
				strokeDashoffset: offset
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 flex flex-col items-center justify-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-3xl font-medium leading-none tabular-nums",
				children: clamped
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 text-xs font-medium tracking-wide text-muted uppercase",
				children: "skor"
			})]
		})]
	});
}
function Home() {
	const kit = useKitProgress();
	const family = useFamilyPlan();
	const score = kit.ready && family.ready ? readinessScore(kit.percent, family.percent) : 0;
	const tip = dailyTips[(/* @__PURE__ */ new Date()).getUTCDate() % dailyTips.length] ?? dailyTips[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-medium tracking-widest text-muted uppercase",
			children: "Kesiapsiagaan warga"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 max-w-md font-display text-4xl font-medium leading-tight tracking-tight lg:text-5xl",
			children: "Siap dimulai dari rumah."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 max-w-lg text-sm leading-normal text-muted lg:text-base",
			children: "Nomor darurat, pertolongan pertama, dan rencana keluarga — supaya saat terjadi sesuatu, kamu tidak mulai dari nol."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 grid gap-4 sm:grid-cols-[auto_1fr] sm:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "flex items-center gap-5 p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreRing, { value: score }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: "Skor siaga keluarga"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm leading-normal text-muted",
							children: "Dihitung dari tas siaga dan rencana kumpul."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-1 flex justify-between text-xs text-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Tas siaga" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums",
									children: kit.ready ? `${kit.done}/${kit.total}` : "—"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, { value: kit.ready ? kit.percent : 0 })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-1 flex justify-between text-xs text-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Rencana keluarga" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums",
									children: family.ready ? `${family.filled}/${family.total}` : "—"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, { value: family.ready ? family.percent : 0 })] })]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CallButton, {
				tel: "112",
				label: "Panggil 112",
				size: "xl",
				className: "h-20 w-full text-lg sm:h-full"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid grid-cols-3 gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CallButton, {
					tel: "119",
					label: "119",
					variant: "outline",
					size: "default",
					className: "w-full"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CallButton, {
					tel: "110",
					label: "110",
					variant: "outline",
					size: "default",
					className: "w-full"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CallButton, {
					tel: "113",
					label: "113",
					variant: "outline",
					size: "default",
					className: "w-full"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-xs text-subtle",
			children: "112 terpadu · 119 ambulans · 110 polisi · 113 pemadam"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuakeCard, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mt-4 flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-wide text-muted uppercase",
					children: "Latihan gempa"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-display text-xl font-medium",
					children: "Drop, Cover, Hold On"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm leading-normal text-muted",
					children: "Enam puluh detik bersama keluarga. Lebih baik dihafal sekarang."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrillDialog, { triggerClassName: "shrink-0" })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 grid gap-3 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeLink, {
					to: "/darurat",
					icon: Phone,
					title: "Nomor darurat",
					body: "112, polisi, ambulans, pemadam, Basarnas, PLN."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeLink, {
					to: "/panduan",
					icon: BookOpen,
					title: "Panduan",
					body: "Pertolongan pertama dan langkah sebelum, saat, sesudah bencana."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeLink, {
					to: "/siaga",
					icon: Backpack,
					title: "Tas & rencana",
					body: "Ceklis 72 jam dan titik kumpul keluarga."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mt-8 p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-wide text-muted uppercase",
				children: "Catatan hari ini"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 font-display text-lg font-medium leading-snug",
				children: tip
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-8 text-xs leading-normal text-subtle",
			children: "Informasi bersifat edukatif. Dalam keadaan yang mengancam nyawa, hubungi 112. Data gempa dari BMKG."
		})
	] });
}
function HomeLink({ to, icon: Icon, title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: "group flex flex-col rounded-xl border border-border bg-surface p-5 shadow-soft transition-colors duration-quick hover:bg-surface-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex size-10 items-center justify-center rounded-md bg-surface-2 text-primary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "size-5",
					strokeWidth: 1.75
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "mt-4 flex items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-lg font-medium",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 text-subtle transition-transform duration-quick group-hover:translate-x-0.5" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 text-sm leading-normal text-muted",
				children: body
			})
		]
	});
}
//#endregion
export { Home as component };
