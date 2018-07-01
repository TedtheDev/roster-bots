import { createStore, applyMiddleware } from 'redux';
import {combineReducers} from 'redux';
import thunk from 'redux-thunk';

import rosters from './modules/rosters';
import players from './modules/roster/players';

const rootReducer = combineReducers({
    rosters: rosters,
    roster: combineReducers({
        players: players   
    })
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;