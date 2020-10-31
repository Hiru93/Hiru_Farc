import { combineReducers } from 'redux';

//Common components

//Actions
import {
    INFO_MATERIAL_MANAGE_GET_DOCS,
    INFO_MATERIAL_MANAGE_GET_DOCS_SUCCESS,
    INFO_MATERIAL_MANAGE_GET_CATEGORIES_SUCCESS
} from '../actions/actionTypes';

let initialState = {
    docs: [],
    categories: [],
    isItLoading: false
};

const docs = (state = initialState.docs, action) => {
    switch(action.type) {
        case INFO_MATERIAL_MANAGE_GET_DOCS_SUCCESS:
            return action.docs;
        default:
            return state;
    }
};

const categories = (state = initialState.categories, action) => {
    switch(action.type) {
        case INFO_MATERIAL_MANAGE_GET_CATEGORIES_SUCCESS:
            return action.data;
        default:
            return state;
    }
};

const isItLoading = (state = initialState.isItLoading, action) => {
    switch(action.type) {
        case INFO_MATERIAL_MANAGE_GET_DOCS:
            return true;
        case INFO_MATERIAL_MANAGE_GET_DOCS_SUCCESS:
            return false;
        default:
            return state;
    }
}

const infoMaterialManage = combineReducers({
    docs,
    categories,
    isItLoading
});

export default infoMaterialManage