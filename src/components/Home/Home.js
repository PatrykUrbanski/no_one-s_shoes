import React from 'react';
import {Header} from "../header/header";
import {Banner} from "./banner";
import {Home_Columns} from "./home_columns";
import {Home_instruction} from "./home_instruction";
import {Home_About} from "./home_about";
import {Login} from "../login/Login";


export const Home = () => {
    return (
        <>
            <Banner/>
            <Home_Columns/>
            <Home_instruction/>
            <Home_About/>
        </>
    )
}