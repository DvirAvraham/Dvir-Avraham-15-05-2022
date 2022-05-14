import {useState} from 'react';
import {FavoritePreview} from './FavoritePreview.jsx';
import {FavoriteFilter} from './FavoriteFilter.jsx';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFire} from '@fortawesome/free-solid-svg-icons';

export const FavoriteList = ({
  favorites,
  removeCity,
  setCity,
  isImperial,
  openModal,
}) => {
  const [favoritesToShow, setFavoritesToShow] = useState(favorites);
  const [isSorted, setIsSorted] = useState(null);

  const onChangeFilter = (filterBy) => {
    filterBy = filterBy.toLowerCase();
    setFavoritesToShow(
      favorites.filter((favorite) =>
        favorite.LocalizedName.toLowerCase().includes(filterBy)
      )
    );
  };
  const sortByTemp = () => {
    console.log(isSorted);
    if (isSorted) {
      setIsSorted(false);
      setFavoritesToShow(favorites);
      return;
    }
    setIsSorted(true);
    setFavoritesToShow(
      favorites
        .slice()
        .sort(
          (a, b) => b.Temperature.Imperial.Value - a.Temperature.Imperial.Value
        )
    );
  };

  return (
    <div>
      <FavoriteFilter onChangeFilter={onChangeFilter} />
      <div className="favorites-title text-center">Your Favorite Cities!</div>
      <div onClick={sortByTemp} className="sort ">
        <FontAwesomeIcon icon={faFire}></FontAwesomeIcon>
        Hotest places
      </div>

      <section className="favorite-list cards-grid">
        {favoritesToShow.map((favorite, i) => (
          <FavoritePreview
            openModal={openModal}
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
