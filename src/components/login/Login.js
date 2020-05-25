import React, {useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import {firebaseInit} from "./firebaseConfig";
import * as firebase from "firebase";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState(false);


    let history = useHistory();



    const handleLogin = () => {

        firebaseInit();

        if (!email || !password) {
            return null
        }

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(response => response)
            .then(data => {
                history.push("/")
            })
            .catch(function(error) {
            setErrorMsg(error.message)
        });

    };










    return (
        <>
            <section className={"login"}>
                <div className={"login__content container"}>
                    <h2 className={"title"}>Log in</h2>
                    <img className={"decoration"} src="../../assets/Decoration.svg" alt={"deco"}/>
                    <h3 className={"errorInfo"} style={{display: `${errorMsg ? "block" : "none"}`}}>{errorMsg}</h3>
                    <form className={"form"}>
                        <label>Email
                            <input type={"email"} value={email} onChange={e => setEmail(e.target.value)}/>
                        </label>
                        <label>Password
                            <input type={"password"} value={password} onChange={e => setPassword(e.target.value)}/>
                        </label>
                    </form>
                    <div className={"loginBtn"}>
                        <Link  to="/signUp" className={"loginBtn__Elem"}>Sign up</Link>
                        <Link  to="/login" className={"loginBtn__Elem checked"} onClick={handleLogin}>Log In</Link>
                    </div>
                </div>


            </section>
        </>
    )
}
