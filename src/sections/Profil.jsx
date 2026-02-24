import { useLanguage } from "../context/LanguageContext";
import { FiMapPin, FiPhone, FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import "./Profil.css";

export default function Profil() {
  const { language } = useLanguage();

  const text = {
    fr: {
      title: "PROFIL",
      description:
        "Développeur informatique motivé avec expérience en conception et développement de plateformes web et systèmes de gestion. Expérience en amélioration de sites existants et développement complet d'applications. Passionné par les bases de données et les solutions numériques intelligentes.",
      contact: "CONTACT",
      networks: "RÉSEAUX",
      address: "Lot II I 68 GUB Alarobia Amboniloha",
      cv: "Télécharger CV",
    },
    en: {
      title: "PROFILE",
      description:
        "Motivated software developer with experience in designing and developing web platforms and management systems. Experience in improving existing websites and developing full applications. Passionate about databases and intelligent digital solutions.",
      contact: "CONTACT",
      networks: "NETWORKS",
      address: "Lot II I 68 GUB Alarobia Amboniloha",
      cv: "Download CV",
    },
  };

  return (
    <section
      id="profil"
      className="profil-section py-20 scroll-mt-24 bg-white dark:bg-slate-900 text-black dark:text-white transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="profil-title text-center text-4xl md:text-5xl font-bold mb-12">
          {text[language].title}
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {/* Bloc texte + contacts */}
          <div className="bg-gray-100 dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <p className="text-lg leading-relaxed mb-8 flex-grow">
              {text[language].description}
            </p>

            <div className="space-y-6">
              {/* Contact */}
              <div>
                <h3 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-3 flex items-center gap-2">
                  <span className="w-1 h-6 bg-cyan-500 rounded-full"></span>
                  {text[language].contact}
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center gap-3">
                    <FiPhone className="text-cyan-500" />
                    <span>034 47 796 34</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FiMail className="text-cyan-500" />
                    <a
                      href="mailto:nambinitsoam6@gmail.com"
                      className="hover:text-cyan-600 dark:hover:text-cyan-400 transition"
                    >
                      nambinitsoam6@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <FiMapPin className="text-cyan-500" />
                    <span>{text[language].address}</span>
                  </li>
                </ul>
              </div>

              {/* Réseaux */}
              <div>
                <h3 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-3 flex items-center gap-2">
                  <span className="w-1 h-6 bg-cyan-500 rounded-full"></span>
                  {text[language].networks}
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center gap-3">
                    <FiGithub className="text-cyan-500" />
                    <a
                      href="https://github.com/nambinitsoa"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-cyan-600 dark:hover:text-cyan-400 transition"
                    >
                      GitHub
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <FiLinkedin className="text-cyan-500" />
                    <a
                      href="https://www.linkedin.com/in/michael-nambinitsoa-729567349/"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-cyan-600 dark:hover:text-cyan-400 transition"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* Photo */}
          <div className="flex items-center justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800"
                alt="Portrait"
                className="relative rounded-2xl w-full h-auto object-cover shadow-xl group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}