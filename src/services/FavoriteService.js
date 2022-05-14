import {StorageService} from './StorageService';

export const FavoriteService = {
  loadFavorites,
  removeCity,
  addCity,
};

const CURR_WEATHER = [
  {
    Headline: {
      EffectiveDate: '2022-05-09T20:00:00+03:00',
      EffectiveEpochDate: 1652115600,
      Severity: 7,
      Text: 'Mild Monday night',
      Category: 'heat',
      EndDate: '2022-05-10T08:00:00+03:00',
      EndEpochDate: 1652158800,
      MobileLink:
        'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us',
      Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us',
    },
    DailyForecasts: [
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
            Value: 0,
            Unit: 'F',
            UnitType: 18,
          },
        },
        MobileLink:
          'http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us',
        Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us',
        LocalizedName: 'Paris',
        Key: 'dd',
        isFavorite: true,
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
        LocalizedName: 'London',
        Key: 'bb',
        isFavorite: true,
      },
    ],
  },
];

const FAVORITE_KEY = 'favorite_db';

function loadFavorites() {
  let favorites = StorageService.loadFromStorage(FAVORITE_KEY);
  if (!favorites || !favorites?.length) {
    favorites = CURR_WEATHER[0].DailyForecasts;
  }
  StorageService.saveToStorage(FAVORITE_KEY, favorites);
  return favorites;
}

function removeCity(favorites, cityKey) {
  const idx = favorites.findIndex((city) => city.Key === cityKey);
  favorites.splice(idx, 1);
  StorageService.saveToStorage(FAVORITE_KEY, favorites);
  return favorites;
}

function addCity(favorites, city) {
  const cityCopy = JSON.parse(JSON.stringify(city));
  favorites.unshift(cityCopy);
  StorageService.saveToStorage(FAVORITE_KEY, favorites);
  return favorites;
}
