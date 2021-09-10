import { combineReducers } from 'redux';

import weather from './weather';
import fullWeather from './fullWeather';
import geo from './geo';
import city from './city';
import error from './error';
import currentDay from './currentDay';

export default combineReducers({
    weather,
    fullWeather,
    geo,
    city,
    error,
    currentDay

});