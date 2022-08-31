import React from "react";
import { createRoot } from "react-dom/client"
import ReactDOM from "react-dom";
import Game from './Game.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Game />
root.render(element);