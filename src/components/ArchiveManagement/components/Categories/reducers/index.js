import { combineReducers } from 'redux';

import {
    ARCHIVE_MANAGEMENT_GET_PROFESSIONAL_FIGURES_SUCCESS,
    ARCHIVE_MANAGEMENT_GET_CURRENT_CATEGORIES_DATA,
    ARCHIVE_MANAGEMENT_GET_CURRENT_CATEGORIES_DATA_SUCCESS,
    ARCHIVE_MANAGEMENT_CHANGE_CURRENT_CATEGORIES_FORM_STATE,
    ARCHIVE_MANAGEMENT_OPEN_EDIT_FORM_CATEGORIES
} from '../actions/actionTypes';
import {
    ARCHIVE_MANAGEMENT_CATEGORIES_CLOSE_EDIT_FORM
} from '../components/EditRowForm/actions/actionTypes';

const initialState = {
    professionalFiguresList: [],
    categoriesList: [],
    isLoading: false,
    formState: false,
    selectedRow: null
};

const professionalFiguresList = (state = initialState.professionalFiguresList, action) => {
    switch(action.type) {
        case ARCHIVE_MANAGEMENT_GET_PROFESSIONAL_FIGURES_SUCCESS:
            return action.figureList;
        default:
            return state;
    }
};

const categoriesList = (state = initialState.categoriesList, action) => {
    switch(action.type) {
        case ARCHIVE_MANAGEMENT_GET_CURRENT_CATEGORIES_DATA_SUCCESS:
            return action.categoryList;
        default:
            return state;
    }
};

const isLoading = (state = initialState.isLoading, action) => {
    switch(action.type) {
        case ARCHIVE_MANAGEMENT_GET_CURRENT_CATEGORIES_DATA_SUCCESS:
            return false;
        case ARCHIVE_MANAGEMENT_GET_CURRENT_CATEGORIES_DATA:
            return true;
        default:
            return state;
    }
};

const formState = (state = initialState.formState, action) => {
    switch(action.type) {
        case ARCHIVE_MANAGEMENT_CHANGE_CURRENT_CATEGORIES_FORM_STATE:
            return action.newState;
        case ARCHIVE_MANAGEMENT_CATEGORIES_CLOSE_EDIT_FORM:
            return false;
        default:
            return state;
    }
};

const selectedRow = (state = initialState.selectedRow, action) => {
    switch(action.type) {
        case ARCHIVE_MANAGEMENT_OPEN_EDIT_FORM_CATEGORIES:
            return action.selectedRow;
        case ARCHIVE_MANAGEMENT_CATEGORIES_CLOSE_EDIT_FORM:
            return null;
        case ARCHIVE_MANAGEMENT_GET_CURRENT_CATEGORIES_DATA:
            return null;
        default:
            return state;
    }
};

const categoriesArchiveManagement = combineReducers({
    professionalFiguresList,
    categoriesList,
    isLoading,
    formState,
    selectedRow
});

export default categoriesArchiveManagement;