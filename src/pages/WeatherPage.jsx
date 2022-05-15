import {useEffect, useState} from 'react';
import {WeatherService} from '../services/WeatherService';
import {SearchCity} from '../cmps/SearchCity.jsx';
import {ForcastList} from '../cmps/ForcastList.jsx';
import {CityPreview} from '../cmps/CityPreview.jsx';
import {useSelector, useDispatch} from 'react-redux';
import {setCurrCity, setFavorites} from '../store/actions/WeatherActions';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const WeatherPage = () => {
  const dispatch = useDispatch();
  const [currCityForcast, setcurrCityForcast] = useState(null);

  const {currCity} = useSelector((state) => state.WeatherModule);
  const {isImperial} = useSelector((state) => state.WeatherModule);

  useEffect(() => {
    setForecast();
  }, [currCity]);

  const setForecast = async () => {
    try {
      if (!currCity) return;
      const forcast = await WeatherService.getForcast(currCity.Key);
      setcurrCityForcast(forcast);
    } catch (err) {
      console.error('Failed setting weather', err);
    }
  };
  const toggleFavorite = () => {
    !currCity.isFavorite
      ? (currCity.isFavorite = true)
      : (currCity.isFavorite = !currCity.isFavorite);
    dispatch(setCurrCity(currCity));
    dispatch(setFavorites(currCity));
    const txt = currCity.isFavorite
      ? `${currCity.LocalizedName}  added successfully to your favorite cities !`
      : `${currCity.LocalizedName} removed successfully from your favorite cities!`;
    toast.success(txt, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return !currCity ? (
    <div className="msg main-layout">Loading..</div>
  ) : (
    <section className="weather-page main-layout">
      <ToastContainer />
      <SearchCity />
      {currCity ? (
        <CityPreview
          city={currCity}
          isImperial={isImperial}
          toggleFavorite={toggleFavorite}
        ></CityPreview>
      ) : (
        <div className="msg main-layout">Loading..</div>
      )}
      {currCityForcast ? (
        <ForcastList
          forcasts={currCityForcast}
          isImperial={isImperial}
        ></ForcastList>
      ) : (
        <div className="msg main-layout">Loading..</div>
      )}
    </section>
  );
};
