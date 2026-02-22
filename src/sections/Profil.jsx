import { useLanguage } from "../context/LanguageContext";
import "./Profil.css";

export default function Profil() {
  const { language } = useLanguage();

  const text = {
    fr: {
      title: "PROFIL",
      description:
        "Développeur informatique motivé avec expérience en conception et développement de plateformes web et systèmes de gestion. Expérience en amélioration de sites existants et développement complet d'applications. Passionné par les bases de données et les solutions numériques intelligentes.",
      contact: "CONTACT",
      networks: "Réseaux",
      address: "Lot II I 68 GUB Alarobia Amboniloha",
    },
    en: {
      title: "PROFILE",
      description:
        "Motivated software developer with experience in designing and developing web platforms and management systems. Experience in improving existing websites and developing full applications. Passionate about databases and intelligent digital solutions.",
      contact: "CONTACT",
      networks: "Networks",
      address: "Lot II I 68 GUB Alarobia Amboniloha",
    },
  };

  return (
    <section
      id="profil"
      className=" profil-section py-20 bg-white dark:bg-slate-900 text-black dark:text-white transition duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className=" profil-title text-3xl font-bold mb-10">
          {text[language].title}
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* TEXTE & CONTACT */}
          <div className="rounded-lg p-6 shadow-md bg-gray-100 dark:bg-slate-800 transition duration-300">
            
            <p className="mb-6">
              {text[language].description}
            </p>

            <div className="space-y-4">

              <h3 className="font-semibold text-lg">
                {text[language].contact}
              </h3>

              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p>📞 0344779634</p>
                <p>✉️ nambinitsoam6@gmail.com</p>
                <p>📍 {text[language].address}</p>
              </div>

              <h3 className="font-semibold text-lg mt-6">
                {text[language].networks}
              </h3>

              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p>
                  💻{" "}
                  <a
                    href="https://github.com/nambinitsoa"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 dark:text-cyan-400 hover:underline"
                  >
                    GitHub
                  </a>
                </p>

                <p>
                  🔗{" "}
                  <a
                    href="https://www.linkedin.com/in/michael-nambinitsoa-729567349/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 dark:text-cyan-400 hover:underline"
                  >
                    LinkedIn
                  </a>
                </p>
              </div>

            </div>
          </div>

          {/* PHOTO */}
          <div className="bg-gray-200 dark:bg-slate-700 rounded-lg p-6 flex justify-center items-center transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800"
              alt="Profil"
              className="rounded-lg w-full h-64 object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}