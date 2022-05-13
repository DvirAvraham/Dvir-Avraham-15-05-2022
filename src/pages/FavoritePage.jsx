import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setFavorites, setCurrCity} from '../store/actions/WeatherActions';
import {FavoriteList} from '../cmps/FavoriteList.jsx';
import {RemoveModal} from '../cmps/RemoveModal.jsx';

export const FavoritePage = () => {
  const dispatch = useDispatch();

  const [isShow, setIsShow] = useState(null);
  const [cityToRemove, setCityToRemove] = useState(null);

  const {favorites} = useSelector((state) => state.WeatherModule);
  const {currCity} = useSelector((state) => state.WeatherModule);
  const {isImperial} = useSelector((state) => state.WeatherModule);

  const removeCity = () => {
    if (cityToRemove.Key === currCity.Key) dispatch(setCurrCity(cityToRemove));
    dispatch(setFavorites(cityToRemove));
  };

  const closeModal = (city) => {
    if (city) removeCity();
    else setCityToRemove(null);
    setIsShow(false);
  };

  const openModal = (city) => {
    setCityToRemove(city);
    setIsShow(true);
  };

  const setCity = (city) => {
    dispatch(setCurrCity(city));
  };

  return (
    <div className="favorite-page main-layout">
      <RemoveModal
        isShow={isShow}
        closeModal={closeModal}
        cityToRemove={cityToRemove}
      ></RemoveModal>
      {favorites && (
        <FavoriteList
          openModal={openModal}
          isImperial={isImperial}
          setCity={setCity}
          favorites={favorites}
          removeCity={removeCity}
        ></FavoriteList>
      )}
    </div>
  );
};
