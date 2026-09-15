import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { AidIcon, DisasterIcon } from "@/components/guide-icons";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { disasterGuides } from "@/lib/data/disasters";
import { firstAidGuides } from "@/lib/data/first-aid";

export const Route = createFileRoute("/panduan")({ component: PanduanPage });

const urgencyLabel = {
  segera: "Segera 112",
  cepat: "Cepat",
  pantau: "Pantau",
} as const;

function PanduanPage() {
  const [q, setQ] = useState("");
  const query = q.trim().toLowerCase();

  const aids = useMemo(
    () =>
      firstAidGuides.filter(
        (g) =>
          !query ||
          g.title.toLowerCase().includes(query) ||
          g.summary.toLowerCase().includes(query),
      ),
    [query],
  );
  const disasters = useMemo(
    () =>
      disasterGuides.filter(
        (g) =>
          !query ||
          g.title.toLowerCase().includes(query) ||
          g.summary.toLowerCase().includes(query),
      ),
    [query],
  );

  return (
    <AppShell>
      <p className="text-xs font-medium tracking-widest text-muted uppercase">
        Baca sebelum dibutuhkan
      </p>
      <h1 className="mt-2 font-display text-3xl font-medium tracking-tight lg:text-4xl">
        Panduan
      </h1>
      <p className="mt-2 max-w-lg text-sm leading-normal text-muted">
        Pertolongan pertama dan langkah siaga bencana. Ringkas, bisa dibuka
        tanpa sinyal jika sudah pernah dimuat.
      </p>

      <div className="relative mt-6">
        <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-subtle" />
        <Input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Cari: gempa, tersedak, ular…"
          className="pl-10"
          aria-label="Cari panduan"
        />
      </div>

      <section className="mt-8">
        <h2 className="font-display text-xl font-medium">Pertolongan pertama</h2>
        {aids.length === 0 ? (
          <p className="mt-3 text-sm text-muted">Tidak ada yang cocok.</p>
        ) : (
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {aids.map((g) => (
              <li key={g.slug}>
                <Link
                  to="/pertolongan/$slug"
                  params={{ slug: g.slug }}
                  className="flex h-full gap-3 rounded-xl border border-border bg-surface p-4 shadow-soft transition-colors duration-quick hover:bg-surface-2"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-surface-2 text-primary">
                    <AidIcon name={g.icon} />
                  </span>
                  <span className="min-w-0">
                    <span className="flex flex-wrap items-center gap-2">
                      <span className="font-medium">{g.title}</span>
                      <Badge variant={g.urgency === "segera" ? "emergency" : "outline"}>
                        {urgencyLabel[g.urgency]}
                      </Badge>
                    </span>
                    <span className="mt-1 block text-sm leading-normal text-muted">
                      {g.summary}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="mt-10">
        <h2 className="font-display text-xl font-medium">Siaga bencana</h2>
        {disasters.length === 0 ? (
          <p className="mt-3 text-sm text-muted">Tidak ada yang cocok.</p>
        ) : (
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {disasters.map((g) => (
              <li key={g.slug}>
                <Link
                  to="/bencana/$slug"
                  params={{ slug: g.slug }}
                  className="flex h-full gap-3 rounded-xl border border-border bg-surface p-4 shadow-soft transition-colors duration-quick hover:bg-surface-2"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-surface-2 text-primary">
                    <DisasterIcon name={g.icon} />
                  </span>
                  <span className="min-w-0">
                    <span className="font-medium">{g.title}</span>
                    <span className="mt-1 block text-sm leading-normal text-muted">
                      {g.summary}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </AppShell>
  );
}
