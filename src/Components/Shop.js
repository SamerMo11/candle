import "../Css/Shop.css"
import span from "../Assets/shop/span.png"
import { cat1 } from "../Datas/colls/cat1"

export default function Shop(){

    return(
        <div className="shopPage">
            <div className="shop">
                <p>our collections</p>
            </div>
            <div className="collCont">
                <div className="catCont">
                    <button className="catBtn">candle sets</button>
                    <button className="catBtn">candle shapes</button>
                    <button className="catBtn">sigle candle</button>
                    <button className="catBtn">sweety candle</button>
                </div>
                <p className="title">
                    <img src={span} alt="titleImg" loading="lazy" />
                    candle sets
                    <img src={span} alt="titleImg" loading="lazy" />
                </p>

                    <div className="colls">
                        {
                        cat1.map((collData, index) => (
                            <div className="collCard" key={index}>
                                <div className="top">
                                    <img src={collData.img} alt="CollectionImg"loading="lazy"/>
                                    <div>
                                        <p>add to cart</p>
                                        <div className="icons">
                                        <i class="fa-solid fa-heart"></i>
                                        <i class="fa-solid fa-star-sharp"></i>

                                    </div>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <div>
                                        <p>{collData.title}</p>
                                        <p>{collData.price}</p>
                                    </div>
                                    <div className="stars">
                                    <i class="fa-solid fa-star-sharp"></i>
                                    <i class="fa-solid fa-star-sharp"></i>
                                    <i class="fa-solid fa-star-sharp"></i>
                                    <i class="fa-solid fa-star-sharp"></i>
                                    <i class="fa-solid fa-star-sharp"></i>
                                    </div>
                                </div>
                            </div>
                                ))
                        }
                    </div>
            </div>
        </div>
    )
}