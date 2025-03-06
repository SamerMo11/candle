import "../Css/Home.css"
import "../Responsive/home.css"
import {servs1 ,servs2} from "../Datas/home/servs"
import {categories} from "../Datas/home/categories"

import hero from "../Assets/home/hero.webp"
import wleft from "../Assets/home/welcome/wleft.webp"
import wright from "../Assets/home/welcome/wright.webp"
import servcenter from "../Assets/home/servs/center.webp"

import about1 from "../Assets/home/about/about1.webp"
import about2 from "../Assets/home/about/about2.webp"


export default function Home(){

    return(
        <div className="homePage">
            

            <div className="home">
                <img src={hero} alt="heroimg" loading="lazy"/>
                <div className="heroText">
                    <h1>ignite the moment with our collections</h1>
                    <p>
                    Creating moments of warmth and tranquility with the  
                    finest candles made with tenderness and love
                    </p>
                    <a href="#">shop now</a>
                </div>
            </div>
{/* --------------------------- */}

        <div className="welcome">
            <div><img src={wleft} alt="welcomeleft" loading="lazy"/></div>
            <div><img src={wright} alt="welcomeright" loading="lazy"/></div>
            <p>
            welcome to borcelle candle
            </p>
            <p>
            Whether you are seeking a serene ambiance for your home, a thoughtful gift for a loved one or
            simply a moment of relaxation our candles are here to elevate your senses and elevate your space
            </p>
        </div>
{/* --------------------------- */}

        <div className="about">
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

        <div className="categ">
            <p>our categories</p>
            <div className="catCards">
            {
                    categories.map((catData, index) => (
                        <a href="#" className="catCard" key={index}>
                <img src={catData.img} alt="about2Img" loading="lazy"/>
                <p>{catData.title}</p>
                            
            </a>
                        ))
                    }


               
        </div>
        </div>
{/* --------------------------- */}


        <div className="servs">
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
            
            <div className="contact">
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
                    <input type="submit" value="send message"/>
                </div>
            </div>




        </div>
    )
}