import {
    ARCHIVE_MANAGEMENT_GET_CATEGORIES,
    ARCHIVE_MANAGEMENT_GET_CATEGORIES_SUCCESS
} from './actionTypes';

export function categories(token) {
    return {
        type: ARCHIVE_MANAGEMENT_GET_CATEGORIES,
        token
    }
}

export function categoriesSuccess(categoryList) {
    return {
        type: ARCHIVE_MANAGEMENT_GET_CATEGORIES_SUCCESS,
        categoryList
    }
}