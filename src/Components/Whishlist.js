import "../Css/Whishlist.css";
import "../Responsive/whishlist.css"

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import span from "../Assets/shop/span.webp";

export default function Whishlist() {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        setWishlist(savedWishlist);
    }, []);

    const removeFromWishlist = (title) => {
        const updatedWishlist = wishlist.filter((item) => item.title !== title);
        setWishlist(updatedWishlist);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    };

    return (
        <div className="whishPage" id="whish-section">
            <div className="top">
                <p>
                    <img src={span} alt="span" loading="lazy"/>
                    my whishlist 
                    (<span>{wishlist.length} item(s)</span>)
                </p>
                <div className="backShop">
                    <Link to="/Shop">
                        <i className="fa-regular fa-arrow-left"></i>
                        continue shopping
                    </Link>
                </div>
            </div>

            <div className="cont">
                {wishlist.length > 0 ? (
                    wishlist.map((item, index) => (
                        <div className="whishCard" key={index}>
                            <div className="top">
                                <div className="topImg">
                                    <img src={item.img} alt="WishlistImg" loading="lazy" />
                                </div>
                                <div>
                                    <p>add to cart</p>
                                    <button onClick={() => removeFromWishlist(item.title)}>
                                        <i className="fa-solid fa-xmark"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="bottom">
                                <div>
                                    <p>{item.title}</p>
                                    <p>{item.price}</p>
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
                    ))
                ) : (
                    <p className="empty-msg">Your wishlist is empty.</p>
                )}
            </div>
        </div>
    );
}
