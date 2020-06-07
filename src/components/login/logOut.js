import React, {useContext, useEffect} from 'react';
import {Link, useLocation} from "react-router-dom";
import {LoginContext} from "../context/loginContext";

export const LogOut = () => {
    let accessData = useContext(LoginContext);
    let actualLocation = useLocation();
    useEffect(() => {
        accessData.setLocation(actualLocation.pathname);
    }, []);
    return (
        <>
            <section className={"login"}>
                <div className={"login__content container"}>
                    <h2 className={"title"}>You have successfully logged out! See you soon!</h2>
                    <img className={"decoration"} src="../../assets/Decoration.svg" alt={"decoration"}/>
                    <div className={"loginBtn out"}>
                        <Link  to="/" className={"loginBtn__Elem checked"}>Home Page</Link>
                    </div>
                </div>
            </section>
        </>
    )
};
