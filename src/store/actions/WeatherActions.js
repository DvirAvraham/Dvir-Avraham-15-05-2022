import {WeatherService} from '../../services/WeatherService';
import {FavoriteService} from '../../services/FavoriteService';

export function setCurrCity(city) {
  return async (dispatch) => {
    try {
      let currCity = await WeatherService.getWeather(city);
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
      console.log(56, favorites);
      if (city.isFavorite) {
        favorites = FavoriteService.addCity(favorites, city);
      } else {
        favorites = FavoriteService.removeCity(favorites, city.Key);
      }
      dispatch({type: 'REMOVE_FAVORITE', favorites});
    } catch (err) {
      console.error('Faild loading favorites:', err);
    }
  };
}
