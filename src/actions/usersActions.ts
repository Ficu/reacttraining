import { Dispatch } from 'redux';
import * as actionsTypes from '../actions/actionTypes/userTypes';
import { ISingleUser } from '../entities/ISingleUser';

export const getUsers = () : Promise<ISingleUser[]> => (( dispatch:Dispatch ) => {

    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((usersList : ISingleUser[]) =>{
            dispatch({
                type:actionsTypes.GET_USERS,
                usersList
            })
        })
}) as any;
export const getSomeData = (someData: string ) : Promise<ISingleUser[]> => ((dispatch: Dispatch) => {
    dispatch({
        type: actionsTypes.PUSH_DATA,
        someData
    })
}) as any;