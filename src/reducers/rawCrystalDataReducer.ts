import { FETCHED_PARALLAX_CRYSTAL_DATA } from "./constants";

const initialState = [];

export const rawCrystalDataReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case FETCHED_PARALLAX_CRYSTAL_DATA:
      console.log(payload);
      return payload;
    default:
      return state;
  }
};
