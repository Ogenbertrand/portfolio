import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import './css/header.css';

export default function Header() {
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

    const toggleDarkMode = () => {
        setDarkMode(prevMode => {
            const newMode = !prevMode;
            localStorage.setItem('darkMode', newMode);
            return newMode;
        });
    };

    useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode);
    }, [darkMode]);

    return (
        <>
            <header className="header-container">
            <div className="logo">
                    Ogen Bertrand
                </div>
                <nav className="header-nav">
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                    <Link to="/archive" className="nav-link">Archive</Link>
                    <Link to="/certifications" className="nav-link">Certifications</Link>
                    <Link to="/experience" className="nav-link">Experience</Link>
                </nav>
                <FontAwesomeIcon
                    icon={darkMode ? faSun : faMoon}
                    className="theme-toggle"
                    onClick={toggleDarkMode}
                    title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                />
            </header>
            <hr className="page-separator" />
        </>
    );
}
