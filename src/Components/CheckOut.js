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
                <div></div>
            </div>
        </div>
    )


}