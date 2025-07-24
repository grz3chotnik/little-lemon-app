import {Link} from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Notfound() {
    return (

        <>
            <Nav/>
            <div className={"notfound"}>
            <h1>PAGE NOT FOUND :(</h1>
            <Link to={"/"}><button className={"yellowbutton"}> -> Go back Home</button></Link>

        </div>
            <Footer/>
        </>
    )
}