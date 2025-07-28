import {useEffect, useState} from "react";

export default function Testimonals() {

    const [profilePic, setProfilePic] = useState([]);
    const [profileName, setProfileName] = useState([]);



    useEffect(() => {
    fetch("https://randomuser.me/api/?results=4")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setProfilePic(data.results.map(user => user.picture.large))
            setProfileName(data.results.map(user => user.name.first))
        })

        .catch(error => console.log(error + "ERROR"))
        }, [])
console.log()

    return (

        <div className={"testimonals"}>
            <h1 className={"testimonalsec"}>Testimonals</h1>
            <div className={"reviews"}>
                <div className={"review"}>
                    <div className={"rating"}>
                        <h3>Rating:</h3>
                        <p>⭐⭐⭐⭐⭐️</p>
                    </div>
                    <div className={"person"}>
                        <img src={profilePic[0]} alt={"ev"} height={"100vh"}/>
                        <h3>{profileName[0]}</h3>
                    </div>
                    <div className={"comment"}>
                        <p>Yummy</p>
                    </div>


                </div>
                <div className={"review"}>
                    <div className={"rating"}>
                        <h3>Rating:</h3>
                        <p>⭐⭐⭐⭐️</p>
                    </div>
                    <div className={"person"}>
                        <img src={profilePic[1]} alt={"ev"} height={"100vh"}/>
                        <h3>{profileName[1]}</h3>
                    </div>
                    <div className={"comment"}>
                        <p>Best restaurant in town</p>
                    </div>


                </div>

                <div className={"review"}>
                    <div className={"rating"}>
                        <h3>Rating:</h3>
                        <p>⭐⭐</p>
                    </div>
                    <div className={"person"}>
                        <img src={profilePic[2]} alt={"ev"} height={"100vh"}/>
                        <h3>{profileName[2]}</h3>
                    </div>
                    <div className={"comment"}>
                        <p>SUCKS</p>
                    </div>





                </div>


                <div className={"review"}>
                    <div className={"rating"}>
                        <h3>Rating:</h3>
                        <p>⭐⭐⭐⭐️</p>
                    </div>
                    <div className={"person"}>
                        <img src={profilePic[3]} alt={"ev"} height={"100vh"}/>
                        <h3>{profileName[3]}</h3>
                    </div>
                    <div className={"comment"}>
                        <p>Great food, great prices, AMAZING!!! </p>
                    </div>


                </div>
            </div>


        </div>

    )

}