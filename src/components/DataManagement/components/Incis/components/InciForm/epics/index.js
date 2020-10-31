import { ofType, combineEpics } from 'redux-observable';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';

//Components
import { errorHandling } from '../../../../../../../utils/Errors/index';

//Success functions
import { formSubmitSuccess } from '../actions/formSubmit';
import { toast } from 'react-toastify';

//Actions
import {
    DATA_MANAGE_INCI_INSERT_FORM_SUBMIT
} from '../actions/actionTypes.js';

const submitForm = (action$, state$) => 
    action$.pipe(
        ofType(DATA_MANAGE_INCI_INSERT_FORM_SUBMIT),
        mergeMap(action => {

            const apiUrl = `${ state$.value.apiUrl.services }/category/${ action.formData.category }/inci/`;

            const addedInci = ajax
                .post(apiUrl, {
                    id: action.formData.id,
                    name: action.formData.inciName,
                    fc: action.formData.FCvalue,
                    bibliography: action.formData.bibliography,
                    info: action.formData.info,
                    sensitizing: action.formData.sentiser,
                    otherDiscussions: action.formData.otherInfo,
                    commonDenomination: action.formData.inciCommonName
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

            return addedInci;
        })
    );

export default combineEpics(
    submitForm
);