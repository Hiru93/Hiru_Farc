import {
    DATA_MANAGE_CATEGORIES_SELECTED_ROW
} from './actionTypes';

export function rowSelect(row) {
    return {
        type: DATA_MANAGE_CATEGORIES_SELECTED_ROW,
        row
    }
}