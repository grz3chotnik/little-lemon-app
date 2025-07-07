import {Link} from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Notfound() {
    return (
        <div>
            <Nav/>
            <h1>PAGE NOT FOUND :(</h1>
            <Link to={"/"}><h3> ---> Go back Home</h3></Link>

        </div>
    )
}