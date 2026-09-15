import { createFileRoute } from "@tanstack/react-router";
import { Plus, Trash2 } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { kitGroups, kitItems } from "@/lib/data/kit";
import {
  useFamilyPlan,
  useKitProgress,
  type FamilyMember,
} from "@/lib/siaga-store";

export const Route = createFileRoute("/siaga")({ component: SiagaPage });

function SiagaPage() {
  return (
    <AppShell>
      <p className="text-xs font-medium tracking-widest text-muted uppercase">
        Disimpan di perangkat ini
      </p>
      <h1 className="mt-2 font-display text-3xl font-medium tracking-tight lg:text-4xl">
        Tas & rencana
      </h1>
      <p className="mt-2 max-w-lg text-sm leading-normal text-muted">
        Ceklis 72 jam dan titik kumpul keluarga. Data tidak dikirim ke server —
        hanya tersimpan di HP atau komputer ini.
      </p>

      <Tabs defaultValue="tas" className="mt-6">
        <TabsList>
          <TabsTrigger value="tas">Tas siaga</TabsTrigger>
          <TabsTrigger value="keluarga">Rencana keluarga</TabsTrigger>
        </TabsList>
        <TabsContent value="tas">
          <KitPanel />
        </TabsContent>
        <TabsContent value="keluarga">
          <FamilyPanel />
        </TabsContent>
      </Tabs>
    </AppShell>
  );
}

function KitPanel() {
  const { checked, toggle, done, total, percent, ready } = useKitProgress();

  return (
    <div>
      <Card className="p-5">
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-sm font-medium">Kelengkapan tas</p>
            <p className="mt-1 text-sm text-muted">Target: siap 72 jam di rumah atau di pengungsian.</p>
          </div>
          <p className="font-display text-2xl font-medium tabular-nums leading-none">
            {ready ? `${done}/${total}` : "—"}
          </p>
        </div>
        <Progress value={ready ? percent : 0} className="mt-4" />
      </Card>

      <div className="mt-6 space-y-8">
        {kitGroups.map((group) => {
          const items = kitItems.filter((i) => i.group === group.id);
          return (
            <section key={group.id}>
              <h2 className="font-display text-xl font-medium">{group.label}</h2>
              <p className="mt-1 text-sm text-muted">{group.blurb}</p>
              <ul className="mt-3 space-y-2">
                {items.map((item) => {
                  const on = Boolean(checked[item.id]);
                  return (
                    <li key={item.id}>
                      <label className="flex cursor-pointer gap-3 rounded-xl border border-border bg-surface p-4">
                        <Checkbox
                          checked={on}
                          onCheckedChange={() => toggle(item.id)}
                          className="mt-0.5"
                          aria-label={item.label}
                        />
                        <span>
                          <span className="block text-sm font-medium">{item.label}</span>
                          <span className="mt-0.5 block text-sm leading-normal text-muted">
                            {item.hint}
                          </span>
                        </span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}

function FamilyPanel() {
  const { plan, patch, ready } = useFamilyPlan();

  function addMember() {
    const member: FamilyMember = {
      id: crypto.randomUUID(),
      name: "",
      phone: "",
      relation: "",
    };
    patch({ members: [...plan.members, member] });
  }

  function updateMember(id: string, field: keyof FamilyMember, value: string) {
    patch({
      members: plan.members.map((m) => (m.id === id ? { ...m, [field]: value } : m)),
    });
  }

  function removeMember(id: string) {
    patch({ members: plan.members.filter((m) => m.id !== id) });
  }

  if (!ready) {
    return <div className="h-40 animate-pulse rounded-xl bg-surface-2" />;
  }

  return (
    <div className="space-y-6">
      <Card className="space-y-4 p-5">
        <div>
          <Label htmlFor="meet">Titik kumpul utama</Label>
          <Input
            id="meet"
            className="mt-1.5"
            placeholder="Contoh: gerbang masjid RT 04"
            value={plan.meetingPoint}
            onChange={(e) => patch({ meetingPoint: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="alt">Titik kumpul cadangan</Label>
          <Input
            id="alt"
            className="mt-1.5"
            placeholder="Contoh: lapangan sekolah"
            value={plan.altMeetingPoint}
            onChange={(e) => patch({ altMeetingPoint: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="out">Kontak luar kota</Label>
          <Input
            id="out"
            className="mt-1.5"
            placeholder="Nama dan nomor kerabat di kota lain"
            value={plan.outOfArea}
            onChange={(e) => patch({ outOfArea: e.target.value })}
          />
          <p className="mt-1.5 text-xs text-muted">
            Saat jaringan lokal padat, relai lewat orang di kota lain sering lebih
            berhasil.
          </p>
        </div>
        <div>
          <Label htmlFor="notes">Catatan</Label>
          <Textarea
            id="notes"
            className="mt-1.5"
            placeholder="Alergi, obat rutin, kebutuhan khusus…"
            value={plan.notes}
            onChange={(e) => patch({ notes: e.target.value })}
          />
        </div>
      </Card>

      <section>
        <div className="flex items-center justify-between gap-3">
          <h2 className="font-display text-xl font-medium">Anggota keluarga</h2>
          <Button type="button" variant="outline" size="sm" onClick={addMember}>
            <Plus className="size-4" />
            Tambah
          </Button>
        </div>
        {plan.members.length === 0 ? (
          <p className="mt-3 text-sm text-muted">
            Belum ada nama. Tambah orang yang harus saling mencari saat terpisah.
          </p>
        ) : (
          <ul className="mt-3 space-y-3">
            {plan.members.map((m) => (
              <li key={m.id}>
                <Card className="grid gap-3 p-4 sm:grid-cols-[1fr_1fr_8rem_auto]">
                  <Input
                    placeholder="Nama"
                    value={m.name}
                    aria-label="Nama"
                    onChange={(e) => updateMember(m.id, "name", e.target.value)}
                  />
                  <Input
                    placeholder="Nomor HP"
                    value={m.phone}
                    inputMode="tel"
                    aria-label="Nomor HP"
                    onChange={(e) => updateMember(m.id, "phone", e.target.value)}
                  />
                  <Input
                    placeholder="Hubungan"
                    value={m.relation}
                    aria-label="Hubungan"
                    onChange={(e) => updateMember(m.id, "relation", e.target.value)}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    aria-label={`Hapus ${m.name || "anggota"}`}
                    onClick={() => removeMember(m.id)}
                  >
                    <Trash2 className="size-4" />
                  </Button>
                </Card>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
