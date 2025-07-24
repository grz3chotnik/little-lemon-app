import {useEffect, useState} from "react";
import AvailableTimes from "./AvailableTimes";
import {submitAPI} from "./Api";
import {useNavigate} from "react-router-dom";

export default function ReservationForm({availabletimes}) {


    const navigate = useNavigate();


    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [phonenumber, setPhonenumber] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [occasion, setOccasion] = useState("")
    const [nopeople, setNopeople] = useState("")

    const [submissionFailed, setSubmissionFailed] = useState(false);

    const [isDisabled, setIsDisabled] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        // setIsDisabled(false);


        const formData = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            phonenumber: phonenumber,
            date: date,
            time: time,
            occasion: occasion,
            nopeople: nopeople
        }

        // console.log(formData)

        const submitForm = (formdata) => {
            if (submitAPI(formdata)) {
                navigate("/ConfirmedReservation")
                console.log("form submitted")
                setSubmissionFailed(false)
            } else {
                console.log("form not submitted")
                setSubmissionFailed(true)


            }
        }

        submitForm(formData);
    }

const [isFormCorrect, setIsFormCorrect] = useState(true);


    const handleValidation = () => {
        if (
            firstname === "" ||
            firstname.match(/[0-9]/)  ||
            lastname === "" ||
            lastname.match(/[0-9]/)  ||
            email === "" ||
            !email.includes("@") ||
            phonenumber === "" ||
            date === "" ||
            time === "" ||
            time === "Time" ||
            occasion === "" ||
            occasion === "Occasion" ||
            nopeople === ""

        ) {

            return false
        } else {
            return true


        }

    }
    useEffect(() => {
        setIsDisabled(handleValidation());
    }, [firstname, lastname, email, phonenumber, date, time, occasion, nopeople]);




    return (<div className="reservecontainer">
        <h1>Reserve a table</h1>
        <form className="reservelayout"
              onSubmit={handleSubmit}
        aria-label="Reserve a table form">

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

                <label htmlFor="time">time</label>
                <select id="time"
                        placeholder="time"
                        value={time}
                        required={true}
                        onChange={(e) => setTime(e.target.value)}>
                    <option>Time</option>
                    <AvailableTimes date={date}/>
                </select>

                <label htmlFor={"occasion"}>Occasion</label>
                <select id={"occasion"}
                        value={occasion}
                        required={true}
                        onChange={(e) => setOccasion(e.target.value)}>
                    <option>Occasion</option>
                    <option>Birthday</option>
                    <option>Business</option>
                    <option>Other</option>
                </select>

                <label htmlFor={"lastname"}>Last name</label>
                <input id={"lastname"}
                       type={"text"}
                       placeholder="Last name"
                       value={lastname}
                       required={true}
                       onChange={(e) => setLastname(e.target.value)}/>

                <label htmlFor={"phonenumber"}>Phone number</label>
                <input id={"phonenumber"}
                       type={"number"}
                       placeholder="Phone number"
                       min={"0"}
                       required={true}
                       title="Phone number must be 10 digits"
                       value={phonenumber}
                       onChange={(e) => setPhonenumber(e.target.value)}/>
            </div>

            <div className={"row3"}>
                <img src={"./restaurant.jpg"}
                     alt={"Image of a steak"}
                     height={"300px"}/>
            </div>


            <button type={"submit"}
                    className={"yellowbutton"}
                    disabled={!isDisabled}
                    onClick={() => {

                        setIsFormCorrect(false)

                    }}
                    aria-label="Reserve"
            >Reserve
            </button>



        </form>
        {/*{!isFormCorrect &&  <p className={"error"}>Please, fill all of the form fields</p>}*/}
        {submissionFailed && <p className={"error"}>Error, please try again</p>}



    </div>)
}