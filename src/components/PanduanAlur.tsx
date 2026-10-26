import { CheckIcon, HomeAnchor } from "./Brand";

const terms = [
  {
    title: "Capaian Pembelajaran (CP)",
    description:
      "Acuan kompetensi dan lingkup materi yang perlu dicapai murid. Gunakan CP resmi yang berlaku untuk kurikulum dan fase di sekolahmu.",
  },
  {
    title: "Tujuan Pembelajaran (TP)",
    description:
      "Tujuan belajar yang lebih terarah, diturunkan dari CP, dan disesuaikan dengan konteks kelas.",
  },
  {
    title: "Alur Tujuan Pembelajaran (ATP)",
    description:
      "Susunan TP secara bertahap agar urutan belajar sepanjang fase jelas dan dapat direncanakan per pertemuan.",
  },
  {
    title: "Kriteria Ketercapaian Tujuan Pembelajaran (KKTP)",
    description:
      "Kriteria untuk membantu guru menilai ketercapaian TP dengan bukti belajar dan asesmen yang sesuai.",
  },
];

const steps = [
  {
    title: "Pilih atau tempel CP resmi",
    description:
      "Pastikan CP berasal dari sumber resmi dan sesuai dengan kurikulum, mata pelajaran, jenjang, serta fase yang digunakan sekolah.",
  },
  {
    title: "Turunkan TP dari CP itu",
    description:
      "Gunakan CP pilihan sebagai acuan untuk merumuskan tujuan yang jelas, relevan, dan sesuai dengan kondisi kelas.",
  },
  {
    title: "Urutkan ATP per pertemuan",
    description:
      "Susun TP menjadi urutan belajar yang bertahap. Periksa keterkaitannya dan sesuaikan dengan jumlah serta durasi pertemuan.",
  },
  {
    title: "Susun KKTP dan asesmen",
    description:
      "Tentukan kriteria ketercapaian dan asesmen yang mengukur tujuan pembelajaran yang sama.",
  },
];

const reviewChecklist = [
  "Apakah CP sesuai dengan fase dan kurikulum yang dipakai sekolah?",
  "Apakah tingkat tujuan sesuai dengan kelas dan kondisi murid?",
  "Apakah langkah pembelajaran realistis untuk waktu yang tersedia?",
  "Apakah asesmen benar-benar mengukur tujuan yang ditulis?",
];

const commonMistakes = [
  "TP terlalu tinggi atau tidak sesuai dengan CP yang dipilih.",
  "ATP lompat-lompat sehingga alur belajar sulit diikuti.",
  "Asesmen tidak mengukur tujuan pembelajaran yang ditulis.",
];

export function PanduanAlur() {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="tag">Panduan Guru</span>
            <h1>Dari CP ke TP, ATP, sampai KKTP: Satu Alur yang Nyambung</h1>
            <p>
              Panduan ini ditujukan untuk guru SD–SMK yang ingin menyusun perangkat
              pembelajaran dengan tujuan, urutan, dan asesmen yang konsisten. Mulailah dari CP
              resmi yang digunakan sekolah, lalu tinjau setiap bagian sebelum dipakai di kelas.
            </p>
          </div>

          <section aria-labelledby="istilah-panduan">
            <div className="section-head">
              <h2 id="istilah-panduan">Memahami istilah dalam alur</h2>
            </div>
            <div className="principles">
              {terms.map((term) => (
                <article className="principle" key={term.title}>
                  <div>
                    <h3>{term.title}</h3>
                    <p>{term.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="langkah-panduan">
            <div className="section-head">
              <h2 id="langkah-panduan">Empat langkah menyusun alur yang selaras</h2>
            </div>
            <div className="steps">
              {steps.map((step, index) => (
                <article className="step" key={step.title}>
                  <span className="step__num">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="review-panduan">
            <div className="section-head">
              <h2 id="review-panduan">Review sebelum perangkat dipakai</h2>
            </div>
            <div className="principles">
              <article className="principle">
                <div>
                  <h3>Checklist review guru</h3>
                  <ul className="feature-list">
                    {reviewChecklist.map((item) => (
                      <li key={item}>
                        <span className="check">
                          <CheckIcon />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
              <article className="principle">
                <div>
                  <h3>Kesalahan umum yang perlu dihindari</h3>
                  <ul className="feature-list">
                    {commonMistakes.map((item) => (
                      <li key={item}>
                        <span className="check">
                          <CheckIcon />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>
          </section>
        </div>
      </section>
      <section className="section section--final-cta">
        <div className="wrap">
          <div className="cta">
            <h2>Ingin menyusun perangkat ajar dengan alur yang selaras?</h2>
            <p>
              Kenali Guru AI dan bergabung ke waitlist untuk mendapat kabar saat pilot dibuka.
            </p>
            <HomeAnchor className="btn btn--primary" href="#waitlist">
              Gabung Waitlist Guru AI
            </HomeAnchor>
            <HomeAnchor className="btn btn--ghost" href="#guru-ai">
              Lihat layanan Guru AI
            </HomeAnchor>
          </div>
        </div>
      </section>
    </>
  );
}
