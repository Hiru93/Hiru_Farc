import { ofType, combineEpics } from 'redux-observable';
import { mergeMap, catchError } from 'rxjs/operators';  //MANCA MAP
// import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
import history from '../../../store/history';
import { errorHandling } from '../../../utils/Errors/index';

import {
    SELECTED_ENTRY,
    LOGOUT
} from '../actions/actionTypes';

const selectEntry  = (action$, state$) =>
    action$.pipe(
        ofType(SELECTED_ENTRY),
        mergeMap(action => {
            history.push('/home/' + action.componentId);
            return of({ type: 'success' });
        }),
        catchError(error => of(errorHandling(error)))
    );

const handleLogout = (action$, state$) =>
    action$.pipe(
        ofType(LOGOUT),
        mergeMap(() => {
            history.push('/login');
            return of({ type: 'success' });
        }),
        catchError(error => of(errorHandling(error)))
    );

export default combineEpics(
    selectEntry,
    handleLogout
);