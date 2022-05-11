export const CityPreview = ({city, toggleFavorite, isImperial}) => {
  const btnTxt = () => {
    return city?.isFavorite ? 'Remove' : 'Add';
  };

  const degrees = () => {
    const degree = isImperial ? 'Imperial' : 'Metric';
    return `${city.Temperature[degree].Value} ${city.Temperature[degree].Unit}`;
  };

  return (
    <div className="city-preview flex space-between">
      <div>
        {city.LocalizedName} - {degrees()}
      </div>
      {/* <div>
        {weather.LocalizedName} F {forcast.Temperature.Minimum.Value} -
        {forcast.Temperature.Maximum.Value}
        -- {weather.Key}
      </div> */}
      <div>
        {city?.isFavorite && 'FAVORITE'}
        <button onClick={toggleFavorite}>{btnTxt()}</button>
      </div>
    </div>
  );
};
