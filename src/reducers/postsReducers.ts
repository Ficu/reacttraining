import * as actionTypes from '../actions/actionTypes/postTypes';
import { ISinglePost } from '../entities/ISinglePost';

export interface IPostReducer {
    postList: ISinglePost[];
    listType : string;
}

const defaultState = () : IPostReducer => ({
    postList: [],
    listType: 'Mosaic'
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action : any)=>{
    switch(action.type){
        case actionTypes.GET_POST:{
            const postData:actionTypes.IPostTypes['GET_POST'] = action;
            return{
                ...state,
                postList:postData.postList
            }
        }
        case "SET_LIST_TYPE" : {
            return {
                ...state,
                listType:action.payload
            }
        }
        default: {
            return state;
        }
    }
}