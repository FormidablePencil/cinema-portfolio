import { FETCHED_PARALLAX_CRYSTAL_DATA_FOR_HOME } from "./constants";

const initialState = null;

export const rawCrystalDataForHomeReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case FETCHED_PARALLAX_CRYSTAL_DATA_FOR_HOME:
      return payload;
    default:
      return state;
  }
};
