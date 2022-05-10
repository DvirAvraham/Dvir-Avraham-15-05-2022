import {NavLink} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

function _AppHeader() {
  return (
    <section className="app-header">
      <div className=" app-header header-container main-layout flex space-between align-center">
        <div>
          <h1 className="logo">Weather</h1>
        </div>
        <nav>
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
