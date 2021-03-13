import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {getHotels} from "./mock/hotels.js";
import {getComments} from "./mock/comments.js";

const hotels = getHotels();
const comments = getComments();

ReactDOM.render(
    <App
      hotels={hotels}
      comments={comments}
    />,
    document.querySelector(`#root`)
);
