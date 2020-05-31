import React from 'react';
import {DonateStep1} from "./donate_step1";
import {DonateStep2} from "./donate_step2";
import {DonateStep3} from "./donate_step3";
import {DonateStep4} from "./donate_step4";
import {Route, Switch, useRouteMatch} from "react-router-dom";
import {DonateSum} from "./donate_sum";
import {FormContextProvider} from "../context/FormContext";
import {DonateWarn} from "./donate_warning";
import {DonateSuccess} from "./donate_success";


export const DonateForm = () => {
    let {path} = useRouteMatch();

    return (
        <>
            <section className={"donateForm"}>
                <div className={"wrap"}>
                    <div className={"container"}>
                        <FormContextProvider>
                        <Switch>
                            <Route exact path={`${path}/`} component={DonateStep1}/>
                            <Route path={`${path}/step2`} component={DonateStep2}/>
                            <Route path={`${path}/step3`} component={DonateStep3}/>
                            <Route path={`${path}/step4`} component={DonateStep4}/>
                            <Route path={`${path}/donate_sum`} component={DonateSum}/>
                            <Route path={`${path}/donate_success`} component={DonateSuccess}/>
                        </Switch>
                        </FormContextProvider>
                    </div>
                </div>
            </section>
        </>
    )
}