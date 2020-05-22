import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
const uniqid = require('uniqid');

export const Donate_step1 = () => {

    const selectItems = ["clothes", "shoes", "toys", "books", "other"];

    return (
        <>
            <div className={"donateForm__content"}>
                    <span className={"step"}>Step: 1/4</span>
                    <h2 className={"title"}>Choose things you want to donate:</h2>
                    <form className={"form"}>
                        {selectItems.map(item =>
                            <>
                                <label key={uniqid()} className={"form__elem"}>
                                    <input className={"checkbox"} type={"checkbox"} name={item} value={item}/>
                                    <span className={"checkmark"}/>
                                    {item}
                                </label>
                            </>
                        )}
                        <a className="nextBtn" href="#">Next</a>
                    </form>
            </div>
        </>
    )
}