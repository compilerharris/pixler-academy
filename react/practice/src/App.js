import './App.css';
import Profile from './components/Profile';
import React, { useState, useEffect } from 'react';

function App() {
  // const profiles = [
  //   {
  //     name:"Samit",
  //     img:"https://t3.ftcdn.net/jpg/02/16/60/42/360_F_216604243_4yvQhIudgknAWu04Ob7aSOu6BdIfhBNb.jpg",
  //     about:"I am a web designer",
  //     profileUrl:"https://github.com/samit46"
  //   },
  //   {
  //     name:"Huzaif",
  //     img:"https://www.motoroids.com/wp-content/uploads/2015/04/Fast-and-Furious-Toyota-Supra-10.jpg",
  //     about:"I am a student",
  //     profileUrl:"https://github.com/itachi644"
  //   },
  //   {
  //     name:"Rehan",
  //     img:"https://img.lovepik.com/photo/48007/1949.jpg_wh860.jpg",
  //     about:"I am a developer",
  //     profileUrl:"https://github.com/rehandossa"
  //   },
  //   {
  //     name:"Muizz",
  //     img:"https://img.lovepik.com/photo/48007/1949.jpg_wh860.jpg",
  //     about:"I am a Student",
  //     profileUrl:"https://github.com/skmuizz"
  //   }
  // ];
  const [profiles, setProfiles] = useState([]);
  
  useEffect(() => {
    fetch('/data/profiles.json')
        .then(response => response.json())
        .then(data => setProfiles(data))
        .catch(error => console.error('Error fetching the profiles:', error));
  }, []);

  return (
    <div className="container mt-5">
      <h1>Github Profiles</h1>
      <div className="row">
        {
          profiles.map((profile, key) => {
            return (
              // <div  >
                <Profile key={key} profile={profile} />
              // </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;