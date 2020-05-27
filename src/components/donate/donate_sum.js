import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {FormContext} from "../context/FormContext";
const uniqid = require('uniqid');

export const DonateSum = () => {

    const accessData = useContext(FormContext);
    const data = accessData.formData;

    return (
        <>
            <div className={"donateForm__content"}>
                <h2 className={"title"}>Summary of your donation</h2>
                <div className={"donateInfo"}>You're donating:
                    <span className={"donateInfo__details"}>
                        <img className={"box__icon"} src="../../assets/Icon-1.svg" alt={"icon"}/>
                        {data.bags}, {data.items.join(", ")}, to {data.helpGroups.join(", ")}
                    </span>
                    <span className={"donateInfo__details"}>
                        <img className={"box__icon"} src="../../assets/Icon-4.svg" alt={"icon"}/>
                        In: {data.location}
                    </span>
                </div>
                <div className={"addressTime"}>
                    <ul className={"addressTime__elem"}>Pickup address:
                        <li>Street <span>{data.specificContact.street}</span></li>
                        <li>City <span>{data.specificContact.city}</span></li>
                        <li>Post Code <span>{data.specificContact.postCode}</span></li>
                        <li>Phone <span>{data.specificContact.phone}</span></li>
                    </ul>
                    <ul className={"addressTime__elem"}>Day and Time:
                        <li>Day <span>{data.specificContact.day}</span></li>
                        <li>Time <span>{data.specificContact.time}</span></li>
                        <li>Message <span>{data.specificContact.msg}</span></li>
                    </ul>
                </div>
                    <div className={"formBtn"}>
                        <Link className="formBtn__elem" to={"/donate/step4"}>Back</Link>
                        <Link className="formBtn__elem" to={"#"}>Confirm</Link>
                    </div>
            </div>
        </>
    )
}