import React, {useEffect, useState} from 'react';
import {Link, useRouteMatch} from "react-router-dom";
const uniqid = require('uniqid');

export const Donate_step2 = () => {


    return (
        <>
            <div className={"donateForm__content"}>
                <span className={"step"}>Step: 2/4</span>
                <h2 className={"title"}>How many 60 liters bags did you collect?</h2>
                <form className={"form"}>
                    <label className={"form__numberOfBags"}>Enter number of bags:
                        <input type={"number"} name={"numberOfBags"}/>
                    </label>
                    <div className={"btn"}>
                        <Link className="btn__elem" to={`/donate`}>Back</Link>
                        <Link className="btn__elem" to="/donate/step3">Next</Link>
                    </div>
                </form>
            </div>
        </>
    )
}