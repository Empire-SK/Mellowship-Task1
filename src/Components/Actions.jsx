import droppedUsers from '../assets/dropped-users.png';
import exportData from '../assets/export-data.png';
import blacklistedUsers from '../assets/blacklisted-users.png';
import addGuest from '../assets/add-guest.png';

function Actions() {
    return (
        <div className="actions py3">
            <button>
                Dropped users
                <img src={droppedUsers} alt="" />
            </button>
            <button>
                Blacklisted Users
                <img src={blacklistedUsers} alt="" />
            </button>
            <button>
                Export Data
                <img src={exportData} alt="" />
            </button>
            <button>
                Add Guest
                <img src={addGuest} alt="" />
            </button>
        </div>
    );
}

export default Actions;