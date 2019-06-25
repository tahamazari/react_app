import {combineReducers} from 'redux';
import All_Forces_Reducer from './All_Forces_Reducer.js';

export default combineReducers({
    all_forces: All_Forces_Reducer
})