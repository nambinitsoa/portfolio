import { useLanguage } from "../context/LanguageContext";
import { FaBriefcase } from "react-icons/fa"; // Icône ajoutée
import "./Experience.css";

export default function Experience() {
  const { language } = useLanguage();

  const experiences = language === "fr"
    ? [
        {
          title: "Stage L3 - AUXIMAD",
          subtitle: "Plateforme intelligente de gestion de transport chez AUXIMAD",
          date: "26 mai 2025 – 17 octobre 2025",
          description:
            "Conception d’une plateforme de gestion de transport permettant la centralisation des données, l’optimisation des trajets et l’amélioration de la gestion des réservations.",
        },
        {
          title: "Stage L2 - AUXIMAD",
          subtitle: "Mise à jour et amélioration du site web d’AUXIMAD",
          date: "21 octobre 2024 – 20 décembre 2024",
          description:
            "Stage académique portant sur la mise à jour du site web d’AUXIMAD. Amélioration du design, de la navigation et de la compatibilité mobile afin d’augmenter la visibilité et l’accessibilité du site.",
        },
        {
          title: "Stage L1 – CIDST",
          subtitle: "Importance des bases de données",
          date: "5 juin 2023 – 28 juillet 2023",
          description:
            "Découverte de la gestion et du rôle des bases de données dans les systèmes informatiques.",
        },
      ]
    : [
        {
          title: "L3 Internship - AUXIMAD",
          subtitle: "Smart transport management platform at AUXIMAD",
          date: "May 26, 2025 – October 17, 2025",
          description:
            "Design and development of a transport management platform enabling data centralization, route optimization, and improved reservation management.",
        },
        {
          title: "L2 Internship - AUXIMAD",
          subtitle: "Website update and improvement",
          date: "October 21, 2024 – December 20, 2024",
          description:
            "Academic internship focused on updating the AUXIMAD website. Improved design, navigation, and mobile compatibility to increase visibility and accessibility.",
        },
        {
          title: "L1 Internship – CIDST",
          subtitle: "Importance of databases",
          date: "June 5, 2023 – July 28, 2023",
          description:
            "Introduction to database management and understanding their role in information systems.",
        },
      ];

  return (
    <section
      id="experience"
      className="experience-section py-20 bg-white dark:bg-slate-900 transition duration-300"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="experience-title text-center text-4xl font-bold mb-16">
          {language === "fr"
            ? "EXPÉRIENCE PROFESSIONNELLE"
            : "PROFESSIONAL EXPERIENCE"}
        </h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="experience-card">
                {/* Ligne avec icône + titre */}
                <div className="flex items-center gap-3 mb-2">
                  <FaBriefcase className="text-cyan-500 text-xl" />
                  <h3 className="experience-role">{exp.title}</h3>
                </div>
                <h4 className="experience-company">{exp.subtitle}</h4>
                <span className="experience-date">{exp.date}</span>
                <p className="experience-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}