import React from 'react';
import AppContainer from "./AppContainer";
import '../App.css';

import {Provider} from "react-redux";
import{createStore} from "redux";
import reducers from '../reducers';

const App = () => {
    return (
        <Provider store={createStore(reducers)}>
            <AppContainer />
        </Provider>
    );
}

export default App;
