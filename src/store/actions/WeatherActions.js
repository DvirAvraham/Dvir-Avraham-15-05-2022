import {WeatherService} from '../../services/WeatherService';
import {FavoriteService} from '../../services/FavoriteService';

export function setCurrCity(city) {
  return async (dispatch, getState) => {
    try {
      let {currCity} = getState().WeatherModule;
      currCity = await WeatherService.getWeather(city);
      if (!currCity) return;
      dispatch({type: 'SET_CITY', currCity});
    } catch (err) {
      console.error('Faild setting city:', err);
    }
  };
}

export function loadFavorites() {
  return async (dispatch) => {
    try {
      const favorites = await FavoriteService.loadFavorites();
      dispatch({type: 'SET_FAVORITES', favorites});
    } catch (err) {
      console.error('Faild loading favorites:', err);
    }
  };
}
export function setFavorites(city) {
  return async (dispatch, getState) => {
    try {
      let {favorites} = getState().WeatherModule;
      const {currCity} = getState().WeatherModule;
      if (city.isFavorite) {
        favorites = FavoriteService.addCity(favorites, city);
      } else {
        favorites = FavoriteService.removeCity(favorites, city.Key);
      }
      dispatch({type: 'SET_FAVORITES', favorites});
    } catch (err) {
      console.error('Faild loading favorites:', err);
    }
  };
}

export function toggleImperial() {
  return async (dispatch, getState) => {
    try {
      const {isImperial} = getState().WeatherModule;
      WeatherService.setUnits(!isImperial);
      dispatch({type: 'SET_IS_IMPERIAL', isImperial: !isImperial});
    } catch (err) {
      console.error('Faild switching units:', err);
    }
  };
}

export function toggleDarkMode() {
  return async (dispatch, getState) => {
    try {
      const {isDark} = getState().WeatherModule;
      // const isImperialUpdate = WeatherService.setUnits(isImperial);
      dispatch({type: 'SET_IS_DARK', isDark: !isDark});
    } catch (err) {
      console.error('Faild switching modes:', err);
    }
  };
}
