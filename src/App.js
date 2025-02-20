import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from "./Components/Nav";
import Home from "./Components/Home";
// import Contact from "./Components/Contact";

function App() {
  return(
    <Router>
    <Nav/>
    <Routes>
    <Route path="/" element={<Home />} />
    {/* <Route path="/Contact" element={<Contact />} /> */}
    </Routes>
  </Router>
  )
}

export default App;
