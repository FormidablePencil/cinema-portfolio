import { SAVE_FETCH_CONTENT } from "./constants";
import { portfolioContentDefaultData } from "cinema-portfolio-proj-types";

const initialState = portfolioContentDefaultData;

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
