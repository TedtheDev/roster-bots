//types
const CREATE_PLAYERS = 'create_players';
const UPDATE_PLAYER = 'update_player';
const UPDATE_PLAYER_ERROR = 'update_player_error';

//reducer
export default function reducer(state={players:[], duplicatePlayer: null}, action) {
    switch(action.type) {
        case CREATE_PLAYERS:
            let currentPlayers = state.players;
            const players = currentPlayers.concat(action.newPlayers);
            return {...state, players: players};
        case UPDATE_PLAYER:
            const newPlayers = state.players.map(player => {
                if(player.id === action.player.id) {
                    return action.player;
                }
                return player;
            });
            return { ...state, duplicatePlayer: null, players: newPlayers };
        case UPDATE_PLAYER_ERROR:
            return { ...state, duplicatePlayer: action.player}
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


const checkPlayersForDupilicate = (players, updatedPlayer) => {
    const duplicate = players.filter(player => {
        return player.firstName === updatedPlayer.firstName && 
        player.lastName === updatedPlayer.lastName;
    }).length > 0;
    return duplicate;
}

// TODO: maybe move the checkDuplicates at the reducer level and not action
export const updatePlayer = player => {
    return (dispatch, getState) => {
        const currentPlayers = getState().players.players;
        if(!checkPlayersForDupilicate(currentPlayers, player)) {
            dispatch({type: UPDATE_PLAYER, player: player})
        } else {
            dispatch({ type: UPDATE_PLAYER_ERROR, player: player})
        }
    }
}