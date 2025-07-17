import Nav from "./Nav";
import Footer from "./Footer";
import {useState} from "react";
import ReservationForm from "./ReservationForm";


export default function Reservations() {


    return <div>
        <Nav/>
        <ReservationForm/>
        <Footer/>
    </div>;
}