import { SAVE_FETCH_CONTENT } from "./constants";

const initialState = [];

export const portfolioContentReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case SAVE_FETCH_CONTENT:
      return payload;
    default:
      return state;
  }
};
