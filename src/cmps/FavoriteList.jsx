import {FavoritePreview} from './FavoritePreview.jsx';

export const FavoriteList = ({favorites, removeCity, setCity}) => {
  return (
    <div>
      <div className="favorites-title">Your Favorites Cities!</div>
      <section className="favorite-list">
        {favorites.map((favorite, i) => (
          <FavoritePreview
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
