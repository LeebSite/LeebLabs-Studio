export const audiences = [
  "Guru SD–SMK",
  "MGMP & komunitas guru",
  "Sekolah & yayasan",
  "Guru mapel umum & produktif",
];

export const services = [
  {
    id: "guru-ai",
    number: "01",
    category: "Pendidikan",
    name: "Guru AI",
    theme: "guru",
    description:
      "Asisten penyusun perangkat pembelajaran untuk semua mata pelajaran SD–SMK, bukan hanya Informatika. Kamu isi jenjang, fase/kelas, mata pelajaran, CP, topik, dan jumlah pertemuan; AI menyusun satu paket yang saling nyambung: TP diturunkan dari CP, ATP urut per pertemuan, KKTP dan asesmen mengukur tujuan yang sama. Kamu review dan edit sebelum dipakai.",
    audience: "guru semua mata pelajaran SD–SMK, MGMP, sekolah & yayasan",
    action: "Minta Demo Guru AI",
    subject: "Minta%20Demo%20Guru%20AI",
    note: "Mulai dari paket gratis terbatas",
    features: [
      {
        title: "CP → TP → ATP yang nyambung",
        description:
          "TP diturunkan dari CP yang kamu pilih, ATP urut per pertemuan, tidak lompat-lompat.",
      },
      {
        title: "KKTP & asesmen berkunci",
        description:
          "Rubrik, asesmen diagnostik, formatif, dan sumatif, beserta kunci jawaban.",
      },
      {
        title: "Semua mapel, SD–SMK",
        description:
          "Template per jenjang dan fase, bukan materi hafalan satu mapel.",
      },
      {
        title: "Format sekolah bisa disesuaikan",
        description:
          "Struktur, kop, dan jumlah pertemuan mengikuti format sekolahmu.",
      },
      {
        title: "Export Word, PPT & Excel",
        description:
          "Format rapi dan siap edit, langsung bisa dikumpulkan ke sekolah.",
      },
    ],
  },
  {
    id: "seller-ai",
    number: "02",
    category: "E-Commerce",
    name: "Seller AI (Segera Hadir)",
    theme: "seller",
    description:
      "Fase berikutnya setelah Guru AI. Saat ini belum dibuka untuk pilot. Gabung waitlist untuk diberi kabar saat dibuka.",
    audience: "seller UMKM yang sudah berjualan dan mulai kewalahan",
    action: "Gabung Waitlist Seller AI",
    subject: "Gabung%20Waitlist%20Seller%20AI",
    note: "Dikembangkan setelah Guru AI",
    features: [
      {
        title: "Riset produk & kata kunci trending",
        description:
          "Produk yang benar-benar naik angka terjualnya, bukan sekadar viral.",
      },
      {
        title: "Optimasi judul & deskripsi",
        description:
          "Listing yang lebih mudah ditemukan di pencarian Shopee dan lebih meyakinkan.",
      },
      {
        title: "Draf konten & skrip live TikTok",
        description:
          "Ide video pendek dan naskah live yang tinggal kamu rekam dan sesuaikan.",
      },
      {
        title: "Balasan chat otomatis",
        description:
          "Pertanyaan berulang terjawab dalam hitungan detik; komplain tetap diteruskan ke manusia.",
      },
      {
        title: "Laporan mingguan yang simpel",
        description:
          "Apa yang diubah, dan apa dampaknya ke kunjungan, chat, dan penjualan.",
      },
    ],
  },
] as const;

export const workflowSteps = [
  {
    title: "Pilih jenjang, mapel & CP",
    description:
      "Isi kelas/fase, mata pelajaran, CP, topik, jumlah pertemuan, dan kurikulum yang dipakai sekolahmu.",
  },
  {
    title: "AI susun paket lengkap",
    description:
      "Modul ajar, ATP, KKTP, LKPD, dan asesmen berkunci disusun dalam satu paket yang saling nyambung.",
  },
  {
    title: "Kamu review & edit",
    description:
      "Periksa CP, level, dan kesesuaian kelas. Ubah dulu sebelum dipakai. Tidak ada yang terbit otomatis.",
  },
  {
    title: "Export & pakai di kelas",
    description:
      "Export Word, PPT, dan Excel yang rapi, dan simpan sebagai template untuk pertemuan berikutnya.",
  },
] as const;

