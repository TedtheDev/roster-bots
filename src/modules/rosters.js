import { generateRandomRoster } from './roster/players';

// types
const LOAD_ROASTERS = 'load_rosters';
const CREATING_ROSTER = 'creating_roster';
const CREATE_ROSTER_SUCCESS = 'create_roster_success';

//reducer
export default function reducer (state={}, action) {
  switch (action.type) {
    case LOAD_ROASTERS: 
      return {...state, rosters: []};
    case CREATING_ROSTER:
      return {...state, creatingRoster: true};
    case CREATE_ROSTER_SUCCESS:
      return {...state, creatingRoster: false};
    default: 
      return state;
  }
}

// actions
export const createRoster = () => {
  return (dispatch) => {
    dispatch({type: CREATING_ROSTER});
    dispatch(generateRandomRoster());
    dispatch({type: CREATE_ROSTER_SUCCESS})

  }
}