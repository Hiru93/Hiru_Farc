import { ofType, combineEpics } from 'redux-observable';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';

//Components
import { errorHandling } from '../../../../../../../utils/Errors/index';
import { toast } from 'react-toastify';

//Success functions
import { submitFormSuccess } from '../actions/submitForm';
import { figureDeleteSuccess } from '../actions/figureDelete';

//Actions
import {
    ARCHIVE_MANAGEMENT_FIGURE_EDIT_FORM_SUBMIT,
    ARCHIVE_MANAGEMENT_FIGURE_DELETE_SELECTED_FIGURE
} from '../actions/actionTypes';

const submitForm = (action$, state$) =>
    action$.pipe(
        ofType(ARCHIVE_MANAGEMENT_FIGURE_EDIT_FORM_SUBMIT),
        mergeMap(action => {
            const apiUrl = `${ state$.value.apiUrl.services }/registry/professional-figure/${ action.id }`;

            const updatedFigure = ajax({
                url: apiUrl,
                method: 'PUT',
                headers: {
                    "Content-type": "application/json",
                    "Authorization": "Bearer " + action.token
                },
                body: {
                    name: action.formData.figureName,
                    description: action.formData.figureDescription,
                    categoryIds: action.formData.figureCategories,
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

            return updatedFigure;
        })
    );

const deleteFigure = (action$, state$) =>
    action$.pipe(
        ofType(ARCHIVE_MANAGEMENT_FIGURE_DELETE_SELECTED_FIGURE),
        mergeMap(action => {
            const apiUrl = `${  state$.value.apiUrl.services }/registry/professional-figure/${ action.id }`;

            const deletedFigure = ajax({
                url: apiUrl,
                method: 'DELETE',
                headers: {
                    'Authorization': 'Bearer ' + action.token
                }
            }).pipe(
                map(() => {
                    toast.success("Figura professionale eliminata con successo");
                    return figureDeleteSuccess(action.token);
                }),
                catchError(error => {
                    toast.error("Operazione annullata, devi prima eliminare tutti i documenti associati");
                    return of(errorHandling(error));
                })
            );

            return deletedFigure;
        })
    )

export default combineEpics(
    submitForm,
    deleteFigure
);