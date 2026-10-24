import { useState } from "react";
import { navigationLinks, emailLink } from "../data/siteContent";
import { useTheme } from "../hooks/useTheme";
import { Brand } from "./Brand";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="nav">
      <div className="wrap nav__inner">
        <Brand />
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
        <div className="nav__actions">
          <button
            className="theme-toggle"
            type="button"
            aria-label={`Beralih ke mode ${theme === "dark" ? "terang" : "gelap"}`}
            title={`Beralih ke mode ${theme === "dark" ? "terang" : "gelap"}`}
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
              </svg>
            ) : (
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />
              </svg>
            )}
          </button>
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
        </div>
      </div>
    </header>
  );
}
