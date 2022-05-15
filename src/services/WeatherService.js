import axios from 'axios';
import {StorageService} from './StorageService';

export const WeatherService = {
  getWeather,
  getCities,
  getForcast,
};

const CITY_KEY = 'city_db';
const FAVORITE_KEY = 'favorite_db';

const API_KEY = 'RI3GPLBt4JfKAVscpkoI3ApnVQgyI2Z3';

async function getWeather(city) {
  let cityWeather = StorageService.loadFromStorage(CITY_KEY);
  const favorites = StorageService.loadFromStorage(FAVORITE_KEY);
  if (!cityWeather && !city) city = await _getGeoLocation();
  if (cityWeather && !city) return cityWeather;
  if (cityWeather?.LocalizedName === city?.LocalizedName) return;
  if (favorites) {
    const favorite = favorites.find((favorite) => favorite.Key === city.Key);
    if (city?.id)
      // "id" helps to figure out if its a remove from favorites update vs a 'search' city
      return city;
    else if (favorite) return favorite;
  }
  try {
    const res = await axios.get(
      `http://dataservice.accuweather.com/currentconditions/v1/${city.Key}?apikey=${API_KEY}`
    );
    cityWeather = res.data[0];
    cityWeather.LocalizedName = city.LocalizedName;
    cityWeather.Key = city.Key;
    cityWeather.id = _makeId();
    cityWeather.isFavorite = city.isFavorite || false;
    StorageService.saveToStorage(CITY_KEY, cityWeather);
    return cityWeather;
  } catch (err) {
    console.error(`Failed getting ${city?.LocalizedName} weather`, err);
  }
}

async function getCities(value) {
  try {
    const res = await axios.get(
      `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${value}`
    );
    return res.data;
  } catch (err) {
    console.error('Failed finding cities', err);
  }
}

async function getForcast(cityKey) {
  try {
    const res = await axios.get(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}`
    );
    return res.data.DailyForecasts;
  } catch (err) {
    console.error('Failed getting forcast', err);
  }
}

async function _getGeoLocation() {
  try {
    const position = await _getPosition();
    const res = await axios.get(
      `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${position.coords.latitude}%2C${position.coords.longitude}`
    );
    return res.data;
  } catch (err) {
    console.error('Failed getting your location', err);
  }
}

function _getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

function _makeId(length = 8) {
  var txt = '';
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}
