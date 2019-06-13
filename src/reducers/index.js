import { combineReducers } from 'redux';
import { getBeers, beersReducer } from './search';
import { login, userReducer } from './user';
import { getBeer, beerReducer } from './beer';
import { getMenu, menuReducer } from './menuRecognition';
import { discoverBeers, discoverReducer } from './discover';

const rootReducer = combineReducers({
    searchBeers: beersReducer,
    discoveredBeers: discoverReducer,
    user: userReducer,
    searchBeer: beerReducer,
    menuBeers: menuReducer,
});

export { rootReducer, getMenu, discoverBeers };
