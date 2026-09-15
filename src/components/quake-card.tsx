import { useEffect, useState } from "react";
import { Activity } from "lucide-react";
import { getLatestQuake, type QuakeInfo } from "@/lib/bmkg";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function QuakeCard() {
  const [quake, setQuake] = useState<QuakeInfo | null | undefined>(undefined);

  useEffect(() => {
    let cancelled = false;
    getLatestQuake()
      .then((data) => {
        if (!cancelled) setQuake(data);
      })
      .catch(() => {
        if (!cancelled) setQuake(null);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (quake === undefined) {
    return (
      <Card className="p-5">
        <p className="text-xs font-medium tracking-wide text-muted uppercase">
          Gempa terkini BMKG
        </p>
        <div className="mt-3 h-16 animate-pulse rounded-md bg-surface-2" />
      </Card>
    );
  }

  if (!quake) {
    return (
      <Card className="p-5">
        <p className="text-xs font-medium tracking-wide text-muted uppercase">
          Gempa terkini BMKG
        </p>
        <p className="mt-2 text-sm text-muted">
          Data BMKG sedang tidak tersedia. Buka bmkg.go.id untuk info resmi.
        </p>
      </Card>
    );
  }

  return (
    <Card className="p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium tracking-wide text-muted uppercase">
            Gempa terkini BMKG
          </p>
          <p className="mt-1 font-display text-3xl font-medium tabular-nums leading-none">
            M {quake.magnitude}
          </p>
        </div>
        <span className="flex size-10 items-center justify-center rounded-md bg-surface-2 text-primary">
          <Activity className="size-5" strokeWidth={1.75} />
        </span>
      </div>
      <p className="mt-3 text-sm leading-normal text-fg">{quake.wilayah}</p>
      <p className="mt-1 text-xs text-muted">
        {quake.tanggal} · {quake.jam} · Kedalaman {quake.kedalaman}
      </p>
      {quake.potensi ? (
        <Badge variant="outline" className="mt-3">
          {quake.potensi}
        </Badge>
      ) : null}
    </Card>
  );
}
