import FakeRoster from '../../utils/fakeRoster';

//types
const CREATE_PLAYERS = 'create_players';

//reducer
export default function reducer(state={players:[]}, action) {
    switch(action.type) {
        case CREATE_PLAYERS:
            return {...state, players: action.payload};
        default:
            return state;
    }
}

//actions
export const generateRandomRoster = () => {
    return (dispatch) => {
        const randomPlayers = FakeRoster.generate(15);
        dispatch({type: CREATE_PLAYERS, payload: randomPlayers});
    }
}