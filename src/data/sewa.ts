// Harga dan isi paket sewa event. Sumber: daftar harga event Jiwalu.

export type PaketSewa = {
  nama: string;
  harga: string;
  hargaCoret?: string;
  isi: string[];
};

export type JenisSewa = {
  nama: string;
  keterangan: string;
  paket: PaketSewa[];
};

const isiUmum = [
  "1 special frame dan template 4R untuk pengantin",
  "Free properti foto",
  "Semua softcopy lewat QR code dan Google Drive",
];

export const JENIS_SEWA: JenisSewa[] = [
  {
    nama: "Unlimited",
    keterangan: "Cetak sebanyak apa pun selama durasi sewa.",
    paket: [
      {
        nama: "Paket A",
        harga: "Rp2.000.000",
        hargaCoret: "Rp2.300.000",
        isi: ["Durasi maksimal 3 jam", "Unlimited foto dan print", isiUmum[0], "3 custom template photostrip", isiUmum[1], isiUmum[2]],
      },
      {
        nama: "Paket B",
        harga: "Rp2.500.000",
        hargaCoret: "Rp2.800.000",
        isi: ["Durasi maksimal 4 jam", "Unlimited foto dan print", isiUmum[0], "4 custom template photostrip", isiUmum[1], isiUmum[2]],
      },
    ],
  },
  {
    nama: "Limited",
    keterangan: "Cocok kalau jumlah tamu sudah jelas.",
    paket: [
      {
        nama: "Paket A",
        harga: "Rp1.700.000",
        hargaCoret: "Rp2.000.000",
        isi: ["Durasi maksimal 4 jam", "150 voucher", isiUmum[0], "3 custom template photostrip", isiUmum[1], isiUmum[2]],
      },
      {
        nama: "Paket B",
        harga: "Rp2.200.000",
        hargaCoret: "Rp2.500.000",
        isi: ["Durasi maksimal 4 jam", "300 voucher", isiUmum[0], "3 custom template photostrip", isiUmum[1], isiUmum[2]],
      },
    ],
  },
];

export const ADDON = [
  { nama: "Tambah jam", harga: "Rp500.000 per jam" },
  { nama: "Ubah cetak ke 4R", harga: "Rp500.000" },
];

export const HARGA_TERMURAH = "Rp1.700.000";

export const TERMASUK = [
  { judul: "Special frame dan template 4R untuk pengantin", isi: "Desainnya kami sesuaikan dengan tema acara." },
  { judul: "Custom template photostrip", isi: "3 atau 4 template, tergantung paket." },
  { judul: "Properti foto gratis", isi: "Kacamata dan properti lain untuk pose." },
  { judul: "Softcopy semua foto", isi: "Tamu scan QR di lokasi. File lengkap kami kirim lewat Google Drive." },
];

// Alur umum. Sesuaikan dengan proses Jiwalu (DP, survei lokasi, dll).
export const CARA_PESAN = [
  { judul: "Cek jadwal", isi: "Kirim tanggal, jam, lokasi, dan jenis acara lewat WhatsApp." },
  { judul: "Pilih paket", isi: "Unlimited atau Limited, plus add-on kalau perlu." },
  { judul: "Siapkan frame", isi: "Kami desain frame dan template photostrip sesuai tema." },
  { judul: "Hari acara", isi: "Tim datang sebelum acara mulai untuk memasang booth." },
];

export const FAQ_SEWA = [
  { q: "Apa beda paket Unlimited dan Limited?", a: "Unlimited bebas cetak selama durasi acara. Limited memakai voucher: 1 voucher untuk 1 print, 150 atau 300 voucher. Pilih Limited kalau jumlah tamu sudah jelas." },
  { q: "Area sewa event di mana saja?", a: "Jakarta dan sekitarnya. Untuk lokasi di luar area itu, chat kami untuk cek jadwal dan biaya transport." },
  { q: "Softcopy foto dikirim bagaimana?", a: "Tamu scan QR code untuk ambil foto langsung, dan semua file juga kami kirim lewat Google Drive setelah acara." },
  { q: "Bisa tambah durasi di hari acara?", a: "Bisa, Rp500.000 per jam, selama jadwal booth setelahnya masih kosong." },
];
