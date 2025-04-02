import "../Css/CheckOut.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CheckOut() {


    const [orderItems, setOrderItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const savedOrder = JSON.parse(localStorage.getItem("checkoutItems")) || [];
        setOrderItems(savedOrder);

        const total = savedOrder.reduce((acc, item) => acc + (parseInt(item.price) * item.qty), 0);
        setTotalPrice(total);
    }, []);



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




    return(
        <motion.div
        variants={reveal}
        initial="hidden"  
        animate="visible"
        className="checkPage">
                <div className="backCart">
                        <Link to="/Cart" >
                            <i class="fa-regular fa-arrow-left"></i>
                            my cart
                        </Link>
                </div>

            <div className="checkCont">
                <div className="pay">
                    <p>pay details</p>
                    <input type="text" placeholder="Name"/>
                    <input type="number" placeholder="Phone Number"/>
                    <input type="text" placeholder="Address"/>
                    <input type="text" placeholder="Email"/>
                    <select>
                        <option>Cairo</option>
                        <option>Alex</option>
                    </select>
                    <div className="checkBox">
                        <input type="checkbox" id="check"/>
                        <label for="check">
                        Save this information for faster check-out next time
                        </label>
                    </div>
                </div>



                <div className="order">
                    <p>my order</p>
                    <div className="prods">
                    {orderItems.map((item, index) => (
                    <div className="prod" key={index}>
                        <img src={item.img} alt={item.title} loading="lazy"/>
                        <p>{item.title}</p>
                        {/* <p>Qty: {item.qty}</p> */}
                        {/* <p>Price: {item.price} LE</p> */}
                    </div>
                ))}
                    </div>

                    <div className="prices">
                        <div>
                            <p>subtotal:</p>
                            <span>{totalPrice} LE</span>
                        </div>
                        <div>
                            <p>shipping:</p>
                            <span>0 LE</span>
                        </div>
                        <span></span>
                        
                        <div>
                            <p>total:</p>
                            <span>{totalPrice} LE</span>
                        </div>

                </div>
                <a href="/CheckOut">checkOut</a>

            </div>
    
        </div>
        </motion.div>
    )
}