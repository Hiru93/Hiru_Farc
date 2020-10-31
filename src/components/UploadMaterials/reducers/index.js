import { combineReducers } from 'redux';

import {
    UPLOAD_MATERIALS_CHANGE_STEP_SELECTED,
    UPLOAD_MATERIALS_CHANGE_SELECTE_PDF,
    UPLOAD_MATERIALS_CHANGE_SELECTE_IMG,
    UPLOAD_MATERIALS_CHANGE_SELECTED_CAT,
    UPLOAD_MATERIALS_CHANGE_SELECTED_TITLE,
    UPLOAD_MATERIALS_CHANGE_SELECTED_DESCRIPTION,
    UPLOAD_MATERIALS_CHANGE_SELECTED_PROFESSION,
    UPLOAD_MATERIALS_GET_INITIAL_DATA,
    UPLOAD_MATERIALS_GET_INITIAL_DATA_SUCCESS,
    UPLOAD_MATERIALS_UPDATE_PREVIEW_URL,
    UPLOAD_MATERIALS_SUBMIT_FORM,
    UPLOAD_MATERIALS_SUBMIT_FORM_SUCCESS
} from '../actions/actionTypes';

let initialState = {
    currentActive: 0,
    pdf: null,
    img: null,
    selectedProfession: [],
    selectedCat: null,
    title: null,
    description: null,
    catAndFigures: [],
    imageUrl: null,
    isItLoading: false
};

const currentActive = (state = initialState.currentActive, action) => {
    switch(action.type) {
        case UPLOAD_MATERIALS_CHANGE_STEP_SELECTED:
            return action.selected;
        case UPLOAD_MATERIALS_SUBMIT_FORM_SUCCESS:
            return 0;
        default:
            return state;
    }
};

const pdf = (state = initialState.pdf, action) => {
    switch(action.type) {
        case UPLOAD_MATERIALS_CHANGE_SELECTE_PDF:
            return action.file;
        case UPLOAD_MATERIALS_SUBMIT_FORM_SUCCESS:
            return null;
        default:
            return state;
    }
};

const img = (state = initialState.img, action) => {
    switch(action.type) {
        case UPLOAD_MATERIALS_CHANGE_SELECTE_IMG:
            return action.img;
        case UPLOAD_MATERIALS_SUBMIT_FORM_SUCCESS:
            return null;
        default:
            return state;
    }
};

const selectedProfession = (state = initialState.selectedProfession, action) => {
    switch(action.type) {
        case UPLOAD_MATERIALS_CHANGE_SELECTED_PROFESSION:
            return action.value;
        case UPLOAD_MATERIALS_SUBMIT_FORM_SUCCESS:
            return [];
        default:
            return state;
    }
};

const selectedCat = (state = initialState.selectedCat, action) => {
    switch(action.type) {
        case UPLOAD_MATERIALS_CHANGE_SELECTED_CAT:
            return action.value;
        case UPLOAD_MATERIALS_SUBMIT_FORM_SUCCESS:
            return null;
        default:
            return state;
    }
};

const title = (state = initialState.title, action) => {
    switch(action.type) {
        case UPLOAD_MATERIALS_CHANGE_SELECTED_TITLE:
            return action.value;
        case UPLOAD_MATERIALS_SUBMIT_FORM_SUCCESS:
            return null;
        default:
            return state;
    }
};

const description = (state = initialState.description, action) => {
    switch(action.type) {
        case UPLOAD_MATERIALS_CHANGE_SELECTED_DESCRIPTION:
            return action.value;
        case UPLOAD_MATERIALS_SUBMIT_FORM_SUCCESS:
            return null;
        default:
            return state;
    }
};

const catAndFigures = (state = initialState.catAndFigures, action) => {
    switch(action.type) {
        case UPLOAD_MATERIALS_GET_INITIAL_DATA_SUCCESS:
            return action.catAndFigures;
        default:
            return state;
    }
};

const imageUrl = (state = initialState.imageUrl, action) => {
    switch(action.type) {
        case UPLOAD_MATERIALS_UPDATE_PREVIEW_URL:
            return action.imgUrl;
        case UPLOAD_MATERIALS_SUBMIT_FORM_SUCCESS:
            return null;
        default:
            return state;
    }
};

const isItLoading = (state = initialState.isItLoading, action) => {
    switch(action.type) {
        case UPLOAD_MATERIALS_GET_INITIAL_DATA:
            return true;
        case UPLOAD_MATERIALS_GET_INITIAL_DATA_SUCCESS:
            return false;
        case UPLOAD_MATERIALS_SUBMIT_FORM:
            return true;
        case UPLOAD_MATERIALS_SUBMIT_FORM_SUCCESS:
            return false;
        default:
            return state;
    }
};

const uploadMaterials = combineReducers({
    currentActive,
    pdf,
    img,
    selectedProfession,
    selectedCat,
    title,
    description,
    catAndFigures,
    imageUrl,
    isItLoading
});

export default uploadMaterials;