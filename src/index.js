import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"; // this is a component hence "P"rovider
import {createStore} from "redux";

import App from './s17/components/App';
import reducers from './s17/reducers'


ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App/>
    </Provider>,
    document.getElementById('root'));
