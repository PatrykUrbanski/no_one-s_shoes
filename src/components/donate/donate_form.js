import React, {useEffect, useState} from 'react';
import {Donate_step1} from "./donate_step1";
import {Donate_step2} from "./donate_step2";
import {Donate_step3} from "./donate_step3";
import {Donate_step4} from "./donate_step4";
import {Route, Switch, useRouteMatch} from "react-router-dom";
import {Donate_sum} from "./donate_sum";


export const Donate_Form = () => {
    let {path} = useRouteMatch();

    return (
        <>
            <section className={"donateForm"}>
                <img className={"donateForm__bg"} src="../../assets/Background-Form.jpg" alt={"donateForm_bg"}/>
                <div className={"wrap"}>
                    <div className={"container"}>
                        <Switch>
                            <Route exact path={`${path}/`} component={Donate_step1}/>
                            <Route path={`${path}/step2`} component={Donate_step2}/>
                            <Route path={`${path}/step3`} component={Donate_step3}/>
                            <Route path={`${path}/step4`} component={Donate_step4}/>
                            <Route path={`${path}/donate_sum`} component={Donate_sum}/>
                        </Switch>
                    </div>
                </div>
            </section>
        </>
    )
}