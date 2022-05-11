import {WeatherService} from '../../services/WeatherService';
import {FavoriteService} from '../../services/FavoriteService';

export function setCurrCity(city) {
  return async (dispatch) => {
    try {
      const currCity = await WeatherService.getWeather(city);
      dispatch({type: 'SET_CITY', currCity});
    } catch (err) {
      console.error('Faild setting city:', err);
    } finally {
      console.log('>>', city);
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
