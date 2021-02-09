import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {getHotels} from "./mock/hotels.js";

const hotels = getHotels();

ReactDOM.render(
    <App
      hotels={hotels}
    />,
    document.querySelector(`#root`)
);
