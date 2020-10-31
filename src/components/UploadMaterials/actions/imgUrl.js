import {
    UPLOAD_MATERIALS_UPDATE_PREVIEW_URL
} from './actionTypes';

export function imgUrl(imgUrl) {
    return {
        type: UPLOAD_MATERIALS_UPDATE_PREVIEW_URL,
        imgUrl
    };
}