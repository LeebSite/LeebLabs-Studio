import { emailLink } from "../data/siteContent";
import { Brand, HomeAnchor } from "./Brand";

export function Footer({ showCta = true }: { showCta?: boolean }) {
  return (
    <>
      {showCta && (
        <section className="section section--final-cta">
          <div className="wrap">
            <div className="cta">
              <h2>Siap menghemat waktu minggu ini?</h2>
              <p>
                Ceritakan kebutuhanmu lewat email — kami balas dengan rekomendasi layanan dan
                langkah pertama yang konkret, tanpa kewajiban apa pun.
              </p>
              <a
                className="btn btn--primary"
                href={emailLink("Konsultasi%20Gratis%20LeebLabs%20Studio")}
              >
                Konsultasi Gratis via Email
              </a>
            </div>
          </div>
        </section>
      )}
      <footer>
        <div className="wrap">
          <div className="footer__inner">
            <Brand />
            <nav className="footer__links" aria-label="Tautan footer">
              <HomeAnchor href="#guru-ai">Guru AI</HomeAnchor>
              <HomeAnchor href="#seller-ai">Seller AI</HomeAnchor>
              <HomeAnchor href="#cara-kerja">Cara Kerja</HomeAnchor>
              <HomeAnchor href="#paket">Paket</HomeAnchor>
              <a href={emailLink()}>halo@leeblabs.ai.id</a>
            </nav>
          </div>
          <div className="footer__base">
            <span>&copy; 2026 LeebLabs Studio — Pekanbaru, Indonesia.</span>
            <span>
              AI yang kerja di workflow lokal, bukan sekadar bisa ngobrol. LeebLabs Studio
              adalah produk independen dan tidak berafiliasi dengan Kemendikdasmen.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
