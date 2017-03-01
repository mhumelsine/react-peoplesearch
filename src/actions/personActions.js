import personApi from '../api/personApi';
import * as ajax from './ajaxStatusActions';
import * as actionTypes from './actionTypes';

export function loadPeopleSuccess(people){
    return {type:actionTypes.LOAD_PEOPLE_SUCCESS, people};
}

export function loadPeople(){
    return function (dispatch){
        dispatch(ajax.beginAjaxRequest());//sets state to ajax request in progress
        return personApi.getAll()
            .then(people => {
                dispatch(loadPeopleSuccess(people));
            })
            .catch(error => {
                throw(error);
            });
    };
}