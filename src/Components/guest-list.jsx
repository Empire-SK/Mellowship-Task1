import searchIcon from "../assets/search-icon.png";
import dropdownIcon from "../assets/dropdown.png";
import edit  from "../assets/edit.png";
import dollar from "../assets/dollar.png";
import check from "../assets/approve-user.png";
import pass from "../assets/pass.png";

function GuestList() {
    const guests = [
        { name: "Ananthu M P", username: "chn21ec019", registered: "5 days ago" },
        { name: "Aro Ann", username: "Aroann23", registered: "1 week ago" },
        { name: "Aswin Asok", username: "aswinasokofficial", registered: "2 weeks ago" },
        { name: "Alfiya Rasheed", username: "alfiyarasheed", registered: "2 Weeks ago" },
        { name: "Aswin Asok", username: "aswinasokofficial", registered: "2 weeks ago" },
        { name: "Aswin Asok", username: "aswinasokofficial", registered: "2 weeks ago" },
        { name: "Aswin Asok", username: "aswinasokofficial", registered: "2 weeks ago" },
    ];

    return (
        <div className="guest-container">
            <div className="guest-header">
                <h2>Guests List</h2>
            </div>

            <div className="search-wrapper">
                <img src={searchIcon} alt="Search" className="search-icon" />
                <input type="text" placeholder="Search" className="search-input" />
            </div>

            <div className="guest-filters">
                <div className="guest-header">
                    <h2>Recent Guests ({guests.length})</h2>
                </div>

                <div className="control">
                    <button className="filter-btn underline">
                        Select Multiple
                        <span className="divider"></span>
                        <img src={dropdownIcon} alt="Dropdown" className="dropdown-icon" />
                    </button>
                    <button className="filter-btn">
                        Checked In
                        <span className="divider"></span>
                        <img src={dropdownIcon} alt="Dropdown" className="dropdown-icon" />
                    </button>
                    <button className="filter-btn">
                        Approval Status
                        <span className="divider"></span>
                        <img src={dropdownIcon} alt="Dropdown" className="dropdown-icon" />
                    </button>
                    <button className="filter-btn">
                        Registration Status
                        <span className="divider"></span>
                        <img src={dropdownIcon} alt="Dropdown" className="dropdown-icon" />
                    </button>
                </div>
            </div>

            <div className="guest-table-container">
                <div className="guest-table">
                    {guests.map((guest, index) => (
                        <div key={index} className="guest-row">
                            <div className="guest-info">
                                <p className="guest-name">{guest.name}</p>
                                <p className="guest-username">@{guest.username}</p>
                                
                            </div>
                            <div className="guest-actions">
                                <p className="guest-registered">{guest.registered}</p>
                                <img src={edit} alt="Edit" className="action-icon" />
                                <img src={dollar} alt="Payment" className="action-icon" />
                                <img src={check} alt="Check" className="action-icon" />
                                <img src={pass} alt="Pass" className="action-icon" />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="guest-list-footer">
                    <span>{guests.length} Records</span>
                    <span>Per Page: 30</span>
                    <div className="pagination">
                        <span>1 of 3</span>
                        <button className="page-nav">&lt;</button>
                        <button className="page-nav">&gt;</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GuestList;
