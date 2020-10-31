import {
    UPLOAD_MATERIALS_CHANGE_SELECTE_PDF
} from './actionTypes';

export function pdfUpload(file) {
    return {
        type: UPLOAD_MATERIALS_CHANGE_SELECTE_PDF,
        file
    };
};