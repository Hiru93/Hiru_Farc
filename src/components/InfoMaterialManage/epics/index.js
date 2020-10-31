import { ofType, combineEpics } from 'redux-observable';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
import { errorHandling } from '../../../utils/Errors/index';

import {
    INFO_MATERIAL_MANAGE_GET_DOCS,
    INFO_MATERIAL_MANAGE_GET_CATEGORIES,
    INFO_MATERIAL_MANAGE_DELETE_DOCUMENT
} from '../actions/actionTypes';

import { getDocsSuccess } from '../actions/getDocs';
import { getCatsSuccess } from '../actions/getCats';
import { deleteRowSuccess } from '../actions/deleteRow';

const getDocs = (action$, state$) =>
    action$.pipe(
        ofType(INFO_MATERIAL_MANAGE_GET_DOCS),
        mergeMap(action => {
            const apiUrl = `${ state$.value.apiUrl.services }/document/?categoryId=${ action.categoryId ? action.categoryId : '' }&profFigureIds=${ action.profFigureIds ? action.profFigureIds : '' }`;

            const docList = ajax
                .getJSON(apiUrl, { 'Authorization': 'Bearer ' + action.token })
                .pipe(
                    map(data => {
                        const parsedData = data.map((el, index) => {
                            return {
                                key: index,
                                ...el
                            }
                        })
                        return getDocsSuccess(parsedData);
                    }),
                    catchError(error => of(errorHandling(error)))
                );

            return docList;
        })
    );

const getCats = (action$, state$) =>
    action$.pipe(
        ofType(INFO_MATERIAL_MANAGE_GET_CATEGORIES),
        mergeMap(action => {
            const apiUrl = `${ state$.value.apiUrl.services }/registry/professional-figure/`;

            const list = ajax
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
                        }).map(category => {
                            return category.relatedCats.map(cat => { 
                                return {
                                    label: cat.label,
                                    value: cat.value,
                                    description: cat.description
                            }});
                        }).flat().filter(function(elem, index, self) {
                            return index === self.map(el => el.value).indexOf(elem.value, 0);
                        });

                        return getCatsSuccess(parsedData);
                    }),
                    catchError(error => of(errorHandling(error)))
                );

            return list;
        })
    );

const deleteRow = (action$, state$) =>
    action$.pipe(
        ofType(INFO_MATERIAL_MANAGE_DELETE_DOCUMENT),
        mergeMap(action => {
            const apiUrl = `${ state$.value.apiUrl.services }/document/${ action.document.id }`;

            const deletedDoc = ajax({
                url: apiUrl,
                method: 'DELETE',
                headers: { 'Authorization': 'Bearer ' + action.token }
            })
            .pipe(
                map(() => {
                    return deleteRowSuccess(action.token);
                }),
                catchError( error => of(errorHandling(error.message)) )
            );

            return deletedDoc;
        })
    )

export default combineEpics(
    getDocs,
    getCats,
    deleteRow
);