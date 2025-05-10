import goBack from "../assets/go-back-btn.png";
import eventLogo from "../assets/event-logo.png";
import docs_icon from "../assets/docs-icon.png";


function Header() {
    return (
        <div className="header">
            <div className="header-item">
                <img src={goBack} alt="Go Back" className="go-back" />

                <img src={eventLogo} alt="Event Logo" className="event-logo" />
                
                <h3 className="h2">Paradox Productions Meet-Up</h3>
            </div>

            <div className="header-item">
                <img src={docs_icon} alt="docs" className="" />
                <p className="p2">View Docs</p>
            </div>
        </div>
    );
}
export default Header;