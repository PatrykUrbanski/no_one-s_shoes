import React, {useState} from 'react';
import {Link} from "react-router-dom";

export const LogOut = () => {
    return (
        <>
            <section className={"login"}>
                <div className={"login__content container"}>
                    <h2 className={"title"}>You have successfully logged out! See you soon!</h2>
                    <img className={"decoration"} src="../../assets/Decoration.svg" alt={"deco"}/>
                    <div className={"loginBtn out"}>
                        <Link  to="/" className={"loginBtn__Elem checked"}>Home Page</Link>
                    </div>
                </div>
            </section>
        </>
    )
};
