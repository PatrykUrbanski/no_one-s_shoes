import React, {useState} from 'react';
import {Link} from "react-router-dom";
import * as firebase from "firebase";
import {firebaseInit} from "./firebaseConfig";



export const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const [success, setSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState(false);


    const resetForm = () => {
        setEmail("");
        setPassword("");
        setRepeatPassword("");
    };



    const handleSignUp = () => {

        setSuccess(false);
        setErrorMsg(false);

        firebaseInit();

        if (!email || password !== repeatPassword) {
            setErrorMsg("You must complete all fields. Passwords must be the same.")
            return null
        }
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(response => response)
            .then(data => {
                setSuccess(!success);
                resetForm()
            })
            .catch(function(error) {
            setErrorMsg(error.message)
        });
    };



    return (
        <>
            <section className={"login"}>
                <div className={"login__content container"}>
                    <h2 className={"title"}>Sign Up</h2>
                    <img className={"decoration"} src="../../assets/Decoration.svg" alt={"deco"}/>
                    <h3 className={"successInfo"} style={{display: `${success ? "block" : "none"}`}}>You have successfully registered! <Link to={"/donate"}>You can start donating right now!</Link></h3>
                    <h3 className={"errorInfo"} style={{display: `${errorMsg ? "block" : "none"}`}}>{errorMsg}</h3>
                    <form className={"form"}>
                        <label>Email
                            <input type={"email"} value={email} onChange={e => setEmail(e.target.value)}/>
                        </label>
                        <label>Password
                            <input type={"password"} value={password} onChange={e => setPassword(e.target.value)}/>
                        </label>
                        <label>Repeat Password
                            <input type={"password"} value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)}/>
                        </label>
                    </form>
                    <div className={"loginBtn"}>
                        <Link  to="#" className={"loginBtn__Elem checked"} onClick={handleSignUp}>Sign up</Link>
                        <Link  to="/login" className={"loginBtn__Elem"}>Log In</Link>
                    </div>
                </div>


            </section>
        </>
    )
}