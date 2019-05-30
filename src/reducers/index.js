import { combineReducers } from 'redux';
import { getBeers, beersReducer } from './search';

// commented out until we have reducers

const rootReducer = combineReducers({
  searchBeers: beersReducer,
});

export { rootReducer, getBeers };
