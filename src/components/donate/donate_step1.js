import React, {useContext, useState} from 'react';
import {Link, useRouteMatch} from "react-router-dom";
import {FormContext} from "../context/FormContext";

const uniqid = require('uniqid');

export const DonateStep1 = () => {
    let {path} = useRouteMatch();
    const selectItems = ["clothes", "shoes", "toys", "books", "other"];

    const [selectedItems, setSelectedItems] = useState([]);
    const [clicked, setClicked] = useState([-1]);

    const accessData = useContext(FormContext);

    const handleCheck = (e, index) => {
        e.preventDefault();
        const {value} = e.target;
        if (e.target.checked) {
            setSelectedItems([...selectedItems, value]);
            setClicked([...clicked, index])
        }
        accessData.setFormData(prevState => ({
            ...prevState,
            items: selectedItems
        }));
    };



    return (
        <>
            <div className={"donateForm__content"}>
                    <span className={"step"}>Step: 1/4</span>
                    <h2 className={"title"}>Choose things you want to donate:</h2>
                    <form className={"form"}>
                        {selectItems.map((item, index) =>
                            <label key={uniqid()} className={"form__elem"}>
                                <input className={"checkbox"} type={"checkbox"} name={item} value={item}
                                       onClick={e => handleCheck(e, index)} defaultChecked={clicked.indexOf(index) !== -1 && true}/>
                                <span className={"checkmark"}/>
                                {item}
                            </label>
                        )}

                        <div className={"formBtn"}>
                            <Link className="formBtn__elem" to={`${path}step2`}>Next</Link>
                        </div>
                    </form>
            </div>
        </>
    )
};

