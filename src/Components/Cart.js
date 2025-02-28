import "../Css/Cart.css"
import { Link } from "react-router-dom";
import img from "../Assets/shop/cat1/1.webp"






export default function Cart(){

    return(

        <div className="cartPage">
            
            <div className="backShop">
            <Link to="/Shop" >
            <i class="fa-regular fa-arrow-left"></i>
            continue shopping</Link>
            </div>


        <div className="mainCont">
            <div className="row">
                {/* <div className="minRow"> */}
                <p>product</p>
                <p>price</p>
                <p>qTY</p>
                <p>Total</p>
                {/* </div> */}
            </div>

            <div className="prodsCont">

                <div className="prodCont">
                    <div>
                        <div className="product">
                            <img src={img} alt="productImg" />
                            <p>sweety candle</p>
                        </div>

                    <p className="price">900LE</p>

                        <div className="qty">
                            <button>-</button>
                            <p>2</p>
                            <button>+</button>
                        </div>
                    <p className="price price2">900LE</p>

                    <i class="fa-solid fa-xmark"></i>
                    </div>
                    <span></span>
                </div>

            </div>

        </div>


        </div>

    )
}