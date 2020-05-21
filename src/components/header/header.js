import React from 'react';
import {Link} from "react-router-dom";

export const Header = () => {


    return (
        <>
            <header className={"header"}>
                <section className={"header__content container"}>
                    <div className={"header__content__login"}>
                        <Link to={"#"}>Log in</Link>
                        <Link to={"#"}>Sign up</Link>
                    </div>
                    <nav className={"header__content__nav"}>
                        <a href={"#"}>Start</a>
                        <a href={"#"}>How it works?</a>
                        <a href={"#"}>About</a>
                        <a href={"#"}>Non profit Foundations </a>
                        <a href={"#"}>Contact</a>
                    </nav>
                </section>
            </header>
        </>
    )
};