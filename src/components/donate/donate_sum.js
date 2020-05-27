import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {FormContext} from "../context/FormContext";
const uniqid = require('uniqid');

export const DonateSum = () => {

    const accessData = useContext(FormContext);

    console.log(accessData.formData)



    return (
        <>
            <div className={"donateForm__content"}>
                <h2 className={"title"}>Summary of your donation</h2>
                    <div className={"btn"}>
                        <Link className="btn__elem" to={"/donate/step4"}>Back</Link>
                        <Link className="btn__elem" to={"#"}>Confirm</Link>
                    </div>

            </div>
        </>
    )
}