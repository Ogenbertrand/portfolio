import '../assets/css/Contacts.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Contacts = () => {
    return (
        <div className="contacts">
            <button className="get-in-touch-btn">Get in Touch <FontAwesomeIcon icon={faArrowRight} /></button>
            <button className="contact-btn">
                Contact <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>
    )
}

export default Contacts;