export type KitItem = {
  id: string;
  label: string;
  hint: string;
  group: "air" | "p3k" | "alat" | "dokumen" | "rumah";
};

export const kitGroups: { id: KitItem["group"]; label: string; blurb: string }[] = [
  { id: "air", label: "Air & pangan", blurb: "Cukup untuk 3 hari di rumah, plus sedikit untuk dibawa." },
  { id: "p3k", label: "P3K & obat", blurb: "Obat rutin keluarga jangan sampai ketinggalan." },
  { id: "alat", label: "Alat & penerangan", blurb: "Listrik bisa padam berhari-hari." },
  { id: "dokumen", label: "Dokumen & uang", blurb: "Fotokopi di tas, aslinya di tempat kedap air." },
  { id: "rumah", label: "Rumah & pribadi", blurb: "Yang membuat 72 jam pertama lebih manusiawi." },
];

export const kitItems: KitItem[] = [
  { id: "water", label: "Air minum 3 liter per orang / hari", hint: "Botol isi ulang atau galon kecil yang mudah dibawa.", group: "air" },
  { id: "food", label: "Makanan tahan lama 3 hari", hint: "Biskuit, sarden, kacang, makanan siap saji tanpa masak.", group: "air" },
  { id: "can-opener", label: "Pembuka kaleng & sendok", hint: "Alat makan sederhana, tidak bergantung listrik.", group: "air" },
  { id: "first-aid", label: "Kotak P3K", hint: "Plester, kasa, perban, antiseptik, gunting, sarung tangan.", group: "p3k" },
  { id: "meds", label: "Obat rutin 7 hari", hint: "Masukkan resep, vitamin, dan obat demam/diare.", group: "p3k" },
  { id: "mask", label: "Masker & kacamata debu", hint: "Penting saat abu vulkanik atau debu reruntuhan.", group: "p3k" },
  { id: "flashlight", label: "Senter + baterai cadangan", hint: "Jangan andalkan lampu HP saja.", group: "alat" },
  { id: "radio", label: "Radio baterai / putar tangan", hint: "Untuk kabar BMKG dan instruksi evakuasi jika sinyal HP hilang.", group: "alat" },
  { id: "powerbank", label: "Power bank terisi penuh", hint: "Isi ulang setiap minggu. Kabel cadangan ikut.", group: "alat" },
  { id: "whistle", label: "Peluit", hint: "Lebih jauh terdengar daripada teriak saat terperangkap.", group: "alat" },
  { id: "multitool", label: "Pisau lipat / multitool", hint: "Gunting, pembuka, dan pisau dalam satu alat.", group: "alat" },
  { id: "docs", label: "Fotokopi KTP, KK, BPJS, ijazah", hint: "Masukkan ke map plastik kedap air.", group: "dokumen" },
  { id: "cash", label: "Uang tunai pecahan kecil", hint: "ATM dan mesin kartu bisa mati saat listrik padam.", group: "dokumen" },
  { id: "contacts", label: "Kartu nomor darurat & keluarga", hint: "Tulis di kertas. HP bisa habis atau rusak.", group: "dokumen" },
  { id: "clothes", label: "Pakaian ganti + jas hujan", hint: "Satu set per orang, sepatu yang nyaman berjalan.", group: "rumah" },
  { id: "blanket", label: "Selimut / sleeping bag tipis", hint: "Malam di pengungsian bisa dingin dan lembap.", group: "rumah" },
  { id: "hygiene", label: "Sabun, tisu basah, pembalut", hint: "Kesehatan di pengungsian bergantung pada kebersihan.", group: "rumah" },
  { id: "kid", label: "Keperluan anak / bayi", hint: "Susu, popok, mainan kecil, atau obat anak jika ada di rumah.", group: "rumah" },
];
