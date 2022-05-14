import React from 'react';
import { NavLink } from 'react-router-dom';

const Planet = require('../images/planet.png');

const NavBar = () => (
  <div className="Nav">
    <div className="logoDiv">
      <img id="navLogo" src={Planet} alt="planetLogo" />
      <h1 id="headerText">Space Traveler Hub</h1>
    </div>
    <ul id="navList">
      <li><NavLink id="anchora" to="/Rockets">Rockets</NavLink></li>
      <li><NavLink id="anchorb" to="/Missions">Missions</NavLink></li>
      <li><NavLink id="anchorc" to="/">My Profile</NavLink></li>
    </ul>
  </div>
);

export default NavBar;
