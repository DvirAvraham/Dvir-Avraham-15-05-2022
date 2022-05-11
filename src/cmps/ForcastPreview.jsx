import Moment from 'react-moment';
import img from '../assets/imgs/skys.jpg';

export const ForcastPreview = ({forcast, isImperial}) => {
  const degrees = () => {
    const forcastMin = forcast.Temperature.Minimum.Value;
    const forcastMax = forcast.Temperature.Maximum.Value;
    const degrees = isImperial
      ? [forcastMin, forcastMax, 'F']
      : [
          (((forcastMin - 32) * 5) / 9).toFixed(1),
          (((forcastMax - 32) * 5) / 9).toFixed(1),
          'C',
        ];
    return `${degrees[0]} - ${degrees[1]} ${degrees[2]}`;
  };
  return (
    <div style={{backgroundImage: `url(${img})`}} className="text-center ">
      <Moment format="YYYY/MM/DD">{forcast.Date}</Moment>
      <div>{degrees()}</div>
    </div>
  );
};
