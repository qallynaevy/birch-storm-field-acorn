import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { CallButton } from "@/components/call-button";
import { AidIcon } from "@/components/guide-icons";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { getFirstAid } from "@/lib/data/first-aid";

export const Route = createFileRoute("/pertolongan/$slug")({
  component: FirstAidPage,
});

function FirstAidPage() {
  const { slug } = Route.useParams();
  const guide = getFirstAid(slug);

  if (!guide) {
    return (
      <AppShell>
        <p className="text-sm text-muted">Panduan tidak ditemukan.</p>
        <Link to="/panduan" className="mt-3 inline-flex text-sm font-medium text-primary">
          Kembali ke panduan
        </Link>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <Link
        to="/panduan"
        className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-muted hover:text-fg"
      >
        <ArrowLeft className="size-4" />
        Panduan
      </Link>
      <div className="mt-4 flex items-start gap-3">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-surface-2 text-primary">
          <AidIcon name={guide.icon} className="size-6" />
        </span>
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="font-display text-3xl font-medium tracking-tight">
              {guide.title}
            </h1>
            {guide.call112 ? <Badge variant="emergency">Hubungi 112</Badge> : null}
          </div>
          <p className="mt-2 text-sm leading-normal text-muted">{guide.summary}</p>
        </div>
      </div>

      {guide.call112 ? (
        <CallButton tel="112" label="Panggil 112" className="mt-5 w-full" size="lg" />
      ) : null}

      <ol className="mt-8 space-y-3">
        {guide.steps.map((step, i) => (
          <li key={step.title}>
            <Card className="p-5">
              <p className="text-xs font-medium tabular-nums tracking-wide text-muted uppercase">
                Langkah {i + 1}
              </p>
              <h2 className="mt-1 font-display text-xl font-medium">{step.title}</h2>
              <p className="mt-2 text-sm leading-normal text-muted">{step.body}</p>
            </Card>
          </li>
        ))}
      </ol>

      <section className="mt-8">
        <h2 className="font-display text-xl font-medium">Jangan</h2>
        <ul className="mt-3 space-y-2">
          {guide.avoid.map((item) => (
            <li
              key={item}
              className="rounded-lg border border-border bg-surface px-4 py-3 text-sm leading-normal"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="font-display text-xl font-medium">Sesudahnya</h2>
        <ul className="mt-3 space-y-2">
          {guide.after.map((item) => (
            <li
              key={item}
              className="rounded-lg border border-border bg-surface px-4 py-3 text-sm leading-normal text-muted"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-8 text-xs leading-normal text-subtle">
        Ini edukasi awam, bukan pelatihan medis. Jika ragu, anggap darurat dan
        hubungi 112.
      </p>
    </AppShell>
  );
}
