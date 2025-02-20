import "../Css/Home.css"
import hero from "../Assets/home/hero.jpg"
import wleft from "../Assets/home/wleft.png"
import wright from "../Assets/home/wright.png"

export default function Home(){
    return(
        <div className="homePage">
            

            <div className="home">
                <img src={hero} alt="heroimg"/>
                <div className="heroText">
                    <h1>ignite the moment with our collections</h1>
                    <p>
                    Creating moments of warmth and tranquility with the  
                    finest candles made with tenderness and love
                    </p>
                    <a href="#">shop now</a>
                </div>
            </div>

        <div className="welcome">
            <img src={wleft} alt="welcomeleft"/>
            <img src={wright} alt="welcomeright"/>
            <p>
            welcome to borcelle candle
            </p>
            <p>
            Whether you are seeking a serene ambiance for your home, a thoughtful gift for a loved one or
            simply a moment of relaxation our candles are here to elevate your senses and elevate your space
            </p>
        </div>




        </div>
    )
}