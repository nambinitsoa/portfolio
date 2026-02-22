import { useLanguage } from "../context/LanguageContext";
import "./Formation.css";

export default function Formation() {

    const { language } = useLanguage();

    const formations = language === "fr"
        ? [
            {
                id: 1,
                school: "ESMIA Antananarivo",
                diploma: "Licence en Informatique",
                date: "2022 - 2025",
                description:
                    "Formation spécialisée en développement d'applications, POO, bases de données et conception de systèmes.",
            },
            {
                id: 2,
                school: "Nir’info Ampefiloha Antananarivo",
                diploma: "Formation Développement Web Full Stack",
                date: "Octobre 2025 – Janvier 2026",
                description:
                    "Formation professionnelle avec réalisation d’un projet complet de gestion d’école.",
            },
        ]
        : [
            {
                id: 1,
                school: "ESMIA Antananarivo",
                diploma: "Bachelor's Degree in Computer Science",
                date: "2022 - 2025",
                description:
                    "Specialized training in application development, OOP and databases.",
            },
            {
                id: 2,
                school: "Nir’info Ampefiloha Antananarivo",
                diploma: "Full Stack Web Development Training",
                date: "October 2025 – January 2026",
                description:
                    "Professional full stack training with a complete school management project.",
            },
        ];

    return (
        <section
            id="formation"
            className=" formation-section py-20 bg-white dark:bg-slate-900 transition duration-300"
        >

            <div className="max-w-5xl mx-auto px-6">

                <h2 className="formation-title text-center text-4xl font-bold mb-16">
                    {language === "fr" ? "FORMATION" : "EDUCATION"}
                </h2>

                <div className="formation-timeline">

                    {formations.map((item) => (

                        <div key={item.id} className="formation-item">

                            <div className="formation-dot"></div>

                            <div className="formation-card">

                                <h3 className="formation-school">
                                    {item.school}
                                </h3>

                                <h4 className="formation-diploma">
                                    {item.diploma}
                                </h4>

                                <span className="formation-date">
                                    {item.date}
                                </span>

                                <p className="formation-description">
                                    {item.description}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}