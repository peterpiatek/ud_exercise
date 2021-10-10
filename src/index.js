import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";
import reducers from './exc_todo/reducers'
import thunk from 'redux-thunk';
import App from "./s27_exc/components/App";
/*

import App from './exc_todo/components/App'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App/>,
    </Provider>,
    document.getElementById('root')
);
*/


ReactDOM.render(<App />, document.getElementById('root'));
