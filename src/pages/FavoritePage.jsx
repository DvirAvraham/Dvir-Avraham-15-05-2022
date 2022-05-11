import {useSelector, useDispatch} from 'react-redux';
import {setFavorites, setCurrCity} from '../store/actions/WeatherActions';
import {FavoriteList} from '../cmps/FavoriteList.jsx';

export const FavoritePage = () => {
  const dispatch = useDispatch();

  const {favorites} = useSelector((state) => state.WeatherModule);
  const {currCity} = useSelector((state) => state.WeatherModule);

  const removeCity = (city) => {
    const isSure = prompt(`Are you sure you want to remove ${city.Key} `);
    if (isSure) {
      if (city.Key === currCity.Key) dispatch(setCurrCity(currCity));
      dispatch(setFavorites(city));
    }
  };

  const setCity = (city) => {
    dispatch(setCurrCity(city));
  };

  return (
    <div className="favorite-page main-layout">
      {favorites && (
        <FavoriteList
          setCity={setCity}
          favorites={favorites}
          removeCity={removeCity}
        ></FavoriteList>
      )}
    </div>
  );
};
