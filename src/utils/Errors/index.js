import {
    DEFAULT_ERROR
} from './actionTypes';

export function errorHandling(error) {
    return {
        type: DEFAULT_ERROR,
        error: error.message
    }
}