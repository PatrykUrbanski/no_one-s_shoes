import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { Link as LinkScroll, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import * as firebase from "firebase";
import {firebaseInit} from "../login/firebaseConfig";


export const Header = () => {
    const [userName, setUserName] = useState(false);

    firebaseInit();

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            setUserName(user.email);
        }else {
            console.log("no user")
        }
    });


    const handleLogOut = () => {
        firebase.auth().signOut()
            .then()
            .catch(error => console.log(error))
    };

    return (
        <>
            <header className={"header"}>
                <section className={"header__content container"}>
                    <div className={"header__content__login"}>
                        <p className={"userName"} style={{display: `${userName ? "inline-block" : "none"}`}}>Welcome <span>{userName}</span></p>
                        {userName ? <Link to={"/donate"} className={"donateBtn"}>Donate</Link> : <Link to={"/login"}>Log in</Link>}
                        {userName ? <Link to={"/logOut"} onClick={handleLogOut}>Log Out</Link> : <Link to={"/signUp"}>Sign up</Link>}
                    </div>
                    <nav className={"header__content__nav"}>
                        <Link to="/">Start</Link>
                        <LinkScroll to="instruction" spy={true} smooth={true}>How it works?</LinkScroll>
                        <LinkScroll to="about" spy={true} smooth={true}>About</LinkScroll>
                        <LinkScroll to="foundations" spy={true} smooth={true}>Non profit Foundations </LinkScroll>
                        <LinkScroll to="contact" spy={true} smooth={true}>Contact</LinkScroll>
                    </nav>
                </section>
            </header>
        </>
    )
};