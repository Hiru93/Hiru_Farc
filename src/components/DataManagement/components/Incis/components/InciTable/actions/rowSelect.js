import {
    DATA_MANAGE_INCI_SELECTED_ROW
} from './actionTypes';

export function rowSelect(row) {
    return {
        type: DATA_MANAGE_INCI_SELECTED_ROW,
        row
    }
}