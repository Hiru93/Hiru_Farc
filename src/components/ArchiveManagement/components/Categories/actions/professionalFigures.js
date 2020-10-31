import {
    ARCHIVE_MANAGEMENT_GET_PROFESSIONAL_FIGURES,
    ARCHIVE_MANAGEMENT_GET_PROFESSIONAL_FIGURES_SUCCESS
} from './actionTypes';

export function professionalFigures(token) {
    return {
        type: ARCHIVE_MANAGEMENT_GET_PROFESSIONAL_FIGURES,
        token
    }
}

export function professionalFiguresSuccess(figureList) {
    return {
        type: ARCHIVE_MANAGEMENT_GET_PROFESSIONAL_FIGURES_SUCCESS,
        figureList
    }
}