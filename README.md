# Jiwalu Photobooth: website

Website Jiwalu Photobooth, dibuat dengan [Astro](https://astro.build). Hasil build berupa HTML statis yang di-hosting di Cloudflare.

## Menjalankan di komputer

Butuh Node.js versi yang tertulis di `engines` di `package.json` (saat dibuat: 22.23.4 atau lebih baru).

```sh
npm install      # sekali saja, setelah clone
npm run dev      # buka http://localhost:4321, otomatis refresh saat file diubah
npm run build    # hasil akhir di folder dist/
npm run preview  # cek hasil build sebelum deploy
```

## Mengubah isi

Hampir semua isi ada di `src/data/`. Ubah file di sana, tanpa perlu menyentuh tampilan.

| Mau mengubah | File |
|---|---|
| Nomor WhatsApp, Instagram, TikTok, template pesan WhatsApp | `src/data/kontak.ts` |
| Harga dan isi paket sewa event, add-on, FAQ sewa | `src/data/sewa.ts` |
| Paket alat usaha, langganan sistem, FAQ usaha | `src/data/usaha.ts` |
| Harga, alamat, jam buka, dan promo photobox | `src/data/photobox.ts` |
| Album galeri, foto beranda, foto di strip 3D | `src/data/galeri.ts` |

### Menambah foto

1. Simpan foto di `public/photos/`. Lebar sekitar 1400px cukup.
2. Tambahkan nama file dan deskripsinya di `FOTO` di `src/data/galeri.ts`.
3. Masukkan nama file ke album yang sesuai di `ALBUM`.

### Struktur

```
src/
  data/        isi website (harga, paket, kontak, album)
  components/  potongan tampilan: Nav, Footer, Hero3D, Reel, Faq, Steps, PageHero, WaLink
  layouts/     Base.astro: kerangka semua halaman
  pages/       index (beranda), sewa, usaha, galeri, 404
  styles/      global.css: warna, huruf, dan tata letak
public/        font, foto, logo (disalin apa adanya)
```

Warna diatur di bagian atas `src/styles/global.css` (`--bg`, `--fg`, `--blue`, `--yellow`).

## Deploy ke Cloudflare

Situs ini statis, jadi tidak butuh server. Konfigurasi ada di `wrangler.jsonc`.

**Cara yang disarankan (otomatis dari GitHub):**

1. Push folder ini ke repository GitHub.
2. Di dashboard Cloudflare, buka **Workers & Pages**, pilih **Create**, lalu **Import a repository**.
3. Pilih repository ini. Isi build command `npm run build` dan deploy command `npx wrangler deploy`.
4. Setelah itu, setiap `git push` ke branch utama langsung online.
5. Hubungkan domain sendiri lewat **Settings, Domains & Routes**.

**Cara manual dari komputer:**

```sh
npm run build
npx wrangler deploy
```

## Catatan

- Langkah "Cara pesan" (`sewa.ts`) dan "Cara mulai" (`usaha.ts`) masih alur umum. Sesuaikan dengan proses Jiwalu.
- Alamat dan jam buka photobox di `photobox.ts` masih placeholder.
