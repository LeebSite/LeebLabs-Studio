import { useState } from "react";
import { emailLink, pricingPlans } from "../data/siteContent";
import { SectionHeading } from "./Brand";

type ServiceKey = keyof typeof pricingPlans;

export function Pricing() {
  const [activeService, setActiveService] = useState<ServiceKey>("guru");

  return (
    <section className="section section--soft" id="paket">
      <div className="wrap">
        <SectionHeading tag="Paket & Harga" title="Pilih paket sesuai layananmu.">
          Struktur paket dan angka di bawah ini masih <strong>ilustrasi</strong> untuk
          memberi gambaran bentuk layanannya — belum penawaran final. Harga resmi disepakati
          bersama saat konsultasi, menyesuaikan kebutuhanmu.
        </SectionHeading>
        <div className="pricing-toggle" role="tablist" aria-label="Pilih layanan">
          <button
            type="button"
            role="tab"
            id="tab-guru"
            aria-selected={activeService === "guru"}
            aria-controls="plans-guru"
            onClick={() => setActiveService("guru")}
          >
            Guru AI
          </button>
          <button
            type="button"
            role="tab"
            id="tab-seller"
            aria-selected={activeService === "seller"}
            aria-controls="plans-seller"
            onClick={() => setActiveService("seller")}
          >
            Seller AI
          </button>
        </div>
        {(["guru", "seller"] as const).map((service) => (
          <div
            className="plans"
            id={`plans-${service}`}
            role="tabpanel"
            aria-labelledby={`tab-${service}`}
            hidden={activeService !== service}
            key={service}
          >
            {pricingPlans[service].map((plan) => {
              const isFeatured = "featured" in plan && plan.featured;

              return (
                <article
                  className={`plan${isFeatured ? " plan--featured" : ""}`}
                  key={plan.name}
                >
                  <h3>{plan.name}</h3>
                  <p className="plan__who">{plan.audience}</p>
                  <p className="plan__price">
                    {plan.price}
                    <small>{plan.period}</small>
                  </p>
                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <a
                    className={`btn ${isFeatured ? "btn--primary" : "btn--ghost"}`}
                    href={emailLink(plan.subject)}
                  >
                    {plan.action}
                  </a>
                </article>
              );
            })}
          </div>
        ))}
        <p className="pricing-note">
          Ilustrasi paket &amp; harga — bukan penawaran final. Paket direncanakan fleksibel
          per bulan, tanpa kontrak jangka panjang.
        </p>
      </div>
    </section>
  );
}
