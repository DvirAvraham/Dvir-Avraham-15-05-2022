import {StorageService} from './StorageService';

export const FavoriteService = {
  loadFavorites,
  removeCity,
  addCity,
};

const CURR_WEATHER = [
  {
    LocalObservationDateTime: '2022-05-09T16:13:00+03:00',
    EpochTime: 1652101980,
    WeatherText: 'Sunny',
    WeatherIcon: 1,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: true,
    Temperature: {
      Metric: {
        Value: 28.2,
        Unit: 'C',
        UnitType: 17,
      },
      Imperial: {
        Value: 83,
        Unit: 'F',
        UnitType: 18,
      },
    },
    MobileLink:
      'http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us',
    Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us',
  },
  {
    LocalObservationDateTime: '2022-05-09T16:13:00+03:00',
    EpochTime: 1652101980,
    WeatherText: 'Sunny',
    WeatherIcon: 1,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: true,
    Temperature: {
      Metric: {
        Value: 28.2,
        Unit: 'C',
        UnitType: 17,
      },
      Imperial: {
        Value: 83,
        Unit: 'F',
        UnitType: 18,
      },
    },
    MobileLink:
      'http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us',
    Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us',
  },
  {
    LocalObservationDateTime: '2022-05-09T16:13:00+03:00',
    EpochTime: 1652101980,
    WeatherText: 'Sunny',
    WeatherIcon: 1,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: true,
    Temperature: {
      Metric: {
        Value: 28.2,
        Unit: 'C',
        UnitType: 17,
      },
      Imperial: {
        Value: 83,
        Unit: 'F',
        UnitType: 18,
      },
    },
    MobileLink:
      'http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us',
    Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us',
  },
];

const FAVORITE_KEY = 'favorite_db';

function loadFavorites() {
  let favorites = StorageService.loadFromStorage(FAVORITE_KEY);
  if (!favorites || !favorites?.length) {
    CURR_WEATHER.forEach((city) => (city._id = _makeId()));
    favorites = CURR_WEATHER;
  }
  StorageService.saveToStorage(FAVORITE_KEY, favorites);
  return favorites;
}

function removeCity(favorites, cityId) {
  console.log(cityId);
  const idx = favorites.findIndex((favorite) => favorite._id === cityId);
  favorites.splice(idx, 1);
  StorageService.saveToStorage(FAVORITE_KEY, favorites);
  return favorites;
}

function addCity(favorites, city) {
  favorites.unshift(city);
  StorageService.saveToStorage(FAVORITE_KEY, favorites);
  return favorites;
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
