import { FETCHED_CONTENT } from "./constants";

const initialState = [];

export const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHED_CONTENT:
      return state;
    default:
      return state;
  }
};
