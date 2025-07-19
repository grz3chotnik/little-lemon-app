import {useState} from "react";
import AvailableTimes from "./AvailableTimes";

export default function ReservationForm({availabletimes}) {


    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [phonenumber, setPhonenumber] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [occasion, setOccasion] = useState("")
    const [nopeople, setNopeople] = useState("")


    const [isDisabled, setIsDisabled] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsDisabled(false);
        console.log("FORM SUBMITTED")
        console.log(date)
        console.log(time)
        console.log(firstname)
        console.log(lastname)
        console.log(email)
        console.log(phonenumber)
        console.log(nopeople + " people")
        console.log(occasion)

    }

    return (<div className={"reservecontainer"}>
        <h1>Reserve a table</h1>
        <form className={"reservelayout"}
              onSubmit={handleSubmit}>
            <div className={"row1"}>
                <label htmlFor={"date"}>Date</label>
                <input id={"date"}
                       type={"date"}
                       required={true}
                       value={date}
                       onChange={(e) => setDate(e.target.value)}/>

                <label htmlFor={"nopeople"}>Number of people</label>
                <input id={"nopeople"}
                       type={"number"}
                       placeholder={"1"}
                       min={"1"}
                       max={"10"}
                       value={nopeople}
                       required={true}
                       onChange={(e) => setNopeople(e.target.value)}
                />

                <label htmlFor={"firstname"}>First name</label>
                <input id={"firstname"}
                       type={"text"}
                       placeholder={"First name"}
                       value={firstname}
                       required={true}
                       onChange={(e) => setFirstname(e.target.value)}/>

                <label htmlFor={"email"}>E-mail</label>
                <input id={"email"}
                       type={"email"}
                       placeholder={"E-mail"}
                       value={email}
                       required={true}
                       onChange={(e) => {
                           setEmail(e.target.value)
                       }}/>


            </div>

            <div className={"row2"}>
                {/*<form></form>*/}

                <label htmlFor={"time"}>time</label>
                <select id={"time"}
                        placeholder={"Time"}
                        value={time}
                        required={true}
                        onChange={(e) => setTime(e.target.value)}>
                    <AvailableTimes availabletimes={availabletimes} date={date}/>
                </select>

                <label htmlFor={"occasion"}>Occasion</label>
                <select id={"occasion"}
                        value={occasion}
                        required={true}
                        onChange={(e) => setOccasion(e.target.value)}>
                    <option>Normal</option>
                    <option>Birthday</option>
                    <option>Business</option>
                    <option>Other</option>
                </select>

                <label htmlFor={"lastname"}>Last name</label>
                <input id={"lastname"}
                       type={"text"}
                       placeholder={"Last name"}
                       value={lastname}
                       required={true}
                       onChange={(e) => setLastname(e.target.value)}/>

                <label htmlFor={"phonenumber"}>Phone number</label>
                <input id={"phonenumber"}
                       type={"number"}
                       placeholder={"Phone number"}
                       min={"0"}
                       required={true}
                       title={"Phone number must be 10 digits"}
                       value={phonenumber}
                       onChange={(e) => setPhonenumber(e.target.value)}/>
            </div>

            <div className={"row3"}>
                <img src={"./restaurant.jpg"}
                     alt={"seats"}
                     height={"230px"}/>
            </div>
            <button type={"submit"}
                    className={"yellowbutton"}
                    disabled={!isDisabled}
            >Reserve
            </button>

        </form>
        <button onClick={() => {console.log(date)}}> date testtt</button>
        <button onClick={() => {console.log(new Date(date).getDay())}}> date test 2</button>
    </div>)
}