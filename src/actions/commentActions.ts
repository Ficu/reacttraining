import { Dispatch } from 'redux';
import * as actionsTypes from '../actions/actionTypes/commentTypes';
import { ISingleComment} from '../entities/ISingleComment';

export const getComments = () : Promise<ISingleComment[]> => ((dispatch:Dispatch) =>{

        return fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then((commentList : ISingleComment[]) => {
            dispatch({
                type:actionsTypes.GET_COMMENT,
                commentList
            })
        })
}) as any;