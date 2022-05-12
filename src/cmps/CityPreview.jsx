import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

export const CityPreview = ({city, toggleFavorite, isImperial}) => {
  const degrees = () => {
    const degree = isImperial ? 'Imperial' : 'Metric';
    return `${city.Temperature[degree].Value.toFixed()} °${
      city.Temperature[degree].Unit
    }`;
  };

  return (
    <div className="city-preview flex column justify-center">
      <div className="text-center">
        <span className="city-name"> {city.LocalizedName} </span>
        <button
          onClick={toggleFavorite}
          className={`toggle-fav ${city?.isFavorite ? 'fav' : ''}`}
        >
          <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
        </button>
      </div>
      <div className="city-degrees text-center">{degrees()}</div>
    </div>
  );
};
