import {
    ARCHIVE_MANAGEMENT_PROFESSIONAL_FIGURES_NEW_NAME_UPDATE,
    ARCHIVE_MANAGEMENT_PROFESSIONAL_FIGURES_NEW_DESCRIPTION_UPDATE,
    ARCHIVE_MANAGEMENT_PROFESSIONAL_FIGURES_NEW_CATEGORIES_UPDATE,
    ARCHIVE_MANAGEMENT_PROFESSIONAL_FIGURES_NEW_UPDATE_DEFAULT
} from './actionTypes';

export function updateFormField(key, value) {
    switch(key) {
        case 'figureName':
            return {
                type: ARCHIVE_MANAGEMENT_PROFESSIONAL_FIGURES_NEW_NAME_UPDATE,
                value
            }
        case 'figureDescription':
            return {
                type: ARCHIVE_MANAGEMENT_PROFESSIONAL_FIGURES_NEW_DESCRIPTION_UPDATE,
                value
            }
        case 'figureCategories':
            return {
                type: ARCHIVE_MANAGEMENT_PROFESSIONAL_FIGURES_NEW_CATEGORIES_UPDATE,
                value
            }
        default:
            return {
                type: ARCHIVE_MANAGEMENT_PROFESSIONAL_FIGURES_NEW_UPDATE_DEFAULT
            }
    }
}