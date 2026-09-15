import { createServerFn } from "@tanstack/react-start";

export type QuakeInfo = {
  magnitude: string;
  wilayah: string;
  tanggal: string;
  jam: string;
  kedalaman: string;
  potensi: string;
  dirasakan: string;
  shakemap?: string;
};

export const getLatestQuake = createServerFn({ method: "GET" }).handler(
  async (): Promise<QuakeInfo | null> => {
    try {
      const res = await fetch("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json", {
        headers: { Accept: "application/json" },
        signal: AbortSignal.timeout(8000),
      });
      if (!res.ok) return null;
      const data = (await res.json()) as {
        Infogempa?: {
          gempa?: {
            Magnitude?: string;
            Wilayah?: string;
            Tanggal?: string;
            Jam?: string;
            Kedalaman?: string;
            Potensi?: string;
            Dirasakan?: string;
            Shakemap?: string;
          };
        };
      };
      const g = data.Infogempa?.gempa;
      if (!g) return null;
      return {
        magnitude: String(g.Magnitude ?? ""),
        wilayah: String(g.Wilayah ?? ""),
        tanggal: String(g.Tanggal ?? ""),
        jam: String(g.Jam ?? ""),
        kedalaman: String(g.Kedalaman ?? ""),
        potensi: String(g.Potensi ?? ""),
        dirasakan: String(g.Dirasakan ?? ""),
        shakemap: g.Shakemap
          ? `https://data.bmkg.go.id/DataMKG/TEWS/${g.Shakemap}`
          : undefined,
      };
    } catch {
      return null;
    }
  },
);
