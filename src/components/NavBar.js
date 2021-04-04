import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" exact activeStyle={{background:'lightgreen'}}>Home</NavLink>
      <NavLink to="/movies" exact activeStyle={{background:'lightgreen'}}>Movies</NavLink>
      <NavLink to="/directors" exact activeStyle={{background:'lightgreen'}}>Directors</NavLink>
      <NavLink to="/actors" exact activeStyle={{background:'lightgreen'}}>Actors</NavLink>
    </div>
  );
};

export default NavBar;
