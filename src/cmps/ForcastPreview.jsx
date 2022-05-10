import Moment from 'react-moment';
import img from '../assets/imgs/skys.jpg';

export const ForcastPreview = ({forcast}) => {
  return (
    <div style={{backgroundImage: `url(${img})`}} className="text-center ">
      <Moment format="YYYY/MM/DD">{forcast.Date}</Moment>
      <div>{forcast.Temperature.Minimum.Value}</div>
      <div>{forcast.Temperature.Maximum.Value}</div>
    </div>
  );
};
