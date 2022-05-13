import './assets/styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {AppHeader} from './cmps/AppHeader.jsx';
import {WeatherPage} from './pages/WeatherPage.jsx';
import {FavoritePage} from './pages/FavoritePage.jsx';
import {useEffect} from 'react';
import {setCurrCity, loadFavorites} from './store/actions/WeatherActions';
import {useDispatch, useSelector} from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();
  const {isDark} = useSelector((state) => state.WeatherModule);

  useEffect(() => {
    dispatch(setCurrCity());
    dispatch(loadFavorites());
  }, []);

  return (
    <Router>
      <div className={`app  ${isDark ? 'dark' : null}`}>
        <AppHeader />
        <Switch>
          <Route path="/favorite" component={FavoritePage} />
          <Route path="/" component={WeatherPage} />
        </Switch>
      </div>
    </Router>
  );
};
