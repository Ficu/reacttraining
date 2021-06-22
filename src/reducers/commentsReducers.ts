import * as actionTypes from '../actions/actionTypes/commentTypes';
import { ISingleComment } from '../entities/ISingleComment';

export interface ICommentReducer {
    commentList: ISingleComment[];
}

const defaultState = () : ICommentReducer => ({
    commentList: [],
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action : any)=>{
    switch(action.type){
        case actionTypes.GET_COMMENT:{
            const commentData:actionTypes.IPostTypes['GET_COMMENT'] = action;
            return{
                ...state,
                commentList:commentData.commentList
            }
        }
        default: {
            return state;
        }
    }
}