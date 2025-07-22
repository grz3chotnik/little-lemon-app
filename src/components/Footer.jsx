import {Link} from "react-router-dom";

export default function Footer() {
    return (


        <footer className={"footer"} aria-label={"footer"}>


<ul>
    <li><Link to={"/"}><img src={"./logo2.png"} alt={"logo"} height={"145vh"} className={"footerimgw"}/></Link></li>
</ul>
            <ul>

                <h3>Navigation</h3>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/#about"}>About</Link></li>
                <li><Link to={"/Menu"}>Menu</Link></li>
                <li><Link to={"/Reservations"} >Reservations</Link></li>
                {/*<li><Link to={"/Orderonline"}>Order online</Link></li>*/}
                <li><Link to={"/Login"}>Login</Link></li>

            </ul>
            <ul>
                <h3>Contact</h3>
                <li><a href={"xyz.com"}>Address</a></li>
                <li><a href={"xyz.com"}>Phone</a></li>
                <li><a href={"xyz.com"}>E-mail</a></li>



            </ul>
            <ul>
                <h3>Social media links</h3>
                <li><a href={"xyz.com"}>Instagram</a></li>
                <li><a href={"xyz.com"}>Tiktok</a></li>
                <li><a href={"xyz.com"}>Twitter</a></li>
            </ul>
        </footer>)
}