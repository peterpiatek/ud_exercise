import {
    FETCH_TODOS,
    SIGN_IN,
    SIGN_OUT,
    TODO_NEW
} from "./types";
import api from '../api/api';

export const signIn = profile => {
    return {type: SIGN_IN, payload: profile}
}

export const signOut = () => {
    return {type: SIGN_OUT, payload: null}
}

export const todoNew = todo => async (dispatch, getState) => {
    const {userId} = getState().auth.profile;
    const response = await api.post('/todos', {...todo, userId});
    dispatch({
        type: TODO_NEW,
        payload: response.data
    })

}

export const fetchTodos = () => async dispatch => {
    const response = await api.get('/todos');
    dispatch({
        type: FETCH_TODOS,
        payload: response.data
    })
}
