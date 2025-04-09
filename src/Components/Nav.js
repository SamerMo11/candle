import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import "../Css/Nav.css";
import '../Responsive/nav.css';
import logo from "../Assets/logo.webp";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF ,faLinkedinIn ,faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'


function Nav() {
    const navigate = useNavigate();

    // تحسين الكود باستخدام useCallback لتقليل إعادة إنشاء الدالة
    const handleScroll = useCallback((sectionId) => {
        navigate("/#"); // العودة للصفحة الرئيسية
        setTimeout(() => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    }, [navigate]);
    const [activeLink, setActiveLink] = useState("/");

    const handleClick = (link) => {
      setActiveLink(link);
    };
    return (
        <nav>
            <div className="navTop">
                <div className="social">
                <motion.a whileHover={{ scale: 1.3 }} transition={{ duration: 0.3 }} target="_blank" href="https://www.facebook.com/profile.php?id=100083281736623&mibextid=ZbWKwL">
                <FontAwesomeIcon icon={faFacebookF}/></motion.a>
                <motion.a whileHover={{ scale: 1.3 }} transition={{ duration: 0.3 }} target="_blank" href="https://www.linkedin.com/in/samer-mohamed-5b2586280/">
                <FontAwesomeIcon icon={faLinkedinIn} /></motion.a>
                <motion.a whileHover={{ scale: 1.3 }} transition={{ duration: 0.3 }} target="_blank" href="https://www.instagram.com/samer_mohamed96/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
                <FontAwesomeIcon icon={faInstagram}/></motion.a>
                <motion.a whileHover={{ scale: 1.3 }} transition={{ duration: 0.3 }} target="_blank" href="https://api.whatsapp.com/qr/DSRQF7O6GN4JL1?autoload=1&app_absent=0">
                <FontAwesomeIcon icon={faWhatsapp}/></motion.a>
                </div>
            </div>

            <div className="navBottom">
                <Link to="/" onClick={() => handleScroll("home-section")} className="logo">
                    <img src={logo} alt="logo" className="logo-image" />
                </Link>

                <ul className="links">
                    <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                        {/* <Link to="/" onClick={() => handleScroll("home-section")}>home</Link> */}
                        <Link to="/" className={activeLink === "/" ? "active" : ""} onClick={() => {handleClick("/") ; handleScroll("home-section");}}>home</Link>

                    </motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                        <Link to="/" className={activeLink === "/about-section" ? "active" : ""} onClick={() => {handleClick("/about-section") ; handleScroll("about-section");}}>about</Link>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                    <Link to="/" className={activeLink === "/cat-section" ? "active" : ""} onClick={() => {handleClick("/cat-section") ; handleScroll("cat-section");}}>categories</Link>

                        {/* <Link to="/#" onClick={() => handleScroll("cat-section")}>categories</Link> */}
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                    <Link to="/" className={activeLink === "/contact-section" ? "active" : ""} onClick={() => {handleClick("/contact-section") ; handleScroll("contact-section");}}>contact</Link>
                        
                        {/* <Link to="/#" onClick={() => handleScroll("contact-section")}>contact</Link> */}
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                    <Link to="/Shop" className={activeLink === "/Shop" ? "active" : ""} onClick={() => {handleClick("/Shop") ; handleScroll("shop-section");}}>shop</Link>

                        {/* <Link to="/Shop" onClick={() => handleScroll("shop-section")}>shop</Link> */}
                    </motion.li>
                </ul>

                <div className="icons">
                    <Link to="/#">
                    <FontAwesomeIcon icon={faUser} />
                    </Link>
                    <Link to="/Cart" onClick={() => handleScroll("cart-section")}>
                    <FontAwesomeIcon icon={faBagShopping} />
                    </Link>
                    <Link to="/Whishlist" onClick={() => handleScroll("whish-section")}>
                    <FontAwesomeIcon icon={faHeart} />
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
