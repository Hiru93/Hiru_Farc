import { combineReducers } from 'redux';

//Common components

//Actions
import {
    DATA_MANAGE_GET_CATEGORIES_SUCCESS
} from '../actions/actionTypes';

let initialState = {
    categories: [],
    incis: [],
    categoryList: []
};

export const categories = (state = initialState.categories, action) => {
    switch(action.type) {
        case DATA_MANAGE_GET_CATEGORIES_SUCCESS:
            return action.categories;
        default:
            return state;
    }
};

export const incis = (state = initialState.incis, action) => {
    switch(action.type) {
        case DATA_MANAGE_GET_CATEGORIES_SUCCESS:
            return action.incis;
        default:
            return state;
    }
};

export const categoryList = (state = initialState.categoryList, action) => {
    switch(action.type) {
        case DATA_MANAGE_GET_CATEGORIES_SUCCESS:
            return action.categoryList;
        default:
            return state;
    }
};


const dataManage = combineReducers({
    categories,
    incis,
    categoryList
});

export default dataManage;