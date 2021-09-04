import jsonP from '../apis/jsonPlaceholder';

export const getPosts = () => async dispatch => {
    const response = await jsonP.get('/posts');
    dispatch({type: 'GET_POSTS', payload: response})
}

/*
export const getPosts = () => {
    const response = await jsonP.get('/posts');
    return {
        type: 'GET_POSTS',
        payload: response
    }
}*/
