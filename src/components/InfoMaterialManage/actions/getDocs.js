import {
    INFO_MATERIAL_MANAGE_GET_DOCS,
    INFO_MATERIAL_MANAGE_GET_DOCS_SUCCESS
} from './actionTypes';

export function getDocs(token) {
    return {
        type: INFO_MATERIAL_MANAGE_GET_DOCS,
        token
    };
}

export function getDocsSuccess(docs) {
    return {
        type: INFO_MATERIAL_MANAGE_GET_DOCS_SUCCESS,
        docs
    };
}