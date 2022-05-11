import {withRouter} from 'react-router-dom';
import Moment from 'react-moment';
import img from '../assets/imgs/skys.jpg';

function _FavoritePreview({favorite, remove, history, setCity, isImperial}) {
  const removeCity = (ev) => {
    ev.stopPropagation();
    favorite.isFavorite = false;
    remove(favorite);
  };

  const back = () => {
    setCity(favorite);
    history.push('/');
  };

  const degrees = () => {
    const degree = isImperial ? 'Imperial' : 'Metric';
    return `${favorite.Temperature[degree].Value} ${favorite.Temperature[degree].Unit}`;
  };

  return (
    <div
      style={{backgroundImage: `url(${img})`}}
      className="favorite-preview text-center"
      onClick={() => back()}
    >
      <div>{favorite.LocalizedName}</div>
      <Moment format="YYYY/MM/DD">{favorite.LocalObservationDateTime}</Moment>
      <div>{degrees()}</div>
      <button onClick={(ev) => removeCity(ev)}>Remove</button>
    </div>
  );
}

export const FavoritePreview = withRouter(_FavoritePreview);
