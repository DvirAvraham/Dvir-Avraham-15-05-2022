import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {loadFavorites, setFavorites} from '../store/actions/WeatherActions';
import {FavoriteList} from '../cmps/FavoriteList.jsx';

export const FavoritePage = () => {
  const dispatch = useDispatch();

  const {favorites} = useSelector((state) => state.WeatherModule);

  useEffect(() => {
    dispatch(loadFavorites());
  }, []);

  const removeCity = (city) => {
    const isSure = prompt(`Are you sure you want to remove ${city._id} `);
    if (isSure) dispatch(setFavorites(city));
  };

  return (
    <div className="favorite-page main-layout">
      {favorites && (
        <FavoriteList
          favorites={favorites}
          removeCity={removeCity}
        ></FavoriteList>
      )}
    </div>
  );
};
