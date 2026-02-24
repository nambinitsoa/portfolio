// Hero.js
import { useLanguage } from "../context/LanguageContext";
import "./Hero.css";
import profileImage from "../assets/images/sary-portfolio.png"; // <-- importer ton image

export default function Hero() {
  const { language } = useLanguage();

  const text = {
    fr: {
      title: "MUHAMAD Gallot Tahiana",
      subtitle: "Développeur Web Full Stack",
      button: "Découvrir mon profil",
    },
    en: {
      title: "MUHAMAD Gallot Tahiana",
      subtitle: "Full Stack Web Developer",
      button: "Discover my profile",
    },
  };

  return (
    <section
  id="hero"
  className="hero-section scroll-mt-24 pt-32 pb-20 max-w-6xl mx-auto px-6"
>
      <div className="hero-container grid md:grid-cols-2 gap-10 items-center">
        <div className="hero-left">
          <h1 className="hero-title text-5xl md:text-6xl font-bold mb-4">
            {text[language].title}
          </h1>

          <h2 className="hero-subtitle text-2xl md:text-3xl mb-8">
            {text[language].subtitle}
          </h2>

          <a href="#profil" className="hero-button">
            {text[language].button}
          </a>
        </div>

        <div className="hero-right flex justify-center">
          <div className="hero-image-container">
            <img
              src={profileImage} // <-- utiliser l'image importée
              alt="MUHAMAD Gallot Tahiana"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}