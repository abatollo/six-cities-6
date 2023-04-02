import React from 'react';
import ReactDOM from 'react-dom/client';
import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {composeWithDevTools} from '@redux-devtools/extension';

import App from './components/app/app';

import {reducer} from './store/reducer';
import {createAPI} from './services/api';
import {checkAuth} from './store/api-actions';
import {ActionCreator} from './store/action';
import {redirect} from './store/middlewares/redirect';
import {AuthorizationStatus} from './const';

const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

store.dispatch(checkAuth());

const root = ReactDOM.createRoot(document.getElementById(`root`));
root.render(
    // <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    // </React.StrictMode>
);
