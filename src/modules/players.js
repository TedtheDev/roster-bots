//types
const CREATE_PLAYERS = 'create_players';

//reducer
export default function reducer(state={players:[]}, action) {
    switch(action.type) {
        case CREATE_PLAYERS:
            let currentPlayers = state.players;
            const players = currentPlayers.concat(action.newPlayers);
            return {...state, players: players};
        default:
            return state;
    }
}

//actions
export const addPlayers = (players) => {
    return (dispatch) => {
        dispatch({type: CREATE_PLAYERS, newPlayers: players});
    }
}