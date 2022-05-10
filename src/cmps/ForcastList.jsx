import {ForcastPreview} from './ForcastPreview.jsx';
export const ForcastList = ({forcasts}) => {
  return (
    <section className="forcast-list">
      {forcasts.map((forcast) => (
        <ForcastPreview key={forcast.Date} forcast={forcast}></ForcastPreview>
      ))}
    </section>
  );
};
