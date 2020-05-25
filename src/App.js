import React from 'react';
import {Header} from "./components/header/header";
import {BrowserRouter, HashRouter, Route, Switch} from "react-router-dom";
import {Banner} from "./components/Home/banner";
import {Home} from "./components/Home/Home";
import {Who_We_Help} from "./components/Who_we_help/who_we_help";
import {Contact} from "./components/contact/contact";
import {Login} from "./components/login/Login";
import {SignUp} from "./components/login/signUp";
import {Donate_Form} from "./components/donate/donate_form";
import {Donate} from "./components/donate/donate";
import {LogOut} from "./components/login/logOut";


export const App = () => {
  return (
      <HashRouter>
          <>
          <Header/>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/login" component={Login}/>
              <Route path="/signUp" component={SignUp}/>
              <Route path="/logOut" component={LogOut}/>
              <Route path="/donate" component={Donate}/>
          </Switch>
          </>
      </HashRouter>
  )
};


