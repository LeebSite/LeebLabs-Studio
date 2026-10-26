export type SeoIntent = "beli/bantuan" | "contoh" | "panduan";

export type SeoContentPlan = {
  slug: string;
  keyword: string;
  intent: SeoIntent;
  title: string;
  metaDescription: string;
  h1: string;
  outline: string[];
};

export const seoContent: SeoContentPlan[] = [
  {
    slug: "/panduan/cara-membuat-atp-dari-cp",
    keyword: "cara membuat ATP dari CP",
    intent: "panduan",
    title: "Cara Membuat ATP dari CP Resmi secara Bertahap",
    metaDescription:
      "Pelajari cara membuat ATP dari CP resmi, menyusun urutan tujuan per pertemuan, dan meninjau alurnya sebelum digunakan. CP tetap dipilih atau ditempel guru.",
    h1: "Cara Membuat ATP dari CP Resmi",
    outline: [
      "Pengertian CP dan ATP secara umum",
      "Memilih atau menempel CP resmi sesuai fase",
      "Menurunkan tujuan pembelajaran dari CP pilihan",
      "Mengurutkan tujuan per pertemuan",
      "Checklist guru untuk meninjau ATP",
      "Kesalahan umum saat menyusun alur",
    ],
  },
  {
    slug: "/panduan/cara-menurunkan-cp-menjadi-tp",
    keyword: "cara menurunkan CP menjadi TP",
    intent: "panduan",
    title: "Cara Menurunkan CP Menjadi TP untuk Pembelajaran",
    metaDescription:
      "Panduan menurunkan CP menjadi TP dengan membaca kompetensi dan lingkup materi pada dokumen resmi, lalu memeriksa tujuan agar sesuai fase dan kebutuhan kelas.",
    h1: "Cara Menurunkan CP Menjadi TP",
    outline: [
      "Hubungan CP dan TP secara umum",
      "Memeriksa dokumen CP resmi yang digunakan",
      "Mengenali kompetensi dan lingkup materi",
      "Merumuskan tujuan dengan bahasa yang terukur",
      "Memastikan TP sesuai fase dan kondisi kelas",
      "Checklist review guru sebelum melanjutkan ke ATP",
    ],
  },
  {
    slug: "/panduan/cara-menyusun-atp-yang-urut",
    keyword: "cara menyusun ATP yang urut",
    intent: "panduan",
    title: "Cara Menyusun ATP yang Urut dan Mudah Ditinjau",
    metaDescription:
      "Pelajari cara menyusun ATP yang urut dari CP dan TP resmi, mengatur tujuan per pertemuan, lalu meninjau alur agar realistis untuk waktu belajar di kelas.",
    h1: "Cara Menyusun ATP yang Urut",
    outline: [
      "Fungsi ATP dalam perangkat pembelajaran",
      "Memulai dari CP resmi dan TP yang telah ditinjau",
      "Mengurutkan tujuan berdasarkan kebutuhan belajar",
      "Membagi tujuan ke pertemuan yang tersedia",
      "Memeriksa prasyarat dan kesinambungan alur",
      "Kesalahan umum dan checklist review guru",
    ],
  },
  {
    slug: "/panduan/cara-membuat-kktp-dari-tp",
    keyword: "cara membuat KKTP dari TP",
    intent: "panduan",
    title: "Cara Membuat KKTP dari Tujuan Pembelajaran",
    metaDescription:
      "Pahami cara menyusun KKTP dari TP yang dipilih, menyiapkan kriteria ketercapaian, dan meninjau asesmen agar selaras tanpa mengarang capaian kurikulum.",
    h1: "Cara Membuat KKTP dari TP",
    outline: [
      "Pengertian KKTP dan hubungannya dengan TP",
      "Memeriksa tujuan pembelajaran yang akan diukur",
      "Menyusun kriteria ketercapaian yang dapat diamati",
      "Memilih bukti belajar dan bentuk asesmen",
      "Meninjau keselarasan kriteria, TP, dan asesmen",
      "Checklist guru sebelum KKTP digunakan",
    ],
  },
  {
    slug: "/panduan/cp-tp-atp-kktp",
    keyword: "alur CP TP ATP KKTP",
    intent: "panduan",
    title: "Alur CP ke TP, ATP, dan KKTP yang Nyambung | LeebLabs",
    metaDescription:
      "Penjelasan alur CP ke TP, ATP, dan KKTP yang saling nyambung untuk guru SD-SMK, lengkap dengan checklist review praktis sebelum perangkat dipakai di kelas.",
    h1: "Dari CP ke TP, ATP, sampai KKTP: Satu Alur yang Nyambung",
    outline: [
      "Definisi CP, TP, ATP, dan KKTP untuk guru",
      "Memilih atau menempel CP resmi",
      "Menurunkan TP dari CP yang digunakan",
      "Mengurutkan ATP per pertemuan",
      "Menyusun KKTP dan asesmen yang selaras",
      "Checklist review guru dan kesalahan umum",
    ],
  },
  {
    slug: "/contoh-modul-ajar-informatika-fase-e",
    keyword: "contoh modul ajar Informatika Fase E",
    intent: "contoh",
    title: "Contoh Modul Ajar Informatika Fase E",
    metaDescription:
      "Rencanakan contoh modul ajar Informatika Fase E dari paket yang sudah dibuat dan diuji, dengan alur belajar yang guru periksa sebelum dipakai di kelas.",
    h1: "Contoh Modul Ajar Informatika Fase E",
    outline: [
      "Contoh diambil dari paket yang sudah dibuat dan diuji, bukan dikarang. Jika paket untuk mapel itu belum ada, halaman ini JANGAN dipublikasikan sampai paketnya ada.",
      "Jenjang dan fase sasaran dokumen",
      "Struktur modul dan bagian yang perlu ditinjau guru",
      "Cara memastikan CP yang dipakai adalah CP resmi pilihan guru",
      "Checklist kesesuaian kegiatan, tujuan, dan asesmen",
      "Batasan penggunaan contoh dan penyesuaian kelas",
    ],
  },
  {
    slug: "/contoh-atp-informatika-fase-e",
    keyword: "contoh ATP Informatika Fase E",
    intent: "contoh",
    title: "Contoh ATP Informatika Fase E",
    metaDescription:
      "Rencanakan halaman contoh ATP Informatika Fase E dari paket yang sudah diuji, beserta cara guru meninjau urutan tujuan dan CP resmi yang digunakan di kelas.",
    h1: "Contoh ATP Informatika Fase E",
    outline: [
      "Contoh diambil dari paket yang sudah dibuat dan diuji, bukan dikarang. Jika paket untuk mapel itu belum ada, halaman ini JANGAN dipublikasikan sampai paketnya ada.",
      "Konteks fase dan paket sumber contoh",
      "Struktur ATP yang akan ditampilkan setelah diverifikasi",
      "Cara memeriksa CP resmi pilihan guru",
      "Checklist urutan tujuan dan pembagian pertemuan",
      "Catatan review dan penyesuaian oleh guru",
    ],
  },
  {
    slug: "/contoh-kktp-informatika-kelas-x",
    keyword: "contoh KKTP Informatika kelas X",
    intent: "contoh",
    title: "Contoh KKTP Informatika Kelas X",
    metaDescription:
      "Siapkan halaman contoh KKTP Informatika kelas X dari paket yang sudah diuji, dengan panduan guru untuk menilai kriteria dan keselarasan asesmen yang digunakan.",
    h1: "Contoh KKTP Informatika Kelas X",
    outline: [
      "Contoh diambil dari paket yang sudah dibuat dan diuji, bukan dikarang. Jika paket untuk mapel itu belum ada, halaman ini JANGAN dipublikasikan sampai paketnya ada.",
      "Paket sumber dan konteks kelas contoh",
      "Struktur kriteria ketercapaian dari paket sumber",
      "Cara guru mencocokkan kriteria dengan TP resmi pilihannya",
      "Memeriksa bukti belajar dan asesmen terkait",
      "Checklist penyesuaian untuk kondisi kelas",
    ],
  },
  {
    slug: "/contoh-lkpd-jaringan-komputer-smk",
    keyword: "LKPD jaringan komputer SMK",
    intent: "contoh",
    title: "LKPD Jaringan Komputer untuk SMK",
    metaDescription:
      "Rencanakan halaman LKPD jaringan komputer SMK dari paket yang sudah dibuat dan diuji, agar guru dapat meninjau instruksi, tujuan, dan kebutuhan kelas.",
    h1: "LKPD Jaringan Komputer untuk SMK",
    outline: [
      "Contoh diambil dari paket yang sudah dibuat dan diuji, bukan dikarang. Jika paket untuk mapel itu belum ada, halaman ini JANGAN dipublikasikan sampai paketnya ada.",
      "Konteks jenjang dan paket sumber",
      "Struktur lembar kerja yang siap ditinjau guru",
      "Cara mencocokkan kegiatan dengan CP resmi pilihan",
      "Checklist instruksi, tujuan, dan asesmen",
      "Pertimbangan fasilitas dan penyesuaian kelas",
    ],
  },
  {
    slug: "/contoh-modul-ajar-tkj-jaringan",
    keyword: "contoh modul ajar TKJ jaringan",
    intent: "contoh",
    title: "Contoh Modul Ajar TKJ Jaringan",
    metaDescription:
      "Siapkan halaman contoh modul ajar TKJ jaringan dari paket yang sudah diuji, dengan struktur yang dapat diperiksa sebelum digunakan oleh guru SMK di kelas.",
    h1: "Contoh Modul Ajar TKJ Jaringan",
    outline: [
      "Contoh diambil dari paket yang sudah dibuat dan diuji, bukan dikarang. Jika paket untuk mapel itu belum ada, halaman ini JANGAN dipublikasikan sampai paketnya ada.",
      "Konteks paket dan jenjang sasaran",
      "Bagian modul yang perlu ditinjau guru",
      "Memilih CP resmi yang digunakan sekolah",
      "Checklist konsistensi tujuan, kegiatan, dan asesmen",
      "Catatan adaptasi untuk kelas dan fasilitas berbeda",
    ],
  },
  {
    slug: "/layanan/jasa-pembuatan-modul-ajar-guru",
    keyword: "jasa pembuatan modul ajar guru",
    intent: "beli/bantuan",
    title: "Jasa Pembuatan Modul Ajar untuk Guru",
    metaDescription:
      "Kenali bantuan penyusunan modul ajar Guru AI untuk guru SD–SMK, dari data kelas dan CP pilihan hingga draf yang dapat ditinjau dan diedit sebelum dipakai.",
    h1: "Bantuan Pembuatan Modul Ajar untuk Guru",
    outline: [
      "Kebutuhan guru dalam menyiapkan modul ajar",
      "Informasi kelas dan CP resmi yang disiapkan guru",
      "Bagian modul yang dapat disusun dalam satu paket",
      "Tahapan review dan edit oleh guru",
      "Pilihan paket yang masih berstatus ilustrasi",
      "Cara bergabung dengan waitlist Guru AI",
    ],
  },
  {
    slug: "/layanan/bantuan-perangkat-ajar-smk",
    keyword: "bantuan perangkat ajar SMK",
    intent: "beli/bantuan",
    title: "Bantuan Perangkat Ajar untuk Guru SMK",
    metaDescription:
      "Pelajari alur bantuan perangkat ajar untuk guru SMK: masukkan fase, mapel, CP resmi, topik, dan pertemuan, lalu review paket sebelum digunakan di kelas.",
    h1: "Bantuan Perangkat Ajar untuk Guru SMK",
    outline: [
      "Jenis perangkat ajar dalam paket Guru AI",
      "Data pembelajaran yang perlu disiapkan",
      "Menggunakan CP resmi sesuai kurikulum sekolah",
      "Alur penyusunan dan review guru",
      "Pilihan paket dan keterangan harga ilustrasi",
      "Langkah bergabung dengan waitlist",
    ],
  },
  {
    slug: "/contoh/template-modul-ajar-word-kurikulum-merdeka",
    keyword: "template modul ajar Word kurikulum merdeka",
    intent: "contoh",
    title: "Template Modul Ajar Word Kurikulum Merdeka",
    metaDescription:
      "Rencanakan template modul ajar Word Kurikulum Merdeka dari paket yang sudah dibuat dan diuji, dengan ruang bagi guru untuk menyesuaikan format sekolah.",
    h1: "Template Modul Ajar Word Kurikulum Merdeka",
    outline: [
      "Contoh diambil dari paket yang sudah dibuat dan diuji, bukan dikarang. Jika paket untuk mapel itu belum ada, halaman ini JANGAN dipublikasikan sampai paketnya ada.",
      "Struktur berkas Word yang akan ditampilkan",
      "Bagian yang dapat disesuaikan dengan format sekolah",
      "Memastikan CP dan kurikulum berasal dari pilihan resmi guru",
      "Checklist sebelum dokumen digunakan",
      "Cara memperoleh template setelah paket diverifikasi",
    ],
  },
  {
    slug: "/contoh/perangkat-ajar-informatika-satu-semester",
    keyword: "perangkat ajar lengkap Informatika 1 semester",
    intent: "contoh",
    title: "Perangkat Ajar Informatika untuk Satu Semester",
    metaDescription:
      "Rencanakan contoh perangkat ajar Informatika satu semester dari paket yang sudah dibuat dan diuji, lalu periksa kelengkapannya sebelum dipakai oleh guru.",
    h1: "Perangkat Ajar Informatika untuk Satu Semester",
    outline: [
      "Contoh diambil dari paket yang sudah dibuat dan diuji, bukan dikarang. Jika paket untuk mapel itu belum ada, halaman ini JANGAN dipublikasikan sampai paketnya ada.",
      "Daftar bagian paket yang akan tersedia",
      "Cara guru memeriksa kesinambungan antar dokumen",
      "Memastikan CP resmi sesuai fase yang dipilih",
      "Checklist jumlah pertemuan dan kecocokan kelas",
      "Batasan contoh dan proses penyesuaian",
    ],
  },
  {
    slug: "/contoh/modul-ajar-kurikulum-merdeka-informatika-kelas-10",
    keyword: "modul ajar kurikulum merdeka Informatika kelas 10",
    intent: "contoh",
    title: "Modul Ajar Informatika Kelas 10",
    metaDescription:
      "Rencanakan contoh modul ajar Informatika kelas 10 dari paket teruji, dengan CP resmi pilihan guru dan review kesesuaian sebelum materi digunakan di kelas.",
    h1: "Modul Ajar Informatika Kelas 10",
    outline: [
      "Contoh diambil dari paket yang sudah dibuat dan diuji, bukan dikarang. Jika paket untuk mapel itu belum ada, halaman ini JANGAN dipublikasikan sampai paketnya ada.",
      "Konteks kelas dan paket sumber yang perlu diuji",
      "Struktur modul ajar yang ditampilkan",
      "Cara guru memilih CP resmi yang digunakan",
      "Checklist kesesuaian tujuan, kegiatan, dan asesmen",
      "Panduan penyesuaian dengan kebutuhan kelas",
    ],
  },
  {
    slug: "/contoh/asesmen-informatika-dengan-kunci-jawaban",
    keyword: "contoh asesmen Informatika beserta kunci jawaban",
    intent: "contoh",
    title: "Contoh Asesmen Informatika dan Kunci Jawaban",
    metaDescription:
      "Siapkan halaman contoh asesmen Informatika dari paket yang sudah diuji, dengan kunci yang ditinjau guru dan keterkaitan pada tujuan pembelajaran di kelas.",
    h1: "Contoh Asesmen Informatika Beserta Kunci Jawaban",
    outline: [
      "Contoh diambil dari paket yang sudah dibuat dan diuji, bukan dikarang. Jika paket untuk mapel itu belum ada, halaman ini JANGAN dipublikasikan sampai paketnya ada.",
      "Bentuk asesmen yang tersedia dalam paket sumber",
      "Keterkaitan asesmen dengan TP pilihan guru",
      "Cara guru meninjau kunci dan rubrik",
      "Checklist tingkat kesulitan dan kecocokan kelas",
      "Catatan adaptasi sebelum digunakan",
    ],
  },
  {
    slug: "/contoh/lkpd-informatika-kelas-x",
    keyword: "LKPD Informatika kelas X siap pakai",
    intent: "contoh",
    title: "LKPD Informatika Kelas X untuk Ditinjau Guru",
    metaDescription:
      "Rencanakan LKPD Informatika kelas X dari paket yang sudah dibuat dan diuji, agar instruksi dan tujuan dapat ditinjau guru sebelum digunakan oleh guru.",
    h1: "LKPD Informatika Kelas X",
    outline: [
      "Contoh diambil dari paket yang sudah dibuat dan diuji, bukan dikarang. Jika paket untuk mapel itu belum ada, halaman ini JANGAN dipublikasikan sampai paketnya ada.",
      "Konteks paket sumber dan kelas sasaran",
      "Struktur lembar kerja yang disediakan",
      "Memeriksa kesesuaian CP dan tujuan pilihan guru",
      "Checklist instruksi, aktivitas, dan asesmen",
      "Penyesuaian LKPD untuk kebutuhan kelas",
    ],
  },
  {
    slug: "/panduan/perbedaan-modul-ajar-kurikulum-merdeka-pembelajaran-mendalam",
    keyword: "perbedaan modul ajar kurikulum merdeka dan pembelajaran mendalam",
    intent: "panduan",
    title: "Modul Ajar dan Pembelajaran Mendalam",
    metaDescription:
      "Pahami hubungan modul ajar, Kurikulum Merdeka, dan Pembelajaran Mendalam secara umum, lalu sesuaikan perangkat dengan kurikulum resmi yang dipakai sekolah.",
    h1: "Modul Ajar, Kurikulum Merdeka, dan Pembelajaran Mendalam",
    outline: [
      "Pengertian modul ajar dan istilah kurikulum secara umum",
      "Menentukan kurikulum yang digunakan sekolah",
      "Mengambil CP dari sumber resmi yang sesuai",
      "Menyesuaikan perangkat dengan pendekatan pembelajaran",
      "Checklist review guru sebelum mengajar",
      "Hindari menyamakan istilah atau mengarang dokumen resmi",
    ],
  },
  {
    slug: "/panduan/cek-cp-informatika-fase-e-resmi",
    keyword: "CP Informatika Fase E",
    intent: "panduan",
    title: "Cara Mengecek CP Informatika Fase E Resmi",
    metaDescription:
      "Pelajari cara mengecek CP Informatika Fase E melalui sumber resmi dan menempelkan dokumen yang dipakai sekolah; panduan ini tidak mengarang isi CP baru.",
    h1: "Cara Mengecek CP Informatika Fase E Resmi",
    outline: [
      "Mengapa guru perlu memakai CP dari sumber resmi",
      "Langkah mencari dokumen CP pada kanal resmi pemerintah",
      "Memeriksa jenjang, fase, mapel, dan versi dokumen",
      "Menyimpan atau menempel CP resmi yang digunakan sekolah",
      "Meminta guru memasukkan CP resmi bila tidak ditemukan",
      "Jangan menulis atau mengarang isi CP pada halaman ini",
    ],
  },
  {
    slug: "/panduan/cara-cepat-membuat-perangkat-ajar-guru",
    keyword: "cara cepat membuat perangkat ajar guru",
    intent: "panduan",
    title: "Cara Cepat Menyusun Perangkat Ajar Guru",
    metaDescription:
      "Susun perangkat ajar dengan alur yang terencana: siapkan CP resmi, tentukan tujuan dan pertemuan, lalu periksa konsistensi seluruh dokumen sebelum dipakai.",
    h1: "Cara Cepat Menyusun Perangkat Ajar Guru",
    outline: [
      "Menyiapkan data kelas, fase, mapel, dan CP resmi",
      "Menentukan topik dan jumlah pertemuan",
      "Menyusun dokumen sebagai satu paket yang saling terhubung",
      "Memeriksa kesesuaian tujuan dan asesmen",
      "Checklist review dan persetujuan guru",
      "Menggunakan template untuk perencanaan berikutnya",
    ],
  },
];
