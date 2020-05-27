import React from 'react';
import {DonateBanner} from "./donate_banner";
import {DonateWarn} from "./donate_warning";
import {DonateForm} from "./donate_form";
import {Contact} from "../contact/contact";

export const Donate = () => {
    return (
        <>
            <DonateBanner/>
            <DonateWarn/>
            <DonateForm/>
            <Contact/>
        </>
    )
}