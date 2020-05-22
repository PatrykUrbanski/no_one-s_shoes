import React, {useState} from 'react';
import {Link} from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <>
            <section className={"login"}>
                <div className={"login__content container"}>
                    <h2 className={"title"}>Log in</h2>
                    <img className={"decoration"} src="../../assets/Decoration.svg" alt={"deco"}/>
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
                        <Link  to="/login" className={"loginBtn__Elem checked"}>Log In</Link>
                    </div>
                </div>


            </section>
        </>
    )
}
