import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Css/Footer.css";
import "../Responsive/footer.css";

import logo from "../Assets/logo.webp";
import foot1 from "../Assets/foot1.webp";
import foot2 from "../Assets/foot2.webp";

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

  const socialIcons = ["facebook-f", "twitter", "instagram", "telegram"];

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
            {socialIcons.map((icon, idx) => (
              <i key={idx} className={`fa-brands fa-${icon}`}></i>
            ))}
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
