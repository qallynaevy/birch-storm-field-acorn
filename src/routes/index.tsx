import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Phone, Backpack } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { CallButton } from "@/components/call-button";
import { DrillDialog } from "@/components/drill-dialog";
import { QuakeCard } from "@/components/quake-card";
import { ScoreRing } from "@/components/score-ring";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { dailyTips } from "@/lib/data/disasters";
import { readinessScore, useFamilyPlan, useKitProgress } from "@/lib/siaga-store";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const kit = useKitProgress();
  const family = useFamilyPlan();
  const score =
    kit.ready && family.ready ? readinessScore(kit.percent, family.percent) : 0;
  const tip = dailyTips[new Date().getUTCDate() % dailyTips.length] ?? dailyTips[0];

  return (
    <AppShell>
      <p className="text-xs font-medium tracking-widest text-muted uppercase">
        Kesiapsiagaan warga
      </p>
      <h1 className="mt-2 max-w-md font-display text-4xl font-medium leading-tight tracking-tight lg:text-5xl">
        Siap dimulai dari rumah.
      </h1>
      <p className="mt-3 max-w-lg text-sm leading-normal text-muted lg:text-base">
        Nomor darurat, pertolongan pertama, dan rencana keluarga — supaya saat
        terjadi sesuatu, kamu tidak mulai dari nol.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-[auto_1fr] sm:items-center">
        <Card className="flex items-center gap-5 p-5">
          <ScoreRing value={score} />
          <div className="min-w-0">
            <p className="text-sm font-medium">Skor siaga keluarga</p>
            <p className="mt-1 text-sm leading-normal text-muted">
              Dihitung dari tas siaga dan rencana kumpul.
            </p>
            <div className="mt-3 space-y-2">
              <div>
                <div className="mb-1 flex justify-between text-xs text-muted">
                  <span>Tas siaga</span>
                  <span className="tabular-nums">
                    {kit.ready ? `${kit.done}/${kit.total}` : "—"}
                  </span>
                </div>
                <Progress value={kit.ready ? kit.percent : 0} />
              </div>
              <div>
                <div className="mb-1 flex justify-between text-xs text-muted">
                  <span>Rencana keluarga</span>
                  <span className="tabular-nums">
                    {family.ready ? `${family.filled}/${family.total}` : "—"}
                  </span>
                </div>
                <Progress value={family.ready ? family.percent : 0} />
              </div>
            </div>
          </div>
        </Card>
        <CallButton
          tel="112"
          label="Panggil 112"
          size="xl"
          className="h-20 w-full text-lg sm:h-full"
        />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        <CallButton tel="119" label="119" variant="outline" size="default" className="w-full" />
        <CallButton tel="110" label="110" variant="outline" size="default" className="w-full" />
        <CallButton tel="113" label="113" variant="outline" size="default" className="w-full" />
      </div>
      <p className="mt-2 text-xs text-subtle">
        112 terpadu · 119 ambulans · 110 polisi · 113 pemadam
      </p>

      <div className="mt-8">
        <QuakeCard />
      </div>

      <Card className="mt-4 flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-medium tracking-wide text-muted uppercase">
            Latihan gempa
          </p>
          <p className="mt-1 font-display text-xl font-medium">Drop, Cover, Hold On</p>
          <p className="mt-1 text-sm leading-normal text-muted">
            Enam puluh detik bersama keluarga. Lebih baik dihafal sekarang.
          </p>
        </div>
        <DrillDialog triggerClassName="shrink-0" />
      </Card>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        <HomeLink
          to="/darurat"
          icon={Phone}
          title="Nomor darurat"
          body="112, polisi, ambulans, pemadam, Basarnas, PLN."
        />
        <HomeLink
          to="/panduan"
          icon={BookOpen}
          title="Panduan"
          body="Pertolongan pertama dan langkah sebelum, saat, sesudah bencana."
        />
        <HomeLink
          to="/siaga"
          icon={Backpack}
          title="Tas & rencana"
          body="Ceklis 72 jam dan titik kumpul keluarga."
        />
      </div>

      <Card className="mt-8 p-5">
        <p className="text-xs font-medium tracking-wide text-muted uppercase">
          Catatan hari ini
        </p>
        <p className="mt-2 font-display text-lg font-medium leading-snug">{tip}</p>
      </Card>

      <p className="mt-8 text-xs leading-normal text-subtle">
        Informasi bersifat edukatif. Dalam keadaan yang mengancam nyawa, hubungi
        112. Data gempa dari BMKG.
      </p>
    </AppShell>
  );
}

function HomeLink({
  to,
  icon: Icon,
  title,
  body,
}: {
  to: "/darurat" | "/panduan" | "/siaga";
  icon: typeof Phone;
  title: string;
  body: string;
}) {
  return (
    <Link
      to={to}
      className="group flex flex-col rounded-xl border border-border bg-surface p-5 shadow-soft transition-colors duration-quick hover:bg-surface-2"
    >
      <span className="flex size-10 items-center justify-center rounded-md bg-surface-2 text-primary">
        <Icon className="size-5" strokeWidth={1.75} />
      </span>
      <span className="mt-4 flex items-center justify-between gap-2">
        <span className="font-display text-lg font-medium">{title}</span>
        <ArrowRight className="size-4 text-subtle transition-transform duration-quick group-hover:translate-x-0.5" />
      </span>
      <span className="mt-1 text-sm leading-normal text-muted">{body}</span>
    </Link>
  );
}
