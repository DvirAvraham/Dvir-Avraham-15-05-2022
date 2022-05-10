import {WeatherService} from '../../services/WeatherService';
import {FavoriteService} from '../../services/FavoriteService';

export function setCurrCity(city = 251485) {
  return async (dispatch, getState) => {
    try {
      // let {currCity} = getState().WeatherModule;
      let x;
      if (typeof city === 'number') {
        x = await WeatherService.getWeather(city);
      } else if (city.isFavorite) {
        x = city;
      }
      dispatch({type: 'SET_CITY', currCity: x});
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
      if (city.isFavorite) favorites = FavoriteService.addCity(favorites, city);
      else favorites = FavoriteService.removeCity(favorites, city._id);
      dispatch({type: 'REMOVE_FAVORITE', favorites});
    } catch (err) {
      console.error('Faild loading favorites:', err);
    }
  };
}
