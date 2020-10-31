import { combineReducers } from 'redux';

//Actions
import {
    GET_CATEGORIES_SUCCESS,
    GET_INCI_SUCCESS,
    CHANGE_DRAWER_STATUS,
    SELECTED_ENTRY
} from '../actions/actionTypes';

let initialState = {
    categories: [],
    inci: [],
    drawerState: true,
    selectedEntry: null
};

export const categories = (state = initialState.categories, action) => {
    switch(action.type) {
        case GET_CATEGORIES_SUCCESS:
            return action.categories;
        default:
            return state;
    }
};

export const inci = (state = initialState.inci, action) => {
    switch(action.type) {
        case GET_INCI_SUCCESS:
            return action.inci;
        default:
            return state;
    }
};

export const drawerState = (state = initialState.drawerState, action) => {
    switch(action.type) {
        case CHANGE_DRAWER_STATUS:
            return action.state;
        default:
            return state;
    }
};

export const selectedEntry = (state = initialState.selectedEntry, action) => {
    switch(action.type) {
        case SELECTED_ENTRY:
            return action.key;
        default:
            return state;
    }
}

const landing = combineReducers({
    categories,
    inci,
    drawerState,
    selectedEntry
});

export default landing;