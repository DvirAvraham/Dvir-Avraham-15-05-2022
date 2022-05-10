import {withRouter} from 'react-router-dom';
import Moment from 'react-moment';
import img from '../assets/imgs/skys.jpg';

function _FavoritePreview({favorite, remove, history, setCities}) {
  const removeCity = (ev) => {
    ev.stopPropagation();
    remove(favorite);
  };

  const back = () => {
    // setCities(favorite.Key);
    console.log('first');
    history.push('/');
  };

  return (
    <div
      style={{backgroundImage: `url(${img})`}}
      className="favorite-preview text-center"
      onClick={() => back()}
    >
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
