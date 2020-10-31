import { combineReducers } from 'redux';

import {
    DATA_MANAGE_INCI_HANDLE_MODAL_STATE,
    DATA_MANAGE_ACCORDION_INCI_FORM_SUBMIT
} from '../actions/actionTypes';

import {
    DATA_MANAGE_INCI_SELECTED_ROW
} from '../components/InciTable/actions/actionTypes';

import {
    DATA_MANAGE_GET_CATEGORIES,
    DATA_MANAGE_GET_CATEGORIES_SUCCESS
} from '../../../actions/actionTypes';

let initialState = {
    isModalOpen: false,
    selectedRow: null,
    isFetching: null
};

export const isModalOpen = (state = initialState.isModalOpen, action) => {
    switch(action.type) {
        case DATA_MANAGE_INCI_HANDLE_MODAL_STATE:
            return action.state;
        case DATA_MANAGE_INCI_SELECTED_ROW:
            return true;
        default:
            return state;
    }
};

export const selectedRow = (state = initialState.selectedRow, action) => {
    switch(action.type) {
        case DATA_MANAGE_INCI_SELECTED_ROW:
            return action.row;
        case DATA_MANAGE_INCI_HANDLE_MODAL_STATE:
            return null;
        default:
            return state;
    }
};

export const isFetching = (state = initialState.isFetching, action) => {
    switch(action.type) {
        case DATA_MANAGE_GET_CATEGORIES:
            return true;
        case DATA_MANAGE_ACCORDION_INCI_FORM_SUBMIT:
            return true;
        case DATA_MANAGE_GET_CATEGORIES_SUCCESS:
            return false;
        default:
            return state;
    }
}

const incisManage = combineReducers({
    isModalOpen,
    selectedRow,
    isFetching
});

export default incisManage;