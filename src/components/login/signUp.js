import React, {useState} from 'react';

export const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");


    return (
        <>
            <section className={"login"}>
                <div className={"login__content container"}>
                    <h2 className={"title"}>Sign Up</h2>
                    <img className={"decoration"} src="../../assets/Decoration.svg" alt={"deco"}/>
                    <form className={"form"}>
                        <label>Email
                            <input type={"email"} value={email} onChange={e => setEmail(e.target.value)}/>
                        </label>
                        <label>Password
                            <input type={"password"} value={password} onChange={e => setPassword(e.target.value)}/>
                        </label>
                        <label>Repeat Password
                            <input type={"password"} value={password} onChange={e => setPassword(e.target.value)}/>
                        </label>
                    </form>
                    <div className={"loginBtn"}>
                        <a  href="#" className={"loginBtn__Elem checked"}>Sign up</a>
                        <a  href="#" className={"loginBtn__Elem"}>Log In</a>
                    </div>
                </div>


            </section>
        </>
    )
}