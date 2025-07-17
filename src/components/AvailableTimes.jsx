import {useState} from "react";

export default function AvailableTimes() {

    const [availableTimes, setAvailableTimes] = useState(
        ["10:00", "12:00", "14:00", "16:00", "18:00"])

    return (availableTimes.map((hour) => {
            return <option>{hour}</option>
        })

    )
}