import './App.css';
import {useReducer, useState} from "react";
import {Routes, Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import Reservations from "./components/Reservations"
import HomePage from "./components/HomePage";
import Notfound from "./components/Notfound";
import Menu from "./components/Menu";
import Login from "./components/Login";
import Orderonline from "./components/Orderonline";
import Aboutpage from "./components/Aboutpage";
import ConfirmedReservation from "./components/ConfirmedReservation";
import ConfirmedLogin from "./components/ConfirmedLogin";

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
                <Route path={"/ConfirmedReservation"} element={<ConfirmedReservation/>}></Route>
                <Route path={"/ConfirmedLogin"} element={<ConfirmedLogin/>}></Route>
            </Routes>
        </>


    );

}

export default App;
