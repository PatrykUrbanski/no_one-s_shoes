import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {FormContext} from "../context/FormContext";
const uniqid = require('uniqid');

export const DonateStep3 = () => {

    const cities = ["Wroclaw", "Warsaw", "Krakow", "Gdansk", "Poznan", "Lodz"];
    const toHelp = ["Kids", "Single Mothers", "Homeless", "Eldery People", "Disabled", "Animals"];

    const [location, setLocation] = useState("");
    const [specialOrganization, setSpecialOrganization] = useState("");
    const [helpGroups, setHelpGroups] = useState([]);
    const [clicked, setClicked] = useState([-1]);
    const accessData = useContext(FormContext);


    const handleCheck = (e, index) => {
        if (e.target.checked) {
            setHelpGroups([...helpGroups, e.target.value]);
            setClicked([...clicked, index])
        }
        accessData.setFormData(prevState => ({
            ...prevState,
            location: location,
            organizationName: specialOrganization,
            helpGroups: helpGroups,
        }));
    };

    return (
        <>
            <div className={"donateForm__content"}>
                <span className={"step"}>Step: 3/4</span>
                <h2 className={"title"}>Location:</h2>
                <form className={"form"}>
                    <select className={"form__cities"} value={location} onChange={e => setLocation(e.target.value)}>
                        <option value={""}>--select city--</option>
                        {cities.map(city => <option value={city} key={uniqid()}>{city}</option> )}
                    </select>
                    <h2 className={"form__subtitle"}>Who do you want to help?</h2>
                    <div className={"form__elemHelp"}>
                    {toHelp.map((item, index) =>
                            <label className={"form__elemHelp__box"} key={uniqid()}>
                                <input type={"checkbox"} className={`checkbox`} name={item} value={item} defaultChecked={clicked.indexOf(index) !== -1 && true} onClick={e => handleCheck(e, index)}/>
                                {item}
                                <span className={"checkmark"}/>
                            </label>
                    )}
                    </div>
                    <label className={"form__subtitle organisationField"}> Enter the name of specific organization (optionally)
                        <input type={"text"} value={specialOrganization} onChange={e => setSpecialOrganization(e.target.value)}/>
                    </label>

                    <div className={"formBtn"}>
                        <Link className="formBtn__elem" to="/donate/step2">Back</Link>
                        <Link className="formBtn__elem" to="/donate/step4">Next</Link>
                    </div>
                </form>
            </div>
        </>
    )
}