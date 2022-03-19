import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/css/style.css';
import './assets/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    ,
    document.getElementById("root"));
