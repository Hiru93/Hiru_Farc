import { ofType, combineEpics } from 'redux-observable';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';

//Components
import { errorHandling } from '../../../../../../../utils/Errors/index';
import { toast } from 'react-toastify';

//Success functions
import { submitFormSuccess } from '../actions/submitForm';

//Actions
import {
    ARCHIVE_MANAGEMENT_CATEGORIES_NEW_FORM_SUBMIT
} from '../actions/actionTypes';

const submitForm = (action$, state$) =>
    action$.pipe(
        ofType(ARCHIVE_MANAGEMENT_CATEGORIES_NEW_FORM_SUBMIT),
        mergeMap(action => {
            const apiUrl = `${ state$.value.apiUrl.services }/registry/category/`;

            const newCat = ajax
                .post(apiUrl,
                    {
                        name: action.formData.categoryName,
                        description: action.formData.categoryDescription,
                        professionalFigureIds: action.formData.catFigures
                    },{
                        "Content-type": "application/json",
                        "Authorization": "Bearer " + action.token
                    })
                .pipe(
                    map(() => {
                        toast.success("Informazioni salvate con successo");
                        return submitFormSuccess(action.token);
                    }),
                    catchError(error => of(errorHandling(error)))
                );

            return newCat;
        })
    );

export default combineEpics(
    submitForm
);