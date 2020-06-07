import React from 'react';
import {Element} from 'react-scroll'
import {Link} from "react-router-dom";

export const HomeInstruction = ({userName}) => {

    return (
        <>
            <section className={"instruction"}>
                <Element name="instruction"/>
                <div className={"instruction__title"}>
                    <h2 className={"instruction__title__text"}>It's so simple!</h2>
                    <img alt="decoration" src="../../assets/Decoration.svg"/>
                </div>
                <div className={"instruction__steps"}>
                    <div className={"instruction__steps__content container"}>
                        <div className={"box"}>
                            <img  className={"box__icon"} src="../../assets/Icon-1.svg" alt={"icon"}/>
                            <span className={"box__name"}>Choose stuff you don't need.</span>
                            <span className={"box__text"}>Clothes, toys, households goods.</span>
                        </div>
                        <div className={"box"}>
                            <img className={"box__icon"} src="../../assets/Icon-2.svg" alt={"icon"}/>
                            <span className={"box__name"}>Pack it up</span>
                            <span className={"box__text"}>Use solid trash bags.</span>
                        </div>
                        <div className={"box"}>
                            <img className={"box__icon"} src="../../assets/Icon-3.svg" alt={"icon"}/>
                            <span className={"box__name"}>Decide who you want to help.</span>
                            <span className={"box__text"}>Choose from our trusted organisations. </span>
                        </div>
                        <div className={"box"}>
                            <img className={"box__icon"} src="../../assets/Icon-4.svg" alt={"icon"}/>
                            <span className={"box__name"}>Order a pickup.</span>
                            <span className={"box__text"}>Our courier will arrive on time.</span>
                        </div>
                    </div>
                </div>
                <div className={"instruction__btn"}>
                    <Link className={"instruction__btn__elem"} to={`${userName ? "/donate" : "/login"}`}>Donate!</Link>
                </div>
            </section>
        </>
    )
};