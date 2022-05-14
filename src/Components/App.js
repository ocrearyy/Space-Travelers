import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Missions from './MissionsList';
import Profile from './Profile';

import NavBar from './NavigationBar';
import RocketsList from './RocketsList';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="Rockets" element={<RocketsList />} />
        <Route path="Missions" element={<Missions />} />
        <Route exact path="/" element={<Profile />} />
      </Routes>

    </div>
  );
}

export default App;
