import "../Css/Shop.css"
import { useState } from "react"
import span from "../Assets/shop/span.webp"
import { cat1 } from "../Datas/colls/cat1"
import { cat2 } from "../Datas/colls/cat2"
import { cat3 } from "../Datas/colls/cat3"
import { cat4 } from "../Datas/colls/cat4"

export default function Shop(){

    const [activeCategory, setActiveCategory] = useState(cat1); // الفئة الافتراضية
    const [activeBtn, setActiveBtn] = useState(0); // أول زر هو النشط

    const categories = [
        { name: "candle sets", data: cat1 },
        { name: "candle shapes", data: cat2 },
        { name: "single candle", data: cat3 },
        { name: "sweety candle", data: cat4 },
    ];

    return(
        <div className="shopPage">
            <div className="shop">
                <p>our collections</p>
            </div>
            <div className="collCont">
            <div className="catCont">
                    {categories.map((cat, index) => (
                        <button
                            key={index}
                            className={`catBtn ${activeBtn === index ? "active" : ""}`}
                            onClick={() => {
                                setActiveCategory(cat.data);
                                setActiveBtn(index);
                            }}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>
                <p className="title">
                    <img src={span} alt="titleImg" loading="lazy" />
                    {categories[activeBtn].name}
                    <img src={span} alt="titleImg" loading="lazy" />
                </p>

                <div className="colls">
                    {activeCategory.map((collData, index) => (
                        <div className="collCard" key={index}>
                            <div className="top">
                                <div className="topImg">
                                <img src={collData.img} alt="CollectionImg" loading="lazy" />

                                </div>
                                <div>
                                    <p>add to cart</p>
                                    <div className="icons">
                                        <button>
                                            <i className="fa-solid fa-heart"></i>
                                        </button>
                                        <button>
                                            <i className="fa-regular fa-bag-shopping"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom">
                                <div>
                                    <p>{collData.title}</p>
                                    <p>{collData.price}</p>
                                </div>
                                <div className="stars">
                                    <i className="fa-solid fa-star-sharp"></i>
                                    <i className="fa-solid fa-star-sharp"></i>
                                    <i className="fa-solid fa-star-sharp"></i>
                                    <i className="fa-solid fa-star-sharp"></i>
                                    <i className="fa-solid fa-star-sharp"></i>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}