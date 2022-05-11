import React from 'react';
import { Link } from 'react-router-dom';

const Planet = require('../images/planet.png');

const NavBar = () => (
  <div className="Nav">
    <div className="logoDiv">
      <img id="navLogo" src={Planet} alt="planetLogo" />
      <h1 id="headerText">Space Traveler Hub</h1>
    </div>
    <ul id="navList">
      <li><Link id="anchora" to="/Rockets">Rockets</Link></li>
      <li><Link id="anchorb" to="/Missions">Missions</Link></li>
      <li><Link id="anchorc" to="/">My Profile</Link></li>
    </ul>
  </div>
);

export default NavBar;
