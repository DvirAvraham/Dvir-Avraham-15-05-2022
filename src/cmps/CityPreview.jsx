export const CityPreview = ({weather, forcast, city, toggleFavorite}) => {
  const btnTxt = () => {
    return city[0]?.isFavorite ? 'Remove' : 'Add';
  };

  return (
    <div className="city-preview flex space-between">
      <div>
        {weather.LocalizedName} F {forcast.Temperature.Minimum.Value} -
        {forcast.Temperature.Maximum.Value}
        -- {weather.Key}
      </div>
      <div>
        {city[0]?.isFavorite && 'FAVORITE'}
        <button onClick={toggleFavorite}>{btnTxt()}</button>
      </div>
    </div>
  );
};
