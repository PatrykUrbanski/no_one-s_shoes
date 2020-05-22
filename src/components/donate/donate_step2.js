import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
const uniqid = require('uniqid');

export const Donate_step2 = () => {

    const selectItems = ["clothes", "shoes", "toys", "books", "other"];

    return (
        <>
            <div className={"donateForm__content"}>
                <span className={"step"}>Step: 2/4</span>
                <h2 className={"title"}>How many 60 liters bags did you collect?</h2>
                <form className={"form"}>
                    <label className={"form__numberOfBags"}>Enter number of bags:
                        <input type={"number"} name={"numberOfBags"}/>
                    </label>

                    <a className="nextBtn" href="#">Back</a>
                    <a className="nextBtn" href="#">Next</a>
                </form>
            </div>
        </>
    )
}