import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchForm from './SearchForm';

const apiKey = "e38f1bc56d9486ca37e84667b7a98ba8";

const Nav = props => (

  <header>
  	{ (props.location.pathname.startsWith('/search') )
  		? <SearchForm props={props} apiKey={apiKey} />
  		: <br /> }
	<nav className="main-nav">
	  <ul>
		<li><NavLink to='/search'>Search</NavLink></li>
		<li><NavLink to='/cats'>Cats</NavLink></li>
		<li><NavLink to='/dogs'>Dogs</NavLink></li>
		<li><NavLink to='/birds'>Birds</NavLink></li>
	  </ul>
    </nav>
  </header>
);
export default Nav;