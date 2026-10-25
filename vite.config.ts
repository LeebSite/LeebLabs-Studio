import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { faqs } from "./src/data/siteContent";

const structuredDataPlugin = {
  name: "leeblabs-structured-data",
  transformIndexHtml(html: string) {
    const description = html.match(
      /<meta\s+name="description"\s+content="([^"]*)"\s*\/?>/i,
    )?.[1];

    if (!description) {
      throw new Error("Homepage meta description is required for structured data.");
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          name: "LeebLabs Studio",
          url: "https://leeblabs.ai.id/",
          description,
          areaServed: "ID",
        },
        {
          "@type": "WebSite",
          url: "https://leeblabs.ai.id/",
          name: "LeebLabs Studio",
          inLanguage: "id",
        },
        {
          "@type": "FAQPage",
          mainEntity: faqs.map(({ question, answer }) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: {
              "@type": "Answer",
              text: answer,
            },
          })),
        },
      ],
    };

    const json = JSON.stringify(structuredData).replace(/</g, "\\u003c");
    return html.replace("<!-- seo-structured-data -->", `<script type="application/ld+json">${json}</script>`);
  },
};

export default defineConfig({
  plugins: [react(), structuredDataPlugin],
  css: {
    postcss: {
      plugins: [],
    },
  },
});
