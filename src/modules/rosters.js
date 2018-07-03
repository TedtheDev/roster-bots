import FakeRoster from '../utils/fakeRoster';
import { addPlayers } from '../modules/players';

// types
const LOAD_ROASTERS = 'load_rosters';
const CREATING_ROSTER = 'creating_roster';
const CREATE_ROSTER_SUCCESS = 'create_roster_success';
const MAP_PLAYERS = 'map_players';

//reducer
export default function reducer (state={rosters:{}}, action) {
  let rosters;
  switch (action.type) {
    case LOAD_ROASTERS: 
      return {...state, rosters: []};
    case CREATING_ROSTER:
      rosters = state.rosters;
      rosters[action.rosterName] = { players: [] }
      return {...state, creatingRoster: true, rosters: rosters};
    case MAP_PLAYERS:
      rosters = state.rosters;
      rosters[action.rosterName].players = action.ids
      return { ...state, rosters: rosters}
    case CREATE_ROSTER_SUCCESS:
      return {...state, creatingRoster: false};
    default: 
      return state;
  }
}

// actions
export const createRoster = (rosterName) => {
  return (dispatch, getState) => {
    dispatch({type: CREATING_ROSTER, rosterName: rosterName});
    const randomPlayers = FakeRoster.generate(15);
    const ids = randomPlayers.map((player, index) => {
      return {id: player.id, sub: index > 9 ? true : false }
    });
    dispatch({type: MAP_PLAYERS, ids: ids, rosterName: rosterName})
    dispatch(addPlayers(randomPlayers));
    dispatch({type: CREATE_ROSTER_SUCCESS})
    console.log('state', getState())
  }
}