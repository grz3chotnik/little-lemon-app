import Nav from "./Nav";
import Footer from "./Footer";

export default function Login () {
    return (
        <>
            <Nav/>

        <div className={"login"}>

            <div className={"form"}>
                <h3>Log in into your Little Lemon Account</h3>
                <label>username<input/></label>
                <label>email<input/></label>
                <label>password<input/></label>
                <a href={"#"}>forgot password?</a>
                <button className={"yellowbutton"}>Log In</button>

            </div>
        </div>
        <Footer/>
        </>
    )
}