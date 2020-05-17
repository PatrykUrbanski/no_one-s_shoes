import React from 'react';
import {Header} from "./header";
import {Banner} from "./banner";
import {Home_Columns} from "./home_columns";
import {Home_instruction} from "./home_instruction";

export const Home = () => {
    return (
        <>
            <Header/>
            <Banner/>
            <Home_Columns/>
            <Home_instruction/>
        </>
    )
}