import {combineReducers} from 'redux';
import people from './personReducer';
import search from './searchReducer';
import ajax from './ajaxStatusReducer';

const rootReducer = combineReducers({
    people,
    search,
    ajax
});

export default rootReducer;