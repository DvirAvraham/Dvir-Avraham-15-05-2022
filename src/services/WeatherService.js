import axios from 'axios';
import {StorageService} from './StorageService';
export const WeatherService = {
  getWeather,
  getCities,
  getForcast,
};

const TLV = [
  {
    _id: 'yessssss',
    Version: 1,
    Key: '215854',
    Type: 'City',
    Rank: 31,
    LocalizedName: 'Tel Aviv',
    Country: {
      ID: 'IL',
      LocalizedName: 'Israel',
    },
    AdministrativeArea: {
      ID: 'TA',
      LocalizedName: 'Tel Aviv',
    },
  },
];
// const CURR_WEATHER = [
//   {
//     LocalObservationDateTime: '2022-05-09T16:13:00+03:00',
//     EpochTime: 1652101980,
//     WeatherText: 'Sunny',
//     WeatherIcon: 1,
//     HasPrecipitation: false,
//     PrecipitationType: null,
//     IsDayTime: true,
//     Temperature: {
//       Metric: {
//         Value: 28.2,
//         Unit: 'C',
//         UnitType: 17,
//       },
//       Imperial: {
//         Value: 83,
//         Unit: 'F',
//         UnitType: 18,
//       },
//     },
//     MobileLink:
//       'http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us',
//     Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us',
//   },
// ];

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

const FIVE = [
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
        Date: '2022-05-09T07:00:00+03:00',
        EpochDate: 1652068800,
        Temperature: {
          Minimum: {
            Value: 65,
            Unit: 'F',
            UnitType: 18,
          },
          Maximum: {
            Value: 85,
            Unit: 'F',
            UnitType: 18,
          },
        },
        Day: {
          Icon: 2,
          IconPhrase: 'Mostly sunny',
          HasPrecipitation: false,
        },
        Night: {
          Icon: 33,
          IconPhrase: 'Clear',
          HasPrecipitation: false,
        },
        Sources: ['AccuWeather'],
        MobileLink:
          'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us',
        Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us',
      },
      {
        Date: '2022-05-10T07:00:00+03:00',
        EpochDate: 1652155200,
        Temperature: {
          Minimum: {
            Value: 65,
            Unit: 'F',
            UnitType: 18,
          },
          Maximum: {
            Value: 76,
            Unit: 'F',
            UnitType: 18,
          },
        },
        Day: {
          Icon: 1,
          IconPhrase: 'Sunny',
          HasPrecipitation: false,
        },
        Night: {
          Icon: 38,
          IconPhrase: 'Mostly cloudy',
          HasPrecipitation: false,
        },
        Sources: ['AccuWeather'],
        MobileLink:
          'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us',
        Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us',
      },
      {
        Date: '2022-05-11T07:00:00+03:00',
        EpochDate: 1652241600,
        Temperature: {
          Minimum: {
            Value: 67,
            Unit: 'F',
            UnitType: 18,
          },
          Maximum: {
            Value: 74,
            Unit: 'F',
            UnitType: 18,
          },
        },
        Day: {
          Icon: 3,
          IconPhrase: 'Partly sunny',
          HasPrecipitation: false,
        },
        Night: {
          Icon: 38,
          IconPhrase: 'Mostly cloudy',
          HasPrecipitation: false,
        },
        Sources: ['AccuWeather'],
        MobileLink:
          'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us',
        Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us',
      },
      {
        Date: '2022-05-12T07:00:00+03:00',
        EpochDate: 1652328000,
        Temperature: {
          Minimum: {
            Value: 68,
            Unit: 'F',
            UnitType: 18,
          },
          Maximum: {
            Value: 73,
            Unit: 'F',
            UnitType: 18,
          },
        },
        Day: {
          Icon: 2,
          IconPhrase: 'Mostly sunny',
          HasPrecipitation: false,
        },
        Night: {
          Icon: 33,
          IconPhrase: 'Clear',
          HasPrecipitation: false,
        },
        Sources: ['AccuWeather'],
        MobileLink:
          'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us',
        Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us',
      },
      {
        Date: '2022-05-13T07:00:00+03:00',
        EpochDate: 1652414400,
        Temperature: {
          Minimum: {
            Value: 73,
            Unit: 'F',
            UnitType: 18,
          },
          Maximum: {
            Value: 78,
            Unit: 'F',
            UnitType: 18,
          },
        },
        Day: {
          Icon: 4,
          IconPhrase: 'Intermittent clouds',
          HasPrecipitation: false,
        },
        Night: {
          Icon: 35,
          IconPhrase: 'Partly cloudy',
          HasPrecipitation: false,
        },
        Sources: ['AccuWeather'],
        MobileLink:
          'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us',
        Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us',
      },
    ],
  },
];

const CITY_KEY = 'city_db';

// const API_KEY = 'hgXD1TI7qZ2VvGsgx35QIQmtTbSmzAFu';
// const API_KEY = 'RI3GPLBt4JfKAVscpkoI3ApnVQgyI2Z3';
const API_KEY = 'D6jKdaMbziIW51Ahx96LesYfkvyLCM8k';

async function getWeather(cityKey = 215854) {
  let cityWeather = StorageService.loadFromStorage(CITY_KEY);
  if (cityWeather?.Key) return cityWeather;
  StorageService.saveToStorage(CITY_KEY, TLV);
  return TLV;
  try {
    const res = await axios.get(
      `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${API_KEY}`
    );
    cityWeather = res.data;
    StorageService.saveToStorage(CITY_KEY, cityWeather);
    return cityWeather;
  } catch (err) {
    console.error(`Failed getting ${cityKey} weather`, err);
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
  return FIVE[0].DailyForecasts;
  try {
    const res = await axios.get(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}`
    );
    return res.data[0].DailyForecasts;
  } catch (err) {
    console.error('Failed getting forcast', err);
  }
}
