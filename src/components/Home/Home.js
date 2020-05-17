import React from 'react';
import {Header} from "./header";
import {Banner} from "./banner";
import {Home_Columns} from "./home_columns";

export const Home = () => {
    return (
        <>
            <Header/>
            <Banner/>
            <Home_Columns/>
        </>
    )
}