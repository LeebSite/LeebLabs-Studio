import { audiences, emailLink } from "../data/siteContent";

export function Hero() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero__grid">
          <div>
            <span className="tag">Studio Aplikasi AI &middot; Pekanbaru, Indonesia</span>
            <h1>
              AI yang benar-benar <em>kerja</em> di workflow kamu.
            </h1>
            <p className="hero__sub">
              LeebLabs Studio membangun alat AI yang menyelesaikan pekerjaan nyata — bukan
              sekadar chatbot. Dua fokus kami saat ini: membantu <strong>guru</strong>{" "}
              menyiapkan perangkat pembelajaran dalam menit, dan membantu{" "}
              <strong>seller online</strong> menaikkan penjualan di Shopee &amp; TikTok Shop.
            </p>
            <div className="hero__cta">
              <a className="btn btn--primary" href="#layanan">
                Lihat Layanan
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
              <a
                className="btn btn--ghost"
                href={emailLink("Gabung%20Waitlist%20LeebLabs")}
              >
                Gabung Waitlist
              </a>
            </div>
            <div className="hero__stats">
              <div>
                <strong>2</strong>
                <span>Layanan fokus: Guru AI &amp; Seller AI</span>
              </div>
              <div>
                <strong>1 hari</strong>
                <span>Target setup awal untuk UMKM</span>
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
    <div className="hero__visual" aria-hidden="true">
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
      <div className="mock mock--seller">
        <div className="mock__head">
          <span className="mock__dot mock__dot--amber" />
          <span>SELLER AI — TREN MINGGU INI</span>
        </div>
        <div className="mock__row">
          <b>Kunjungan toko</b>
          <span className="pill pill--amber">Naik</span>
        </div>
        <div className="mock__row">
          <b>Chat terbalas &lt; 1 menit</b>
          <span className="pill pill--amber">Otomatis</span>
        </div>
        <div className="bars">
          {Array.from({ length: 7 }, (_, index) => (
            <i key={index} className={index === 6 ? "hot" : undefined} />
          ))}
        </div>
      </div>
    </div>
  );
}
