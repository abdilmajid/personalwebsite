import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Certs from './pages/Certs';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router> 
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/certs' element={<Certs />} />
        </Routes>
      </Router>
  </div>
  );
}

export default App;
