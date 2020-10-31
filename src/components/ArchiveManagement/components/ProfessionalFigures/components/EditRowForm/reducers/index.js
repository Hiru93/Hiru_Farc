import { combineReducers } from 'redux';

import {
    ARCHIVE_MANAGEMENT_FIGURE_EDIT_NAME_UPDATE,
    ARCHIVE_MANAGEMENT_FIGURE_EDIT_DESCRIPTION_UPDATE,
    ARCHIVE_MANAGEMENT_FIGURE_EDIT_FIGURES_UPDATE,
    ARCHIVE_MANAGEMENT_FIGURE_EDIT_FORM_SUBMIT
} from '../actions/actionTypes';
import {
    ARCHIVE_MANAGEMENT_OPEN_EDIT_FORM_FIGURES
} from '../../../actions/actionTypes';

const initialState = {
    figureName: null,
    figureDescription: null,
    figureCategories: []
};

const figureName = (state = initialState.figureName, action) => {
    switch(action.type) {
        case ARCHIVE_MANAGEMENT_OPEN_EDIT_FORM_FIGURES:
            return action.selectedRow.name;
        case ARCHIVE_MANAGEMENT_FIGURE_EDIT_NAME_UPDATE:
            return action.value;
        case ARCHIVE_MANAGEMENT_FIGURE_EDIT_FORM_SUBMIT:
            return null;
        default:
            return state;
    }
};

const figureDescription = (state = initialState.figureDescription, action) => {
    switch(action.type) {
        case ARCHIVE_MANAGEMENT_OPEN_EDIT_FORM_FIGURES:
            return action.selectedRow.description;
        case ARCHIVE_MANAGEMENT_FIGURE_EDIT_DESCRIPTION_UPDATE:
            return action.value;
        case ARCHIVE_MANAGEMENT_FIGURE_EDIT_FORM_SUBMIT:
            return null;
        default:
            return state;
    }
};

const figureCategories = (state = initialState.figureCategories, action) => {
    switch(action.type) {
        case ARCHIVE_MANAGEMENT_OPEN_EDIT_FORM_FIGURES:
            return action.selectedRow.categories !== null && action.selectedRow.categories !== undefined ?
                action.selectedRow.categories.map(cat => cat.id) :
                [];
        case ARCHIVE_MANAGEMENT_FIGURE_EDIT_FIGURES_UPDATE:
            return action.value;
        case ARCHIVE_MANAGEMENT_FIGURE_EDIT_FORM_SUBMIT:
            return [];
        default:
            return state;
    }
};

const editfigureForm = combineReducers({
    figureName,
    figureDescription,
    figureCategories
});

export default editfigureForm;