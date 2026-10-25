import { CheckIcon, SectionHeading } from "./Brand";

const terms = [
  {
    title: "Capaian Pembelajaran (CP)",
    description:
      "Kompetensi pembelajaran yang menjadi acuan. Gunakan atau tempel CP resmi yang berlaku di sekolah.",
  },
  {
    title: "Tujuan Pembelajaran (TP)",
    description:
      "Tujuan belajar yang disusun dengan mengacu pada CP pilihan guru dan konteks kelas.",
  },
  {
    title: "Alur Tujuan Pembelajaran (ATP)",
    description:
      "Urutan TP yang direncanakan untuk membantu pembelajaran berjalan bertahap.",
  },
  {
    title: "Kriteria Ketercapaian Tujuan Pembelajaran (KKTP)",
    description:
      "Kriteria yang membantu guru menilai apakah tujuan pembelajaran telah tercapai.",
  },
];

const steps = [
  "Pilih CP resmi sesuai jenjang, fase, mata pelajaran, dan kurikulum sekolah.",
  "Susun TP berdasarkan CP dan konteks murid tanpa mengubah makna capaian.",
  "Urutkan TP menjadi ATP yang realistis untuk waktu dan jumlah pertemuan.",
  "Turunkan kriteria KKTP dan asesmen yang mengukur tujuan yang sama.",
];

const reviewChecklist = [
  "Apakah CP sesuai dengan fase dan kurikulum yang dipakai sekolah?",
  "Apakah tingkat tujuan sesuai dengan kelas dan kondisi murid?",
  "Apakah langkah pembelajaran realistis untuk waktu yang tersedia?",
  "Apakah asesmen benar-benar mengukur tujuan yang ditulis?",
];

const commonMistakes = [
  "TP terlalu tinggi atau tidak sesuai dengan CP yang dipilih.",
  "ATP tidak urut sehingga alur belajar sulit diikuti.",
  "Asesmen tidak mengukur tujuan pembelajaran yang ditulis.",
];

export function PanduanAlur() {
  return (
    <section className="section">
      <div className="wrap">
        <SectionHeading tag="Panduan Guru" title="Alur CP ke TP ke ATP ke KKTP">
          Kenali hubungan antarbagian perangkat ajar dan tinjau kembali setiap dokumen
          menggunakan CP resmi dari sekolah.
        </SectionHeading>
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
        <div className="section-head">
          <h3>Empat langkah menyusun perangkat yang selaras</h3>
        </div>
        <div className="steps">
          {steps.map((step, index) => (
            <article className="step" key={step}>
              <span className="step__num">{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </article>
          ))}
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
        <a className="btn btn--primary" href="#waitlist">
          Gabung Waitlist Guru AI
        </a>
      </div>
    </section>
  );
}
