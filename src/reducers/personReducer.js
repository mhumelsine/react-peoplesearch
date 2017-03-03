import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function personReducer(state = initialState.people, action) {
    switch (action.type) {
        case actionTypes.LOAD_PEOPLE_SUCCESS:
            return action.people;
        case actionTypes.ADD_PERSON_SUCCESS:
            return [...state, Object.assign({}, action.person)];
        case actionTypes.UPDATE_PERSON_SUCCESS:
            return [...state.filter(x => x.id != action.person.id), Object.assign({}, action.person)];
        default:
            return state;
    }
}