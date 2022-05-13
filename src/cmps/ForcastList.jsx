import {ForcastPreview} from './ForcastPreview.jsx';
export const ForcastList = ({forcasts, isImperial}) => {
  return (
    <section className="forcast-list cards-grid">
      {forcasts.map((forcast) => (
        <ForcastPreview
          key={forcast.Date}
          forcast={forcast}
          isImperial={isImperial}
        ></ForcastPreview>
      ))}
    </section>
  );
};