export const principles = [
  {
    title: "Manusia tetap yang memutuskan",
    description:
      "AI menyusun dan menyarankan, kamu yang menyetujui. Tidak ada nilai siswa atau perubahan toko yang jalan otomatis tanpa pemeriksaan.",
    icon: "people",
  },
  {
    title: "Mengikuti kurikulum resmi",
    description:
      "Perangkat mengikuti struktur CP, TP, ATP, dan KKTP. Kalau CP tidak ditemukan, tool bilang terus terang, tidak mengarang.",
    icon: "book",
  },
  {
    title: "Data kamu, milik kamu",
    description:
      "Data kelas tidak dipakai melatih model untuk pihak lain tanpa izin. Privasi dijaga sejak hari pertama.",
    icon: "lock",
  },
  {
    title: "Harga yang masuk akal untuk guru",
    description:
      "Dibangun untuk guru Indonesia: mulai gratis, naik kelas hanya saat manfaatnya sudah terasa.",
    icon: "price",
  },
] as const;

export const pricingPlans = {
  guru: [
    {
      name: "Gratis",
      audience: "Untuk guru yang mau coba dulu",
      price: "Rp0",
      period: " / selamanya",
      features: ["3 dokumen per bulan", "Modul ajar & LKPD dasar", "Export Word"],
      action: "Mulai Gratis",
      subject: "Daftar%20Guru%20AI%20Gratis",
    },
    {
      name: "Pro Guru",
      audience: "Untuk guru dengan beban administrasi penuh",
      price: "Rp49rb",
      period: " / bulan",
      features: [
        "Dokumen tanpa batas",
        "Paket lengkap: modul, ATP, KKTP, LKPD, asesmen berkunci",
        "Export Word, PPT & Excel",
        "Template premium per mata pelajaran",
      ],
      action: "Pilih Pro Guru",
      subject: "Daftar%20Guru%20AI%20Pro",
      featured: true,
    },
    {
      name: "Paket Sekolah",
      audience: "Untuk sekolah & yayasan",
      price: "Rp499rb",
      period: " / bulan",
      features: [
        "Akun untuk seluruh guru",
        "Template khusus format sekolah",
        "Bank soal bersama",
        "Setup & pendampingan awal",
      ],
      action: "Hubungi Kami",
      subject: "Tanya%20Paket%20Sekolah%20Guru%20AI",
    },
  ],
} as const;

export const faqs = [
  {
    question: "Apakah hasil Guru AI bisa langsung dipakai mengajar?",
    answer:
      "Bisa, setelah kamu review. AI menyusun draf lengkap mengikuti struktur kurikulum dan Pembelajaran Mendalam, tapi guru tetap wajib memeriksa kesesuaian dengan karakter siswa dan kondisi kelasnya. Anggap AI sebagai asisten penyusun draf tercepatmu, bukan pengganti penilaian profesional.",
  },
  {
    question: "Apakah Guru AI hanya untuk Informatika dan TKJ?",
    answer:
      "Tidak. Informatika dan TKJ hanya contoh awal yang sudah jadi. Mesinnya memakai CP dan template per jenjang dan fase, sehingga bisa dipakai untuk semua mata pelajaran SD–SMK. Pilot berikutnya justru menguji guru mapel lain untuk memastikan formatnya pas.",
  },
  {
    question: "Bagaimana kalau CP saya tidak ada atau kurikulum sekolah saya berbeda?",
    answer:
      "Pilih atau tempel CP resmi yang dipakai sekolahmu, dan pilih kurikulumnya, misalnya Kurikulum Merdeka atau Pembelajaran Mendalam. Kalau CP tidak ditemukan, tool akan bilang terus terang dan memintamu mengisi CP-nya, bukan mengarang CP baru. Format sekolah juga bisa disesuaikan.",
  },
  {
    question: "Saya tidak paham teknologi. Apakah tetap bisa pakai?",
    answer:
      "Bisa. Target setup awal kami satu hari, dengan pendampingan sampai hasil pertamamu keluar. Kamu cukup bisa membuka email dan dokumen — sisanya kami pandu langkah demi langkah.",
  },
  {
    question: "Bagaimana cara membayar dan berhenti berlangganan?",
    answer:
      "Pembayaran per bulan lewat transfer atau e-wallet, dikonfirmasi saat kamu mulai. Tidak ada kontrak jangka panjang: berhenti cukup dengan tidak memperpanjang bulan berikutnya, dan datamu tetap milikmu.",
  },
  {
    question: "LeebLabs Studio itu apa, dan siapa di baliknya?",
    answer:
      "LeebLabs adalah studio aplikasi AI independen yang berbasis di Pekanbaru, Riau. Fokus utama kami saat ini adalah Guru AI: membantu guru menyiapkan perangkat pembelajaran sesuai kurikulum. Seller AI direncanakan sebagai fase berikutnya.",
  },
] as const;

export const navigationLinks = [
  { label: "Layanan", href: "#layanan" },
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "Paket", href: "#paket" },
  { label: "FAQ", href: "#faq" },
] as const;

export const emailLink = (subject?: string) =>
  `mailto:halo@leeblabs.ai.id${subject ? `?subject=${subject}` : ""}`;
