import {
    DATA_MANAGE_INCI_DELETE_ROW
} from './actionTypes';

import {
    DATA_MANAGE_GET_CATEGORIES
} from '../../../../../actions/actionTypes';

export function rowDelete(row, token) {
    return {
        type: DATA_MANAGE_INCI_DELETE_ROW,
        row,
        token
    }
}

export function deleteSuccess(token) {
    return {
        type: DATA_MANAGE_GET_CATEGORIES,
        token
    }
}