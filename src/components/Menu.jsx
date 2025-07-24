import Nav from "./Nav";
import Footer from "./Footer";

export default function Menu() {
    return (<div id={"Menu"}>
    <Nav/>
        <img alt={"restaurant's menu"} src={"./fakemenu.png"} id={"MenuImg"}/>
        <Footer/>
    </div>)

}