import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {authReducer} from "./authReducer";
import {todosReducer} from './todosReducers'

export default combineReducers({
    auth: authReducer,
    todos: todosReducer,
    form: formReducer
})
