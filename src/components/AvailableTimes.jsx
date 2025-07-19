import {useState} from "react";

export default function AvailableTimes({availabletimes, date}) {

    // const [availableTimes, setAvailableTimes] = useState(
    //     ["10:00", "12:00", "14:00", "16:00", "18:00"])


    // const isWeekend = new Date(date.value).getDay() === 6 || new Date(date.value).getDay() === 5;
    // const isWeekend = (dateString) => {
    //     const dateObj = new Date(dateString);
    //     const day = dateObj.getDay();
    //     return day === 5 || day === 6;
    // };

    if (new Date(date).getDay() === 5|| new Date(date).getDay() === 6) {
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
