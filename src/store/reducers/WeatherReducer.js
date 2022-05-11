import {WeatherService} from '../../services/WeatherService';

const INITIAL_STATE = {
  currCity: null,
  favorites: null,
};

export function WeatherReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_CITY':
      return {
        ...state,
        currCity: action.currCity,
      };
    case 'SET_FAVORITES':
      return {
        ...state,
        favorites: action.favorites,
      };
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favorites: action.favorites,
      };

    default:
      return state;
  }
}
