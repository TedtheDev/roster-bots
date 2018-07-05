import FakeRoster from '../utils/fakeRoster';
import { addPlayers } from '../modules/players';

// types
export const LOAD_ROASTERS = 'load_rosters';
export const CREATING_ROSTER = 'creating_roster';
export const CREATE_ROSTER_SUCCESS = 'create_roster_success';
export const MAP_PLAYERS = 'map_players';
export const CREATE_ROSTER_ERROR = 'create_roster_error'

//reducer
export default function reducer (state={rosters:{}, errorMessage:'', creatingRoster:false}, action) {
  let rosters;
  switch (action.type) {
    case LOAD_ROASTERS:
      //load in exisint rosters on refresh
      rosters = {};
      return { ...state, rosters: rosters };
    case CREATING_ROSTER:
      rosters = state.rosters;
      rosters[action.rosterName] = { players: [] }
      return { ...state, creatingRoster: true, rosters: rosters };
    case MAP_PLAYERS:
      rosters = state.rosters;
      rosters[action.rosterName].players = action.ids
      return { ...state, rosters: rosters}
    case CREATE_ROSTER_SUCCESS:
      return {...state, creatingRoster: false};
    case CREATE_ROSTER_ERROR:
      return {...state, creatingRoster: false, errorMessage: action.errorMessage};
    default: 
      return state;
  }
}

// actions
export const createRoster = (rosterName) => {
  return (dispatch, getState) => {
    const totalRosters = Object.keys(getState().rosters.rosters).length;
    if(totalRosters < 6) {
      if(getState().rosters.rosters[rosterName] === undefined) {
        dispatch({type: CREATING_ROSTER, rosterName: rosterName});
        const currentPlayers = JSON.parse(JSON.stringify(getState().players.players));
        const randomPlayers = FakeRoster.generateUnique(15, currentPlayers);
        const ids = randomPlayers.map((player, index) => {
          return {id: player.id, sub: index > 9 ? true : false }
        });
        dispatch({type: MAP_PLAYERS, ids: ids, rosterName: rosterName})
        dispatch(addPlayers(randomPlayers));
        dispatch({type: CREATE_ROSTER_SUCCESS})
        
      } else {
        dispatch({type: CREATE_ROSTER_ERROR, errorMessage: 'Roster already exists'});
      }
    } else {
      dispatch({type: CREATE_ROSTER_ERROR, errorMessage: 'Maximum Amount of Rosters Created'});
    }
  }
}