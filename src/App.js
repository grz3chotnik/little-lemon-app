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

function App() {

    //
    // function reducer(state, action) {
    //     if (action.type === "date_change") { return {}};
    //     return state;
    // }
    //
    //   const initialState = ["10:00", "12:00", "14:00", "16:00", "18:00", "21:00"];
    //   const [state, dispatch] = useReducer(reducer, initialState)

    //
    const [availableTimes, setAvailableTimes] = useState(
        ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00",])


    return (

        <>
            {/*<HomePage/>*/}

            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/Aboutpage" element={<Aboutpage/>}></Route>
                <Route path="/Menu" element={<Menu/>}></Route>
                <Route path="/Reservations" element={<Reservations availabletimes={availableTimes}/>}></Route>
                <Route path={"/Orderonline"} element={<Orderonline/>}></Route>
                <Route path="/Login" element={<Login/>}></Route>
                <Route path={"*"} element={<Notfound/>}></Route>
            </Routes>
        </>


    );

}

export default App;
