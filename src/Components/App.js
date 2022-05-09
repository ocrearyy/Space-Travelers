import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Rocket from './Rocket';
import Missions from './Missions';
import Profile from './Profile';

import NavBar from './NavigationBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="Rockets" element={<Rocket />} />
        <Route path="Missions" element={<Missions />} />
        <Route exact path="/" element={<Profile />} />
      </Routes>

    </div>
  );
}

export default App;
