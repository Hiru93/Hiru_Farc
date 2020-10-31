import {
    INFO_MATERIAL_MANAGE_DELETE_DOCUMENT,
    INFO_MATERIAL_MANAGE_GET_DOCS
} from './actionTypes';

export function deleteRow(document, token) {
    return {
        type: INFO_MATERIAL_MANAGE_DELETE_DOCUMENT,
        document,
        token
    };
}

export function deleteRowSuccess(token) {
    return {
        type: INFO_MATERIAL_MANAGE_GET_DOCS,
        token
    };
}