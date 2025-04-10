import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import "../Css/Nav.css";
import '../Responsive/nav.css';
import logo from "../Assets/logo.webp";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import soc1 from "../Assets/icons/social/1.png";
import soc2 from "../Assets/icons/social/2.png";
import soc3 from "../Assets/icons/social/3.png";
import soc4 from "../Assets/icons/social/4.png";
import nav1 from "../Assets/icons/navicons/1.png";
import nav2 from "../Assets/icons/navicons/2.png";
import nav3 from "../Assets/icons/navicons/3.png";



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
                <motion.a whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }} target="_blank" href="https://www.facebook.com/profile.php?id=100083281736623&mibextid=ZbWKwL">
                    <img src={soc1} alt="socialIcons"/>
                </motion.a>
                <motion.a whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }} target="_blank" href="https://www.linkedin.com/in/samer-mohamed-5b2586280/">
                    <img src={soc2} alt="socialIcons"/>
                </motion.a>
                <motion.a whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }} target="_blank" href="https://www.instagram.com/samer_mohamed96/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
                    <img src={soc3} alt="socialIcons"/>
                </motion.a>
                <motion.a whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }} target="_blank" href="https://api.whatsapp.com/qr/DSRQF7O6GN4JL1?autoload=1&app_absent=0">
                    <img src={soc4} alt="socialIcons"/>
                </motion.a>
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
                    <motion.img
                    whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}
                    src={nav1} alt="socialIcons"/>
                    </Link>
                    <Link to="/Cart" onClick={() => handleScroll("cart-section")}>
                    <motion.img
                    whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}
                    src={nav2} alt="socialIcons"/>
                    </Link>
                    <Link to="/Whishlist" onClick={() => handleScroll("whish-section")}>
                    <motion.img
                    whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}
                    src={nav3} alt="socialIcons"/>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
