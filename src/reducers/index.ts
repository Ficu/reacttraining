import { combineReducers } from 'redux';
import comment, { ICommentReducer } from './commentsReducers';
import photo, { ISinglePhotoReducer } from './photoReducers'
import posts, { IPostReducer } from './postsReducers';
import users, { IUsersReducer } from './usersReducers';


export default combineReducers({
    users,
    posts,
    comment,
    photo
});

export interface IState {
    comment: ICommentReducer,
    photo: ISinglePhotoReducer,
    posts: IPostReducer,
    users: IUsersReducer
}