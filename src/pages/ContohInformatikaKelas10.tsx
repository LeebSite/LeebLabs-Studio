import { Link } from "react-router-dom";
import { HomeAnchor } from "../components/Brand";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Seo } from "../components/Seo";

const pageTitle = "Contoh Paket Informatika Kelas X Fase E | LeebLabs";
const pageDescription =
  "Contoh paket Informatika Fase E Kelas X SMK yang lengkap dan saling terhubung dari CP hingga asesmen. Tinjau isi paket dan bergabung ke waitlist Guru AI.";

const packageItems = [
  {
    number: "01",
    title: "ATP dan KKTP",
    description:
      "Berisi CP 8 elemen, ATP 32 TP, pemetaan semester/pertemuan, dan KKTP per elemen.",
  },
  {
    number: "02",
    title: "Modul Ajar Deep Learning 8 Elemen",
    description:
      "Setiap elemen memuat 4 pertemuan dengan pola Informasi Umum, CP dan TP, Pemahaman Bermakna, Pertanyaan Pemantik, Kegiatan Mindful-Meaningful-Joyful, Asesmen, dan Refleksi.",
  },
  {
    number: "03",
    title: "Bahan Ajar Siswa 8 Elemen",
    description: "Bahan ajar siswa disusun untuk mendampingi pembelajaran pada 8 elemen.",
  },
  {
    number: "04",
    title: "LKPD dan Proyek PLB",
    description:
      "Berisi 8 LKPD, satu per elemen, serta Lembar Proyek Capstone PLB dan Jobsheet Program AP.",
  },
  {
    number: "05",
    title: "Paket Asesmen dan Bank Soal",
    description:
      "Berisi asesmen diagnostik, kisi-kisi, 40 soal PG (5 per elemen) dan 8 soal uraian, kunci dan pedoman penskoran, rubrik proyek/PLB, serta lembar refleksi.",
  },
  {
    number: "06",
    title: "Template Informatika Excel",
    description:
      "Berisi Program Semester, Daftar Nilai per elemen, Contoh Data Analisis, dan Checklist Rubrik PLB.",
  },
  {
    number: "07",
    title: "PPT Informatika SMK",
    description:
      "Berisi 20 slide tentang peta 8 elemen, prinsip Deep Learning, materi inti tiap elemen, dan proyek capstone.",
  },
];

const elements = [
  {
    semester: "Semester 1",
    code: "BK",
    title: "Berpikir Komputasional",
    meetings: "Pertemuan 1–4",
    project: "Tantangan data perpustakaan dan antrian",
    summary: "Menerapkan strategi algoritmik standar untuk data diskrit bervolume besar.",
  },
  {
    semester: "Semester 1",
    code: "TIK",
    title: "Teknologi Informasi dan Komunikasi",
    meetings: "Pertemuan 5–8",
    project: "Paket dokumen kegiatan sekolah",
    summary:
      "Memanfaatkan berbagai aplikasi secara bersamaan dan optimal, termasuk fitur lanjut aplikasi perkantoran dan otomasinya.",
  },
  {
    semester: "Semester 1",
    code: "SK",
    title: "Sistem Komputer",
    meetings: "Pertemuan 9–12",
    project: "Bedah komputer dan perjalanan satu klik",
    summary:
      "Menjelaskan cara kerja komputer dan komponennya, serta peran sistem operasi dan interaksi perangkat keras, perangkat lunak, dan pengguna.",
  },
  {
    semester: "Semester 1",
    code: "JKI",
    title: "Jaringan Komputer dan Internet",
    meetings: "Pertemuan 13–16",
    project: "Kampanye koneksi aman sekolah",
    summary:
      "Menjelaskan internet dan jaringan lokal, komunikasi data, konektivitas kabel dan nirkabel, serta enkripsi untuk proteksi data.",
  },
  {
    semester: "Semester 2",
    code: "AD",
    title: "Analisis Data",
    meetings: "Pertemuan 17–20",
    project: "Proyek data sekolah menjadi infografis",
    summary:
      "Menjelaskan privasi dan keamanan data, pengumpulan data otomatis, pemodelan data, dan seluruh siklus pengolahan data sampai publikasi.",
  },
  {
    semester: "Semester 2",
    code: "AP",
    title: "Algoritma dan Pemrograman",
    meetings: "Pertemuan 21–24",
    project: "Program utilitas nilai dan data siswa",
    summary:
      "Menerapkan praktik baik pemrograman prosedural terstruktur; paket ini memakai Python.",
  },
  {
    semester: "Semester 2",
    code: "DSI",
    title: "Dampak Sosial Informatika",
    meetings: "Pertemuan 25–28",
    project: "Audit lisensi dan kampanye etika digital",
    summary:
      "Mendeskripsikan sejarah komputer dan tokohnya, hak kekayaan intelektual dan lisensi, serta aspek teknis, hukum, ekonomi, lingkungan, dan sosial produk TIK.",
  },
  {
    semester: "Semester 2",
    code: "PLB",
    title: "Praktik Lintas Bidang Capstone",
    meetings: "Pertemuan 29–32",
    project: "Artefak komputasional untuk masyarakat",
    summary:
      "Bergotong royong dalam tim inklusif mengerjakan proyek informatika sebagai solusi persoalan masyarakat, dari identifikasi sampai komunikasi produk dan proses.",
  },
];

