import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";
// import Contact from "./Components/Contact";

function App() {
  <Router>
    <Home/>
    <Routes>
    <Route path="/" element={<Home />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
    
  </Router>
}

export default App;
