import { combineReducers } from 'redux';
import { getBeers, beersReducer } from './search';
import { login, userReducer, localLogin, localCreate, logout } from './user';
import { getBeer, beerReducer } from './beer';
import { getMenu, menuReducer } from './menuRecognition';
import { discoverBeers, discoverReducer } from './discover';
import { beerListRatingReducer, getBeerListRating } from './beerListRating';
import {
    userBeerRatingsReducer,
    getUserBeerRatings,
    rateBeer,
} from './userBeerRatings';

const rootReducer = combineReducers({
    searchBeers: beersReducer,
    discoveredBeers: discoverReducer,
    user: userReducer,
    singleBeer: beerReducer,
    menuBeers: menuReducer,
    beerListRating: beerListRatingReducer,
    userBeerRatings: userBeerRatingsReducer,
});

export {
    rootReducer,
    getMenu,
    discoverBeers,
    getBeerListRating,
    getUserBeerRatings,
    localLogin,
    localCreate,
    login,
    logout,
    rateBeer,
    getBeer,
};
