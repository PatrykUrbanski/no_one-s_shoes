import React, {useState} from 'react';
import {Who_We_Help_Foundations} from "./who_we_help_fundations";
import {foundations, locals, nonProfit} from "./structuresData";

export const Who_We_Help = () => {
    const [choosenStructure, setChoosenStructure] = useState(foundations);


    const handleClick = (e) => {
        e.preventDefault();
        const {name} = e.target;
        setChoosenStructure(name);
    };



    return (
        <>
            <section className="whoWeHelp">
                <div className="whoWeHelp__content container">
                    <div className={"whoWeHelp__content__headlines"}>
                        <h2 className={"title"}>Who we help?</h2>
                        <img className={"decoration"} src="../../../assets/Decoration.svg"/>
                        <div className={"btn"}>
                            <a className={"btn__elem"} name={"foundations"} href={"#"} onClick={e => handleClick(e)}>Foundations</a>
                            <a className={"btn__elem"} name={"nonProfit"} href={"#"} onClick={e => handleClick(e)}>Non Profit Organizations</a>
                            <a className={"btn__elem"} name={"locals"} href={"#"} onClick={e => handleClick(e)}>Locals collections</a>
                        </div>
                    </div>

                    <Who_We_Help_Foundations choosenStructure={choosenStructure}/>


                </div>
            </section>
        </>
    )
}