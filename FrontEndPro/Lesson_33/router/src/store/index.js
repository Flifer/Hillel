import { applyMiddleware, createStore } from 'redux'
import rootReducer from "./reducers";
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk),
);

export default store;