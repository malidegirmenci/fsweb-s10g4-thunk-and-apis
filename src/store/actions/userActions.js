import axios from "axios";
export const GET_FAVS_FROM_LS = "GET_FAVS_FROM_LS";
export const FAV_ADD = "FAV_ADD";
export const FAV_REMOVE = "FAV_REMOVE";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_LOADING = "FETCH_LOADING";
export const FETCH_ERROR = "FETCH_ERROR";

export const getFavsFromLocalStorage = () => {
  return { type: GET_FAVS_FROM_LS }
}

export const addFav = (info) => {
  return { type: FAV_ADD, payload: info }
}

export const removeFav = (id) => {
  return { type: FAV_REMOVE, payload: id }
}
const favGames = ["Valorant", "CS GO", "DOTA", "LOL", "RDR Online", "Apex", "TFT", "Starcraft", "Naraka"]

export const fetchAnother = () => (dispatch) => {
  console.log("fetchAnother started");
  dispatch(fetchLoading());
  axios
    .get("https://randomuser.me/api/1.4/")
    .then((response) => {
      console.log("response:",response)
      const fetchedData = response.data.results[0];
      const randomFavGame = Math.floor(Math.random() * favGames.length);
      const data = {...fetchedData, favGame: favGames[randomFavGame]}
      setTimeout(() => {dispatch(fetchSuccess(data));},500)
    })
    .catch((error) => {
      console.log(error);
      dispatch(fetchError(error));
    })
}

export const fetchLoading = () => {
  return { type: FETCH_LOADING }
}
export const fetchError = (message) => {
  return { type: FETCH_ERROR, payload: message }
}
export const fetchSuccess = (data) => {
  return { type: FETCH_SUCCESS, payload: data }
}
