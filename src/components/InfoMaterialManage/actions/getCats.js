import {
    INFO_MATERIAL_MANAGE_GET_CATEGORIES,
    INFO_MATERIAL_MANAGE_GET_CATEGORIES_SUCCESS
} from './actionTypes';

export function getCats(token) {
    return {
        type: INFO_MATERIAL_MANAGE_GET_CATEGORIES,
        token
    };
}

export function getCatsSuccess(data) {
    return {
        type: INFO_MATERIAL_MANAGE_GET_CATEGORIES_SUCCESS,
        data
    }
}