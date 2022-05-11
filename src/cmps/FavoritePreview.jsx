import {withRouter} from 'react-router-dom';
import Moment from 'react-moment';
import img from '../assets/imgs/skys.jpg';

function _FavoritePreview({favorite, remove, history, setCity}) {
  const removeCity = (ev) => {
    ev.stopPropagation();
    favorite.isFavorite = false;
    remove(favorite);
  };

  const back = () => {
    setCity(favorite);
    history.push('/');
  };

  return (
    <div
      style={{backgroundImage: `url(${img})`}}
      className="favorite-preview text-center"
      onClick={() => back()}
    >
      <div>{favorite.LocalizedName}</div>
      <Moment format="YYYY/MM/DD">{favorite.LocalObservationDateTime}</Moment>
      <div>
        {favorite?.Temperature.Metric.Value}
        {favorite?.Temperature.Metric.Unit}
      </div>
      <button onClick={(ev) => removeCity(ev)}>Remove</button>
    </div>
  );
}

export const FavoritePreview = withRouter(_FavoritePreview);
