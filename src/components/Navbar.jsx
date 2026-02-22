import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const { language, toggleLanguage } = useLanguage();
  const { darkMode, toggleTheme } = useTheme();

  const text = {
    fr: {
      Accueil: "Accueil",
      Profil: "Profil",
      Compétences: "Compétences",
      Expérience: "Expérience",
      Formation: "Formation",
      Projets: "Projets",
      Contact: "Contact",
    },
    en: {
      Accueil: "Home",
      Profil: "Profile",
      Compétences: "Skills",
      Expérience: "Experience",
      Formation: "Education",
      Projets: "Projects",
      Contact: "Contact",
    },
  };

  const links = [
    { key: "Accueil", href: "#hero" },
    { key: "Profil", href: "#profil" },
    { key: "Compétences", href: "#skills" },
    { key: "Expérience", href: "#experience" },
    { key: "Formation", href: "#formation" },
    { key: "Projets", href: "#projects" },
    { key: "Contact", href: "#contact" },
  ];

  return (
    <nav className="navbar fixed w-full z-50 border-b dark:border-slate-800 border-gray-200">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="navbar-logo text-xl font-bold text-cyan-500">
          THN
        </h1>

        <ul className="hidden md:flex flex-row gap-8 text-sm font-medium text-gray-700 dark:text-slate-300">
          {links.map(link => (
            <li key={link.key}>
              <a
                href={link.href}
                className="navbar-link hover:text-cyan-500"
              >
                {text[language][link.key]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">

          <button
            onClick={toggleLanguage}
            className="px-3 py-1 border border-cyan-500 rounded text-cyan-500 hover:bg-cyan-500 hover:text-white transition"
          >
            {language === "fr" ? "EN" : "FR"}
          </button>

          <button
            onClick={toggleTheme}
            className="px-3 py-1 border border-cyan-500 rounded text-cyan-500 hover:bg-cyan-500 hover:text-white transition"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button
            className="navbar-button md:hidden text-2xl text-cyan-500"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t dark:border-slate-800 border-gray-200 fade-in">
          <ul className="flex flex-col items-center py-4 gap-4 text-gray-700 dark:text-slate-300">
            {links.map(link => (
              <li key={link.key}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {text[language][link.key]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}