function ContohInformatikaKelas10Content() {
  return (
    <>
      <Seo
        title={pageTitle}
        description={pageDescription}
        canonical="https://leeblabs.ai.id/contoh/informatika-kelas-10"
        article
      />
      <Header />
      <main id="atas">
        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <span className="tag">Contoh Paket</span>
              <h1>Contoh Paket Informatika Kelas X Fase E</h1>
              <p>
                Contoh paket pembelajaran Informatika Fase E untuk Kelas X SMK, disusun
                sebagai rangkaian perangkat yang saling terhubung dari CP hingga asesmen.
              </p>
            </div>

            <section aria-labelledby="ringkasan-contoh">
              <div className="section-head">
                <h2 id="ringkasan-contoh">Ringkasan Contoh Paket</h2>
              </div>
              <div className="steps">
                <article className="step">
                  <h3>Mapel dan sasaran</h3>
                  <p>Informatika, Fase E, Kelas X SMK, mata pelajaran umum.</p>
                </article>
                <article className="step">
                  <h3>Cakupan</h3>
                  <p>8 elemen dan 32 TP, dengan struktur 4 pertemuan untuk setiap elemen.</p>
                </article>
                <article className="step">
                  <h3>Alokasi waktu</h3>
                  <p>8 elemen × 4 pertemuan × 3 JP = 96 JP, tersebar dalam 2 semester.</p>
                </article>
                <article className="step">
                  <h3>Pendekatan</h3>
                  <p>Pembelajaran Mendalam: Berkesadaran, Bermakna, Menggembirakan.</p>
                </article>
              </div>
            </section>

            <section className="section" aria-labelledby="isi-paket-contoh">
              <div className="section-head">
                <h2 id="isi-paket-contoh">Isi Contoh Paket</h2>
              </div>
              <div className="steps">
                {packageItems.map((item) => (
                  <article className="step" key={item.number}>
                    <span className="step__num">{item.number}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="section" aria-labelledby="alur-elemen-contoh">
              <div className="section-head">
                <h2 id="alur-elemen-contoh">Contoh Alur 8 Elemen</h2>
                <p>
                  Urutan semester, rentang pertemuan, dan proyek kunci dalam paket ini.
                </p>
              </div>
              <div className="principles">
                {elements.map((element) => (
                  <article className="principle" key={element.code}>
                    <div>
                      <span className="tag">{element.semester}</span>
                      <h3>
                        {element.code} — {element.title}
                      </h3>
                      <p>
                        <b>{element.meetings}</b>
                      </p>
                      <p>Proyek kunci: {element.project}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="section" aria-labelledby="ringkasan-cp-contoh">
              <div className="section-head">
                <h2 id="ringkasan-cp-contoh">Ringkasan CP per Elemen</h2>
                <p>
                  Berikut ringkasan CP yang dicakup paket. Rincian TP tidak ditampilkan di
                  halaman ini.
                </p>
              </div>
              <div className="principles">
                {elements.map((element) => (
                  <article className="principle" key={element.code}>
                    <div>
                      <h3>
                        {element.code} — {element.title}
                      </h3>
                      <p>{element.summary}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="section" aria-labelledby="disclaimer-contoh">
              <div className="principle">
                <div>
                  <h2 id="disclaimer-contoh">Disclaimer Contoh</h2>
                  <p>
                    Contoh paket ini adalah paket Informatika Fase E Kelas X SMK yang sudah
                    dibuat sebelumnya, bukan dokumen resmi dari sekolah tertentu dan bukan
                    janji bahwa semua mapel akan persis sama. Nama sekolah dan guru di dokumen
                    asli masih placeholder; halaman ini tidak menyebut nama sekolah atau guru
                    tertentu.
                  </p>
                </div>
              </div>
            </section>

            <section className="section section--final-cta">
              <div className="cta">
                <h2>Ingin tahu kabar Guru AI?</h2>
                <p>
                  Bergabung ke waitlist untuk mendapat kabar saat kesempatan pilot tersedia.
                </p>
                <HomeAnchor className="btn btn--primary" href="#waitlist">
                  Gabung Waitlist
                </HomeAnchor>
                <Link className="btn btn--ghost" to="/">
                  Kembali ke homepage
                </Link>
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer showCta={false} />
    </>
  );
}

export function ContohInformatikaKelas10() {
  return <ContohInformatikaKelas10Content />;
}
