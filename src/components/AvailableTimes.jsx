import {useEffect, useState} from "react";
import {fetchAPI, submitAPI} from "./Api";

export default function AvailableTimes({date}) {


    const [availableTimes, setAvailableTimes] = useState([]);


    useEffect(() => {
        let timesArray = fetchAPI(date);
        setAvailableTimes(timesArray)
            console.log(timesArray);
    }, [date])



    return (availableTimes.map((hour) => {
        return <option key={hour} value={hour}>{hour}</option>
    }))


}
