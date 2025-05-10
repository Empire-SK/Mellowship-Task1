import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Tablist from './Components/tab-list';
import './App.css';

function App() {
    return (
        <div className="container">
            <Navbar />
            <Header />
            <Tablist/>
        </div>
    );
}

export default App;