import React from 'react';
import {Header} from "./components/header/header";
import {BrowserRouter, HashRouter, Route, Switch} from "react-router-dom";
import {Home} from "./components/home/Home";
import {Login} from "./components/login/Login";
import {SignUp} from "./components/login/signUp";
import {Donate} from "./components/donate/donate";
import {LogOut} from "./components/login/logOut";


export const App = () => {
  return (
      <BrowserRouter>
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
      </BrowserRouter>
  )
};


