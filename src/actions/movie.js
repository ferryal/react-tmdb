import axios from 'axios';
import config from '../config';
import { LISTMOVIE, MOVIEDETAIL } from './ActionTypes';

function loading() {
  return {
    type: LISTMOVIE.LOADING,
  };
}

function fetchSuccess(data) {
  return {
    type: LISTMOVIE.FETCH_SUCCESS,
    payload: { data },
  };
}

function fetchFailed() {
  return {
    type: LISTMOVIE.FETCH_FAILED,
  };
}

function fetchSuccessDetail(data) {
  return {
    type: MOVIEDETAIL.FETCH_DETAIL_SUCCESS,
    payload: { data },
  };
}

function fetchFailedDetail() {
  return {
    type: MOVIEDETAIL.FETCH_DETAIL_FAILED,
  };
}

export function resetMovies() {
  return {
    type: LISTMOVIE.RESET_MOVIES,
  };
}

export function fetchListMovie(page) {
  return (dispatch) => {
    dispatch(loading());
    axios.get(`${config.apiUrl}/movie/top_rated?api_key=${config.key}&page=${page}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      if (res.status === 200) {
        const response = res.data;
        dispatch(fetchSuccess(response));
      } else {
        dispatch(fetchFailed());
      }
    }).catch(() => {
      dispatch(fetchFailed());
    });
  };
}

export function fetchMovieDetail(id) {
  return (dispatch) => {
    axios.get(`${config.apiUrl}/movie/${id}?api_key=${config.key}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      if (res.status === 200) {
        const response = res.data;
        dispatch(fetchSuccessDetail(response));
      } else {
        dispatch(fetchFailedDetail());
      }
    }).catch(() => {
      dispatch(fetchFailedDetail());
    });
  };
}

export function fetchSearchMovie(query, page) {
  return (dispatch) => {
    axios.get(`${config.apiUrl}/search/movie?api_key=${config.key}&query=${query}&page=${page}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      if (res.status === 200) {
        const response = res.data;
        dispatch(fetchSuccess(response));
      } else {
        dispatch(fetchFailed());
      }
    }).catch(() => {
      dispatch(fetchFailed());
    });
  };
}
