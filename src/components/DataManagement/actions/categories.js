import {
    DATA_MANAGE_GET_CATEGORIES,
    DATA_MANAGE_GET_CATEGORIES_SUCCESS
} from './actionTypes';

export function categories(token) {
    return {
        type: DATA_MANAGE_GET_CATEGORIES,
        token
    }
}

export function categoriesSuccess(categories, incis, categoryList) {
    return {
        type: DATA_MANAGE_GET_CATEGORIES_SUCCESS,
        categories,
        incis,
        categoryList
    }
}