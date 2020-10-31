import { ofType, combineEpics } from 'redux-observable';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';

//Components
import { errorHandling } from '../../../../../utils/Errors/index';

//Success functions
import { categoriesSuccess } from '../actions/categories';
import { currentDataSuccess } from '../actions/currentData';

//Actions
import {
    ARCHIVE_MANAGEMENT_GET_CATEGORIES,
    ARCHIVE_MANAGEMENT_GET_CURRENT_PROFESSIONAL_FIGURES
} from '../actions/actionTypes';

const categories = (action$, state$) =>
    action$.pipe(
        ofType(ARCHIVE_MANAGEMENT_GET_CATEGORIES),
        mergeMap(action => {
            const apiUrl = `${ state$.value.apiUrl.services }/registry/category/`;

            const categoryList = ajax
                .getJSON(
                    apiUrl,
                    { 'Authorization': 'Bearer ' + action.token }
                )
                .pipe(
                    map(data => {
                        const parsedData = data.map(category => {
                            return {
                                key: category.id,
                                label: category.name,
                                value: category.id
                            };
                        });

                        return categoriesSuccess(parsedData);
                    }),
                    catchError(error => of(errorHandling(error)))
                );

            return categoryList;
        })
    );


const currentData = (action$, state$) =>
    action$.pipe(
        ofType(ARCHIVE_MANAGEMENT_GET_CURRENT_PROFESSIONAL_FIGURES),
        mergeMap(action => {
            const apiUrl = `${ state$.value.apiUrl.services }/registry/professional-figure/`;

            const professionalFiguresList = ajax
                .getJSON(
                    apiUrl,
                    { 'Authorization': 'Bearer ' + action.token }
                )
                .pipe(
                    map(data => {
                        const parsedData = data.map(professionalFigure => {
                            return {
                                key: professionalFigure.id,
                                ...professionalFigure
                            };
                        });

                        return currentDataSuccess(parsedData);
                    }),
                    catchError(error => of(errorHandling(error)))
                );

            return professionalFiguresList;
        })
    );

export default combineEpics(
    categories,
    currentData
);