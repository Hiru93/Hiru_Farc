import { combineReducers } from 'redux';

import {
    ARCHIVE_MANAGEMENT_PROFESSIONAL_FIGURES_NEW_NAME_UPDATE,
    ARCHIVE_MANAGEMENT_PROFESSIONAL_FIGURES_NEW_DESCRIPTION_UPDATE,
    ARCHIVE_MANAGEMENT_PROFESSIONAL_FIGURES_NEW_CATEGORIES_UPDATE,
    ARCHIVE_MANAGEMENT_PROFESSIONAL_FIGURES_NEW_FORM_SUBMIT
} from '../actions/actionTypes';

const initialState = {
    figureName: null,
    figureDescription: null,
    figureCategories: []
};

const figureName = (state = initialState.figureName, action) => {
    switch(action.type) {
        case ARCHIVE_MANAGEMENT_PROFESSIONAL_FIGURES_NEW_NAME_UPDATE:
            return action.value;
        case ARCHIVE_MANAGEMENT_PROFESSIONAL_FIGURES_NEW_FORM_SUBMIT:
            return null;
        default:
            return state;
    }
};

const figureDescription = (state = initialState.figureDescription, action) => {
    switch(action.type) {
        case ARCHIVE_MANAGEMENT_PROFESSIONAL_FIGURES_NEW_DESCRIPTION_UPDATE:
            return action.value;
        case ARCHIVE_MANAGEMENT_PROFESSIONAL_FIGURES_NEW_FORM_SUBMIT:
            return null;
        default:
            return state;
    }
};

const figureCategories = (state = initialState.figureCategories, action) => {
    switch(action.type) {
        case ARCHIVE_MANAGEMENT_PROFESSIONAL_FIGURES_NEW_CATEGORIES_UPDATE:
            return action.value;
        case ARCHIVE_MANAGEMENT_PROFESSIONAL_FIGURES_NEW_FORM_SUBMIT:
            return [];
        default:
            return state;
    }
};

const addProfessionalFiguresForm = combineReducers({
    figureName,
    figureDescription,
    figureCategories
});

export default addProfessionalFiguresForm;