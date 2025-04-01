import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import Cart from "./Components/Cart";
import Whishlist from "./Components/Whishlist";
import CheckOut from "./Components/CheckOut";

function App() {
  return(
    <Router>
    <Nav/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Shop" element={<Shop />} />
    <Route path="/Cart" element={<Cart />} />
    <Route path="/Whishlist" element={<Whishlist />} />
    <Route path="/CheckOut" element={<CheckOut />} />
    </Routes>
    <Footer/>

  </Router>
  )
}

export default App;
