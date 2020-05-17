import React from 'react';
import {Link} from "react-router-dom";

export const Banner = () => {

    return (
        <>
            <section className={"banner"}>
                <img className={"banner__Bg"} alt="bannerBg" src="../../assets/Home-Hero-Image.jpg"/>
                <div className={"banner__content container"}>
                    <div className={"banner__content__mainBox"}>
                        <h1 className={"title"}>
                            <span>Start right now!</span>
                            <span>Give your old clothes those in need.</span>
                            <img src="../../assets/Decoration.svg"/>
                        </h1>
                        <div className={"buttons"}>
                            <a className={"buttons__elem"}>Give!</a>
                            <a className={"buttons__elem"}>Arrange pickup</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};