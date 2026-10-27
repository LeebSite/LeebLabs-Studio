import { useEffect } from "react";
import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router-dom";
import { ContohInformatikaKelas10 } from "./pages/ContohInformatikaKelas10";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { PanduanAlur } from "./components/PanduanAlur";
import { Principles } from "./components/Principles";
import { Pricing } from "./components/Pricing";
import { Seo } from "./components/Seo";
import { Services } from "./components/Services";
import { WaitlistForm } from "./components/WaitlistForm";
import { Workflow } from "./components/Workflow";

const guideTitle = "Alur CP ke TP, ATP, dan KKTP yang Nyambung | LeebLabs";
const guideDescription =
  "Penjelasan alur CP ke TP, ATP, dan KKTP yang saling nyambung untuk guru SD-SMK, lengkap dengan checklist review praktis sebelum perangkat dipakai di kelas.";

function HomePage() {
  return (
    <>
      <Header />
      <main id="atas">
        <Hero />
        <Services />
        <WaitlistForm />
        <Workflow />
        <Principles />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </>
  );
}

function GuidePage() {
  return (
    <>
      <Seo
        title={guideTitle}
        description={guideDescription}
        canonical="https://leeblabs.ai.id/panduan/cp-tp-atp-kktp"
        article
      />
      <Header />
      <main id="atas">
        <PanduanAlur />
      </main>
      <Footer />
    </>
  );
}

function NotFoundPage() {
  return (
    <>
      <Header />
      <main id="atas" className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="tag">Halaman tidak ditemukan</span>
            <h1>Halaman yang kamu cari tidak tersedia.</h1>
            <p>Kembali ke homepage LeebLabs Studio untuk melihat layanan Guru AI.</p>
          </div>
          <Link className="btn btn--primary" to="/">
            Kembali ke homepage
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

function ScrollToLocation() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const target = hash ? document.getElementById(hash.slice(1)) : null;
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - 66;
        window.scrollTo({ top, behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0 });
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, [hash, pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToLocation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/panduan/cp-tp-atp-kktp" element={<GuidePage />} />
        <Route
          path="/contoh/informatika-kelas-10"
          element={<ContohInformatikaKelas10 />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
