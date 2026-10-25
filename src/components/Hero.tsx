import { audiences } from "../data/siteContent";

export function Hero() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero__grid">
          <div>
            <span className="tag">Fokus: Guru AI</span>
            <h1>
              Perangkat ajar lengkap, sesuai kurikulum, tanpa lembur administrasi.
            </h1>
            <p className="hero__sub">
              LeebLabs Studio membantu guru SD–SMK menyiapkan perangkat pembelajaran sesuai
              Kurikulum Merdeka dan Pembelajaran Mendalam: dari CP ke TP, ATP, KKTP, modul
              ajar, LKPD, asesmen berkunci, sampai export Word, PPT, dan Excel. Kamu yang
              review dan approve sebelum dipakai.
            </p>
            <div className="hero__cta">
              <a className="btn btn--primary" href="#layanan">
                Lihat Guru AI
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </a>
              <a className="btn btn--ghost" href="#waitlist">
                Gabung Waitlist
              </a>
            </div>
            <div className="hero__stats">
              <div>
                <strong>Semua mapel</strong>
                <span>Guru SD–SMK, semua mata pelajaran</span>
              </div>
              <div>
                <strong>1 paket</strong>
                <span>Modul + ATP + KKTP + LKPD + asesmen</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Human-in-the-loop, kamu yang approve</span>
              </div>
            </div>
          </div>
          <ProductPreview />
        </div>
      </section>
      <div className="audience">
        <div className="wrap audience__inner">
          {audiences.map((audience) => (
            <span key={audience}>{audience}</span>
          ))}
        </div>
      </div>
    </>
  );
}

function ProductPreview() {
  return (
    <div className="hero__visual" style={{ gridTemplateColumns: "1fr" }}>
      <article className="hero__product hero__product--guru">
        <div className="hero__portrait hero__portrait--guru">
          <span className="hero__portrait-shadow" aria-hidden="true" />
          <img
            src={new URL("../public/hero-guru-sama-ukuran.webp", import.meta.url).href}
            alt="Ilustrasi guru perempuan menyiapkan perangkat ajar menggunakan tablet"
            width="1024"
            height="1024"
          />
        </div>
        <div className="mock mock--guru">
          <div className="mock__head">
            <span className="mock__dot" />
            <span>GURU AI — PERANGKAT AJAR</span>
          </div>
          <div className="mock__row">
            <b>Modul Ajar — Informatika X</b>
            <span className="pill pill--ok">Siap</span>
          </div>
          <div className="mock__row">
            <b>ATP &amp; KKTP Fase E</b>
            <span className="pill pill--ok">Siap</span>
          </div>
          <div className="mock__row">
            <b>LKPD + Kunci Jawaban</b>
            <span className="pill pill--ok">Siap</span>
          </div>
          <div className="mock__row">
            <b>Export Word / PPT / Excel</b>
            <span className="pill pill--ok">1 klik</span>
          </div>
        </div>
      </article>
    </div>
  );
}
