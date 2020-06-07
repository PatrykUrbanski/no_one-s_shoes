import React, {useContext, useEffect} from 'react';
import {DonateBanner} from "./donate_banner";
import {DonateForm} from "./donate_form";
import {Contact} from "../contact/contact";
import {LoginContext} from "../context/loginContext";
import {useLocation} from "react-router-dom";

export const Donate = () => {
    let accessData = useContext(LoginContext);
    let actualLocation = useLocation();
    useEffect(() => {
        accessData.setLocation(actualLocation.pathname);
    }, []);

    return (
        <>
            <DonateBanner/>
            <DonateForm/>
            <Contact/>
        </>
    )
};

