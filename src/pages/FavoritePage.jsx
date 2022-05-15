import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setFavorites, setCurrCity} from '../store/actions/WeatherActions';
import {FavoriteList} from '../cmps/FavoriteList.jsx';
import {RemoveModal} from '../cmps/RemoveModal.jsx';
import {ToastContainer, toast} from 'react-toastify';

export const FavoritePage = () => {
  const dispatch = useDispatch();

  const [isShow, setIsShow] = useState(null);
  const [cityToRemove, setCityToRemove] = useState(null);

  const {favorites} = useSelector((state) => state.WeatherModule);
  const {currCity} = useSelector((state) => state.WeatherModule);
  const {isImperial} = useSelector((state) => state.WeatherModule);

  const removeCity = () => {
    if (cityToRemove.id === currCity.id) dispatch(setCurrCity(cityToRemove));
    dispatch(setFavorites(cityToRemove));
    toast.success(
      `${cityToRemove.LocalizedName} removed successfully from your favorite cities!`,
      {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
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
      <ToastContainer />
      <RemoveModal
        isShow={isShow}
        closeModal={closeModal}
        cityToRemove={cityToRemove}
      ></RemoveModal>
      {favorites && favorites.length ? (
        <FavoriteList
          openModal={openModal}
          isImperial={isImperial}
          setCity={setCity}
          favorites={favorites}
          removeCity={removeCity}
        ></FavoriteList>
      ) : (
        <div className="msg main-layout">No favorite cities yet..</div>
      )}
    </div>
  );
};
