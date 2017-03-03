import personApi from '../api/personApi';
import * as ajax from './ajaxStatusActions';
import * as actionTypes from './actionTypes';

export function loadPeopleSuccess(people) {
    return { type: actionTypes.LOAD_PEOPLE_SUCCESS, people };
}

export function addPersonSuccess(person) {
    return { type: actionTypes.ADD_PERSON_SUCCESS, person };
}

export function updatePersonSuccess(person) {
    return { type: actionTypes.UPDATE_PERSON_SUCCESS, person };
}

export function loadPeople(search) {
    return function (dispatch) {
        dispatch(ajax.beginAjaxRequest());//sets state to ajax request in progress
        return personApi.getAll(search)
            .then(response => {
                dispatch(loadPeopleSuccess(response.data));
            })
            .catch(error => {
                debugger;
                throw (error);
            });
    };
}

export function savePerson(person) {
    return function (dispatch) {
        dispatch(ajax.beginAjaxRequest());
        return personApi.save(person)
            .then(response => {
                person.id ? dispatch(updatePersonSuccess(person))
                    : dispatch(addPersonSuccess(person));
            })
            .catch(error => {
                throw (error);
            });
    };
}