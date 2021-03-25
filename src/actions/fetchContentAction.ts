import {
  FETCHED_PARALLAX_CRYSTAL_DATA,
  FETCHED_PARALLAX_CRYSTAL_DATA_FOR_HOME,
  SAVE_FETCH_CONTENT,
} from "../reducers/constants";

const fetchContentAction = () => async (dispatch) => {
  const payloadFetch = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const resContentData = await fetch(
    `${process.env.REACT_APP_FETCH_USERS_CONTENT_URL}`,
    payloadFetch
  );
  interface contentDataT {
    data: { cmsPortfolioContent; rawCrystalData; rawCrystalDataForHome };
  }
  const contentData: contentDataT = await resContentData.json(); //update content state

  if (resContentData.status === 200) {
    dispatch({
      type: SAVE_FETCH_CONTENT,
      payload: contentData.data.cmsPortfolioContent,
    });
    dispatch({
      type: FETCHED_PARALLAX_CRYSTAL_DATA,
      payload: contentData.data.rawCrystalData,
    });
    dispatch({
      type: FETCHED_PARALLAX_CRYSTAL_DATA_FOR_HOME,
      payload: contentData.data.rawCrystalDataForHome,
    });
  }
};

export default fetchContentAction;
