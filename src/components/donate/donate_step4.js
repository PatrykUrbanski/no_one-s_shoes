import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {FormContext} from "../context/FormContext";
const uniqid = require('uniqid');

export const DonateStep4 = () => {

    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [postCode, setPostCode] = useState("");
    const [phone, setPhone] = useState("");
    const [day, setDay] = useState("");
    const [time, setTime] = useState("");
    const [msg, setMsg] = useState("");
    const accessData = useContext(FormContext);

    const handleAddData = () => {
        accessData.setFormData(prevState => ({
            ...prevState,
            specificContact: {
                ...prevState.specificContact,
                street: street,
                city: city,
                postCode: postCode,
                phone: phone,
                day: day,
                time: time,
                msg: msg
            }
        }));
    };



    return (
        <>
            <div className={"donateForm__content"}>
                <span className={"step"}>Step: 4/4</span>
                <h2 className={"title"}>Enter the address and select the pickup date.</h2>
                <form className={"form pickUp"}>
                    <div className={"form__address"}>Address:
                        <label className={"form__address__elem"}>Street
                            <input value={street} onChange={e => setStreet(e.target.value)}/>
                        </label>
                        <label className={"form__address__elem"}>City
                            <input value={city} onChange={e => setCity(e.target.value)}/>
                        </label>
                        <label className={"form__address__elem"}>Post code
                            <input type={"number"} value={postCode} onChange={e => setPostCode(e.target.value)}/>
                        </label>
                        <label className={"form__address__elem"}>Phone
                            <input type={"number"} value={phone} onChange={e => setPhone(e.target.value)}/>
                        </label>
                    </div>

                    <div className={"form__address"}>Date of pickup:
                        <label className={"form__address__elem"}>Day
                            <input value={day} onChange={e => setDay(e.target.value)}/>
                        </label>
                        <label className={"form__address__elem"}>Time
                            <input value={time} onChange={e => setTime(e.target.value)}/>
                        </label>
                        <label className={"form__address__elem"}>Message
                            <textarea value={msg} onChange={e => setMsg(e.target.value)}/>
                        </label>
                    </div>


                    <div className={"formBtn"}>
                        <Link className="formBtn__elem" to="/donate/step3">Back</Link>
                        <Link className="formBtn__elem" to="/donate/donate_sum" onClick={handleAddData}>Next</Link>
                    </div>
                </form>
            </div>
        </>
    )
};
