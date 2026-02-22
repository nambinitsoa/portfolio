import { useLanguage } from "../context/LanguageContext";
import "./Projects.css";

export default function Projects() {

    const { language } = useLanguage();

    const projects = language === "fr"
        ? [
            {
                id: 1,
                title: "Plateforme intelligente de gestion de transport",
                description: [
                    "Conception et développement d’une plateforme complète de gestion de transport.",
                    "Gestion des réservations, plannings, véhicules et chauffeurs.",
                    "Optimisation des trajets avec algorithmes intelligents.",
                    "Modules statistiques, cargaison et rapports dynamiques.",
                ],
                technologies: ["React", "Django", "PostgreSQL"],
            },
            {
                id: 2,
                title: "Système de gestion d’école (Projet Nir’info – en cours)",
                description: [
                    "Gestion complète des élèves et inscriptions.",
                    "Gestion des enseignants et personnel administratif.",
                    "Organisation académique et gestion interne.",
                ],
                technologies: ["PHP", "AJAX", "MySQL"],
            },
        ]
        : [
            {
                id: 1,
                title: "Smart Transport Management Platform",
                description: [
                    "Design and development of a complete transport platform.",
                    "Management of reservations, schedules, vehicles, and drivers.",
                    "Route optimization using intelligent algorithms.",
                    "Statistical and dynamic reporting modules.",
                ],
                technologies: ["React", "Django", "PostgreSQL"],
            },
            {
                id: 2,
                title: "School Management System (Ongoing)",
                description: [
                    "Student and enrollment management.",
                    "Management of teachers and staff.",
                    "Academic organization system.",
                ],
                technologies: ["PHP", "AJAX", "MySQL"],
            },
        ];

    return (
        <section
            id="projects"
            className=" projects-section py-20 bg-white dark:bg-slate-900 transition duration-300"
        >

            <div className="max-w-6xl mx-auto px-6">

                <h2 className="projects-title text-center text-4xl font-bold mb-16">
                    {language === "fr"
                        ? "PROJETS ACADÉMIQUES & PERSONNELS"
                        : "ACADEMIC & PERSONAL PROJECTS"}
                </h2>

                <div className="grid md:grid-cols-2 gap-8">

                    {projects.map((project) => (

                        <div key={project.id} className="project-card">

                            <h3 className="project-name">
                                {project.title}
                            </h3>

                            <ul className="project-description">

                                {project.description.map((item, i) => (
                                    <li key={i}>• {item}</li>
                                ))}

                            </ul>

                            <div className="project-tech">

                                {project.technologies.map((tech) => (
                                    <span key={tech} className="tech-badge">
                                        {tech}
                                    </span>
                                ))}

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}