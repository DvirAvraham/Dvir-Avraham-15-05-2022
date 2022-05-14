import {withRouter} from 'react-router-dom';
import img from '../assets/imgs/fav-img.jpg';
import sunny from '../assets/imgs/sunny.svg';
import cloudy from '../assets/imgs/cloudy.svg';
import snowy from '../assets/imgs/snowy.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

function _FavoritePreview({favorite, history, setCity, isImperial, openModal}) {
  const removeCity = (ev) => {
    ev.stopPropagation();
    favorite.isFavorite = false;
    openModal(favorite);
  };

  const back = () => {
    setCity(favorite);
    history.push('/');
  };

  const degrees = () => {
    const degree = isImperial ? 'Imperial' : 'Metric';
    return `${favorite.Temperature[degree].Value.toFixed()} °${
      favorite.Temperature[degree].Unit
    }`;
  };

  const tempImg = () => {
    const temp = favorite.Temperature.Imperial.Value;
    if (temp <= 50) return snowy;
    else if (temp > 50 && temp < 77) return cloudy;
    else return sunny;
  };

  return (
    <div
      style={{backgroundImage: `url(${img})`}}
      className="favorite-preview text-center favorite-img"
      onClick={back}
      title="Click to set as home page city."
    >
      <div className="favorite-name">{favorite.LocalizedName}</div>
      <div className="degrees">{degrees()}</div>
      <img src={tempImg()} alt="" />
      <div className="remove-btn" title="Remove.">
        <FontAwesomeIcon
          icon={faHeart}
          onClick={(ev) => removeCity(ev)}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
}

export const FavoritePreview = withRouter(_FavoritePreview);
