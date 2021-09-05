import jsonP from '../apis/jsonPlaceholder';

export const getPosts = () => async dispatch => {
    const response = await jsonP.get('/posts');
    dispatch({ type: 'GET_POSTS', payload: response.data })
}
export const getUsers = () => async dispatch => {
    const response = await jsonP.get('/users');
    dispatch({ type: 'GET_USERS', payload: response.data })
}
