import { emailLink, pricingPlans } from "../data/siteContent";
import { SectionHeading } from "./Brand";

export function Pricing() {
  return (
    <section className="section section--soft" id="paket">
      <div className="wrap">
        <SectionHeading tag="Paket & Harga" title="Paket Guru AI">
          Struktur paket dan angka di bawah ini masih <strong>ilustrasi</strong> untuk
          memberi gambaran bentuk layanannya — belum penawaran final. Harga resmi disepakati
          bersama saat konsultasi, menyesuaikan kebutuhanmu.
        </SectionHeading>
        <div className="plans" id="plans-guru">
          {pricingPlans.guru.map((plan) => {
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
        <p className="pricing-note">
          Ilustrasi paket &amp; harga — bukan penawaran final. Paket direncanakan fleksibel
          per bulan, tanpa kontrak jangka panjang.
        </p>
      </div>
    </section>
  );
}
