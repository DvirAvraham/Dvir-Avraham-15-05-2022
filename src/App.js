import './assets/styles/global.css';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {AppHeader} from './cmps/AppHeader.jsx';
import {WeatherPage} from './pages/WeatherPage.jsx';
import {FavoritePage} from './pages/FavoritePage.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader />
        <Switch>
          <Route path="/favorite" component={FavoritePage} />
          <Route path="/" component={WeatherPage} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
