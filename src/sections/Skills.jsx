import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import {
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaTools,
  FaBrain,
  FaProjectDiagram,
} from "react-icons/fa";
import "./Skills.css";

export default function Skills() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState("languages");

  const skillsData = {
    languages: [
      { name: "PHP", level: 85 },
      { name: "Java", level: 80 },
      { name: "Python", level: 75 },
      { name: "C", level: 70 },
      { name: "C#", level: 65 },
      { name: "JavaScript", level: 80 },
    ],
    frameworks: [
      { name: "Symfony", level: 80 },
      { name: "Laravel", level: 75 },
      { name: "React", level: 70 },
      { name: "Django", level: 65 },
    ],
    databases: [
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 70 },
    ],
    tools: [
      { name: "Git", level: 80 },
      { name: "IHM", level: 70 },
      { name: "API", level: 75 },
      { name: "Design Pattern", level: 65 },
    ],
    domains: [
      { name: "Intelligence Artificielle", level: 60 },
      { name: "Cryptographie", level: 70 },
      { name: "Analyse de données", level: 65 },
    ],
    methods: [
      { name: "UML", level: 75 },
      { name: "Méthode Agile", level: 80 },
      { name: "GPI", level: 70 },
    ],
  };

  // Configuration des onglets avec icônes
  const tabs = [
    {
      id: "languages",
      icon: <FaCode />,
      label: language === "fr" ? "Langages" : "Languages",
    },
    {
      id: "frameworks",
      icon: <FaLaptopCode />,
      label: "Frameworks",
    },
    {
      id: "databases",
      icon: <FaDatabase />,
      label: language === "fr" ? "Bases de données" : "Databases",
    },
    {
      id: "tools",
      icon: <FaTools />,
      label: language === "fr" ? "Outils" : "Tools",
    },
    {
      id: "domains",
      icon: <FaBrain />,
      label: language === "fr" ? "Domaines techniques" : "Technical Domains",
    },
    {
      id: "methods",
      icon: <FaProjectDiagram />,
      label: language === "fr" ? "Méthodes et concepts" : "Methods & Concepts",
    },
  ];

  return (
    <section id="skills" className="skills-section py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="skills-title text-center text-4xl font-bold mb-10">
          {language === "fr" ? "COMPÉTENCES" : "SKILLS"}
        </h2>

        {/* Tabs avec icônes */}
        <div className="skills-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`skills-tab flex items-center gap-2 ${
                activeTab === tab.id ? "active" : ""
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Contenu des compétences */}
        <div className="skills-content grid md:grid-cols-2 gap-6 mt-8">
          {skillsData[activeTab].map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="flex justify-between mb-2">
                <span>{skill.name}</span>
                {skill.level && (
                  <span>
                    {language === "fr" ? "Niveau" : "Level"} : {skill.level}%
                  </span>
                )}
              </div>

              {skill.level && (
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: skill.level + "%" }}
                  ></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}