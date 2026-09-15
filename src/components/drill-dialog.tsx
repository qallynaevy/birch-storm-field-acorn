import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const STEPS = [
  {
    title: "Jatuhkan diri",
    body: "Turun ke lantai. Jangan berdiri di dekat kaca atau lemari.",
  },
  {
    title: "Lindungi kepala",
    body: "Masuk ke bawah meja kuat, atau lindungi kepala dan leher dengan tangan.",
  },
  {
    title: "Bertahan",
    body: "Pegang kaki meja. Tunggu guncangan selesai. Hitung sampai tenang.",
  },
];

export function DrillDialog({
  triggerClassName,
}: {
  triggerClassName?: string;
}) {
  const [open, setOpen] = useState(false);
  const [running, setRunning] = useState(false);
  const [seconds, setSeconds] = useState(60);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!open) {
      setRunning(false);
      setSeconds(60);
      setStep(0);
    }
  }, [open]);

  useEffect(() => {
    if (!running) return;
    if (seconds <= 0) {
      setRunning(false);
      return;
    }
    const t = window.setTimeout(() => {
      setSeconds((s) => s - 1);
      setStep((seconds - 1) > 40 ? 0 : (seconds - 1) > 20 ? 1 : 2);
    }, 1000);
    return () => window.clearTimeout(t);
  }, [running, seconds]);

  const current = STEPS[step] ?? STEPS[2];
  const done = seconds === 0;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className={triggerClassName}>
          Latihan 60 detik
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Latihan gempa</DialogTitle>
        <DialogDescription>
          Drop, Cover, Hold On. Ikuti tiga langkah ini bersama keluarga.
        </DialogDescription>
        <div className="mt-5 rounded-lg bg-surface-2 px-4 py-6 text-center">
          <p className="font-display text-5xl font-medium tabular-nums leading-none">
            {done ? "Selesai" : seconds}
          </p>
          {!done ? (
            <p className="mt-2 text-xs font-medium tracking-wide text-muted uppercase">
              detik
            </p>
          ) : null}
        </div>
        <div className="mt-4">
          <p className="text-xs font-medium tracking-wide text-muted uppercase">
            Langkah {step + 1} dari 3
          </p>
          <p className="mt-1 font-display text-xl font-medium">{current.title}</p>
          <p className="mt-1 text-sm leading-normal text-muted">{current.body}</p>
        </div>
        <div className="mt-6 flex gap-2">
          {done ? (
            <Button className="flex-1" onClick={() => setOpen(false)}>
              Tutup
            </Button>
          ) : running ? (
            <Button variant="outline" className="flex-1" onClick={() => setRunning(false)}>
              Jeda
            </Button>
          ) : (
            <Button
              className="flex-1"
              onClick={() => {
                if (seconds === 0) setSeconds(60);
                setRunning(true);
              }}
            >
              {seconds === 60 ? "Mulai" : "Lanjut"}
            </Button>
          )}
          {running || seconds < 60 ? (
            <Button
              variant="ghost"
              onClick={() => {
                setRunning(false);
                setSeconds(60);
                setStep(0);
              }}
            >
              Ulang
            </Button>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}
