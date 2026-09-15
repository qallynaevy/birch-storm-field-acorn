import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { CallButton, CopyNumber } from "@/components/call-button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { emergencyNumbers, numberGroups } from "@/lib/data/numbers";

export const Route = createFileRoute("/darurat")({ component: DaruratPage });

function DaruratPage() {
  return (
    <AppShell>
      <p className="text-xs font-medium tracking-widest text-muted uppercase">
        Simpan di HP
      </p>
      <h1 className="mt-2 font-display text-3xl font-medium tracking-tight lg:text-4xl">
        Nomor darurat
      </h1>
      <p className="mt-2 max-w-lg text-sm leading-normal text-muted">
        112 adalah nomor terpadu nasional. Tetap simpan nomor langsung — di
        beberapa daerah layanan terpadu belum merata.
      </p>

      <CallButton
        tel="112"
        label="Panggil 112 sekarang"
        size="xl"
        className="mt-6 w-full"
      />

      <div className="mt-8 space-y-8">
        {numberGroups.map((group) => {
          const items = emergencyNumbers.filter((n) => n.group === group.id);
          return (
            <section key={group.id}>
              <h2 className="font-display text-xl font-medium">{group.label}</h2>
              <ul className="mt-3 space-y-2">
                {items.map((item) => (
                  <li key={item.id}>
                    <Card className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center">
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-md bg-surface-2 text-primary">
                        <Phone className="size-4" strokeWidth={1.75} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="font-medium">{item.name}</p>
                          {item.featured ? <Badge variant="primary">Utama</Badge> : null}
                        </div>
                        <p className="mt-0.5 font-display text-2xl font-medium tabular-nums leading-tight">
                          {item.number}
                        </p>
                        <p className="mt-1 text-sm leading-normal text-muted">{item.blurb}</p>
                      </div>
                      <div className="flex shrink-0 gap-2">
                        <CopyNumber number={item.number} />
                        <CallButton
                          tel={item.tel}
                          label="Panggil"
                          variant="outline"
                          size="default"
                        />
                      </div>
                    </Card>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </AppShell>
  );
}
