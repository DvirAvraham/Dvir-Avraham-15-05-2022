export const CityPreview = ({city, toggleFavorite, isImperial}) => {
  const btnTxt = () => {
    return city?.isFavorite ? 'Remove' : 'Add';
  };

  const degrees = () => {
    const degree = isImperial ? 'Imperial' : 'Metric';
    return `${city.Temperature[degree].Value.toFixed()} ${
      city.Temperature[degree].Unit
    }`;
  };

  return (
    <div className="city-preview flex column justify-center">
      <div className="text-center">
        <span className="city-name"> {city.LocalizedName} </span>
        <button onClick={toggleFavorite}>{btnTxt()}</button>
      </div>
      <div className="city-degrees text-center">{degrees()}</div>
      <div>{city?.isFavorite && 'FAVORITE'}</div>
    </div>
  );
};
