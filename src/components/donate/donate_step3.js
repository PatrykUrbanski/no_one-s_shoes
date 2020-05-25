import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
const uniqid = require('uniqid');

export const Donate_step3 = () => {

    const cities = ["Wroclaw", "Warsaw", "Krakow", "Gdansk", "Poznan", "Lodz"];
    const toHelp = ["Kids", "Single Mothers", "Homeless", "Eldery People", "Disabled", "Animals"];


    return (
        <>
            <div className={"donateForm__content"}>
                <span className={"step"}>Step: 3/4</span>
                <h2 className={"title"}>Location:</h2>
                <form className={"form"}>
                    <select className={"form__cities"}>
                        <option value={""}>--select city--</option>
                        {cities.map(city => <option value={city} key={uniqid()}>{city}</option> )}
                    </select>
                    <h2 className={"form__subtitle"}>Who do you want to help?</h2>
                    <div className={"form__elemHelp"}>
                    {toHelp.map(item =>
                            <label className={"form__elemHelp__box"} key={uniqid()}>
                                <input type={"checkbox"} className={"checkbox"} name={item} value={item}/>
                                {item}
                                <span className={"checkmark"}/>
                            </label>
                    )}
                    </div>
                    <label className={"form__subtitle organisationField"}> Enter the name of specific organization (optionally)
                        <input/>
                    </label>

                    <div className={"btn"}>
                        <Link className="btn__elem" to="/donate/step2">Back</Link>
                        <Link className="btn__elem" to="/donate/step4">Next</Link>
                    </div>
                </form>
            </div>
        </>
    )
}