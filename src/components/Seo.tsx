import { useEffect } from "react";

// Penggunaan:
// 1. Import Seo pada halaman konten baru.
// 2. Render <Seo title="..." description="..." /> di halaman tersebut.
// 3. Isi canonical bila halaman memiliki URL kanonis sendiri.
// 4. ogTitle dan ogDescription opsional, default mengikuti title dan description.
// 5. Metadata halaman awal dipulihkan saat Seo dilepas.
type SeoProps = {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  article?: boolean;
};

type HeadAttribute = "content" | "href";

type PreviousAttribute = {
  element: HTMLMetaElement | HTMLLinkElement;
  attribute: HeadAttribute;
  value: string | null;
  created: boolean;
};

function updateHeadAttribute(
  selector: string,
  tagName: "meta" | "link",
  attribute: HeadAttribute,
  value: string,
): PreviousAttribute {
  let element = document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(selector);
  const created = element === null;

  if (!element) {
    element = document.createElement(tagName);
    if (tagName === "link") {
      element.setAttribute("rel", "canonical");
    } else if (selector.includes("name=")) {
      element.setAttribute("name", selector.match(/name="([^"]+)"/)?.[1] ?? "");
    } else {
      element.setAttribute("property", selector.match(/property="([^"]+)"/)?.[1] ?? "");
    }
    document.head.append(element);
  }

  const previous = {
    element,
    attribute,
    value: element.getAttribute(attribute),
    created,
  };
  element.setAttribute(attribute, value);
  return previous;
}

function restoreHeadAttribute(previous: PreviousAttribute) {
  if (previous.created) {
    previous.element.remove();
  } else if (previous.value === null) {
    previous.element.removeAttribute(previous.attribute);
  } else {
    previous.element.setAttribute(previous.attribute, previous.value);
  }
}

export function Seo({
  title,
  description,
  canonical,
  ogTitle = title,
  ogDescription = description,
  article = false,
}: SeoProps) {
  useEffect(() => {
    const previousTitle = document.title;
    const previousAttributes = [
      updateHeadAttribute('meta[name="description"]', "meta", "content", description),
      updateHeadAttribute('meta[property="og:title"]', "meta", "content", ogTitle),
      updateHeadAttribute(
        'meta[property="og:description"]',
        "meta",
        "content",
        ogDescription,
      ),
    ];

    if (canonical) {
      previousAttributes.push(
        updateHeadAttribute('link[rel="canonical"]', "link", "href", canonical),
        updateHeadAttribute('meta[property="og:url"]', "meta", "content", canonical),
      );
    }

    document.title = title;
    const articleScript = article ? document.createElement("script") : null;

    if (articleScript) {
      articleScript.type = "application/ld+json";
      articleScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        mainEntityOfPage: canonical,
        inLanguage: "id",
      }).replace(/</g, "\\u003c");
      document.head.append(articleScript);
    }

    return () => {
      document.title = previousTitle;
      previousAttributes.reverse().forEach(restoreHeadAttribute);
      articleScript?.remove();
    };
  }, [article, canonical, description, ogDescription, ogTitle, title]);

  return null;
}
