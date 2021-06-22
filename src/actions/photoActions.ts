import { Dispatch } from 'redux';
import * as actionsTypes from '../actions/actionTypes/photoTypes';
import { ISinglePhoto } from '../entities/ISinglePhoto';

export const getPhotos = () : Promise<ISinglePhoto[]> => ((dispatch:Dispatch) =>{

        return fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then((photoList : ISinglePhoto[]) => {
            dispatch({
                type:actionsTypes.GET_PHOTO,
                photoList
            });
        })
}) as any;