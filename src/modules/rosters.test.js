import rostersReducer from './rosters';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { CREATING_ROSTER, MAP_PLAYERS, CREATE_ROSTER_SUCCESS } from './rosters';

import { createRoster } from './rosters';

const mockStore = configureMockStore([thunk]);

describe('Rosters Reducer', () => {
    describe('reducer', () => {
        it('should return initial state', () => {
            expect(rostersReducer(undefined, {})).toEqual({
                rosters:{}, 
                errorMessage:'', 
                creatingRoster:false
            });
        });
    });
    

    //TODO: make a mock for fakeRoster to handle 15 players
    describe('actions', () => {

        xit('should create a roster with a roster name', () => {
            const store = mockStore({
                rosters:{rosters:{}, errorMessage: '',creatingRoster:false},
                players: {players:[], duplicatePlayer: null}
            });

            const expectedActions = [
                {type: CREATING_ROSTER, rosterName: 'Team1'},
                {type: CREATE_ROSTER_SUCCESS}
            ];

            store.dispatch(createRoster('Team1'))
                expect(store.getActions()).toEqual(expectedActions);
        })
    });
});