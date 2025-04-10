import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Css/Footer.css";
import "../Responsive/footer.css";
import { motion } from "framer-motion";
import logo from "../Assets/logo.webp";
import foot1 from "../Assets/foot1.webp";
import foot2 from "../Assets/foot2.webp";
import soc1 from "../Assets/icons/social/1.png";
import soc2 from "../Assets/icons/social/2.png";
import soc3 from "../Assets/icons/social/3.png";
import soc4 from "../Assets/icons/social/4.png";
function Footer() {
  const navigate = useNavigate();

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const footerLinks = [
    {
      title: "Links",
      links: [
        { name: "Home", section: "home-section" },
        { name: "About Us", section: "about-section" },
        { name: "Shop", section: "shop-section", path: "/Shop" },
      ],
    },
    {
      title: "Helps",
      links: [
        { name: "Contact", section: "contact-section" },
        { name: "Our Services", section: "serv-section" },
        { name: "Privacy", section: "home-section" },
      ],
    },
  ];

  // const socialIcons = ["facebook-f", "twitter", "instagram", "telegram"];

  return (
    <footer>
      <div className="footLeft">
        <img src={logo} alt="footerlogo" loading="lazy" />
        <img src={foot1} alt="footerimage" loading="lazy" />
      </div>

      <div className="footCenter">
        {footerLinks.map((group, index) => (
          <div className="links" key={index}>
            <p>{group.title}</p>
            {group.links.map((link, idx) => (
              <Link key={idx} to={link.path || "/"} onClick={() => handleScroll(link.section)}>
                {link.name}
              </Link>
            ))}
          </div>
        ))}

        <div className="links">
          <p>Contact Us</p>
          <span>reemtawfik500@gmail.com</span>
          <span>+20 236 733 567 25</span>
          <div className="social-icons">
          <motion.a whileHover={{ scale: 1.3 }} transition={{ duration: 0.3 }} target="_blank" href="https://www.facebook.com/profile.php?id=100083281736623&mibextid=ZbWKwL">
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
      </div>

      <div className="footRight">
        <img src={foot2} alt="footerimage" loading="lazy"/>
      </div>
    </footer>
  );
}

export default Footer;
