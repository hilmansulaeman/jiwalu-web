// Foto ada di public/photos. Tambah foto: simpan filenya di sana, lalu daftarkan di bawah.

export const FOTO: Record<string, string> = {
  "foto-01.jpg": "Pose memegang pipi di depan tirai biru",
  "foto-02.jpg": "Pose tangan di pinggang di depan tirai polkadot",
  "foto-03.jpg": "Tiga teman berpose dengan tangan di wajah",
  "foto-04.jpg": "Tiga teman berpose di depan tirai polkadot",
  "foto-05.jpg": "Pose memegang minuman di depan tirai biru",
  "foto-06.jpg": "Pose santai di depan tirai polkadot",
  "foto-07.jpg": "Dua teman berpose di depan tirai biru",
  "foto-08.jpg": "Tiga teman berpose di depan tirai polkadot",
  "foto-09.jpg": "Pose tangan di dagu di depan tirai biru",
  "foto-10.jpg": "Berpose dengan kamera di depan tirai polkadot",
  "foto-11.jpg": "Tiga teman tersenyum di depan tirai polkadot",
  "foto-12.jpg": "Dua teman berpose lucu di depan tirai biru",
  "foto-13.jpg": "Pasangan berkacamata hitam di depan tirai polkadot",
  "foto-14.jpg": "Pasangan berpose dengan kacamata hitam",
  "foto-15.jpg": "Pasangan berkacamata hitam dengan pose tangan",
  "foto-16.jpg": "Pasangan berkacamata hitam berpose bersandar",
  "foto-17.jpg": "Photobox Jiwalu dengan tirai biru dan papan nama Jiwalu",
  "foto-18.jpg": "Fasad bangunan bata dengan papan nama Jiwalu Photobooth",
  "foto-19.jpg": "Bagian dalam booth Jiwalu: kamera, dua lampu, dan layar sentuh",
};

export type Album = { judul: string; ket: string; foto: string[] };

// Foto pertama di setiap album jadi sampul.
export const ALBUM: Album[] = [
  { judul: "Bertiga", ket: "Tirai polkadot.", foto: ["foto-04.jpg", "foto-03.jpg", "foto-08.jpg", "foto-11.jpg"] },
  { judul: "Pakai kacamata", ket: "Kacamatanya properti dari booth.", foto: ["foto-13.jpg", "foto-14.jpg", "foto-15.jpg", "foto-16.jpg"] },
  { judul: "Sendiri", ket: "Tirai biru dan polkadot.", foto: ["foto-10.jpg", "foto-01.jpg", "foto-02.jpg", "foto-05.jpg", "foto-06.jpg", "foto-09.jpg"] },
  { judul: "Berdua", ket: "Tirai biru.", foto: ["foto-12.jpg", "foto-07.jpg"] },
  { judul: "Photobox Jiwalu", ket: "Booth, tampak depan, dan bagian dalam.", foto: ["foto-17.jpg", "foto-18.jpg", "foto-19.jpg"] },
];

// Galeri pendek di beranda. Foto pertama tampil besar.
export const GALERI_BERANDA = [
  "foto-04.jpg", "foto-01.jpg", "foto-06.jpg", "foto-12.jpg", "foto-16.jpg",
  "foto-02.jpg", "foto-07.jpg", "foto-14.jpg", "foto-10.jpg", "foto-08.jpg",
];

// Deretan foto yang bergeser saat scroll di beranda.
export const REEL = [
  "foto-13.jpg", "foto-03.jpg", "foto-05.jpg", "foto-07.jpg", "foto-15.jpg",
  "foto-10.jpg", "foto-11.jpg", "foto-14.jpg", "foto-09.jpg",
];

// Tiga foto di strip 3D hero.
export const STRIP_HERO = ["foto-03.jpg", "foto-13.jpg", "foto-08.jpg"];

export const foto = (file: string) => `/photos/${file}`;
