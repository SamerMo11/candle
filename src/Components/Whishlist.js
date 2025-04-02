import "../Css/Whishlist.css";
import "../Responsive/whishlist.css"
import { motion } from "framer-motion";
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


    const addToCart = (item) => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        
        // التأكد إذا كان العنصر موجود بالفعل في السلة
        const itemExists = savedCart.some(cartItem => cartItem.key === item.key && cartItem.category === item.category);
    
        if (!itemExists) {
            savedCart.push({ ...item, qty: 1 });  // إضافة العنصر مع الكمية 1
            localStorage.setItem("cart", JSON.stringify(savedCart));
        }
    
        // يمكن إضافة رسالة أو تغيير الحالة هنا لإعلام المستخدم بأنه تم إضافة المنتج
    };

    const isMobile = window.innerWidth <= 768;
    
    const reveal =isMobile ? {} :{
        hidden:{
            opacity: 0,
        },
        visible:{
            opacity: 1,
            transition: {
                duration: 2, 
            },
        }
    }

    return (
        <motion.div
        variants={reveal}
        initial="hidden"  
        animate="visible"
        className="whishPage" id="whish-section">
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
                                    <p onClick={() => addToCart(item)}>add to cart</p>
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
        </motion.div>
    );
}
