import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import * as serviceWorker from './serviceWorker';
import "./scss/main.scss"
import {Login} from "./components/login/Login";
import {LogOut} from "./components/login/logOut";
import {Donate_Banner} from "./components/donate/donate_banner";
import {Donate} from "./components/donate/donate";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);





serviceWorker.unregister();
