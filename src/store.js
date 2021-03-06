import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

import rosters from './modules/rosters';
import players from './modules/players';

const rootReducer = combineReducers({
    rosters: rosters,
    players: players
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;