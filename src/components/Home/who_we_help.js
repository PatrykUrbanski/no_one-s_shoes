import React from 'react';
import {Who_We_Help_Foundations} from "./who_we_help_fundations";

export const Who_We_Help = () => {


    const handleClick = () => {

    }



    return (
        <>
            <section className="whoWeHelp">
                <div className="whoWeHelp__content container">
                    <div className={"whoWeHelp__content__headlines"}>
                        <h2 className={"title"}>Who we help?</h2>
                        <img className={"decoration"} src="../../../assets/Decoration.svg"/>
                        <div className={"btn"}>
                            <a className={"btn__elem"} href={"#"}>elo</a>
                            <a className={"btn__elem"} href={"#"}>elo</a>
                            <a className={"btn__elem"} href={"#"}>elo</a>
                        </div>
                    </div>
                    <Who_We_Help_Foundations/>
                </div>
            </section>
        </>
    )
}