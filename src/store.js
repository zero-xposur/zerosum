import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import { rootReducer } from './reducers';

// commented out until we have reducers

// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunkMiddleware, loggerMiddleware)
// );

// export default store;
