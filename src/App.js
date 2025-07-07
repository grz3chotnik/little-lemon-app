import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import Testimonals from "./components/Testimonals";
import About from "./components/About";
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Reservations from "./components/Reservations"
import HomePage from "./components/HomePage";
import Notfound from "./components/Notfound";
import Menu from "./components/Menu";
import Login from "./components/Login";
import Orderonline from "./components/Orderonline";
import Aboutpage from "./components/Aboutpage";

function App() {
    return (

        <>
            {/*<HomePage/>*/}

            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/Aboutpage" element={<Aboutpage/>}></Route>
                <Route path="/Menu" element={<Menu/>}></Route>
                <Route path="/Reservations" element={<Reservations/>}></Route>
                <Route path={"/Orderonline"} element={<Orderonline/>}></Route>
                <Route path="/Login" element={<Login/>}></Route>
                <Route path={"*"} element={<Notfound/>}></Route>
            </Routes>
        </>


    );

}

export default App;
