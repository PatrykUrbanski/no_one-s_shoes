import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

export const Donate_Banner = () => {

    return (
        <>
            <section className={"banner"}>
                <img className={"banner__Bg"} alt="bannerBg" src="../../assets/Form-Hero-Image.jpg"/>
                <div className={"banner__content container"}>
                    <div className={"banner__content__mainBox"}>
                        <h1 className={"title"}>
                            <span>Donate things you don't need to those who do!</span>
                            <img src="../../assets/Decoration.svg"/>
                            <span>It's so simple.</span>
                        </h1>
                        <div className={"buttons donate"}>
                            <span className={"buttons__card"}>
                                <i className="far fa-square"/>
                                <div className={"text"}>
                                    <span>1</span>
                                    <span>Choose the stuff.</span>
                                </div>
                            </span>
                            <span className={"buttons__card"}>
                                <i className="far fa-square"/>
                                <div className={"text"}>
                                    <span>2</span>
                                    <span>Pack it up.</span>
                                </div>
                            </span>
                            <span className={"buttons__card"}>
                                <i className="far fa-square"/>
                                <div className={"text"}>
                                    <span>3</span>
                                    <span>Choose organisation.</span>
                                </div>
                            </span>
                            <span className={"buttons__card"}>
                                <i className="far fa-square"/>
                                <div className={"text"}>
                                    <span>4</span>
                                    <span>Order a pickup.</span>
                                </div>
                            </span>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};