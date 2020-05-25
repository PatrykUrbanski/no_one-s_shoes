import React, {useEffect, useState} from 'react';
import {Donate_step1} from "./donate_step1";
import {Donate_step2} from "./donate_step2";
import {Donate_step3} from "./donate_step3";

export const Donate_Form = () => {
    return (
        <>
            <section className={"donateForm"}>
                <img className={"donateForm__bg"} src="../../assets/Background-Form.jpg" alt={"donateForm_bg"}/>
                <div className={"wrap"}>
                    <div className={"container"}>
                        <Donate_step3/>
                    </div>
                </div>
            </section>
        </>
    )
}