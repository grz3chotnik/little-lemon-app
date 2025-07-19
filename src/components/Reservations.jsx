import Nav from "./Nav";
import Footer from "./Footer";
import {useState} from "react";
import ReservationForm from "./ReservationForm";
import { BrowserRouter } from "react-router";


export default function Reservations({availabletimes}) {

    return <div>
        <Nav/>
        <ReservationForm availabletimes={availabletimes}/>
        <Footer/>
    </div>;
}