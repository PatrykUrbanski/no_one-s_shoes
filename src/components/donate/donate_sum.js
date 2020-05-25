import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
const uniqid = require('uniqid');

export const Donate_sum = () => {


    return (
        <>
            <div className={"donateForm__content"}>
                <h2 className={"title"}>Summary of your donation</h2>
                <form className={"form"}>

                    <div className={"btn"}>
                        <a className="btn__elem" href="#">Back</a>
                        <a className="btn__elem" href="#">Confirm</a>
                    </div>
                </form>
            </div>
        </>
    )
}