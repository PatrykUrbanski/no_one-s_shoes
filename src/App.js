import React from 'react';
import {Header} from "./components/header/header";
import {BrowserRouter, HashRouter} from "react-router-dom";
import {Banner} from "./components/Home/banner";
import {Home} from "./components/Home/Home";
import {Who_We_Help} from "./components/Who_we_help/who_we_help";
import {Contact} from "./components/contact/contact";


export const App = () => {
  return (
      <HashRouter>
          <Header/>
          <Home/>
          <Who_We_Help/>
          <Contact/>
      </HashRouter>
  )
};


