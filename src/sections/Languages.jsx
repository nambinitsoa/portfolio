import { useLanguage } from "../context/LanguageContext";
import { FaGlobe } from "react-icons/fa"; // Icône de globe pour les langues
import "./Languages.css";

export default function Languages() {
  const { language } = useLanguage();

  const languages = language === "fr"
    ? [
        {
          code: "MG",
          name: "Malagasy",
          levelText: "Langue maternelle",
          level: 100,
        },
        {
          code: "FR",
          name: "Français",
          levelText: "Courant",
          level: 80,
        },
        {
          code: "EN",
          name: "Anglais",
          levelText: "Intermédiaire",
          level: 60,
        },
      ]
    : [
        {
          code: "MG",
          name: "Malagasy",
          levelText: "Native",
          level: 100,
        },
        {
          code: "FR",
          name: "French",
          levelText: "Fluent",
          level: 80,
        },
        {
          code: "EN",
          name: "English",
          levelText: "Intermediate",
          level: 60,
        },
      ];

  return (
    <section id="languages" className="languages-section py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="languages-title text-center text-4xl font-bold mb-16">
          {language === "fr" ? "LANGUES" : "LANGUAGES"}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {languages.map((lang, index) => (
            <div key={index} className="language-card">
              {/* Ligne avec icône, nom et niveau */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <FaGlobe className="text-cyan-500" />
                  <span className="language-name">
                    {lang.code} — {lang.name}
                  </span>
                </div>
                <span className="language-level">
                  {lang.levelText} ({lang.level}%)
                </span>
              </div>

              <div className="language-bar">
                <div
                  className="language-fill"
                  style={{ width: lang.level + "%" }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}