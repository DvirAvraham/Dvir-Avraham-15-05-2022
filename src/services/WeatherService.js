import axios from 'axios';
import {StorageService} from './StorageService';

export const WeatherService = {
  getWeather,
  getCities,
  getForcast,
};

const AUTO = [
  {
    Version: 1,
    Key: '226396',
    Type: 'City',
    Rank: 10,
    LocalizedName: 'Tokyo',
    Country: {
      ID: 'JP',
      LocalizedName: 'Japan',
    },
    AdministrativeArea: {
      ID: '13',
      LocalizedName: 'Tokyo',
    },
  },
  {
    Version: 1,
    Key: '106770',
    Type: 'City',
    Rank: 11,
    LocalizedName: 'Taiyuan',
    Country: {
      ID: 'CN',
      LocalizedName: 'China',
    },
    AdministrativeArea: {
      ID: 'SX',
      LocalizedName: 'Shanxi',
    },
  },
  {
    Version: 1,
    Key: '106780',
    Type: 'City',
    Rank: 11,
    LocalizedName: 'Tianjin',
    Country: {
      ID: 'CN',
      LocalizedName: 'China',
    },
    AdministrativeArea: {
      ID: 'TJ',
      LocalizedName: 'Tianjin',
    },
  },
  {
    Version: 1,
    Key: '58491',
    Type: 'City',
    Rank: 13,
    LocalizedName: 'Tongren',
    Country: {
      ID: 'CN',
      LocalizedName: 'China',
    },
    AdministrativeArea: {
      ID: 'GZ',
      LocalizedName: 'Guizhou',
    },
  },
  {
    Version: 1,
    Key: '102324',
    Type: 'City',
    Rank: 13,
    LocalizedName: 'Tangshan',
    Country: {
      ID: 'CN',
      LocalizedName: 'China',
    },
    AdministrativeArea: {
      ID: 'HE',
      LocalizedName: 'Hebei',
    },
  },
  {
    Version: 1,
    Key: '59573',
    Type: 'City',
    Rank: 13,
    LocalizedName: 'Taizhou',
    Country: {
      ID: 'CN',
      LocalizedName: 'China',
    },
    AdministrativeArea: {
      ID: 'JS',
      LocalizedName: 'Jiangsu',
    },
  },
  {
    Version: 1,
    Key: '60198',
    Type: 'City',
    Rank: 13,
    LocalizedName: 'Tongliao',
    Country: {
      ID: 'CN',
      LocalizedName: 'China',
    },
    AdministrativeArea: {
      ID: 'NM',
      LocalizedName: 'Inner Mongolia',
    },
  },
  {
    Version: 1,
    Key: '106571',
    Type: 'City',
    Rank: 13,
    LocalizedName: "Tai'an",
    Country: {
      ID: 'CN',
      LocalizedName: 'China',
    },
    AdministrativeArea: {
      ID: 'SD',
      LocalizedName: 'Shandong',
    },
  },
  {
    Version: 1,
    Key: '58055',
    Type: 'City',
    Rank: 15,
    LocalizedName: 'Tianshui',
    Country: {
      ID: 'CN',
      LocalizedName: 'China',
    },
    AdministrativeArea: {
      ID: 'GS',
      LocalizedName: 'Gansu',
    },
  },
  {
    Version: 1,
    Key: '2333653',
    Type: 'City',
    Rank: 15,
    LocalizedName: 'Taizhou',
    Country: {
      ID: 'CN',
      LocalizedName: 'China',
    },
    AdministrativeArea: {
      ID: 'ZJ',
      LocalizedName: 'Zhejiang',
    },
  },
];

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
  return AUTO;
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
  return;
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
