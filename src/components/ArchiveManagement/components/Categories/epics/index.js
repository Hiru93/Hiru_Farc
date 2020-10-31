import { ofType, combineEpics } from 'redux-observable';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';

//Components
import { errorHandling } from '../../../../../utils/Errors/index';

//Success functions
import { professionalFiguresSuccess } from '../actions/professionalFigures';
import { currentDataSuccess } from '../actions/currentData';

//Actions
import {
    ARCHIVE_MANAGEMENT_GET_PROFESSIONAL_FIGURES,
    ARCHIVE_MANAGEMENT_GET_CURRENT_CATEGORIES_DATA
} from '../actions/actionTypes';

const professionalFigures = (action$, state$) =>
    action$.pipe(
        ofType(ARCHIVE_MANAGEMENT_GET_PROFESSIONAL_FIGURES),
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
                                label: professionalFigure.name,
                                value: professionalFigure.id,
                                description: professionalFigure.description
                            };
                        });

                        return professionalFiguresSuccess(parsedData);
                    }),
                    catchError(error => of(errorHandling(error)))
                );

            return professionalFiguresList;
        })
    );

const currentData = (action$, state$) =>
    action$.pipe(
        ofType(ARCHIVE_MANAGEMENT_GET_CURRENT_CATEGORIES_DATA),
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
                                ...category
                            }
                        });
                        return currentDataSuccess(parsedData);
                    }),
                    catchError(error => of(errorHandling(error)))
                );

            return categoryList;
        })
    )

export default combineEpics(
    professionalFigures,
    currentData
);