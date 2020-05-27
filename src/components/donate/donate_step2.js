import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import {FormContext} from "../context/FormContext";

const uniqid = require('uniqid');

export const DonateStep2 = () => {
    const [bagsNumber, setBagsNumber] = useState("");
    const accessData = useContext(FormContext);

    const handleAddData = () => {
        accessData.setFormData(prevState => ({
            ...prevState,
            bags: bagsNumber
        }));
    };



    return (
        <>
            <div className={"donateForm__content"}>
                <span className={"step"}>Step: 2/4</span>
                <h2 className={"title"}>How many 60 liters bags did you collect?</h2>
                <form className={"form"}>
                    <label className={"form__numberOfBags"}>Enter number of bags:
                        <input type={"number"} name={"numberOfBags"} value={bagsNumber} onChange={e => setBagsNumber(e.target.value)}/>
                    </label>
                    <div className={"formBtn"}>
                        <Link className="formBtn__elem" to={`/donate`}>Back</Link>
                        <Link className="formBtn__elem" to="/donate/step3" onClick={handleAddData}>Next</Link>
                    </div>
                </form>
            </div>
        </>
    )
}