import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Tablist from './Components/tab-list';
import './App.css';
import Ataglance from './Components/Ataglance';

function App() {
    return (
        <div className="container">
            <Navbar />
            <Header />
            <Tablist/>
            <Ataglance/>
        </div>
    );
}

export default App;