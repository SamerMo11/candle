import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import "../Css/Nav.css";
import '../Responsive/nav.css';

import logo from "../Assets/logo.webp";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";



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

    return (
        <nav>
            <div className="navTop">
                <div className="social">
                    <motion.i
                        className="fa-brands fa-facebook-f"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                    ></motion.i>
                    <motion.i
                        className="fa-brands fa-twitter"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                    ></motion.i>
                    <motion.i
                        className="fa-brands fa-instagram"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                    ></motion.i>
                    <motion.i
                        className="fa-brands fa-telegram"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                    ></motion.i>
                </div>
            </div>

            <div className="navBottom">
                <Link to="/" onClick={() => handleScroll("home-section")} className="logo">
                    <img src={logo} alt="logo" className="logo-image" />
                </Link>

                <ul className="links">
                    <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                        <Link to="/" onClick={() => handleScroll("home-section")}>home</Link>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                        <Link to="/#" onClick={() => handleScroll("about-section")}>about</Link>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                        <Link to="/#" onClick={() => handleScroll("cat-section")}>categories</Link>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                        <Link to="/#" onClick={() => handleScroll("contact-section")}>contact</Link>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                        <Link to="/Shop" onClick={() => handleScroll("shop-section")}>shop</Link>
                    </motion.li>
                </ul>

                <div className="icons">
                    <Link to="/#">
                        <motion.i
                            className="fa-regular fa-user"
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                        ></motion.i>
                    </Link>
                    <Link to="/Cart" onClick={() => handleScroll("cart-section")}>
                        <motion.i
                            className="fa-regular fa-bag-shopping"
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                        ></motion.i>
                    </Link>
                    <Link to="/Whishlist" onClick={() => handleScroll("whish-section")}>
                        <motion.i
                            className="fa-light fa-heart"
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                        ></motion.i>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
