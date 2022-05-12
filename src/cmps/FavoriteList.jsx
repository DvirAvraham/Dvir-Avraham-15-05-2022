import {useState} from 'react';
import {FavoritePreview} from './FavoritePreview.jsx';
import {FavoriteFilter} from './FavoriteFilter.jsx';

export const FavoriteList = ({favorites, removeCity, setCity, isImperial}) => {
  const [favoritesToShow, setFavoritesToShow] = useState(favorites);

  const onChangeFilter = (filterBy) => {
    filterBy = filterBy.toLowerCase();
    setFavoritesToShow(
      favorites.filter((favorite) =>
        favorite.LocalizedName.toLowerCase().includes(filterBy)
      )
    );
  };

  return (
    <div>
      <div className="favorites-title">Your Favorite Cities!</div>
      <FavoriteFilter onChangeFilter={onChangeFilter} />
      <section className="favorite-list">
        {favoritesToShow.map((favorite, i) => (
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
