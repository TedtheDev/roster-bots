import playersReducer from './players';

import { updatePlayer, addPlayers } from './rosters';

describe('Players Module', () => {
    describe('reducer', () => {
        it('should return initial state', () => {
            expect(playersReducer(undefined, {})).toEqual({
                players:[], 
                duplicatePlayer: null
            });
        });
    })

    describe('actions', () => {

    });
});

