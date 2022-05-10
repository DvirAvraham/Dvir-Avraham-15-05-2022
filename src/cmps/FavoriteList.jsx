import {FavoritePreview} from './FavoritePreview.jsx';

export const FavoriteList = ({favorites, removeCity}) => {
  return (
    <div>
      <div className="favorites-title">Your Favorites Cities!</div>
      <section className="favorite-list">
        {favorites.map((favorite, i) => (
          <FavoritePreview
            favorite={favorite}
            remove={removeCity}
            key={i}
          ></FavoritePreview>
        ))}
      </section>
    </div>
  );
};
