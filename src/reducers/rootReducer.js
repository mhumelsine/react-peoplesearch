import {combineReducers} from 'redux';
import people from './personReducer';
import ajax from './ajaxStatusReducer';

const rootReducer = combineReducers({
    people,
    ajax
});

export default rootReducer;