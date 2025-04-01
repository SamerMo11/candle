import "../Css/Home.css"
import "../Responsive/home.css"
import {servs1 ,servs2} from "../Datas/home/servs"
import {categories} from "../Datas/home/categories"
import { Link } from "react-router-dom";
import { delay, motion } from "framer-motion";

import hero from "../Assets/home/hero.webp"
import wleft from "../Assets/home/welcome/wleft.webp"
import wright from "../Assets/home/welcome/wright.webp"
import servcenter from "../Assets/home/servs/center.webp"

import about1 from "../Assets/home/about/about1.webp"
import about2 from "../Assets/home/about/about2.webp"
import { useNavigate } from "react-router-dom";
// import { stagger } from "framer-motion/dom";


export default function Home(){
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









    const homeHead = "ignite the moment with our collections"
    const homeSub = "Creating moments of warmth and tranquility with the finest candles made with tenderness and love"

    const pVariants ={
        hidden:{
            opacity: 0,
        },
        visible:{
            opacity: 1,
        transition:{
            staggerChildren: .1,
        },
    },
};

    const spanVariants ={
        hidden:{
            opacity: 0,
        },
        visible:{
            opacity: 1,
            transition: {
                duration: 0.5, 
                
            },
        }
    }

    const homeBtn ={
        hidden:{
            opacity: 0,
            y:100
        },
        visible:{
            opacity: 1,
            y:0,
            transition: {
                duration: 3, 
                
            },
        }
    }

    return(
        <div className="homePage">
            

            <div className="home" id="home-section">
                <motion.img
                initial={{clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)'}}
                animate={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'}}
                transition={{duration:3 , delay:.5}}
                src={hero} alt="heroimg" loading="lazy"/>
                <div className="heroText">
                    <motion.h1
                    variants={pVariants} initial="hidden" animate="visible"
                    >
                        {homeHead.split("").map((char, index)=>(

                            <motion.span
                            key={index} variants={spanVariants}
                            
                            >{char}
                                </motion.span>
                        ))}
                    </motion.h1>

                    <motion.p
                    variants={pVariants} initial="hidden" animate="visible"
                    >
                     {homeSub.split("").map((char, index)=>(

                        <motion.span
                        key={index} variants={spanVariants}

                        >{char}
                            </motion.span>
                        ))}
                    </motion.p>
                        <motion.div
                    variants={homeBtn} initial="hidden" animate="visible"
                        whileHover={{scale:1.1 , translateY:-5}}
                        >
                            <Link to="/Shop">shop now</Link>

                        </motion.div>
                    </div>
            </div>
{/* --------------------------- */}

        <div className="welcome">
            <motion.div className="img"><img src={wleft} alt="welcomeleft" loading="lazy"/></motion.div>
            <div className="wPara">
            <p>
            welcome to borcelle candle
            </p>
            <p>
            Whether you are seeking a serene ambiance for your home, a thoughtful gift for a loved one or
            simply a moment of relaxation our candles are here to elevate your senses and elevate your space
            </p>
            </div>
            <motion.div className="img"><img src={wright} alt="welcomeright" loading="lazy"/></motion.div>
        </div>
{/* --------------------------- */}

        <div className="about" id="about-section">
        <div className="text">
        <p>Why are we here?</p>
        <p>If you can dream it, we can build it.  </p>
        <p>
        " We specialize in handcrafted candles made with love and care, offering a variety of scents and designs to suit every home. Our journey began with a passion for creating beautiful, calming atmospheres, and today, we continue to bring that joy to our customers. Every candle tells a story, and we are proud to be part of your special moments."
        </p>
        </div>
    <div className="imgs">
        <img src={about1} alt="about1Img" loading="lazy"/>
        <img src={about2} alt="about2Img" loading="lazy"/>
    </div>
</div>
{/* --------------------------- */}

        <div className="categ" id="cat-section">
            <p>our categories</p>
            <div className="catCards">
            {
                    categories.map((catData, index) => (
                        
                        <Link to="/Shop" className="catCard" key={index}  onClick={() => handleScroll("shop-section")}>
                <img src={catData.img} alt="about2Img" loading="lazy"/>
                <p>{catData.title}</p>
                            
            </Link>
                        )
                    )
                    }
        </div>
</div>




{/* --------------------------- */}


        <div className="servs" id="serv-section">
            <p>why choose us?</p>
            <div className="servCards">
                <div className='col col1' >
                {
                    servs1.map((servData, index) => (
                            <div className="serv" key={index}>
                                <img src={servData.img} alt='img' loading="lazy"/>
                            <p>{servData.title}</p>
                            <p>{servData.para}</p>
                            </div>
                        ))
                    }
                    </div>
                
                <img src={servcenter} alt="servImg" loading="lazy" />
                
                <div className='col col2' >
                {
                    servs2.map((servData, index) => (
                            <div className="serv" key={index}>
                                <img src={servData.img} alt='img' loading="lazy"/>
                            <p>{servData.title}</p>
                            <p>{servData.para}</p>
                            </div>
                        ))
                    }
                    </div>
            </div>
        </div>
{/* ------------------------------- */}
            
            <div className="contact" id="contact-section">
                <p>get in touch</p>
                <p>
                "Get in touch with us for any questions, orders, or special requests. We are always happy to hear 
                from you and assist you with anything you need. Your satisfaction is our priority!"</p>

                <div className="inputs">
                    <input type="text" placeholder="Your Name"/>
                    <input type="email" placeholder="Email"/>
                    <input type="number" placeholder="Phone"/>
                    <input type="text" placeholder="Service"/>
                    <textarea placeholder="Message"></textarea>
                    <div>
                    <input type="submit" value="send message"/>
                    </div>
                </div>
            </div>

    
        </div>
                
    )
}
