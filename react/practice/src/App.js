import './App.css';
import Profile from './components/Profile';
import React, { useState, useEffect } from 'react';

function App() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch('/data/profiles.json')
        .then(response => response.json())
        .then(data => setProfiles(data))
        .catch(error => console.error('Error fetching the profiles:', error));
  },[]);

  return (
    <div className="container mt-5">
      <h1>Github Profiles</h1>
      <div className="row">
        {
          profiles.map((profile, key) => {
            return (
              <Profile key={key} profile={profile} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;