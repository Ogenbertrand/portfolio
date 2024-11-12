import About from './About'
import Projects from './Projects'
import Contacts from './Contacts'
import logo from '../assets/images/logo.png'
import '../assets/css/Header.css'

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <div className="nav-left">
                    <About />
                    <Projects />
                    <span className="dots">...</span> {/* Add three dots here */}
                </div>
                <div className="nav-center">
                    <img src={logo} alt="Logo" className="logo" />
                </div>
                <div className="nav-right">
                    <Contacts />
                </div>
            </nav>
        </header>
    )
}

export default Header;
