import "../Css/Shop.css";
import "../Responsive/shop.css"

import { useState, useEffect } from "react";
import span from "../Assets/shop/span.webp";
import { cat1 } from "../Datas/colls/cat1";
import { cat2 } from "../Datas/colls/cat2";
import { cat3 } from "../Datas/colls/cat3";
import { cat4 } from "../Datas/colls/cat4";

export default function Shop() {
    const categories = [
        { name: "candle sets", data: cat1 },
        { name: "candle shapes", data: cat2 },
        { name: "single candle", data: cat3 },
        { name: "sweety candle", data: cat4 },
    ];

    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const [activeBtn, setActiveBtn] = useState(0);
    const [wishlist, setWishlist] = useState([]);
    const [, setCart] = useState([]);

    useEffect(() => {
        const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        setWishlist(savedWishlist);

        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(savedCart);
    }, []);

    const toggleWishlist = (item) => {
        let savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        const exists = savedWishlist.some(
            (wItem) => wItem.key === item.key && wItem.category === activeCategory.name
        );

        if (exists) {
            savedWishlist = savedWishlist.filter(
                (wItem) => !(wItem.key === item.key && wItem.category === activeCategory.name)
            );
        } else {
            savedWishlist.push({ ...item, category: activeCategory.name });
        }

        setWishlist(savedWishlist);
        localStorage.setItem("wishlist", JSON.stringify(savedWishlist));
    };

    // ✅ function to add item to cart
    const addToCart = (item) => {
        let savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        const exists = savedCart.some(
            (cItem) => cItem.key === item.key && cItem.category === activeCategory.name
        );

        if (!exists) {
            savedCart.push({ ...item, category: activeCategory.name, qty: 1 });
        } else {
            savedCart = savedCart.map((cItem) => {
                if (cItem.key === item.key && cItem.category === activeCategory.name) {
                    return { ...cItem, qty: cItem.qty + 1 }; // لو المنتج موجود زود الكمية
                }
                return cItem;
            });
        }

        setCart(savedCart);
        localStorage.setItem("cart", JSON.stringify(savedCart));
    };

    return (
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
                                setActiveCategory(cat);
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
                    {activeCategory.data.map((collData, index) => {
                        const isInWishlist = wishlist.some(
                            (item) => item.key === collData.key && item.category === activeCategory.name
                        );

                        return (
                            <div className="collCard" key={index}>
                                <div className="top">
                                    <div className="topImg">
                                        <img src={collData.img} alt="CollectionImg" loading="lazy" />
                                    </div>
                                    <div className="add">
                                        <p onClick={() => addToCart(collData)}>add to cart</p>
                                        <button onClick={() => toggleWishlist(collData)}>
                                            <i
                                                className="fa-solid fa-heart"
                                                style={{ color: isInWishlist ? "red" : "white" }}
                                            ></i>
                                        </button>
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
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
