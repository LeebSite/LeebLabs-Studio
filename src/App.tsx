import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Principles } from "./components/Principles";
import { Pricing } from "./components/Pricing";
import { Services } from "./components/Services";
import { WaitlistForm } from "./components/WaitlistForm";
import { Workflow } from "./components/Workflow";

export default function App() {
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
