import React, {useEffect, useState} from 'react';
import {Link, NavLink, useRouteMatch} from "react-router-dom";

const uniqid = require('uniqid');

export const Donate_step1 = () => {
    let {path, url} = useRouteMatch();
    const selectItems = ["clothes", "shoes", "toys", "books", "other"];

    const [selectedItems, setSelectedItems] = useState([]);
    const [checked, setChecked] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        const {value} = e.target;
        e.target.checked;
        if (e.target.checked) {
            setSelectedItems(prevState => [...prevState, value]);
        }
        setChecked(!checked);
        console.log(selectedItems)
    };


    return (
        <>
            <div className={"donateForm__content"}>
                    <span className={"step"}>Step: 1/4</span>
                    <h2 className={"title"}>Choose things you want to donate:</h2>
                    <form className={"form"}>
                        {selectItems.map(item =>
                            <label key={uniqid()} className={"form__elem"}>
                                <input className={"checkbox"} type={"checkbox"} name={item} value={item} defaultChecked={checked} onChange={handleSubmit}/>
                                <span className={"checkmark"}/>
                                {item}
                            </label>
                        )}

                        <div className={"btn"}>
                            <Link className="btn__elem" to={`${path}step2`}>Next</Link>
                        </div>
                    </form>
            </div>
        </>
    )
}