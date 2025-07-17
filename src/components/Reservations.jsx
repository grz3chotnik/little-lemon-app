import Nav from "./Nav";
import Footer from "./Footer";


const handleSubmit = (e) => {
    e.preventDefault();
}


export default function Reservations() {
    return <div>
        <Nav/>


        <div className={"reservecontainer"}>
            <h1>Reserve a table</h1>
            <form className={"reservelayout"}>
                <div className={"row1"}>
                    <label htmlFor={"date"}>Date</label>
                    <input id={"date"} type={"date"}/>

                    <label htmlFor={"nopeople"}>Number of people</label>
                    <input id={"nopeople"} type={"number"} placeholder={"Number of people"}/>

                    <label htmlFor={"firstname"}>First name</label>
                    <input id={"firstname"} type={"text"} placeholder={"First name"}/>

                    <label htmlFor={"email"}>E-mail</label>
                    <input id={"email"} type={"email"} placeholder={"E-mail"}/>

                </div>

                <div className={"row2"}>
                    {/*<form></form>*/}

                    <label htmlFor={"time"}>time</label>
                    <input id={"time"} type={"time"} placeholder={"Time"}/>

                    <label htmlFor={"occasion"}>Occasion</label>
                    <select id={"occasion"}>
                        <option>Occasion</option>
                        <option>Birthday</option>
                        <option>Business</option>
                        <option>Other</option>
                    </select>

                    <label htmlFor={"lastname"}>Last name</label>
                    <input id={"lastname"} type={"text"} placeholder={"Last name"}/>

                    <label htmlFor={"phonenumber"}>Phone number</label>
                    <input id={"phonenumber"} type={"number"} placeholder={"Phone number"}/>
                </div>

                <div className={"row3"}>
                    <img src={"./restaurant.jpg"} alt={"seats"} height={"230px"}/>
                </div>
                <button type={"submit"} className={"yellowbutton"} onSubmit={handleSubmit}>Reserve a table</button>

            </form>

        </div>
        {/*<div>*/}
        {/*    <button className={"yellowbutton"}>Choose a table</button>*/}
        {/*</div>*/}


        <Footer/>
    </div>;
}