import { combineReducers } from 'redux';

import {
    ARCHIVE_MANAGEMENT_GET_CATEGORIES_SUCCESS,
    ARCHIVE_MANAGEMENT_GET_CURRENT_PROFESSIONAL_FIGURES,
    ARCHIVE_MANAGEMENT_GET_CURRENT_PROFESSIONAL_FIGURES_SUCCESS,
    ARCHIVE_MANAGEMENT_CHANGE_CURRENT_PROFESSIONAL_FIGURES_FORM_STATE,
    ARCHIVE_MANAGEMENT_OPEN_EDIT_FORM_FIGURES
} from '../actions/actionTypes';
import {
    ARCHIVE_MANAGEMENT_FIGURE_CLOSE_EDIT_FORM
} from '../components/EditRowForm/actions/actionTypes';

const initialState = {
    categoryList: [],
    professionalFiguresList: [],
    isLoading: false,
    formState: false,
    selectedRow: null
};

const categoryList = (state = initialState.categoryList, action) => {
    switch(action.type) {
        case ARCHIVE_MANAGEMENT_GET_CATEGORIES_SUCCESS:
            return action.categoryList;
        default:
            return state;
    }
};

const professionalFiguresList = (state = initialState.professionalFiguresList, action) => {
    switch(action.type) {
        case ARCHIVE_MANAGEMENT_GET_CURRENT_PROFESSIONAL_FIGURES_SUCCESS:
            return action.professionalFiguresList;
        default:
            return state;
    }
};

const isLoading = (state = initialState.isLoading, action) => {
    switch(action.type) {
        case ARCHIVE_MANAGEMENT_GET_CURRENT_PROFESSIONAL_FIGURES_SUCCESS:
            return false;
        case ARCHIVE_MANAGEMENT_GET_CURRENT_PROFESSIONAL_FIGURES:
            return true;
        default:
            return state;
    }
};

const formState = (state = initialState.formState, action) => {
    switch(action.type) {
        case ARCHIVE_MANAGEMENT_CHANGE_CURRENT_PROFESSIONAL_FIGURES_FORM_STATE:
            return action.newState;
        default:
            return state;
    }
};

const selectedRow = (state = initialState.selectedRow, action) => {
    switch(action.type) {
        case ARCHIVE_MANAGEMENT_OPEN_EDIT_FORM_FIGURES:
            return action.selectedRow;
        case ARCHIVE_MANAGEMENT_FIGURE_CLOSE_EDIT_FORM:
            return null;
        case ARCHIVE_MANAGEMENT_GET_CURRENT_PROFESSIONAL_FIGURES:
            return null;
        default:
            return state;
    }
};

const professionalFigureArchiveManagement = combineReducers({
    categoryList,
    professionalFiguresList,
    isLoading,
    formState,
    selectedRow
});

export default professionalFigureArchiveManagement;