import {Link} from "react-router-dom";

export default function Footer() {
    return (


        <footer className={"footer"}>


<ul>
    <li><img src={"./logo2.png"} alt={"logo"} height={"145vh"} className={"footerimgw"}/></li>
</ul>
            <ul>

                <h3><a>Navigation</a></h3>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/Aboutpage"}>About</Link></li>
                <li><Link to={"/Reservations"} >Reservations</Link></li>
                <li><Link to={"/Orderonline"}>Order online</Link></li>
                <li><Link to={"/Login"}>Login</Link></li>

            </ul>
            <ul>
                <h3>Contact</h3>
                <li><a href={"#"}>Address</a></li>
                <li><a href={"#"}>Phone</a></li>
                <li><a href={"#"}>E-mail</a></li>



            </ul>
            <ul>
                <h3>Social media links</h3>
                <li><a href={"#"}>Instagram</a></li>
                <li><a href={"#"}>Tiktok</a></li>
                <li><a href={"#"}>Twitter</a></li>
            </ul>
        </footer>)
}