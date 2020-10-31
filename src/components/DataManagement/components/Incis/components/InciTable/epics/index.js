import { ofType, combineEpics } from 'redux-observable';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';

//Components
import { errorHandling } from '../../../../../../../utils/Errors/index';
import { toast } from 'react-toastify';

//Success functions
import { deleteSuccess } from '../actions/rowDelete';

//Actions
import {
    DATA_MANAGE_INCI_DELETE_ROW
} from '../actions/actionTypes';

const deleteRow = (action$, state$) =>
    action$.pipe(
        ofType(DATA_MANAGE_INCI_DELETE_ROW),
        mergeMap(action => {
            const apiUrl = `${ state$.value.apiUrl.services }/category/${ action.row.categoryId }/inci/${ action.row.id }`;

            const deletedRow = ajax({
                url: apiUrl,
                method: 'DELETE',
                headers: {
                    'Authorization': 'Bearer ' + action.token
                }
            })
            .pipe(
                map(() => {
                    toast.success("Inci eliminato correttamente");
                    return deleteSuccess(action.token);
                }),
                catchError(error => of(errorHandling(error)))
            );

            return deletedRow;
        })
    );

export default combineEpics(
    deleteRow
);