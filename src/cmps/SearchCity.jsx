// import {Debounce} from 'react-lodash';
// import _debounce from 'lodash/debounce';
import debounce from 'lodash.debounce';
import {useState, useCallback, useEffect} from 'react';
import {WeatherService} from '../services/WeatherService';
import {SearchList} from './SearchList.jsx';

export const SearchCity = () => {
  const [txt, setTxt] = useState('');
  const [cities, setCities] = useState(null);

  const updateQuery = async () => {
    if (!txt) return setCities(null);
    const currCities = await WeatherService.getCities(txt);
    setCities(currCities);
  };

  const delayedQuery = useCallback(debounce(updateQuery, 800), [txt]);

  const search = (ev) => {
    const txt = ev.target.value;
    if (!txt) {
      setCities(null);
      setTxt('');
      return;
    }
    setTxt(txt);
  };

  useEffect(() => {
    delayedQuery();
    return delayedQuery.cancel;
  }, [txt, delayedQuery]);

  const clearData = () => {
    setTxt('');
    setCities(null);
  };
  // const complete = () => {
  //   let newStr = cities[0].LocalizedName.split('');
  //   newStr.splice(0, txt.length);
  //   for (let i = txt.length - 1; i >= 0; i--) {
  //     newStr.unshift(txt[i]);
  //   }
  //   return newStr.join('');
  // };

  return (
    <section className="serach flex column align-center">
      <div>
        <input onChange={search} type="text" placeholder="Search" value={txt} />
      </div>
      <div className="serach-container">
        {/* {cities && <div className="try">{complete()}</div>} */}
        {cities && (
          <SearchList cities={cities} clearData={clearData}></SearchList>
        )}
      </div>
    </section>
  );
};
