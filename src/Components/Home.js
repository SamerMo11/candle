import "../Css/Home.css"
import "../Responsive/home.css"
import {servs1 ,servs2} from "../Datas/home/servs"
import {categories} from "../Datas/home/categories"
import { Link } from "react-router-dom";
import {  motion } from "framer-motion";

import hero from "../Assets/home/hero.webp"
import wleft from "../Assets/home/welcome/wleft.webp"
import wright from "../Assets/home/welcome/wright.webp"
import servcenter from "../Assets/home/servs/center.webp"

import about1 from "../Assets/home/about/about1.webp"
import about2 from "../Assets/home/about/about2.webp"
import { useNavigate } from "react-router-dom";
// import { type } from "@testing-library/user-event/dist/type";
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


// -------------------






    const homeHead = "ignite the moment with our collections"
    const homeSub = "Creating moments of warmth and tranquility with the finest candles made with tenderness and love"
    const welcomeP1 = "welcome to borcelle candle"
    const welcomeP2 = "Whether you are seeking a serene ambiance for your home, a thoughtful gift for a loved one or simply a moment of relaxation our candles are here to elevate your senses and elevate your space"
    const aboutP1 = "Why are we here?"
    const aboutP2 = "If you can dream it, we can build it."
    const aboutP3 = `"We specialize in handcrafted candles made with love and care, offering a variety of scents and designs to suit every home. Our journey began with a passion for creating beautiful, calming atmospheres, and today, we continue to bring that joy to our customers. Every candle tells a story, and we are proud to be part of your special moments."`
    
    const isMobile = window.innerWidth <= 768;
    
    const pVariants = isMobile ? {} :{
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

    const spanVariants =isMobile ? {} :{
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


    const pVariants2 =isMobile ? {} :{
        hidden:{
            opacity: 0,
        },
        visible:{
            opacity: 1,
        transition:{
            staggerChildren: .03,
        },
    },
};
    const spanVariants2 =isMobile ? {} :{
        hidden:{
            opacity: 0,
        },
        visible:{
            opacity: 1,
            transition: {
                duration: 0.1, 
                
            },
        }
    }

    const homeBtn =isMobile ? {} :{
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
    const WelcomeImg1 =isMobile ? {} :{
        hidden:{
            opacity: 0,
            // x:-40,
        },
        visible:{
            opacity: 1,
            // x:0,
            transition: {
                duration: 1, 
            },
        }
    }
    const WelcomeImg2 =isMobile ? {} :{
        hidden:{
            opacity: 0,
            // x:40
        },
        visible:{
            opacity: 1,
            // x:0,
            transition: {
                duration: 1, 
                
            },
        }
    }


    const AboutImg1 =isMobile ? {} :{
        hidden:{
            opacity: 0,
            // x:40,
        },
        visible:{
            opacity: 1,
            // x:0,
            transition: {
                duration: 1, 
            },
        }
    }

    const reveal =isMobile ? {} :{
        hidden:{
            opacity: 0,
            y:100
        },
        visible:{
            opacity: 1,
            y:0,
            transition: {
                duration: 1, 
                
            },
        }
    }
    const categoryImg =isMobile ? {} :{
        hidden:{
            opacity: 0,
            scale:0,
            rotate:360,
        },
        visible:{
            opacity: 1,
            scale:1,
            rotate:0,
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
            <motion.div className="img"
                                variants={WelcomeImg1}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.8 }}
                                >
                                    <img src={wleft} alt="welcomeleft" loading="lazy"/>
            </motion.div>
            <div className="wPara">
            <motion.p
            variants={pVariants}
            initial="hidden"
            whileInView="visible"
            >
            {welcomeP1.split("").map((char, index)=>(

                <motion.span
                key={index} variants={spanVariants}

                >{char}
                    </motion.span>
                ))}
            
            </motion.p>
            <motion.p
            variants={pVariants2}
            initial="hidden"
            whileInView="visible"
            >
            {welcomeP2.split("").map((char, index)=>(

                <motion.span
                key={index} variants={spanVariants2}

                >{char}
                    </motion.span>
                ))}
            
            </motion.p>
            </div>
            <motion.div className="img"
            variants={WelcomeImg2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.8 }}
            ><img src={wright} alt="welcomeright" loading="lazy"/></motion.div>
        </div>
{/* --------------------------- */}

        <div className="about" id="about-section">
        <div className="text">
        <motion.p
        variants={pVariants2}
        initial="hidden"
        whileInView="visible"
        >
        {aboutP1.split("").map((char, index)=>(

            <motion.span
            key={index} variants={spanVariants2}

            >{char}
                </motion.span>
            ))}
        </motion.p>
        <motion.p
        variants={pVariants2}
        initial="hidden"
        whileInView="visible"
        >
        {aboutP2.split("").map((char, index)=>(

            <motion.span
            key={index} variants={spanVariants2}

            >{char}
                </motion.span>
            ))}
        </motion.p>
        <motion.p
        variants={pVariants2}
        initial="hidden"
        whileInView="visible"
        >
        {aboutP3.split("").map((char, index)=>(

            <motion.span
            key={index} variants={spanVariants2}

            >{char}
                </motion.span>
            ))}
        </motion.p>
        </div>
    <motion.div className="imgs"
    variants={AboutImg1}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.8 }}
    >
        <img src={about1} alt="about1Img" loading="lazy"/>
        <img src={about2} alt="about2Img" loading="lazy"/>
    </motion.div>
</div>
{/* --------------------------- */}

        <motion.div
                    variants={reveal} initial="hidden"     
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
        
        className="categ" id="cat-section">
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
</motion.div>




{/* --------------------------- */}


        <div className="servs" id="serv-section">
            <motion.p
            variants={reveal} initial="hidden"     
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            >why choose us?</motion.p>
            <div className="servCards">
                <div className='col col1' >
                {
                    servs1.map((servData, index) => (
                            <motion.div
                            className="serv" key={index}
                            variants={reveal} initial="hidden"     
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                            >
                                <img src={servData.img} alt='img' loading="lazy"/>
                            <p>{servData.title}</p>
                            <p>{servData.para}</p>
                            </motion.div>
                        ))
                    }
                    </div>
                
                <motion.img
                variants={categoryImg} initial="hidden"     
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                src={servcenter} alt="servImg" loading="lazy" />
                
                <div className='col col2' >
                {
                    servs2.map((servData, index) => (
                            <motion.div
                            className="serv" key={index}
                            variants={reveal} initial="hidden"     
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                            >
                                <img src={servData.img} alt='img' loading="lazy"/>
                            <p>{servData.title}</p>
                            <p>{servData.para}</p>
                            </motion.div>
                        ))
                    }
                    </div>
            </div>
        </div>
{/* ------------------------------- */}
            
            <div className="contact" id="contact-section">
                <motion.p
                variants={reveal} initial="hidden"     
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                >get in touch</motion.p>
                <motion.p
                variants={reveal} initial="hidden"     
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                >
                "Get in touch with us for any questions, orders, or special requests. We are always happy to hear 
                from you and assist you with anything you need. Your satisfaction is our priority!"</motion.p>

                <motion.div
                variants={reveal} initial="hidden"     
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                className="inputs">
                    <input type="text" placeholder="Your Name"/>
                    <input type="email" placeholder="Email"/>
                    <input type="number" placeholder="Phone"/>
                    <input type="text" placeholder="Service"/>
                    <textarea placeholder="Message"></textarea>
                    <div>
                    <input type="submit" value="send message"/>
                    </div>
                </motion.div>
            </div>

    
        </div>
                
    )
}
