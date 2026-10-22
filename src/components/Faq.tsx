import { useState } from "react";
import { faqs } from "../data/siteContent";
import { SectionHeading } from "./Brand";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section" id="faq">
      <div className="wrap">
        <SectionHeading tag="FAQ" title="Sering ditanyakan" />
        <div className="faq">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <article className={`faq__item${isOpen ? " open" : ""}`} key={faq.question}>
                <button
                  className="faq__q"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  {faq.question}
                  <svg
                    className="chev"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div
                  className="faq__a"
                  id={answerId}
                  aria-hidden={!isOpen}
                  style={{ maxHeight: isOpen ? "500px" : "0" }}
                >
                  <p>{faq.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
