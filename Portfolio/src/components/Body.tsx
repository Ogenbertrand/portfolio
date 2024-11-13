import '../assets/css/Body.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/images/body-logo.jpeg';

function Body() {
  return (
    <div className="body">
      <div className="header">
        <h1 className="title">Welcome to Bertrand's Portfolio</h1>
      </div>
      
      <div className="subtitle">
        I’m a passionate Full Stack Software Engineer with a strong foundation in both frontend and 
        backend development, combined with expertise in DevOps practices. I thrive in creating scalable, 
        efficient, and user-friendly applications while ensuring seamless integration and deployment processes.
      </div>
      
      <div className="icons">
        <a
          href="https://github.com/Ogenbertrand"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
          aria-label="GitHub Profile"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        
        <a
          href="https://www.linkedin.com/in/ogen-bertrand-2a9108264/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
          aria-label="LinkedIn Profile"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>

      {/* Logo on the far right */}
      <img src={logo} alt="Logo" className="logo-right" />
    </div>
  );
}

export default Body;
