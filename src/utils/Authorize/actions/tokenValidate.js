import {
    REQUEST_TOKEN_CHECK,
    AUTH_TOKEN_CHECK
} from './actionTypes';

export function tokenValidate(token) {
    return {
        type: REQUEST_TOKEN_CHECK,
        token
    }
}

export function validToken(authorizations, exp, iat, user) {
    return {
        type: AUTH_TOKEN_CHECK,
        userInfo: {
            user,
            authorizations,
            iat,
            exp
        }
    }
}