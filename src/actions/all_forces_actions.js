import {FETCH_ALL_FORCES} from '../actions/types.js';


export const Fetch_All_Forces = ()  => dispatch => {
    fetch('https://data.police.uk/api/forces')
    .then(response => response.json())
    .then(function(data){
        localStorage.setItem('all_forces_data', JSON.stringify(data))
        return dispatch({
            type: FETCH_ALL_FORCES,
            payload: data
          })
        }
    )
}