import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { contentReducer } from "./reducers/contentReducer";
import { rawCrystalDataReducer } from "./reducers/rawCrystalDataReducer";
import { rawCrystalDataForHomeReducer } from "./reducers/rawCrystalDataForHomeReducer";
import { portfolioContentReducer } from "./reducers/portfolioContentReducer";

export interface AppState {
  content: any;
  rawCrystalData: any;
  portfolioContent: any;
  rawCrystalDataForHome: any;
}

const rootReducer = combineReducers<AppState>({
  content: contentReducer,
  rawCrystalData: rawCrystalDataReducer,
  rawCrystalDataForHome: rawCrystalDataForHomeReducer,
  portfolioContent: portfolioContentReducer,
});

const initialState = {};

const middleware = [thunk];

const configureStore = () =>
  createStore(rootReducer, initialState, applyMiddleware(...middleware));

export default configureStore;
