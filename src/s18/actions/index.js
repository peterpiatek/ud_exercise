import jsonP from '../apis/jsonPlaceholder';
import _ from "lodash";

export const getPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(getPosts());

    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(getUser(id)))
        .value();
/* async/await is not working with foreach. if we need to
* if we need to execure code after all users are fetched we could use below aproach
* */
    /*console.log(_.map(uniqueUsers, id => dispatch(getUser(id))));
    const allUsers = await Promise.all(_.map(uniqueUsers, id => dispatch(getUser(id))));
    console.log(allUsers);
    console.log(getState().users);*/
}

export const getPosts = () => async dispatch => {
    const response = await jsonP.get('/posts');
    dispatch({ type: 'GET_POSTS', payload: response.data })
}

export const getUser = id => async dispatch => {
    const response = await jsonP.get(`/users/${id}`);
    dispatch({
        type: 'GET_USER',
        payload: response.data
    })
}

/*
* if using memoize this way re-fetching is not possible
* to re-fetch another similar function to get user must be created without memoize applied to the fetch data step
* */
/*export const getUser = id => dispatch => {
    _getUser(id, dispatch);
}
const _getUser = _.memoize(async (id, dispatch) => {
    const response = await jsonP.get(`/users/${id}`);
    dispatch({
        type: 'GET_USER',
        payload: response.data
    })
})*/
