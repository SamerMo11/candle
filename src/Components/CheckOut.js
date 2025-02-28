import "../Css/CheckOut.css";
import { Link } from "react-router-dom";


export default function CheckOut() {
    return(
        <div className="checkPage">
                <div className="backCart">
                        <Link to="/Cart" >
                            <i class="fa-regular fa-arrow-left"></i>
                            my cart
                        </Link>
                </div>

            <div className="checkCont">

            </div>
        </div>
    )


}