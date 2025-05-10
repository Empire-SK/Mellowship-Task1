import logo from '../assets/logo.png';
import avatar from '../assets/User avatar.png';

export default function Navbar() {
    return (
        <div className='navbar'>
            <a href="https://makemypass.com/home" className="nav-item nav-link">
            <img src={logo} alt="Logo" className="logo" />
            <p className='p1'>MakeMyPass</p></a>

            <div className="nav-item nav-link cursor-pointer">
                <p className='p2'>Hi, adnankattekaden43</p>

                <img src={avatar} alt="Avatar" className="avatar" />
            </div>
                </div>
    );
}