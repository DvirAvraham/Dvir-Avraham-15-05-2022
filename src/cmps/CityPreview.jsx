export const CityPreview = ({city, toggleFavorite}) => {
  const btnTxt = () => {
    return city?.isFavorite ? 'Remove' : 'Add';
  };
  return (
    <div className="city-preview flex space-between">
      <div>
        {city.LocalizedName} F
        {/* {city.Temperature.Imperial.Value} -
        {city.Temperature.Imperial.Value} */}
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
