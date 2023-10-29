import {
  FAV_ADD,
  FAV_REMOVE,
  FETCH_SUCCESS,
  FETCH_LOADING,
  FETCH_ERROR,
  GET_FAVS_FROM_LS,
} from "../actions/userActions";

const initial = {
  favs: [],
  current: null,
  error: null,
  loading: true,
};
const LSKey = "FAVS"
function writeFavsToLocalStorage(state) {
  localStorage.setItem(LSKey, JSON.stringify(state));
}

function readFavsFromLocalStorage() {
  return JSON.parse(localStorage.getItem(LSKey));
}
function getDataFromLS() {
  if(readFavsFromLocalStorage){
    return readFavsFromLocalStorage();
  }else {
    return initial;
  }
}
export function myReducer(state = getDataFromLS(), action) {
  switch (action.type) {
    case FAV_ADD:
      const isFounded = state.favs.find(favUser => favUser.id.value === action.payload.id.value);
      const newFavsList = { ...state, favs: [action.payload, ...state.favs] };
      writeFavsToLocalStorage(isFounded ? {...state} : newFavsList)
      return isFounded ? {...state} : newFavsList

    case FAV_REMOVE:
      const remainingFavList = state.favs.filter((fav) => fav.id.value !== action.payload);
      const newState = { ...state, favs: remainingFavList }
      writeFavsToLocalStorage(newState)
      return newState;

    case FETCH_SUCCESS:
      return { ...state, loading: false, current: action.payload };

    case FETCH_LOADING:
      return { ...state, loading: true, error: null };

    case FETCH_ERROR:
      return { ...state, loading: false, error: action.payload };

    case GET_FAVS_FROM_LS:
      return { ...state, };

    default:
      return { ...state, };
  }
}
