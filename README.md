# LeebLabs Studio

Landing page LeebLabs Studio dibangun dengan React, TypeScript, dan Vite. Antarmuka menggunakan komponen halaman, konten terstruktur, dan state React untuk interaksi.

## Menjalankan proyek

Persyaratan: Node.js 18+ dan npm.

```bash
npm install
npm run dev
```

Build produksi dan pemeriksaan TypeScript:

```bash
npm run build
npm run preview
```

## Struktur proyek

- `src/App.tsx` — komposisi utama halaman
- `src/components/` — komponen UI per bagian halaman
- `src/data/siteContent.ts` — konten layanan, langkah kerja, paket, dan FAQ
- `src/styles.css` — design tokens, layout, serta responsive styling
- `index.html` — shell dokumen yang memuat aplikasi React

## Catatan sebelum publish

1. Angka pada bagian Paket masih berlabel ilustrasi, bukan harga final.
2. CTA email mengarah ke `halo@leeblabs.ai.id`. Pastikan alamat tersebut aktif, atau ubah data tautan di `src/data/siteContent.ts`.
3. Aplikasi ini belum menggunakan backend, database, atau API key.

## Deploy ke Vercel

1. Push folder ini ke GitHub dan impor repositori di Vercel.
2. Vercel akan mendeteksi Vite. Jika diperlukan, gunakan build command `npm run build` dan output directory `dist`.
3. Tambahkan domain `leeblabs.ai.id` pada pengaturan proyek Vercel, lalu ikuti instruksi DNS dan verifikasi SSL yang ditampilkan.
