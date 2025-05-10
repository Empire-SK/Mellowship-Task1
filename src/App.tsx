import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Tablist from './Components/tab-list';
import './App.css';
import Ataglance from './Components/Ataglance';
import Actions from './Components/Actions';
import GuestList from './Components/guest-list';
import Footer from './Components/Footer';

function App() {
    return (
        <div className="container">
            <Navbar />
            <Header />
            <Tablist/>
            <Ataglance/>
            <Actions/>
            <GuestList/>
            <Footer/>
        </div>
    );
}

export default App;