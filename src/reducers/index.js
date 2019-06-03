import { combineReducers } from 'redux';
import { getBeers, beersReducer } from './search';
import { login, userReducer } from './user';
import { getBeer, beerReducer } from './beer';

// commented out until we have reducers

const rootReducer = combineReducers({
    searchBeers: beersReducer,
    searchUsers: userReducer,
    searchBeer: beerReducer,
});

export { rootReducer };
