import {
    FETCH_TODO,
    FETCH_TODOS,
    TODO_NEW
} from "../actions/types";

export const todosReducer = (state = [], action) => {
    switch (action.type) {
        case TODO_NEW:
            return {...state, [action.payload.id]: action.payload};
        case FETCH_TODOS:
            return {...state, ...action.payload.reduce((a,v) => ({...a, [v.id]: v}), {})};
        case FETCH_TODO:
            return {...state, [action.payload.id]: action.payload}
        default:
            return state;
    }
}
