import './css/body.css';
import pic from './css/foto.jpeg'; // Import the image

export default function Body() {
    return (
        <div>
            <div className="body-container">
                <div className="extra-wide-container">
                    <h1 className="centered-text">
                        <span>SOFTWARE</span>
                        <span>ENGINEER</span>
                    </h1>
                </div>
            </div>
            <img src={pic} alt="Additional Background" className="additional-image" />
            <hr className="separator-line" />
        </div>
    );
}
