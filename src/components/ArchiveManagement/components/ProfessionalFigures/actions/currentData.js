import {
    ARCHIVE_MANAGEMENT_GET_CURRENT_PROFESSIONAL_FIGURES,
    ARCHIVE_MANAGEMENT_GET_CURRENT_PROFESSIONAL_FIGURES_SUCCESS
} from './actionTypes';

export function currentData(token) {
    return {
        type: ARCHIVE_MANAGEMENT_GET_CURRENT_PROFESSIONAL_FIGURES,
        token
    }
}

export function currentDataSuccess(professionalFiguresList) {
    return {
        type: ARCHIVE_MANAGEMENT_GET_CURRENT_PROFESSIONAL_FIGURES_SUCCESS,
        professionalFiguresList
    }
}