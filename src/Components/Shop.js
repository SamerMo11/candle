import "../Css/Shop.css";
import "../Responsive/shop.css"
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import span from "../Assets/shop/span.webp";
import { cat1 } from "../Datas/colls/cat1";
import { cat2 } from "../Datas/colls/cat2";
import { cat3 } from "../Datas/colls/cat3";
import { cat4 } from "../Datas/colls/cat4";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeart, faStar } from '@fortawesome/free-solid-svg-icons'
// import { useInView } from "react-intersection-observer";

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
    const isMobile = window.innerWidth <= 768;


    const reveal =isMobile ? {} :{
        hidden:{
            opacity: 0,
            y:50
        },
        visible:{
            opacity: 1,
            y:0,
            transition: {
                duration: 1, 
                staggerChildren:.3
            },
        }
    }
    
    // const { ref, inView } = useInView({  threshold: 0.01, rootMargin: "350px 0px" });

    return (
        <div className="shopPage">
            <motion.div
            initial={{clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)'}}
            animate={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'}}
            transition={{duration:1 , delay:.3}}
            className="shop" id="shop-section">
                <p>our collections</p>
            </motion.div>
            <div className="collCont">
                <motion.div
                variants={reveal} initial="hidden"     
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className="catCont">
                    {categories.map((cat, index) => (
                        <motion.button
                        
                            key={index}
                            className={`catBtn ${activeBtn === index ? "active" : ""}`}
                            onClick={() => {
                                setActiveCategory(cat);
                                setActiveBtn(index);
                            }}
                        >
                            {cat.name}
                        </motion.button>
                    ))}
                </motion.div>
                <motion.p
                variants={reveal} initial="hidden"     
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className="title">
                    <img src={span} alt="titleImg" loading="lazy" />
                    {categories[activeBtn].name}
                    <img src={span} alt="titleImg" loading="lazy" />
                </motion.p>

                <div
                className="colls">
                    {activeCategory.data.map((collData, index) => {
                        const isInWishlist = wishlist.some(
                            (item) => item.key === collData.key && item.category === activeCategory.name
                        );

                        return (
                            <motion.div
                            variants={reveal} initial="hidden"     
                        whileInView="visible"

                            className="collCard" key={index}>
                                <div className="top">
                                    <div className="topImg">
                                        <img src={collData.img} alt="CollectionImg" loading="lazy" />
                                    </div>
                                    <div className="add">
                                        <p onClick={() => addToCart(collData)}>add to cart</p>
                                        <button onClick={() => toggleWishlist(collData)}>
                                        <FontAwesomeIcon icon={faHeart} style={{ color: isInWishlist ? "red" : "white" }} />
                                        </button>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <div>
                                        <p>{collData.title}</p>
                                        <p>{collData.price}</p>
                                    </div>
                                    <div className="stars">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
