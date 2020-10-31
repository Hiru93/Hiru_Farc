import { ofType, combineEpics } from 'redux-observable';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';

//Components
import { errorHandling } from '../../../utils/Errors/index';
import { toast } from 'react-toastify';

//Success functions
import { getInitialDataSuccess } from '../actions/initialData';
import { submitFormSuccess } from '../actions/submitForm';

//Actions
import {
    UPLOAD_MATERIALS_GET_INITIAL_DATA,
    UPLOAD_MATERIALS_SUBMIT_FORM
} from '../actions/actionTypes';

const initialData = (action$, state$) => 
    action$.pipe(
        ofType(UPLOAD_MATERIALS_GET_INITIAL_DATA),
        mergeMap(action => {
            const apiUrl = `${ state$.value.apiUrl.services }/registry/professional-figure/`;

            const categoryList = ajax
                .getJSON(apiUrl, { 'Authorization': 'Bearer ' + action.token })
                .pipe(
                    map(data => {
                        const parsedData = data.map((pro, index) => {
                            return {
                                key: index,
                                label: pro.name,
                                value: pro.id,
                                description: pro.description,
                                relatedCats: pro.categories.map((cat, index) => {
                                    return {
                                        key: pro.name + '-' + index,
                                        label: cat.name,
                                        value: cat.id,
                                        description: cat.description
                                    };
                                })
                            };
                        });

                        return getInitialDataSuccess(parsedData);
                    }),
                    catchError(error => of(errorHandling(error)))
                );

            return categoryList;
        })
    );

const formSubmit = (action$, state$) =>
    action$.pipe(
        ofType(UPLOAD_MATERIALS_SUBMIT_FORM),
        mergeMap(action => {
            const apiUrl = `${ state$.value.apiUrl.services }/document/`;

            /** Creo un nuovo formData */
            const body = new FormData();
            body.append('document', action.formData.pdf);
            body.append('cover', action.formData.img);
            body.append('title', action.formData.title);
            body.append('description', action.formData.description);
            body.append('categoryId', action.formData.selectedCat);
            body.append('profFigureIds', JSON.stringify(action.formData.selectedProfession));
            /**  */


            /** 
             * Per l'amor del cristo, non azzardatevi MAI ad inserire il Content-type dentro una richiesta ajax
             * che sta stronzata mi è valsa 3 giorni di lavoro e dei tremori da stress allucinanti
            */
            const uploadedDoc = ajax({
                url: apiUrl,
                method: 'PUT',
                headers: {
                    'Authorization': 'Bearer ' + action.token
                },
                body: body
            })
            .pipe(
                map(() => {
                    toast.success("Informazioni salvate con successo");
                    return submitFormSuccess();
                }),
                catchError(error => of(errorHandling(error)))
            );

            return uploadedDoc;
        })
    )

export default combineEpics(
    initialData,
    formSubmit
);