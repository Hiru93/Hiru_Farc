import { combineReducers } from 'redux';

import {
    ARCHIVE_MANAGEMENT_CATEGORIES_NEW_NAME_UPDATE,
    ARCHIVE_MANAGEMENT_CATEGORIES_NEW_DESCRIPTION_UPDATE,
    ARCHIVE_MANAGEMENT_CATEGORIES_NEW_FIGURES_UPDATE,
    ARCHIVE_MANAGEMENT_CATEGORIES_NEW_FORM_SUBMIT
} from '../actions/actionTypes';

const initialState = {
    catName: null,
    catDescription: null,
    catFigures: []
};

const catName = (state = initialState.catName, action) => {
    switch(action.type) {
        case ARCHIVE_MANAGEMENT_CATEGORIES_NEW_NAME_UPDATE:
            return action.value;
        case ARCHIVE_MANAGEMENT_CATEGORIES_NEW_FORM_SUBMIT:
            return null;
        default:
            return state;
    }
};

const catDescription = (state = initialState.catDescription, action) => {
    switch(action.type) {
        case ARCHIVE_MANAGEMENT_CATEGORIES_NEW_DESCRIPTION_UPDATE:
            return action.value;
        case ARCHIVE_MANAGEMENT_CATEGORIES_NEW_FORM_SUBMIT:
            return null;
        default:
            return state;
    }
};

const catFigures = (state = initialState.catFigures, action) => {
    switch(action.type) {
        case ARCHIVE_MANAGEMENT_CATEGORIES_NEW_FIGURES_UPDATE:
            return action.value;
        case ARCHIVE_MANAGEMENT_CATEGORIES_NEW_FORM_SUBMIT:
            return [];
        default:
            return state;
    }
};

const addCategoryForm = combineReducers({
    catName,
    catDescription,
    catFigures
});

export default addCategoryForm;