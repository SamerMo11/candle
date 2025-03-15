import "../Css/Cart.css"
import "../Responsive/cart.css"
import { Link } from "react-router-dom";
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

    return (
        <div className="cartPage">
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
        </div>
    );
}
