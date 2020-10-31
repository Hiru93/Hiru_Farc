import { combineReducers } from 'redux';

import {
    ARCHIVE_MANAGEMENT_CATEGORIES_EDIT_NAME_UPDATE,
    ARCHIVE_MANAGEMENT_CATEGORIES_EDIT_DESCRIPTION_UPDATE,
    ARCHIVE_MANAGEMENT_CATEGORIES_EDIT_FIGURES_UPDATE,
    ARCHIVE_MANAGEMENT_CATEGORIES_EDIT_FORM_SUBMIT
} from '../actions/actionTypes';
import {
    ARCHIVE_MANAGEMENT_OPEN_EDIT_FORM_CATEGORIES
} from '../../../actions/actionTypes';

const initialState = {
    catName: null,
    catDescription: null,
    catFigures: []
};

const catName = (state = initialState.catName, action) => {
    switch(action.type) {
        case ARCHIVE_MANAGEMENT_OPEN_EDIT_FORM_CATEGORIES:
            return action.selectedRow.name;
        case ARCHIVE_MANAGEMENT_CATEGORIES_EDIT_NAME_UPDATE:
            return action.value;
        case ARCHIVE_MANAGEMENT_CATEGORIES_EDIT_FORM_SUBMIT:
            return null;
        default:
            return state;
    }
};

const catDescription = (state = initialState.catDescription, action) => {
    switch(action.type) {
        case ARCHIVE_MANAGEMENT_OPEN_EDIT_FORM_CATEGORIES:
            return action.selectedRow.description;
        case ARCHIVE_MANAGEMENT_CATEGORIES_EDIT_DESCRIPTION_UPDATE:
            return action.value;
        case ARCHIVE_MANAGEMENT_CATEGORIES_EDIT_FORM_SUBMIT:
            return null;
        default:
            return state;
    }
};

const catFigures = (state = initialState.catFigures, action) => {
    switch(action.type) {
        case ARCHIVE_MANAGEMENT_OPEN_EDIT_FORM_CATEGORIES:
            return action.selectedRow.professionalFigures.map(x => x.id)
        case ARCHIVE_MANAGEMENT_CATEGORIES_EDIT_FIGURES_UPDATE:
            return action.value;
        case ARCHIVE_MANAGEMENT_CATEGORIES_EDIT_FORM_SUBMIT:
            return [];
        default:
            return state;
    }
};

const editCategoryForm = combineReducers({
    catName,
    catDescription,
    catFigures
});

export default editCategoryForm;