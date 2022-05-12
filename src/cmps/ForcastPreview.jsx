import Moment from 'react-moment';
import img from '../assets/imgs/skys.jpg';
import sun from '../assets/imgs/sun.svg';
import cloudy from '../assets/imgs/cloudy.svg';
import snow from '../assets/imgs/snow.svg';

export const ForcastPreview = ({forcast, isImperial}) => {
  const degrees = () => {
    const forcastMin = forcast.Temperature.Minimum.Value;
    const forcastMax = forcast.Temperature.Maximum.Value;
    const degrees = isImperial
      ? [forcastMin, forcastMax, '°F']
      : [
          (((forcastMin - 32) * 5) / 9).toFixed(),
          (((forcastMax - 32) * 5) / 9).toFixed(),
          '°C',
        ];
    return `${degrees[0]} - ${degrees[1]} ${degrees[2]}`;
  };

  const tempImg = () => {
    const avg =
      (forcast.Temperature.Minimum.Value + forcast.Temperature.Maximum.Value) /
      2;
    if (avg <= 50) return snow;
    else if (avg > 50 && avg < 77) return cloudy;
    else return sun;
  };

  return (
    <div
      style={{backgroundImage: `url(${img})`}}
      className="forcast-img text-center "
    >
      <div className="date">
        <Moment format="MMM Do">{forcast.Date}</Moment>
      </div>
      <div className="degrees">{degrees()}</div>
      <img src={tempImg()} />
    </div>
  );
};
