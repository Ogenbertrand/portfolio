import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faInstagram, faGithub, faDiscord, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './css/footer.css'; // Import the CSS file for styling

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-left">
                <h2 className="follow-text">Follow me</h2>
                <div className="dots">
                    {Array(20).fill('.').map((dot, index) => (
                        <span key={index}>{dot}</span>
                    ))}
                </div>
            </div>
            <div className="footer-right">
                <div className="social-media">
                    <a href="https://linkedin.com/in/ogen-bertrand-2a9108264" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
                    </a>
                    <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FontAwesomeIcon icon={faTwitter} className="social-icon" />
                    </a>
                    <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                    </a>
                    <a href="https://github.com/Ogenbertrand" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FontAwesomeIcon icon={faGithub} className="social-icon" />
                    </a>
                    <a href="https://discord.com/invite/your-invite-link" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FontAwesomeIcon icon={faDiscord} className="social-icon" />
                    </a>
                    <a href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FontAwesomeIcon icon={faFacebook} className="social-icon" />
                    </a>
                </div>
            </div>
            <div className="contact-info">
                    <p>Cameroon Bangangte West</p>
                    <p>Email: <a href="mailto:ogenbertrand@gmail.com">ogenbertrand@gmail.com</a></p>
                    <p>Phone: 654380329</p>
                </div>
        </footer>
    );
}
