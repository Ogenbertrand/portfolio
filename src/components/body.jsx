import './css/body.css';
import pic from './css/pic.png'; // Import the logo image

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
            <hr className="separator-line" />
        </div>
    );
}
