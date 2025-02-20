import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Shop from "./Components/Shop";

function App() {
  return(
    <Router>
    <Nav/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Shop" element={<Shop />} />
    </Routes>
  </Router>
  )
}

export default App;
