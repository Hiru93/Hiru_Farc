import { ofType, combineEpics } from 'redux-observable';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';

//Components
import { errorHandling } from '../../../../../../../utils/Errors/index';
import { toast } from 'react-toastify';

//Success functions
import { formSubmitSuccess } from '../actions/formSubmit';

//Actions
import {
    DATA_MANAGEMENT_CATEGORIES_INSERT_FORM_SUBMIT
} from '../actions/actionTypes.js';

const submitForm = (action$, state$) =>
    action$.pipe(
        ofType(DATA_MANAGEMENT_CATEGORIES_INSERT_FORM_SUBMIT),
        mergeMap(action => {
            const apiUrl = `${ state$.value.apiUrl.services }/category/`;

            const addedCategory = ajax
                .post(apiUrl,{
                    id: action.formData.id,
                    name: action.formData.name,
                    info: action.formData.info,
                    bibliography: action.formData.bibliography,
                    inci: []
                },{
                    "Content-type": "application/json",
                    "Authorization": "Bearer " + action.token
                })
                .pipe(
                    map(() => {
                        toast.success("Informazioni salvate con successo");
                        return formSubmitSuccess(action.token);
                    }),
                    catchError(error => of(errorHandling(error)))
                );

            return addedCategory;
        })
    );

export default combineEpics(
    submitForm
);