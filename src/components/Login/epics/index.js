import { ofType } from 'redux-observable';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';

//Components
import { toast } from 'react-toastify';
import { errorHandling } from '../../../utils/Errors/index';

//Success functions
import { loginSubmitSuccess } from '../actions/loginSubmit';

//Actions
import {
    SUBMIT_LOGIN_INFO
} from '../actions/actionTypes';

const login = (action$, state$) =>
    action$.pipe(
        ofType(SUBMIT_LOGIN_INFO),
        mergeMap(action => {
            const apiUrl = `${ state$.value.apiUrl.auth }/login/`;

            const token = ajax
                .post(
                    apiUrl,
                    {
                        username: action.formData.username,
                        password: action.formData.password
                    },
                    { "Content-type": "application/json" }
                ).pipe(
                    map(data => {
                        localStorage.setItem('token', data.response.token);
                        return loginSubmitSuccess(data.response.token);
                    }),
                    catchError(error => {
                        error.response && toast.error(error.response.message);
                        of(errorHandling(error));
                    })
                );
            
            return token;
        })
    );

export default login;