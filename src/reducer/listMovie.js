import { LISTMOVIE } from '../actions/ActionTypes';

const initialState = {
  loading: false,
  movies: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
  case LISTMOVIE.LOADING:
    return {
      ...state,
      loading: true,
    };
  case LISTMOVIE.FETCH_SUCCESS:
    return {
      ...state,
      loading: false,
      movies: action.payload.data.results,
    };
  case LISTMOVIE.FETCH_FAILED:
    return {
      ...state,
      loading: false,
    };
  case LISTMOVIE.RESET_MOVIES:
    return {
      ...state,
      movies: state.movies,
    };
  default:
    return state;
  }
};
