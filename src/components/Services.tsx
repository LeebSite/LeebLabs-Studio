import { services, emailLink } from "../data/siteContent";
import { CheckIcon, SectionHeading } from "./Brand";

export function Services() {
  return (
    <section className="section" id="layanan">
      <div className="wrap">
        <SectionHeading
          tag="Layanan Kami"
          title="Dua layanan, satu tujuan: hemat waktu, naik hasil."
        >
          Kami tidak menjual “AI” sebagai jargon. Setiap layanan menyelesaikan satu pekerjaan
          spesifik, dengan hasil yang bisa kamu periksa sendiri sebelum dipakai.
        </SectionHeading>
        {services.map((service) => (
          <article className="service" id={service.id} key={service.id}>
            <div>
              <span className={`service__badge service__badge--${service.theme}`}>
                Layanan {service.number} — {service.category}
              </span>
              <h3>{service.name}</h3>
              <p className="service__desc">{service.description}</p>
              <p className="service__for">
                Cocok untuk: <b>{service.audience}</b>
              </p>
              <div className="service__actions">
                <a className="btn btn--primary" href={emailLink(service.subject)}>
                  {service.action}
                </a>
                <span className="service__note">{service.note}</span>
              </div>
            </div>
            <ul className="feature-list">
              {service.features.map((feature) => (
                <li key={feature.title}>
                  <span className="check">
                    <CheckIcon />
                  </span>
                  <div>
                    <b>{feature.title}</b>
                    <span>{feature.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
