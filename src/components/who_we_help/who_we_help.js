import React, {useState} from 'react';
import {Who_We_Help_Structures} from "./who_we_help_structures";
import {foundations, locals, nonProfit} from "./structuresData";
import {Element} from "react-scroll";

export const Who_We_Help = () => {
    const [choosenStructure, setChoosenStructure] = useState(foundations);
    const [clickedBtn, setClickedBtn] = useState("foundations");

    const handleClick = (e) => {
        e.preventDefault();
        const {name} = e.target;
        setChoosenStructure(name);
        setClickedBtn(name)
    };

    return (
        <>
            <Element name="who_we_help" />
            <section className="whoWeHelp">
                <div className="whoWeHelp__content container">
                    <div className={"whoWeHelp__content__headlines"}>
                        <h2 className={"title"}>Who we help?</h2>
                        <img alt="decoration " className={"decoration"} src="../../../assets/Decoration.svg"/>
                        <div className={"btns"}>
                            <a className={`btns__elem ${clickedBtn === "foundations" && "check"}`} name={"foundations"} href={"#"} onClick={e => handleClick(e)}>Trusted Foundations</a>
                            <a className={`btns__elem ${clickedBtn === "nonProfit" && "check"}`} name={"nonProfit"} href={"#"} onClick={e => handleClick(e)}>Non Profit Organizations</a>
                            <a className={`btns__elem ${clickedBtn === "locals" && "check"}`} name={"locals"} href={"#"} onClick={e => handleClick(e)}>Locals collections</a>
                        </div>
                    </div>
                    <Who_We_Help_Structures choosenStructure={choosenStructure}/>
                </div>
            </section>
        </>
    )
};
