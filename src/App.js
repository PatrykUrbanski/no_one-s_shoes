import React from 'react';
import {Header} from "./components/Home/header";
import {BrowserRouter, HashRouter} from "react-router-dom";
import {Banner} from "./components/Home/banner";
import {Home} from "./components/Home/Home";


export const App = () => {
  return (
      <HashRouter>
        <Home/>
      </HashRouter>
  )
};


