import React from 'react';
import {Header} from "./components/Home/header";
import {BrowserRouter, HashRouter} from "react-router-dom";
import {Banner} from "./components/banner/banner";


export const App = () => {
  return (
      <HashRouter>
        <Header/>
        <Banner/>
      </HashRouter>
  )
};


