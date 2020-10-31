import {
    ARCHIVE_MANAGEMENT_FIGURE_DELETE_SELECTED_FIGURE
} from './actionTypes';

import {
    ARCHIVE_MANAGEMENT_GET_CURRENT_PROFESSIONAL_FIGURES
} from '../../../actions/actionTypes';

export function figureDelete(id, token) {
    return {
        type: ARCHIVE_MANAGEMENT_FIGURE_DELETE_SELECTED_FIGURE,
        id,
        token
    }
}

export function figureDeleteSuccess(token) {
    return {
        type: ARCHIVE_MANAGEMENT_GET_CURRENT_PROFESSIONAL_FIGURES,
        token
    }
}