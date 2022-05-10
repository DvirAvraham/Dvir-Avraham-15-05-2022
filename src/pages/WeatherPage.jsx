import {useEffect, useState} from 'react';
import {WeatherService} from '../services/WeatherService';
import {SearchCity} from '../cmps/SearchCity.jsx';
import {ForcastList} from '../cmps/ForcastList.jsx';
import {CityPreview} from '../cmps/CityPreview.jsx';
import {useSelector, useDispatch} from 'react-redux';
import {setCurrCity, setFavorites} from '../store/actions/WeatherActions';

export const WeatherPage = () => {
  const dispatch = useDispatch();
  const [currCityWeather, setcurrCityWeather] = useState(null);
  const [currCityForcast, setcurrCityForcast] = useState(null);

  const {currCity} = useSelector((state) => state.WeatherModule);

  useEffect(() => {
    dispatch(setCurrCity());
    setWeather();
  }, [currCity]);

  const setWeather = async () => {
    try {
      if (!currCity) return;
      const weather = await WeatherService.getWeather(currCity.key);
      setcurrCityWeather(weather);
      const forcast = await WeatherService.getForcast(currCity.key);
      setcurrCityForcast(forcast);
    } catch (err) {
      console.error('Setting weather failed', err);
    }
  };

  const toggleFavorite = () => {
    !currCity[0].isFavorite
      ? (currCity[0].isFavorite = true)
      : (currCity[0].isFavorite = !currCity[0].isFavorite);
    dispatch(setCurrCity(currCity[0]));
    dispatch(setFavorites(currCity[0]));
  };

  return !currCity ? (
    <div>Loading..</div>
  ) : (
    <section className="weather-page main-layout">
      <SearchCity />
      {currCityWeather && currCityForcast ? (
        <CityPreview
          city={currCity}
          weather={currCityWeather[0]}
          forcast={currCityForcast[0]}
          toggleFavorite={toggleFavorite}
        ></CityPreview>
      ) : (
        <div>Loading..</div>
      )}
      {currCityForcast ? (
        <ForcastList forcasts={currCityForcast}></ForcastList>
      ) : (
        <div>Loading..</div>
      )}
    </section>
  );
};
