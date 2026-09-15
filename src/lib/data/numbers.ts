export type EmergencyNumber = {
  id: string;
  name: string;
  number: string;
  tel: string;
  blurb: string;
  group: "utama" | "medis" | "bencana" | "utilitas";
  featured?: boolean;
};

export const emergencyNumbers: EmergencyNumber[] = [
  {
    id: "112",
    name: "Panggilan darurat",
    number: "112",
    tel: "112",
    blurb: "Nomor terpadu 24 jam untuk polisi, ambulans, pemadam, dan bencana. Gratis, bisa tanpa pulsa, dan tetap bisa dihubungi meski SIM tidak aktif di banyak daerah.",
    group: "utama",
    featured: true,
  },
  {
    id: "119",
    name: "Ambulans & medis",
    number: "119",
    tel: "119",
    blurb: "Layanan medis darurat Kementerian Kesehatan. Untuk kecelakaan, sesak napas, nyeri dada, atau kondisi yang mengancam nyawa. Alternatif: 118.",
    group: "medis",
    featured: true,
  },
  {
    id: "118",
    name: "Ambulans",
    number: "118",
    tel: "118",
    blurb: "Nomor ambulans yang masih dipakai di banyak kota. Jika 119 sibuk, coba 118.",
    group: "medis",
  },
  {
    id: "110",
    name: "Polisi",
    number: "110",
    tel: "110",
    blurb: "Kepolisian Republik Indonesia. Untuk kejahatan, kecelakaan lalu lintas, atau gangguan keamanan.",
    group: "utama",
    featured: true,
  },
  {
    id: "113",
    name: "Pemadam kebakaran",
    number: "113",
    tel: "113",
    blurb: "Dinas pemadam kebakaran. Segera hubungi jika ada asap, api, atau kebocoran gas. Alternatif di beberapa kota: 1131.",
    group: "utama",
    featured: true,
  },
  {
    id: "115",
    name: "Basarnas / SAR",
    number: "115",
    tel: "115",
    blurb: "Pencarian dan pertolongan: orang hilang, kecelakaan di laut, gunung, atau udara.",
    group: "bencana",
  },
  {
    id: "117",
    name: "BNPB",
    number: "117",
    tel: "117",
    blurb: "Badan Nasional Penanggulangan Bencana. Laporkan gempa, banjir, longsor, atau evakuasi massal.",
    group: "bencana",
  },
  {
    id: "129",
    name: "Posko bencana alam",
    number: "129",
    tel: "129",
    blurb: "Posko informasi bencana alam nasional.",
    group: "bencana",
  },
  {
    id: "pmi",
    name: "Palang Merah Indonesia",
    number: "021-7992325",
    tel: "0217992325",
    blurb: "PMI Jakarta. Donor darah, ambulans, dan bantuan kemanusiaan. Cek cabang PMI di kotamu untuk nomor lokal.",
    group: "medis",
  },
  {
    id: "bpom",
    name: "Info keracunan BPOM",
    number: "1500-533",
    tel: "1500533",
    blurb: "Sentra Informasi Keracunan BPOM. Hubungi jika ada keracunan makanan, obat, atau bahan kimia.",
    group: "medis",
  },
  {
    id: "pln",
    name: "PLN",
    number: "123",
    tel: "123",
    blurb: "Laporan pemadaman, kabel putus, atau bahaya listrik. Jangan sentuh kabel yang terjatuh.",
    group: "utilitas",
  },
  {
    id: "bpjs",
    name: "BPJS Kesehatan",
    number: "1500-400",
    tel: "1500400",
    blurb: "Informasi faskes, rujukan, dan layanan JKN. Bukan nomor gawat darurat.",
    group: "utilitas",
  },
];

export const numberGroups: { id: EmergencyNumber["group"]; label: string }[] = [
  { id: "utama", label: "Utama" },
  { id: "medis", label: "Medis" },
  { id: "bencana", label: "Bencana" },
  { id: "utilitas", label: "Layanan" },
];
