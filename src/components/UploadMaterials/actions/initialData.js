import {
    UPLOAD_MATERIALS_GET_INITIAL_DATA,
    UPLOAD_MATERIALS_GET_INITIAL_DATA_SUCCESS
} from './actionTypes';

export function initialData(token) {
    return {
        type: UPLOAD_MATERIALS_GET_INITIAL_DATA,
        token
    };
}

export function getInitialDataSuccess(catAndFigures) {
    return {
        type: UPLOAD_MATERIALS_GET_INITIAL_DATA_SUCCESS,
        catAndFigures
    }
}