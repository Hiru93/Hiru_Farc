import {
    DATA_MANAGE_CATEGORIES_HANDLE_MODAL_STATE
} from './actionTypes';

export function cancelForm() {
    return {
        type: DATA_MANAGE_CATEGORIES_HANDLE_MODAL_STATE,
        state: false
    }
};