import { ofType, combineEpics } from 'redux-observable';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';

//Components
import { errorHandling } from '../../../../../../../utils/Errors/index';
import { toast } from 'react-toastify';

//Success functions
import { submitFormSuccess } from '../actions/submitForm';
import { deleteSuccess } from '../actions/catDelete';

//Actions
import {
    ARCHIVE_MANAGEMENT_CATEGORIES_EDIT_FORM_SUBMIT,
    ARCHIVE_MANAGEMENT_CATEGORIES_DELETE_SELECTED_CATEGORY
} from '../actions/actionTypes';

const submitForm = (action$, state$) =>
    action$.pipe(
        ofType(ARCHIVE_MANAGEMENT_CATEGORIES_EDIT_FORM_SUBMIT),
        mergeMap(action => {
            const apiUrl = `${ state$.value.apiUrl.services }/registry/category/${ action.id }`;

            const updatedCat = ajax({
                url: apiUrl,
                method: 'PUT',
                headers: {
                    "Content-type": "application/json",
                    "Authorization": "Bearer " + action.token
                },
                body: {
                    name: action.formData.categoryName,
                    description: action.formData.categoryDescription,
                    professionalFigureIds: action.formData.catFigures,
                    id: action.id
                }
                })
                .pipe(
                    map(() => {
                        toast.success("Informazioni aggiornate con successo");
                        return submitFormSuccess(action.token);
                    }),
                    catchError(error => of(errorHandling(error)))
                );

            return updatedCat;
        })
    );

const deleteCat = (action$, state$) =>
    action$.pipe(
        ofType(ARCHIVE_MANAGEMENT_CATEGORIES_DELETE_SELECTED_CATEGORY),
        mergeMap(action => {
            const apiUrl = `${ state$.value.apiUrl.services }/registry/category/${ action.id }`;

            const deletedRow = ajax({
                url: apiUrl,
                method: 'DELETE',
                headers: {
                    "Authorization": "Bearer " + action.token
                }
            }).pipe(
                map(() => {
                    toast.success("Categoria eliminata correttamente")
                    return deleteSuccess(action.token);
                }),
                catchError(error => {
                    toast.error("Operazione annullata, devi prima eliminare tutti i documenti associati");
                    return of(errorHandling(error))
                })
            );

            return deletedRow;
        })
    )

export default combineEpics(
    submitForm,
    deleteCat
);