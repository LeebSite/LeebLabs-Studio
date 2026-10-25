import { useState, type FormEvent } from "react";
import { SectionHeading } from "./Brand";

export function WaitlistForm() {
  const [role, setRole] = useState("Guru");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const data = new FormData(form);
    data.set("_subject", `Waitlist LeebLabs - ${role}`);
    data.set("_template", "table");
    data.set("_captcha", "false");

    try {
      const res = await fetch("https://formsubmit.co/ajax/halo@leeblabs.ai.id", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error("submit failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="section" id="waitlist">
      <div className="wrap">
        <SectionHeading tag="Waitlist" title="Gabung waitlist LeebLabs Studio.">
          Ceritakan kamu guru atau seller, supaya kami hubungi saat giliran pilot dibuka.
        </SectionHeading>
        <form className="waitlist__form" onSubmit={onSubmit}>
          <input
            type="text"
            name="_honey"
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />
          <label className="waitlist__field">
            Nama lengkap
            <input name="nama" required autoComplete="name" />
          </label>
          <label className="waitlist__field">
            Email
            <input name="email" type="email" required autoComplete="email" />
          </label>
          <label className="waitlist__field">
            WhatsApp (opsional)
            <input name="whatsapp" inputMode="tel" autoComplete="tel" />
          </label>
          <label className="waitlist__field">
            Saya adalah
            <select name="peran" value={role} onChange={(event) => setRole(event.target.value)}>
              <option value="Guru">Guru</option>
              <option value="Seller">Seller Shopee / TikTok Shop</option>
            </select>
          </label>
          <label className="waitlist__field waitlist__field--full">
            Masalah utama yang ingin dibantu AI
            <textarea name="masalah" rows={3} />
          </label>
          <button className="btn btn--primary" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Mengirim..." : "Gabung Waitlist"}
          </button>
          {status === "sent" && (
            <p role="status">
              Terima kasih, kamu sudah masuk waitlist. Kami hubungi lewat email/WhatsApp yang
              kamu isi.
            </p>
          )}
          {status === "error" && (
            <p role="alert">
              Gagal mengirim. Coba lagi, atau email langsung ke halo@leeblabs.ai.id.
            </p>
          )}
          <p className="waitlist__note">
            Hanya untuk keperluan waitlist. Jangan isi data sensitif seperti password atau KTP.
          </p>
        </form>
      </div>
    </section>
  );
}
