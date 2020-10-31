import {
    UPLOAD_MATERIALS_CHANGE_STEP_SELECTED
} from './actionTypes';

export function activeStep(selected) {
    return {
        type: UPLOAD_MATERIALS_CHANGE_STEP_SELECTED,
        selected
    };
};