export const audiences = [
  "Guru & sekolah",
  "MGMP & komunitas guru",
  "Seller Shopee",
  "Seller TikTok Shop",
  "UMKM jasa lokal",
];

export const services = [
  {
    id: "guru-ai",
    number: "01",
    category: "Pendidikan",
    name: "Guru AI",
    theme: "guru",
    description:
      "Asisten penyusun perangkat pembelajaran yang nyambung satu sama lain — bukan dokumen acak. Kamu cukup isi mata pelajaran, kelas, dan topik; AI menyusun paket lengkap mengikuti struktur Pembelajaran Mendalam dan kurikulum yang berlaku, lalu kamu review dan edit sebelum dipakai.",
    audience: "guru SD–SMK, MGMP, sekolah & yayasan, bimbel",
    action: "Minta Demo Guru AI",
    subject: "Minta%20Demo%20Guru%20AI",
    note: "Mulai dari paket gratis terbatas",
    features: [
      {
        title: "Modul ajar otomatis",
        description:
          "Tujuan, langkah pembelajaran, dan asesmen tersusun rapi per pertemuan.",
      },
      {
        title: "ATP & KKTP yang konsisten",
        description:
          "Alur tujuan pembelajaran selaras dengan capaian per fase, tidak lompat-lompat.",
      },
      {
        title: "LKPD & bahan ajar siap pakai",
        description:
          "Lembar kerja dan materi ajar mengikuti konteks kelas yang kamu isi.",
      },
      {
        title: "Asesmen lengkap dengan kunci",
        description:
          "Soal pilihan ganda dan uraian beserta kunci jawaban yang terverifikasi.",
      },
      {
        title: "Export Word, PPT & Excel",
        description:
          "Format rapi dan siap edit — langsung bisa dikumpulkan ke sekolah.",
      },
    ],
  },
  {
    id: "seller-ai",
    number: "02",
    category: "E-Commerce",
    name: "Seller AI",
    theme: "seller",
    description:
      "Asisten jualan untuk Shopee & TikTok Shop yang bekerja dari data tokomu sendiri. Dari riset produk yang sedang naik, optimasi listing, sampai balasan chat — semua usulan lewat persetujuanmu dulu. Tanpa trik abu-abu, tanpa risiko akun.",
    audience: "seller UMKM yang sudah berjualan dan mulai kewalahan",
    action: "Minta Audit Toko Gratis",
    subject: "Minta%20Audit%20Toko%20Seller%20AI",
    note: "Audit awal 7–14 hari data toko",
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
    title: "Ceritakan kebutuhanmu",
    description:
      "Konsultasi singkat lewat email: mata pelajaran dan kelasmu, atau kondisi tokomu saat ini.",
  },
  {
    title: "Kami siapkan & susun",
    description:
      "AI menyusun draf pertama — perangkat ajar atau audit toko — berdasarkan konteks yang kamu berikan.",
  },
  {
    title: "Kamu review & approve",
    description:
      "Tidak ada yang terbit atau terpakai sebelum kamu periksa. Kamu tetap pemegang keputusan terakhir.",
  },
  {
    title: "Pakai, ukur, ulangi",
    description:
      "Hasil dipakai langsung, dampaknya dilaporkan berkala, dan sistem makin akurat mengikuti gayamu.",
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
    title: "Ikut aturan main yang berlaku",
    description:
      "Perangkat ajar mengikuti struktur kurikulum resmi; strategi seller mengikuti kebijakan platform. Aman untuk jangka panjang.",
    icon: "book",
  },
  {
    title: "Data kamu, milik kamu",
    description:
      "Data kelas dan data toko tidak dipakai melatih model untuk pihak lain tanpa izin. Privasi dijaga sejak hari pertama.",
    icon: "lock",
  },
  {
    title: "Harga yang masuk akal",
    description:
      "Dibangun untuk guru dan UMKM Indonesia: mulai gratis, naik kelas hanya saat manfaatnya sudah terasa.",
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
  seller: [
    {
      name: "Starter",
      audience: "Untuk 1 toko yang baru naik kelas",
      price: "Rp99rb",
      period: " / bulan",
      features: [
        "1 toko (Shopee atau TikTok Shop)",
        "Riset tren mingguan",
        "Optimasi 10 listing per bulan",
        "Laporan bulanan",
      ],
      action: "Pilih Starter",
      subject: "Daftar%20Seller%20AI%20Starter",
    },
    {
      name: "Pro",
      audience: "Untuk seller aktif multi-platform",
      price: "Rp249rb",
      period: " / bulan",
      features: [
        "2 toko (Shopee + TikTok Shop)",
        "Optimasi listing tanpa batas wajar",
        "Balasan chat otomatis",
        "Draf konten & skrip live mingguan",
        "Laporan mingguan",
      ],
      action: "Pilih Pro",
      subject: "Daftar%20Seller%20AI%20Pro",
      featured: true,
    },
    {
      name: "Business",
      audience: "Untuk brand dengan banyak SKU",
      price: "Custom",
      period: " / hubungi kami",
      features: [
        "Multi-toko & multi-akun",
        "Audit katalog menyeluruh",
        "Prioritas dukungan",
        "Laporan & review berkala bersama tim",
      ],
      action: "Hubungi Kami",
      subject: "Tanya%20Seller%20AI%20Business",
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
    question: "Apakah Seller AI aman untuk akun toko saya?",
    answer:
      "Aman, karena kami bekerja dari data yang kamu berikan atau jalur resmi yang tersedia, dan semua perubahan listing harus lewat persetujuanmu. Kami tidak memakai otomasi yang melanggar kebijakan Shopee atau TikTok Shop — akunmu terlalu berharga untuk dipertaruhkan demi jalan pintas.",
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
      "LeebLabs adalah studio aplikasi AI independen yang berbasis di Pekanbaru, Riau. Kami fokus pada masalah lokal yang spesifik — administrasi guru dan operasional seller online Indonesia — alih-alih membuat chatbot generik untuk semua orang.",
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
