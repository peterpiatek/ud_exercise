import {combineReducers} from "redux";

const admin = {
    name: 'Peter',
    age: 37,
    permissions: 'admin'
}

export const todoList = (data = [], action) => {
    if(action.type === 'INIT_LOAD'){
        return action.payload
    }
    return data;
}

export const users = (users = [admin], action) => {
    console.log(action);
    if(action.type === 'ADD_USER'){
        return [...users, action.payload];
    }
    return users;
}

export default combineReducers({
    todoList,
    users
})
