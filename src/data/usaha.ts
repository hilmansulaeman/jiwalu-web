// Paket alat photobooth untuk buka usaha. Sumber: brosur Paket Sistem Photobooth.
// Harga per item sengaja tidak ditampilkan.

export type Alat = { nama: string; ket: string };
export type PaketUsaha = { nama: string; ringkas: string; harga: string; alat: Alat[] };

const alatUmum: Record<string, Alat> = {
  monitor: { nama: 'Monitor touchscreen 18,5"', ket: "UPERFECT BE185EF, 120Hz" },
  kamera: { nama: "Kamera DSLR Canon", ket: "Model menyusul" },
  lensa: { nama: "Lensa Canon EF-S 10-18mm IS STM", ket: "Lensa wide" },
  pc: { nama: "Mini PC Geekom", ket: "Core i3, 8GB, 256GB, Windows 11" },
  sistem: { nama: "Sistem photobooth, tier Lite", ket: "Bulan pertama termasuk" },
  training: { nama: "Training penggunaan sistem", ket: "Termasuk" },
};

export const PAKET_USAHA: PaketUsaha[] = [
  {
    nama: "Basic",
    ringkas: "Paket awal yang ringkas untuk mulai usaha photobooth.",
    harga: "Rp25.750.000",
    alat: [
      { nama: "Printer Epson L8050", ket: "Wireless photo printer, original" },
      { nama: "Kertas foto 4R, 1.000 lembar", ket: "SUN Crack 'N Share glossy" },
      { nama: "Tinta Epson 057 original", ket: "1 set, 6 botol" },
      alatUmum.monitor, alatUmum.kamera, alatUmum.lensa, alatUmum.pc, alatUmum.sistem, alatUmum.training,
    ],
  },
  {
    nama: "Middle",
    ringkas: "Printer photo lab untuk cetak lebih cepat dan volume menengah.",
    harga: "Rp36.750.000",
    alat: [
      { nama: "Printer Epson SureLab SL-D530", ket: "Photo lab printer, original" },
      { nama: "Kertas foto 4R glossy, 1.000 lembar", ket: "10 pak isi 100" },
      { nama: "Tinta Epson SL-D530 original", ket: "6 botol" },
      alatUmum.monitor, alatUmum.kamera, alatUmum.lensa, alatUmum.pc, alatUmum.sistem, alatUmum.training,
    ],
  },
  {
    nama: "High",
    ringkas: "Printer dye-sub DNP untuk cetak premium dan volume tinggi.",
    harga: "Rp44.250.000",
    alat: [
      { nama: "Printer DNP DS-RX1HS", ket: "4R, 2 roll paper dan ribbon (1.400 cetak)" },
      alatUmum.monitor, alatUmum.kamera, alatUmum.lensa, alatUmum.pc, alatUmum.sistem, alatUmum.training,
    ],
  },
];

export const HARGA_USAHA_TERMURAH = "Rp25.750.000";

export const ALUR_BOOTH = [
  { judul: "Pilih paket di layar", isi: "Jumlah strip dan frame." },
  { judul: "Scan QRIS dan bayar", isi: "Sesi terbuka otomatis setelah pembayaran masuk." },
  { judul: "Hitung mundur, pose", isi: "Kamera dan lampu sudah disetel dari awal." },
  { judul: "Ambil cetakan", isi: "Softcopy lewat QR code." },
];

export const LANGGANAN = [
  { tier: "Lite", ket: "Dipakai di semua paket", bulan: "Rp750.000", enamBulan: "Rp4.000.000", tahun: "Rp7.500.000", utama: true },
  { tier: "Basic", ket: "Opsional", bulan: "Rp1.000.000", enamBulan: "Rp5.400.000", tahun: "Rp10.000.000" },
  { tier: "Pro", ket: "Opsional", bulan: "Rp1.500.000", enamBulan: "Rp7.500.000", tahun: "Rp13.000.000" },
];

// Alur umum. Sesuaikan dengan proses Jiwalu yang sebenarnya.
export const CARA_MULAI = [
  { judul: "Konsultasi", isi: "Ceritakan lokasi, target pelanggan, dan budget lewat WhatsApp." },
  { judul: "Pilih paket", isi: "Kami bantu pilih printer yang sesuai volume cetakmu." },
  { judul: "Setup alat dan sistem", isi: "Alat dirakit, sistem dipasang, QRIS dihubungkan ke akun merchantmu." },
  { judul: "Training", isi: "Cara mengoperasikan sistem dan merawat alat." },
];

// Jawaban "box" punya link WhatsApp, jadi ditulis langsung di halaman usaha.
export const FAQ_USAHA = [
  { q: "Paket mana yang cocok untuk saya?", a: "Basic cocok untuk mulai dengan volume kecil. Middle memakai printer photo lab untuk cetak lebih cepat. High memakai printer dye-sub DNP untuk volume tinggi dan hasil premium, misalnya booth di mall atau event besar." },
  { q: "Uang dari QRIS pelanggan masuk ke mana?", a: "Langsung ke akun merchant atas nama usahamu sendiri. Jiwalu tidak memegang uang pelangganmu." },
  { q: "Apa yang terjadi setelah bulan pertama?", a: "Kamu lanjut berlangganan sistem sendiri. Tier Lite Rp750.000 per bulan, Rp4.000.000 per 6 bulan, atau Rp7.500.000 per tahun." },
  { q: "Kamera DSLR-nya model apa?", a: "Kamera DSLR Canon. Model pastinya kami konfirmasi saat konsultasi, mengikuti ketersediaan stok." },
];
