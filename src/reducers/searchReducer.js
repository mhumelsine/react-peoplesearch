import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function personReducer(state = initialState.search, action) {
    switch (action.type) {
        case actionTypes.STORE_PERSON_SEARCH:
            return Object.assign({},action.search);
        default:
            return state;
    }
}