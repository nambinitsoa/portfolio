import { useLanguage } from "../context/LanguageContext";
import { useState } from "react";
import "./Contact.css";

export default function Contact() {

    const { language } = useLanguage();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Envoi en cours...");
    
        try {
            const response = await fetch(
                "http://localhost/portfolio/mon-portfolio/backend/contact.php",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData)
                }
            );
    
            const result = await response.json();
    
            if (result.success) {
                setStatus("Message envoyé avec succès !");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus(result.message);
            }
    
        } catch (error) {
            console.error(error);
            setStatus("Erreur serveur");
        }
    };
    const text = {
        fr: {
            title: "CONTACT",
            subtitleRight: "Envoyez-moi un message",
            namePlaceholder: "Votre nom",
            emailPlaceholder: "Votre e-mail",
            messagePlaceholder: "Votre message",
            button: "Envoyer",
        },
        en: {
            title: "CONTACT",
            subtitleRight: "Send me a message",
            namePlaceholder: "Your name",
            emailPlaceholder: "Your email",
            messagePlaceholder: "Your message",
            button: "Send",
        },
    };

    return (
        <section id="contact" className="contact-section py-20">

            <div className="max-w-6xl mx-auto px-6">

                <h2 className="contact-title text-center text-4xl font-bold mb-16">
                    {text[language].title}
                </h2>

                <form className="contact-form" onSubmit={handleSubmit}>

                    <h3 className="contact-subtitle">
                        {text[language].subtitleRight}
                    </h3>

                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={text[language].namePlaceholder}
                        className="contact-input"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={text[language].emailPlaceholder}
                        className="contact-input"
                        required
                    />

                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={text[language].messagePlaceholder}
                        rows="5"
                        className="contact-input"
                        required
                    ></textarea>

                    <button type="submit" className="contact-button">
                        {text[language].button}
                    </button>

                    {status && (
                        <p style={{ marginTop: "10px" }}>
                            {status}
                        </p>
                    )}

                </form>

            </div>

        </section>
    );
}