import React from "react";
import { Link } from "react-router-dom";
import "../Css/Nav.css"
import logo from "../Assets/logo.webp"

// import { motion} from "framer-motion";
import { useNavigate } from "react-router-dom";



function Nav() {

    const navigate = useNavigate();

    const handleScroll = (sectionId) => {
      navigate("/#"); // يرجع للصفحة الرئيسية
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // تأخير بسيط لضمان تحميل الصفحة قبل التمرير
    };
return (
    <>
    
<nav>
    <div className="navTop">
        <div className="social">
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-telegram"></i>
        </div>
    </div>
    <div className="navBottom">

    <Link  to="/" className="logo">
        <img src={logo} alt="logo"/>
    </Link>
    
    <ul className="links">
        <li >
            <Link to="/" onClick={() => handleScroll("home-section")}>home</Link>
        </li>
        <li >
            <Link to="/#" onClick={() => handleScroll("about-section")} >about</Link>
        </li>
        <li >
            <Link to="/#" onClick={() => handleScroll("cat-section")} >categories</Link>
        </li>
        
        <li >
            <Link to="/#" onClick={() => handleScroll("contact-section")} >contact</Link>
        </li>
        <li >
            <Link to="/Shop" onClick={() => handleScroll("shop-section")}>shop</Link>
        </li>
    </ul>

    <div className="icons">
        <Link to="/#">
        <i class="fa-regular fa-user"></i>
        </Link>
        <Link to="/Cart" onClick={() => handleScroll("cart-section")}>
        <i class="fa-regular fa-bag-shopping"></i>
        </Link>
        <Link to="/Whishlist" onClick={() => handleScroll("whish-section")}>
        <i class="fa-light fa-heart"></i>
        </Link>
    </div>
    </div>
</nav>
    </>
    );
  }
  
  export default Nav;