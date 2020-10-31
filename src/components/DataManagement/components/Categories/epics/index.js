import { ofType, combineEpics } from 'redux-observable';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';

//Components
import { errorHandling } from '../../../../../utils/Errors/index';
import { toast } from 'react-toastify';

//Success functions
import { submitFormSuccess } from '../actions/submitForm';

//Actions
import {
    DATA_MANAGE_ACCORDION_FORM_SUBMIT
} from '../actions/actionTypes';

const submitForm = (action$, state$) => 
    action$.pipe(
        ofType(DATA_MANAGE_ACCORDION_FORM_SUBMIT),
        mergeMap(action => {
            const apiUrl = `${ state$.value.apiUrl.services }/category/${ action.formData.categoryId }`;
            const updatedRow = ajax({
                url: apiUrl,
                method: 'PUT',
                headers: {
                    'Authorization': 'Bearer ' + action.token
                },
                body: {
                    name: action.formData.name,
                    info: action.formData.info,
                    bibliography: action.formData.bibliography
                }
            })
            .pipe(
                map(() => {
                    toast.success("Informazioni salvate con successo");
                    return submitFormSuccess(action.token);
                }),
                catchError(error => of(errorHandling(error)))
            );

            return updatedRow;
        })
    );

export default combineEpics(
    submitForm
);