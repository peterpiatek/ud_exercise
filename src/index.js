import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import reducers from './s18/reducers'
import thunk from 'redux-thunk';

import App from './s18/App';

const store = createStore(reducers, applyMiddleware(thunk));

//update check

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
