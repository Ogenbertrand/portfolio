import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import './css/footer.css'; // Import the CSS file for styling

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-left">
                <div className="social-media">
                    <a href="https://linkedin.com/in/ogen-bertrand-2a9108264" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
                    </a>
                    <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} className="social-icon" />
                    </a>
                    <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                    </a>
                    <a href="https://github.com/Ogenbertrand" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="social-icon" />
                    </a>
                </div>
                <p>&copy; 2023 Ogen Bertrand. All rights reserved.</p>
            </div>
            <div className="footer-right">
                <p>Cameroon Bangangte West</p>
                <p>Email: <a href="mailto:ogenbertrand@gmail.com">ogenbertrand@gmail.com</a></p>
                <p>Phone: 654380329</p>
            </div>
        </footer>
    );
}
