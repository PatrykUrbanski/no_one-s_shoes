import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
const uniqid = require('uniqid');

export const Donate_step4 = () => {

    return (
        <>
            <div className={"donateForm__content"}>
                <span className={"step"}>Step: 4/4</span>
                <h2 className={"title"}>Enter the address and select the pickup date.</h2>
                <form className={"form pickUp"}>
                    <div className={"form__address"}>Address:
                        <label className={"form__address__elem"}>Street
                            <input/>
                        </label>
                        <label className={"form__address__elem"}>City
                            <input/>
                        </label>
                        <label className={"form__address__elem"}>Post code
                            <input/>
                        </label>
                        <label className={"form__address__elem"}>Phone
                            <input/>
                        </label>
                    </div>

                    <div className={"form__address"}>Date of pickup:
                        <label className={"form__address__elem"}>Day
                            <input/>
                        </label>
                        <label className={"form__address__elem"}>Time
                            <input/>
                        </label>
                        <label className={"form__address__elem"}>Message
                            <textarea/>
                        </label>
                    </div>


                    <div className={"btn"}>
                        <Link className="btn__elem" to="/donate/step3">Back</Link>
                        <Link className="btn__elem" to="/donate/donate_sum">Next</Link>
                    </div>
                </form>
            </div>
        </>
    )
}