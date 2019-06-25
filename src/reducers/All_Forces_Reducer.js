import {FETCH_ALL_FORCES} from '../actions/types.js';

const initialState = {
    all_forces_data: []
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_ALL_FORCES: 
            return {
                ...state,
                all_forces_data: action.payload
            }
            break
        default: 
            return state
    }
}