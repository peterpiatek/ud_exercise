import jsonP from '../apis/jsonPlaceholder';

export const getPosts = () => async dispatch => {
    const response = await jsonP.get('/posts');
    dispatch({ type: 'GET_POSTS', payload: response.data })
}

export const getUser = userID => async dispatch => {
    const response = await jsonP.get('/users/' + userID);
    dispatch({
        type: 'GET_USER',
        payload: response.data
    });
}
