import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer} from './store/root-reducer';

const store = createStore(
    rootReducer,
    composeWithDevTools()
);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
