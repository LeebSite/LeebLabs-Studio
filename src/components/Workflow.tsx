import { workflowSteps } from "../data/siteContent";
import { SectionHeading } from "./Brand";

export function Workflow() {
  return (
    <section className="section section--soft" id="cara-kerja">
      <div className="wrap">
        <SectionHeading tag="Cara Kerja" title="Mulai dalam empat langkah, tanpa ribet.">
          Prosesnya sama untuk kedua layanan — dirancang supaya kamu yang sibuk tetap bisa
          jalan dalam sehari.
        </SectionHeading>
        <div className="steps">
          {workflowSteps.map((step, index) => (
            <div className="step" key={step.title}>
              <span className="step__num">{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
