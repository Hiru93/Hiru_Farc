import { ofType } from 'redux-observable';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
import { errorHandling } from '../../../utils/Errors/index';

import {
    DATA_MANAGE_GET_CATEGORIES
} from '../actions/actionTypes';

import { categoriesSuccess } from '../actions/categories';

const getCategories = (action$, state$) => 
    action$.pipe(
        ofType(DATA_MANAGE_GET_CATEGORIES),
        mergeMap(action => {
            const apiUrl = `${ state$.value.apiUrl.services }/category/`;

            const categories = ajax
                .getJSON(apiUrl, { 'Authorization': 'Bearer ' + action.token })
                .pipe(
                    map(data => {
                        const categories = [...data.map((x, index) => {
                            return {
                                key: index,
                                ...x
                            };
                        })].sort((a, b) => a.id - b.id);
                        const incis = [...data.map(x => {
                            return x.inci.map(y => {
                                return {
                                    key: y.id,
                                    category: x.name,
                                    categoryId: x.id,
                                    ...y
                                };
                            });
                        })].flat().sort((a, b) => a.categoryId - b.categoryId);
                        const categoryList = [...data.map((x, index) => {
                            return {
                                key: index,
                                label: x.name,
                                value: x.id
                            }
                        })].sort((a, b) => a.value - b.value);
                        return categoriesSuccess(categories, incis, categoryList);
                    }),
                    catchError(error => of(errorHandling(error)))
                );

            return categories;
        })
    );

export default getCategories;