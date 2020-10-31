import {
    ARCHIVE_MANAGEMENT_GET_CURRENT_CATEGORIES_DATA,
    ARCHIVE_MANAGEMENT_GET_CURRENT_CATEGORIES_DATA_SUCCESS
} from './actionTypes';

export function currentData(token) {
    return {
        type: ARCHIVE_MANAGEMENT_GET_CURRENT_CATEGORIES_DATA,
        token
    }
}

export function currentDataSuccess(categoryList) {
    return {
        type: ARCHIVE_MANAGEMENT_GET_CURRENT_CATEGORIES_DATA_SUCCESS,
        categoryList
    }
}