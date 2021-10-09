import {
    DELETE_TODO, EDIT_TODO,
    FETCH_TODO,
    FETCH_TODOS,
    SIGN_IN,
    SIGN_OUT,
    TODO_NEW
} from "./types";
import api from '../api/api';
import history from '../history';

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
    history.push('/');
}

export const fetchTodos = () => async dispatch => {
    const response = await api.get('/todos');
    dispatch({
        type: FETCH_TODOS,
        payload: response.data
    })
}

export const fetchTodo = id => async dispatch => {
    const response = await api.get(`/todos/${id}`);
    dispatch({
        type: FETCH_TODO,
        payload: response.data
    })
}

export const deleteTodo = id => async dispatch => {
    await api.delete(`/todos/${id}`);
    dispatch({
        type: DELETE_TODO,
        payload: id
    })
}

export const editTodo = todo => async dispatch => {
    const response = await api.patch(`/todos/${todo.id}`, todo);
    dispatch({
        type: EDIT_TODO,
        payload: response.data
    })
    history.push('/');
}
