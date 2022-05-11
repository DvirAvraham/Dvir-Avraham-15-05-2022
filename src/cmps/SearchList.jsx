import {useDispatch} from 'react-redux';
import {setCurrCity} from '../store/actions/WeatherActions';

export const SearchList = ({cities, clearData}) => {
  const dispatch = useDispatch();

  const setCity = (city) => {
    clearData();
    dispatch(setCurrCity(city));
  };

  return (
    <div className="search-list flex column">
      {cities.map((city) => {
        return (
          <div
            className="city-name"
            key={city.Key}
            onClick={() => setCity(city)}
          >
            {city.LocalizedName}
          </div>
        );
      })}
    </div>
  );
};
