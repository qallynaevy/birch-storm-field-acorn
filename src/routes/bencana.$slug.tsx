import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { DisasterIcon } from "@/components/guide-icons";
import { DrillDialog } from "@/components/drill-dialog";
import { CallButton } from "@/components/call-button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getDisaster } from "@/lib/data/disasters";

export const Route = createFileRoute("/bencana/$slug")({
  component: DisasterPage,
});

function DisasterPage() {
  const { slug } = Route.useParams();
  const guide = getDisaster(slug);

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
          <DisasterIcon name={guide.icon} className="size-6" />
        </span>
        <div>
          <h1 className="font-display text-3xl font-medium tracking-tight">
            {guide.title}
          </h1>
          <p className="mt-2 text-sm leading-normal text-muted">{guide.summary}</p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <CallButton tel="112" label="112" variant="emergency" size="default" />
        {slug === "gempa" ? <DrillDialog /> : null}
      </div>

      <Tabs defaultValue="saat" className="mt-8">
        <TabsList>
          <TabsTrigger value="sebelum">Sebelum</TabsTrigger>
          <TabsTrigger value="saat">Saat terjadi</TabsTrigger>
          <TabsTrigger value="sesudah">Sesudah</TabsTrigger>
        </TabsList>
        <TabsContent value="sebelum">
          <StepList items={guide.before} />
        </TabsContent>
        <TabsContent value="saat">
          <StepList items={guide.during} />
        </TabsContent>
        <TabsContent value="sesudah">
          <StepList items={guide.after} />
        </TabsContent>
      </Tabs>

      <section className="mt-8">
        <h2 className="font-display text-xl font-medium">Yang perlu di tas</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {guide.pack.map((item) => (
            <Badge key={item} variant="outline">
              {item}
            </Badge>
          ))}
        </div>
        <Link
          to="/siaga"
          className="mt-4 inline-flex min-h-11 items-center text-sm font-medium text-primary"
        >
          Buka ceklis tas siaga
        </Link>
      </section>
    </AppShell>
  );
}

function StepList({ items }: { items: string[] }) {
  return (
    <ol className="space-y-2">
      {items.map((item, i) => (
        <li key={item}>
          <Card className="flex gap-4 p-4">
            <span className="font-display w-6 shrink-0 text-lg font-medium tabular-nums text-primary">
              {i + 1}
            </span>
            <p className="text-sm leading-normal">{item}</p>
          </Card>
        </li>
      ))}
    </ol>
  );
}
