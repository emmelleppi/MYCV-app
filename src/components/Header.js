import React from 'react';
import { NavLink } from 'react-router-dom';

// Componente Header per la navigazione all'interno dell'app basato su React-Router
const Header = () => (
  <div className="header">
    <div className="container">
      <header>
        <div className="header__title">
          <h1>MY CURRICULUM</h1>
        </div>
        <div className="header__actions">
          <NavLink  className="button" to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
          <NavLink className="button" to="/create" activeClassName="is-active">Create Curriculum</NavLink>
          <NavLink className="button" to="/help" activeClassName="is-active">Help</NavLink>
        </div>
      </header>
    </div>
  </div>

);

export default Header;
