import { FETCHED_PARALLAX_CRYSTAL_DATA } from "./constants";
import { crystalParallaxDefault } from "parallax-effect-crystals";

const initialState = crystalParallaxDefault;

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
