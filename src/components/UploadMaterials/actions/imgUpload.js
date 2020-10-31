import {
    UPLOAD_MATERIALS_CHANGE_SELECTE_IMG
} from './actionTypes';

export function imgUpload(img) {
    return {
        type: UPLOAD_MATERIALS_CHANGE_SELECTE_IMG,
        img
    }
}