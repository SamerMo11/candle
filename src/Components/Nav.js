import React from "react";
import { Link } from "react-router-dom";
import "../Css/Nav.css"
import logo from "../Assets/logo.webp"


// import { motion} from "framer-motion";

function Nav() {
return (
<nav>
    <div className="logo">
        <img src={logo} alt="logo"/>
    </div>
    <ul className="links">
        <li >
            <Link to="/">home</Link>
        </li>
        <li >
            <Link to="/Shop">Shop</Link>
        </li>
        <li >
            <Link to="/">home</Link>
        </li>
        <li >
            <Link to="/">home</Link>
        </li>
    </ul>
</nav>
    );
  }
  
  export default Nav;