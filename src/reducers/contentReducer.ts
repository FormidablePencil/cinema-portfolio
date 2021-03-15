import { FETCHED_CONTENT } from "./types";

const initialState = [];

export const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHED_CONTENT:
      return state;
    default:
      return state;
  }
};
