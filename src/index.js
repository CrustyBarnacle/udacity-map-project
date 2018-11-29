import React from "react";
import ReactDOM from "react-dom";

import Container from "./components/Container";
import registerServiceWorker from './registerServiceWorker';

import "./styles.css";

ReactDOM.render(
    <Container />,
    document.getElementById("root")
);

registerServiceWorker();