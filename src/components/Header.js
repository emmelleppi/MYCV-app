import React from 'react';
import { NavLink } from 'react-router-dom';

// Componente Header per la navigazione all'interno dell'app basato su React-Router
const Header = () => (
  <header>
    <h1>MY CURRICULUM</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Curriculum</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
  </header>
);

export default Header;
