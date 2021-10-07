import {
    FETCH_TODOS,
    TODO_NEW
} from "../actions/types";

export const todosReducer = (state = [], action) => {
    switch (action.type) {
        case TODO_NEW: return {...state, [action.payload.id]: action.payload};
        case FETCH_TODOS:
            // const todosObj = action.payload.reduce((a,v) => ({...a, [v.id]: v}), {});
            return {...state, ...action.payload.reduce((a,v) => ({...a, [v.id]: v}), {})};
        default:
            return state;
    }
}
