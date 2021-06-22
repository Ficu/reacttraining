import { ISinglePhoto } from '../../entities/ISinglePhoto'

export const GET_PHOTO = 'GET_PHOTO';

export interface IPhotoTypes {
    GET_PHOTO: {
        photoList: ISinglePhoto[];
    };
}