import {useEffect, useState} from 'react';
import {WeatherService} from '../services/WeatherService';
import {SearchCity} from '../cmps/SearchCity.jsx';
import {ForcastList} from '../cmps/ForcastList.jsx';
import {CityPreview} from '../cmps/CityPreview.jsx';
import {useSelector, useDispatch} from 'react-redux';
import {setCurrCity, setFavorites} from '../store/actions/WeatherActions';

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
  };

  return !currCity ? (
    <div>Loading..</div>
  ) : (
    <section className="weather-page main-layout">
      <SearchCity />
      {currCity ? (
        <CityPreview
          city={currCity}
          isImperial={isImperial}
          toggleFavorite={toggleFavorite}
        ></CityPreview>
      ) : (
        <div>Loading..</div>
      )}
      {currCityForcast ? (
        <ForcastList
          forcasts={currCityForcast}
          isImperial={isImperial}
        ></ForcastList>
      ) : (
        <div>Loading..</div>
      )}
    </section>
  );
};
