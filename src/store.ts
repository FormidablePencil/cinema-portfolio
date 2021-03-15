import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { contentReducer } from "./reducers/contentReducer";

const rootReducer = combineReducers({
  content: contentReducer,
});

const initialState = {};

const middleware = [thunk];

const configureStore = () =>
  createStore(rootReducer, initialState, applyMiddleware(...middleware));

export default configureStore;
