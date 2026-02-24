import "./Footer.css";
import { FaGithub, FaLinkedin, FaCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container max-w-6xl mx-auto px-6">
        <div className="footer-left">
          <h3>THN</h3>
        </div>

        <div className="footer-right flex gap-4">
          <a
            href="https://github.com/nambinitsoa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            <FaGithub />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/michael-nambinitsoa-729567349/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            <FaLinkedin />
            LinkedIn
          </a>
        </div>
      </div>

      <div className="footer-bottom flex items-center justify-center gap-1">
        <FaCopyright />
        <span>2026 MUHAMAD Gallot Tahiana. Tous droits réservés.</span>
      </div>
    </footer>
  );
}