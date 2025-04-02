import "../Css/Cart.css"
import "../Responsive/cart.css"
import pay1 from "../Assets/payment/1.webp"
import pay2 from "../Assets/payment/2.webp"
import pay3 from "../Assets/payment/3.webp"
import pay4 from "../Assets/payment/4.webp"
import { motion } from "framer-motion"
import { Link , useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Cart() {

    
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(savedCart);
    }, []);

    // ✅ تعديل الكمية
    const updateQty = (key, category, amount) => {
        const updatedCart = cartItems.map((item) => {
            if (item.key === key && item.category === category) {
                const newQty = item.qty + amount;
                // نمنع ان الكمية تكون أقل من 1
                return { ...item, qty: newQty > 0 ? newQty : 1 };
            }
            return item;
        });
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    // ✅ حذف منتج
    const removeFromCart = (key, category) => {
        const updatedCart = cartItems.filter(item => !(item.key === key && item.category === category));
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    // ✅ حساب التوتال الكلي
    const totalPrice = cartItems.reduce((acc, item) => {
        return acc + (parseInt(item.price) * item.qty);
    }, 0);



    const navigate = useNavigate();

    const goToCheckout = () => {
        localStorage.setItem("checkoutItems", JSON.stringify(cartItems));
        navigate("/CheckOut");
    };

    const reveal ={
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
        className="cartPage" id="cart-section">
            <div className="backShop">
                <Link to="/Shop">
                    <i className="fa-regular fa-arrow-left"></i>
                    continue shopping
                </Link>
            </div>

            <div className="mainCont">
                <div className="row">
                    <p>product</p>
                    <p>price</p>
                    <p>qTY</p>
                    <p>Total</p>
                </div>

                <div className="prodsCont">
                    {cartItems.map((item, index) => (
                        <div className="prodCont" key={index}>
                            <div className="product">
                                <img src={item.img} alt="productImg" />
                                <p>{item.title}</p>
                            </div>

                            <p className="price price1">{item.price}</p>

                            <div className="qty">
                                <button onClick={() => updateQty(item.key, item.category, -1)}>-</button>
                                <p>{item.qty}</p>
                                <button onClick={() => updateQty(item.key, item.category, 1)}>+</button>
                            </div>

                            <p className="price price2">{parseInt(item.price) * item.qty} LE</p>

                            <i
                                className="fa-solid fa-xmark"
                                onClick={() => removeFromCart(item.key, item.category)}
                            ></i>
                            <span></span>
                        </div>
                    ))}
                </div>



                {/* {cartItems.length > 0 && (
                    <div className="totalCart">
                        <h3>Total: {totalPrice} LE</h3>
                    </div>
                )} */}
            </div>

                <div className="payment">
                    <div className="choose">
                        <p>choose pay mode:</p>
                        <div className="on">
                            <label>
                            <input type="radio"/>
                            Online
                            </label>
                            <div className="payImgs">
                                <img src={pay1} alt="PayImage" loading="lazy"/>
                                <img src={pay2} alt="PayImage" loading="lazy"/>
                                <img src={pay3} alt="PayImage" loading="lazy"/>
                                <img src={pay4} alt="PayImage" loading="lazy"/>
                            </div>
                        </div>
                        <label>
                            <input type="radio"/>
                            Cash on delivery
                            </label>
                    </div>

                    <div className="prices">
                {cartItems.length > 0 && (

                        <div>
                            <p>subtotal:</p>
                            <span>{totalPrice} LE</span>
                        </div>
                )}

                        <div>
                            <p>shipping:</p>
                            <span>0 LE</span>
                        </div>
                        <span></span>
                {cartItems.length > 0 && (
                        
                        <div>
                            <p>total:</p>
                            <span>{totalPrice} LE</span>
                        </div>
                )}

                        <a href="/CheckOut" onClick={goToCheckout}>checkOut</a>
                    </div>
                </div>




        </motion.div>
    );
}
