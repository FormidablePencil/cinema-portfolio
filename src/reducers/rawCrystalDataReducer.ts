import { FETCHED_PARALLAX_CRYSTAL_DATA } from "./constants";

const initialState = null;

export const rawCrystalDataReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case FETCHED_PARALLAX_CRYSTAL_DATA:
      return payload;
    default:
      return state;
  }
};
