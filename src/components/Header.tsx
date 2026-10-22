import { useState } from "react";
import { navigationLinks, emailLink } from "../data/siteContent";
import { Brand } from "./Brand";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="nav">
      <div className="wrap nav__inner">
        <Brand />
        <button
          className="nav__toggle"
          type="button"
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={menuOpen}
          aria-controls="navLinks"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
        <nav
          className={`nav__links${menuOpen ? " open" : ""}`}
          id="navLinks"
          aria-label="Navigasi utama"
        >
          {navigationLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            className="btn btn--primary btn--sm"
            href={emailLink("Konsultasi%20LeebLabs%20Studio")}
            onClick={() => setMenuOpen(false)}
          >
            Mulai Konsultasi
          </a>
        </nav>
      </div>
    </header>
  );
}
