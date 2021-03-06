import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {animateScroll as scroll, Link as LinkScroll} from 'react-scroll'
import * as firebase from "firebase";
import {firebaseInit} from "../login/firebaseConfig";
import {LoginContext} from "../context/loginContext";

export const Header = () => {
    const [userName, setUserName] = useState(false);
    const [reload, setReload] = useState(false);
    const [openNav, setOpenNav] = useState(false);
    const [scrollDown, setScrollDown] = useState(false);
    let accessData = useContext(LoginContext);
    const [actualPath, setActualPath] = useState(accessData.location);
    useEffect(() => {
        firebaseInit();
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                setUserName(user.email);
            }
            else {
                setUserName(false)
            }
        });
        setActualPath(accessData.location)
    }, [reload, accessData.location]);
    const handleLogOut = () => {
        firebase.auth().signOut()
            .then()
            .catch(error => console.log(error));
        setReload(!reload)
    };
    const mobile = window.matchMedia("(max-width: 767px)");
    const handleToggleNav = () => {
        if (mobile.matches) {
            setOpenNav(!openNav)
        }
    };
    let lastPosition = 0;
    window.addEventListener("scroll", () => {
        const currentPosition = window.pageYOffset;
        currentPosition === 0 && setScrollDown(false);
        currentPosition > lastPosition && setScrollDown(true);
        lastPosition = currentPosition;
    });
    const handleHover = () => {
        scrollDown && setScrollDown(false)
    };

    return (
        <>
            <header className={`header ${scrollDown ? "scrollDown" : "none"}`} onMouseOver={handleHover}>
                <section className={"header__content container"}>
                    <div className={"header__content__login"}>
                        <p className={"userName"} style={{display: `${userName ? "inline-block" : "none"}`}}>Welcome <span>{userName}</span></p>
                        {actualPath === "/login" || actualPath === "/signUp" || actualPath === "/logOut" ? <Link to={"/"}>Start</Link> : null}
                        {userName ? <Link to={"/donate"} className={"donateBtn"}>Donate</Link> : <Link to={"/login"}>Log in</Link>}
                        {userName ? <Link to={"/logOut"} onClick={handleLogOut}>Log Out</Link> : <Link to={"/signUp"}>Sign up</Link>}
                    </div>
                    {actualPath === "/login" || actualPath === "/signUp" || actualPath === "/logOut"
                        ? null
                        : (<>
                            <i className="fas fa-bars navBtn" style={{top: `${userName ? "90px" : "40px"}`}} onClick={handleToggleNav} />
                            <nav className={`header__content__nav ${openNav ? "showMobileNav" : "none"}`}>
                                <i className="fas fa-times closeNavBtn" onClick={handleToggleNav}/>
                                {actualPath === "/donate" ? <Link to="/" onClick={handleToggleNav}>Home</Link> : null }
                                <LinkScroll to="banner" spy={true} smooth={true} onClick={handleToggleNav}>Start</LinkScroll>
                                {actualPath === "/donate"
                                    ? <LinkScroll to="donate" spy={true} smooth={true} onClick={handleToggleNav}>Donate</LinkScroll>
                                    : <LinkScroll to="instruction" spy={true} offset={-30} smooth={true} onClick={handleToggleNav}>How it works?</LinkScroll>}
                                {actualPath === "/" && <LinkScroll to="about" spy={true} offset={-30} smooth={true} onClick={handleToggleNav}>About</LinkScroll>}
                                {actualPath === "/" && <LinkScroll to="who_we_help" spy={true} offset={-30} smooth={true} onClick={handleToggleNav}>Non profit Foundations </LinkScroll>}
                                <LinkScroll to="contact" spy={true} smooth={true} onClick={handleToggleNav}>Contact</LinkScroll>
                            </nav>
                        </>)
                    }
                </section>
            </header>
        </>
    )
};
