import {withRouter} from 'react-router-dom';
import Moment from 'react-moment';
import img from '../assets/imgs/skys.jpg';
import sun from '../assets/imgs/sun.svg';
import cloudy from '../assets/imgs/cloudy.svg';
import snow from '../assets/imgs/snow.svg';

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
    if (temp <= 50) return snow;
    else if (temp > 50 && temp < 77) return cloudy;
    else return sun;
  };

  return (
    <div
      style={{backgroundImage: `url(${img})`}}
      className="favorite-preview text-center favorite-img"
      onClick={() => back()}
    >
      <div>{favorite.LocalizedName}</div>
      <Moment format="YYYY/MM/DD">{favorite.LocalObservationDateTime}</Moment>
      <div>{degrees()}</div>
      <button onClick={(ev) => removeCity(ev)}>Remove</button>
      <img src={tempImg()} alt="" />
    </div>
  );
}

export const FavoritePreview = withRouter(_FavoritePreview);
