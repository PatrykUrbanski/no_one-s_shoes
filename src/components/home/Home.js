import React from 'react';
import {Header} from "../header/header";
import {Banner} from "./banner";
import {Home_Columns} from "./home_columns";
import {Home_instruction} from "./home_instruction";
import {Home_About} from "./home_about";
import {Login} from "../login/Login";
import {Who_We_Help} from "../who_we_help/who_we_help";
import {Contact} from "../contact/contact";


export const Home = () => {
    return (
        <>
            <Banner/>
            {/*<Home_Columns/>*/}
            <Home_instruction/>
            <Home_About/>
            <Home_Columns/>
            <Who_We_Help/>
            <Contact/>
        </>
    )
}