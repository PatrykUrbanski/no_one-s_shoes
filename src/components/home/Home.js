import React, {useContext, useEffect, useState} from 'react';
import {Banner} from "./banner";
import {HomeColumns} from "./home_columns";
import {HomeInstruction} from "./home_instruction";
import {HomeAbout} from "./home_about";
import {WhoWeHelp} from "../who_we_help/who_we_help";
import {Contact} from "../contact/contact";
import {LoginContext} from "../context/loginContext";
import {useLocation} from "react-router-dom";
import {firebaseInit} from "../login/firebaseConfig";
import * as firebase from "firebase";

export const Home = () => {
    let accessData = useContext(LoginContext);
    let actualLocation = useLocation();
    const [userName, setUserName] = useState(false);
    useEffect(() => {
        accessData.setLocation(actualLocation.pathname);
        firebaseInit();
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                setUserName(user.email);
            }
            else {
                setUserName(false)
            }
        });
    }, []);

    return (
        <>
            <Banner userName={userName} />
            <HomeInstruction userName={userName} />
            <HomeAbout />
            <HomeColumns />
            <WhoWeHelp />
            <Contact />
        </>
    )
};
