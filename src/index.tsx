import React from "react";
import ReactDOM from "react-dom";
import "./sass/index.scss";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import MyLayout from "./Layout";
import { HashRouter as Router } from "react-router-dom";
import { Configuration } from "react-md";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Configuration>
                <MyLayout />
            </Configuration>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
