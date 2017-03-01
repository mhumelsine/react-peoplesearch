import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

function didAjaxEnd(type){
    return type.startsWith('END_AJAX');
}

export default function ajaxStatusReducer(state = initialState.numberOfAjaxCallsInProgress, action){
    if(action.type === actionTypes.BEGIN_AJAX_REQUEST){
        return state +1;
    }
    if(didAjaxEnd(action.type)){
        return state -1;
    }
    return state;
}