import {combineReducers} from "redux";

const posts = (posts = [], action) => {
    if(action.type === 'GET_POSTS'){
        return action.payload
    }
    return posts;
}

export default combineReducers({
    posts
});
