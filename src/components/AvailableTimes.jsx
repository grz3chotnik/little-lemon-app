import {useEffect, useState} from "react";

export default function AvailableTimes({availabletimes, date}) {

    // const [availableTimes, setAvailableTimes] = useState(
    //     ["10:00", "12:00", "14:00", "16:00", "18:00"])


    // useEffect(() => {
    //     fetch("https://raw.githubusercontent.com/courseraap/capstone/main/api.js")
    //         .then(response => response.json())
    //         .then(data => )
    // }, []);


let currentdate = new Date(date);


    if (currentdate.getDay() === 5 || 6) {
        return [
            <option>10:00</option>,
            <option>11:00</option>,
            <option>12:00</option>,
            <option>13:00</option>,
            <option>14:00</option>,
            <option>15:00</option>,
        ];

    }
    return (availabletimes?.map((hour) => {
        return <option>{hour}</option>
    }))


}
