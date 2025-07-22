import {Link} from "react-router-dom";
import {Routes, Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
export default function Nav() {
    return (

        <nav className={"navbar"} aria-label={"navigation bar"}>
            <ul>
                {/*<li><a href={"#"}><img src={"./Logo.svg"} alt={"logo"} height={"100%"}/></a></li>*/}
                {/*<li><a href={"#"}>Home</a></li>*/}
                {/*<li><a href={"#"}>About</a></li>*/}
                {/*<li><a href={"#"}>Menu</a></li>*/}
                {/*<li><a href={"#"}>Reservations</a></li>*/}
                {/*<li><a href={"#"}>Order online</a></li>*/}
                {/*<li><a href={"#"}>Log in</a></li>*/}

                <li><Link to={"/"}><img src={"./Logo.svg"} alt={"logo"} height={"100%"}/></Link></li>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/#about"}>About</Link></li>
                {/*<li><a href={"/#about"}>About</a></li>*/}
                <li><Link to={"/Menu"}>Menu</Link></li>
                <li><Link to={"/Reservations"}>Reservations</Link></li>
                {/*<li><Link to={"/Orderonline"}>Order online</Link></li>*/}
                <li><Link to={"/Login"}>Log in</Link></li>




            </ul>

        </nav>)
}