import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";
import Testimonals from "./Testimonals";
import About from "./About";
import Footer from "./Footer";

export default function HomePage() {

    return (
        <div>
            <Header/>
            <Nav/>
            <Main/>
            <Testimonals/>
            <About/>
            <Footer/>
        </div>
    )
}