export default function Testimonals() {
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
                        <img src={"/ev.jpg"} alt={"ev"} height={"100vh"}/>
                        <h3>John Doe</h3>
                    </div>
                    <div className={"comment"}>
                        <p>this is a comment blablablablablablablab lablablablablablablalba</p>
                    </div>


                </div>
                <div className={"review"}>
                    <div className={"rating"}>
                        <h3>Rating:</h3>
                        <p>⭐⭐⭐⭐️</p>
                    </div>
                    <div className={"person"}>
                        <img src={"/ev.jpg"} alt={"ev"} height={"100vh"}/>
                        <h3>John Doe</h3>
                    </div>
                    <div className={"comment"}>
                        <p>bla blablabal bla blab lab lbabla</p>
                    </div>


                </div>

                <div className={"review"}>
                    <div className={"rating"}>
                        <h3>Rating:</h3>
                        <p>⭐⭐</p>
                    </div>
                    <div className={"person"}>
                        <img src={"/ev.jpg"} alt={"ev"} height={"100vh"}/>
                        <h3>John Doe</h3>
                    </div>
                    <div className={"comment"}>
                        <p>SUCKS</p>
                    </div>


                </div>



            </div>


        </div>

    )

}