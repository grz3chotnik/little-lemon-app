import Nav from "./Nav";
import Footer from "./Footer";
import {Link} from "react-router-dom";

export default function Login () {
    return (
        <>
            <Nav/>

        <div className={"login"}>
    <h1>Log in into your Little Lemon account</h1>
            <div className={"form"}>
                <h3>Log in into your Little Lemon Account</h3>
                <label><input />Username</label>
                <label><input/>E-mail</label>
                <label><input/>Password</label>
                <a href={"/reset"}>Forgot password?</a>
                <Link to={"/loggedin"}><button className={"yellowbutton"}>Log In</button></Link>


            </div>
        </div>
        <Footer/>
        </>
    )
}