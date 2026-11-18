// Kontak Jiwalu. Ubah nomor di sini, semua tombol WhatsApp ikut berubah.
export const KONTAK = {
  // Format 62..., tanpa + dan tanpa 0 di depan
  event: "6281219897567", // sewa event + photobox
  usaha: "6287831568837", // paket usaha + request box
  instagram: "jiwalu.photobooth",
  tiktok: "jiwalu.photobooth",
};

export type Jalur = "event" | "usaha";

/** Link WhatsApp dengan pesan yang sudah terisi. */
export const wa = (jalur: Jalur, pesan = "") =>
  `https://wa.me/${KONTAK[jalur]}?text=${encodeURIComponent(pesan)}`;

/** 6281219897567 -> +62 812-1989-7567 */
export const formatNomor = (n: string) =>
  `+${n.slice(0, 2)} ${n.slice(2, 5)}-${n.slice(5, 9)}-${n.slice(9)}`;

export const instagramUrl = `https://instagram.com/${KONTAK.instagram}`;
export const tiktokUrl = `https://www.tiktok.com/@${KONTAK.tiktok}`;

// Template pesan WhatsApp. Setiap baris jadi satu baris di chat.
export const TEMPLATE = {
  umum: "Halo Jiwalu, saya mau tanya soal photobooth.",
  cekJadwal: "Halo Jiwalu, saya mau cek jadwal sewa photobooth untuk tanggal ...",
  usaha: [
    "Halo Jiwalu, saya mau tanya soal buka usaha photobooth.",
    "",
    "Nama: ",
    "Kota: ",
    "Paket yang diminati: Basic / Middle / High / belum tahu",
    "Rencana lokasi booth: mall / kafe / event / lainnya",
    "Perlu box juga: ya / tidak",
    "Target mulai: ",
  ].join("\n"),
  box: [
    "Halo Jiwalu, saya mau request box booth.",
    "",
    "Nama: ",
    "Kota: ",
    "Lokasi booth: mall / kafe / event / lainnya",
    "Ukuran area yang tersedia (P x L x T): ",
    "Warna atau tema: ",
    "Alat photobooth: sudah punya / mau beli paket Jiwalu",
    "Budget box: ",
    "Target selesai: ",
  ].join("\n"),
};
