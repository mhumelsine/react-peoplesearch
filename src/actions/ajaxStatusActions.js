import * as actionTypes from './actionTypes';

export function beginAjaxRequest(){
    return {type:actionTypes.BEGIN_AJAX_REQUEST};
}
export function ajaxRequestError(){
    return {type:actionTypes.END_AJAX_ERROR};
}
export function ajaxRequestSuccess(){
    return {type:actionTypes.END_AJAX_SUCCESS};
}