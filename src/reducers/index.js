import { combineReducers } from 'redux';
import { getBeers, beersReducer } from './search';
import { login, userReducer } from './user';

// commented out until we have reducers

const rootReducer = combineReducers({
  searchBeers: beersReducer,
  searchUsers: userReducer
});

export { rootReducer };
