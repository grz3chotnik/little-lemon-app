import Nav from "./Nav";
import Footer from "./Footer";

export default function Reservations() {
    return <div>
        <Nav/>




        <div className={"reservecontainer"}>
            <h1>Reserve a table</h1>
            <div className={"reservelayout"}>
                <div className={"row1"}>
                    <select>
                        <option>Date</option>
                        <option>dddddd</option>
                        <option>ddddd</option>
                        <option>ddddd</option>
                        <option>ddddd</option>
                        <option>ddddd</option>
                    </select>
                    <select>
                        <option>No. of People</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>

                    </select>
                    <input placeholder={"First name"}/>
                    <input placeholder={"E-mail"}/>

                </div>

                <div className={"row2"}>
                    <select>
                        <option>Time</option>
                        <option>ddddd</option>
                        <option>ddddd</option>
                        <option>ddddd</option>
                        <option>ddddd</option>

                    </select>
                    <select>
                        <option>Occasion</option>
                        <option>Birthday</option>
                        <option>Business</option>
                        <option>Other</option>
                    </select>
                    <input placeholder={"Last name"}/>
                    <input placeholder={"Phone number"}/>
                </div>

                <div className={"row3"}>
                    <img src={"./restaurant.jpg"} alt={"seats"} height={"230px"}/>
                </div>
                <button className={"yellowbutton"}>Reserve a table</button>

            </div>

        </div>
        {/*<div>*/}
        {/*    <button className={"yellowbutton"}>Choose a table</button>*/}
        {/*</div>*/}


        <Footer/>
    </div>;
}