import { ofType } from 'redux-observable';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';

import { validToken } from '../actions/tokenValidate';
import { resetToken } from '../actions/resetToken';
import history from '../../../store/history';
import { errorHandling } from '../../Errors/index';

//Actions
import {
    REQUEST_TOKEN_CHECK
} from '../actions/actionTypes';

export const tokenCheck = (action$, state$) => 
    action$.pipe(
        ofType(REQUEST_TOKEN_CHECK),
        mergeMap(action => {
            const apiUrl = `${ state$.value.apiUrl.auth }/login/check/`;

            const userInfo = ajax.post(
                apiUrl,
                { "token": action.token }
            ).pipe(
                map(data => {
                    const authorizations = data.response.authorizations;
                    const exp = data.response.exp;
                    const iat = data.response.iat;
                    const user = data.response.user;
                    return validToken(authorizations, exp, iat, user);
                }),
                catchError(error => {
                    resetToken();
                    localStorage.clear();
                    history.push('/login');
                    return of(errorHandling(error));
                })
            );

            return userInfo;
        })
    )

export default tokenCheck;