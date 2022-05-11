import {FavoritePreview} from './FavoritePreview.jsx';

export const FavoriteList = ({favorites, removeCity, setCity, isImperial}) => {
  return (
    <div>
      <div className="favorites-title">Your Favorite Cities!</div>
      <section className="favorite-list">
        {favorites.map((favorite, i) => (
          <FavoritePreview
            isImperial={isImperial}
            setCity={setCity}
            favorite={favorite}
            remove={removeCity}
            key={i}
          ></FavoritePreview>
        ))}
      </section>
    </div>
  );
};
