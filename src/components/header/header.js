import React from 'react';
import {Link} from "react-router-dom";
import * as Scroll from 'react-scroll';
import { Link as LinkScroll, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export const Header = () => {


    return (
        <>
            <header className={"header"}>
                <section className={"header__content container"}>
                    <div className={"header__content__login"}>
                        <Link to={"/login"}>Log in</Link>
                        <Link to={"/signUp"}>Sign up</Link>
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