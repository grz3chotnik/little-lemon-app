import Nav from "./Nav";
import Footer from "./Footer";
import {Link} from "react-router-dom";

export default function ConfirmedLogin() {
    return <div>

        <Nav/>
        <div className={"confirmedlayout"}>

        <h1 className={"confirmed"}>Succesfully logged in!</h1>
            <Link to={"/"}><button className={"confirmedbutton"} >Go back home</button></Link>



        </div>
        <Footer/>
    </div>
}