import { combineReducers } from 'redux';
import { getBeers, beersReducer } from './search';
import { login, userReducer } from './user';
import { getBeer, beerReducer } from './beer';
import { getMenu, menuReducer } from './menuRecognition';

// commented out until we have reducers

const rootReducer = combineReducers({
    searchBeers: beersReducer,
    user: userReducer,
    searchBeer: beerReducer,
    menuBeers: menuReducer,
});

export { rootReducer, getMenu };
