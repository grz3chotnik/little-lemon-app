import Nav from "./Nav";
import Footer from "./Footer";
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import ConfirmedLogin from "./ConfirmedLogin";
import {submitAPI} from "./Api";

export default function Login() {


    const [isDisabled, setIsDisabled] = useState(false);
    const [submissionFailed, setSubmissionFailed] = useState(false)


    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate()


    useEffect(() => {
        setIsDisabled(handleValidation)
    }, [username, email, password]);


    const handleValidation = () => {
        if (
            username === "" ||
            email === "" ||
            password === ""

        ) {
            setIsDisabled(false);
            return false;
        }
        return true;
    }


    const handleSubmit = (e) => {
        e.preventDefault()


        const formData = {
            username: username,
            email: email,
            password: password
        }
        console.log(formData)



        const submitForm = (formdata) => {
           if ( submitAPI(formdata) ) {
               navigate("/ConfirmedLogin")
                console.log("form submitted")
           } else {
               console.log("form not submitted")
                setSubmissionFailed(true)


           }

        }
        submitForm(formData)
    }


    return (<>
        <Nav/>

        <div className={"login"}>
            <h1>Log in into your Little Lemon account</h1>
            <div className={"form"}>
                <h3>Log in into your Little Lemon Account</h3>

                <form className="loginform"
                      onSubmit={handleSubmit}
                ><label><input
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />Username</label>

                    <label><input type="email"
                                  placeholder="E-mail"
                                  value={email}
                                  onChange={(e) => {
                                      setEmail(e.target.value)
                                  }}/>E-mail</label>

                    <label><input type={"password"}
                                  placeholder="password"
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                    />Password</label>


                    <a href={"/reset"}>Forgot password?</a> <br/>
                    <button className={"yellowbutton"}
                            type={"submit"}
                            disabled={!isDisabled}
                    >Log In
                    </button>




                </form>


            </div>
            {submissionFailed && <p className={"error"}>Error, please try again!</p>}
        </div>
        <Footer/>
    </>)
}