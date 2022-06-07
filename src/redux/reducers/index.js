import {combineReducers} from 'redux';
import starWarsData from './starwars-ops';

export default combineReducers({
  startwar: starWarsData
});