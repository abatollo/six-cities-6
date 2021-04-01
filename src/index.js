import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import App from './components/app/app';

import {rootReducer} from './store/root-reducer';
import {createAPI} from './services/api';
import {checkAuth} from './store/api-actions';
import {AuthorizationActionCreator} from './store/authorization/action';
import {redirect} from './store/middlewares/redirect';
import {AuthorizationStatus} from './utils';

const api = createAPI(
    () => store.dispatch(AuthorizationActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
