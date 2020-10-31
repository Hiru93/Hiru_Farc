import {
    ARCHIVE_MANAGEMENT_CATEGORIES_DELETE_SELECTED_CATEGORY
} from './actionTypes';

import {
    ARCHIVE_MANAGEMENT_GET_CURRENT_CATEGORIES_DATA
} from '../../../actions/actionTypes';

export function catDelete(id, token) {
    return {
        type: ARCHIVE_MANAGEMENT_CATEGORIES_DELETE_SELECTED_CATEGORY,
        id,
        token
    }
}

export function deleteSuccess(token) {
    return {
        type: ARCHIVE_MANAGEMENT_GET_CURRENT_CATEGORIES_DATA,
        token
    }
}