import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rawCrystalDataReducer } from "./reducers/rawCrystalDataReducer";
import { rawCrystalDataForHomeReducer } from "./reducers/rawCrystalDataForHomeReducer";
import { portfolioContentReducer } from "./reducers/portfolioContentReducer";
import { crystalParallaxT } from "parallax-effect-crystals";
import { portfolioContentT } from "cinema-portfolio-proj-types";

export interface AppState {
  portfolioContent: portfolioContentT;
  rawCrystalData: crystalParallaxT;
  rawCrystalDataForHome: crystalParallaxT;
}

const rootReducer = combineReducers({
  rawCrystalData: rawCrystalDataReducer,
  rawCrystalDataForHome: rawCrystalDataForHomeReducer,
  portfolioContent: portfolioContentReducer,
});

const initialState = {};

const middleware = [thunk];

const configureStore = () =>
  createStore(rootReducer, initialState, applyMiddleware(...middleware));

export default configureStore;
