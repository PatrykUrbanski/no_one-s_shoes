import React, {useEffect, useState} from 'react';
import {Donate_Banner} from "./donate_banner";
import {Donate_Warn} from "./donate_warning";
import {Donate_Form} from "./donate_form";

export const Donate = () => {
    return (
        <>
            <Donate_Banner/>
            <Donate_Warn/>
            <Donate_Form/>
        </>
    )
}