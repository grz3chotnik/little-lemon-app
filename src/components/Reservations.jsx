import Nav from "./Nav";
import Footer from "./Footer";

export default function Reservations() {
    return <div>
        <Nav/>


        <h1>Reserve a table</h1>


        <div className={"reservecontainer"}>
            <div className={"reservelayout"}>
                <div className={"row1"}>
                    <select>
                        <option>ddddd</option>
                        <option>ddddd</option>
                        <option>ddddd</option>
                    </select>
                    <select>
                        <option>ddddd</option>
                        <option>ddddd</option>
                        <option>ddddd</option>
                    </select>
                    <input/>
                    <input/>
                    <input/>
                </div>

                <div className={"row2"}>
                    <select>
                        <option>ddddd</option>
                        <option>ddddd</option>
                        <option>ddddd</option>
                    </select>
                    <select>
                        <option>ddddd</option>
                        <option>ddddd</option>
                        <option>ddddd</option>
                    </select>
                    <input/>
                    <input/>
                    <input/>
                </div>

                <div className={"row3"}>
                    <img src={"./ev.jpg"} alt={"ev"} height={"150px"}/>
                </div>
                <button className={"yellowbutton"}>Choose a table</button>

            </div>

        </div>
        {/*<div>*/}
        {/*    <button className={"yellowbutton"}>Choose a table</button>*/}
        {/*</div>*/}


        <Footer/>
    </div>;
}