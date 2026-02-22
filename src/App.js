import "./style.css";

import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import Profil from "./sections/Profil";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Formation from "./sections/Formation";
import Projects from "./sections/Projects";
import Languages from "./sections/Languages";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>

        {/* ✅ CORRECTION ICI */}
        <div className="bg-white text-black dark:bg-slate-900 dark:text-white transition duration-300 min-h-screen font-sans">

          <Navbar />
          <Hero />
          <Profil />
          <Skills />
          <Experience />
          <Formation />
          <Projects />
          <Languages />
          <Contact />
          <Footer />

        </div>

      </LanguageProvider>
    </ThemeProvider>
  );
}