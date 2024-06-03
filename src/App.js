import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from './pages/About';
import Navbar from './components/NavBar';
import Work from './pages/Work';
// import settings from '/Users/ftw/slcs-react/src/logos/setting-icon.svg';
function App() {
  return (
    <Router>
    <div className="App">
      <div className='body'>
            <Navbar/>
             {/* <img src={settings} alt="Alt Text" className='settings'/> */}
             <Routes>
                <Route index exact path="/" element={<Home/>} />
                <Route index exact path="/about" element={<About/>} />
                <Route index exact path="/work" element={<Work/>} />
            </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;