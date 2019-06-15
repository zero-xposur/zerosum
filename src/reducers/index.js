import { combineReducers } from 'redux';
import { getBeers, beersReducer } from './search';
import { login, userReducer, localLogin, localCreate } from './user';
import { getBeer, beerReducer } from './beer';
import { getMenu, menuReducer } from './menuRecognition';
import { discoverBeers, discoverReducer } from './discover';
import { beerListRatingReducer, getBeerListRating } from './beerListRating';

const rootReducer = combineReducers({
    searchBeers: beersReducer,
    discoveredBeers: discoverReducer,
    user: userReducer,
    singleBeer: beerReducer,
    menuBeers: menuReducer,
    beerListRating: beerListRatingReducer,
});

export {
    rootReducer,
    getMenu,
    discoverBeers,
    localLogin,
    localCreate,
    login,
    getBeerListRating,
};
