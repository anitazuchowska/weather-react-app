import { combineReducers } from 'redux';
import WeatherREducer from './reducer_weather';

const rootReducer = combineReducers({
  weather: WeatherREducer
});

export default rootReducer;
