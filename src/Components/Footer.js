import React from "react";
import { Link } from "react-router-dom";
import "../Css/Footer.css"
import logo from "../Assets/logo.webp"
import foot1 from "../Assets/foot1.webp"
import foot2 from "../Assets/foot2.webp"

// import { motion} from "framer-motion";
import { useNavigate } from "react-router-dom";


function Footer() {

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

    // <Link to="/" onClick={() => handleScroll("home-section")}>home</Link>

    
    return (
        <>
    
            <footer>
                <div className="footLeft">
                    <img src={logo} alt="footerImg" loading="lazy"/>
                    <img src={foot1} alt="footerImg" loading="lazy"/>
                </div>

                <div className="footCenter">
                        <div className="links">
                            <p>links</p>
                            <Link to="/" onClick={() => handleScroll("home-section")}>home</Link>
                            <Link to="/" onClick={() => handleScroll("about-section")}>about us</Link>
                            <Link to="/Shop" onClick={() => handleScroll("shop-section")}>shop</Link>
                        </div>
                        <div className="links">
                            <p>helps</p>
                            <Link to="/" onClick={() => handleScroll("contact-section")}>contact</Link>
                            <Link to="/" onClick={() => handleScroll("serv-section")}>ourServices</Link>
                            <Link to="/#" onClick={() => handleScroll("home-section")}>privacy</Link>
                        </div>
                        <div className="links">
                            <p>contact us</p>
                            <span>reemtawfik500@gmail.com</span>
                            <span>+20 236 733 567 25</span>
                            <div>
                                <i className="fa-brands fa-facebook-f"></i>
                                <i className="fa-brands fa-twitter"></i>
                                <i className="fa-brands fa-instagram"></i>
                                <i className="fa-brands fa-telegram"></i>
                            </div>
                        </div>
                </div>


                <div className="footRight">
                    <img src={foot2} alt="footerImg" loading="lazy"/>
                </div>
            </footer>
    </>
    );
  }
  
  export default Footer;