import React from 'react';
import {Link} from "react-router-dom";
import {Element} from "react-scroll";

export const Banner = () => {

    return (
        <>
            <Element name="banner"/>
            <section className={"banner"}>
                <div className={"banner__content container"}>
                    <div className={"banner__content__mainBox"}>
                        <h1 className={"title"}>
                            <span className="title__elem">Start right now!</span>
                            <span className="title__elem">Give your old clothes those in need.</span>
                            <img src="../../assets/Decoration.svg"/>
                        </h1>
                        <div className={"buttons"}>
                            <Link to="/login" className={"buttons__elem"}>Donate!</Link>
                            <Link to="/login" className={"buttons__elem"}>Arrange pickup.</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};