import {NavLink} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {toggleImperial, toggleDarkMode} from '../store/actions/WeatherActions';
import sunny from '../assets/imgs/sunny.svg';

function _AppHeader() {
  const dispatch = useDispatch();

  const {isImperial} = useSelector((state) => state.WeatherModule);
  const {isDark} = useSelector((state) => state.WeatherModule);

  const toggleIsImperial = () => {
    dispatch(toggleImperial());
  };
  const toggleIsDark = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <section className="app-header">
      <div className=" app-header header-container main-layout flex space-between align-center">
        <div className="logo-container">
          <h1 className="logo">Weather</h1>
          <img src={sunny} alt="" />
        </div>
        <nav>
          <button onClick={toggleIsImperial} className="unit">
            °{isImperial ? 'C' : 'F'}
          </button>
          <button onClick={toggleIsDark}>{isDark ? 'Light' : 'Dark'}</button>
          <NavLink activeClassName="my-active" exact to="/">
            Home
          </NavLink>
          <NavLink activeClassName="my-active" to="/favorite">
            Favorites
          </NavLink>
        </nav>
      </div>
    </section>
  );
}

export const AppHeader = withRouter(_AppHeader);
