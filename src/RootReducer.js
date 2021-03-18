import { combineReducers } from 'redux';
import { reducer as listMovie } from './reducer/listMovie';
import { reducer as detailMovie } from './reducer/detailMovie';

export default combineReducers({
  listMovie,
  detailMovie,
});
