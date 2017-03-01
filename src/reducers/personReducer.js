import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function personReducer(state = initialState.people, action){
    //try to lookup the function with the matching key
    let invoker = actions[action.type];

    //if found invoke the function and pass action as arg
    if(invoker){
        return invoker(action);
    }
    //default case; no matching function found
    return state;
}

const actions = {    
    "LOAD_PEOPLE_SUCCESS":action => action.people
};