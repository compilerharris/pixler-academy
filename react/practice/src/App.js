import './App.css';
import Profile from './components/Profile';

function App() {
  const profiles = [
    {
      name:"Samit",
      img:"https://t3.ftcdn.net/jpg/02/16/60/42/360_F_216604243_4yvQhIudgknAWu04Ob7aSOu6BdIfhBNb.jpg",
      about:"I am a web designer",
    },
    {
      name:"Huzaif",
      img:"https://www.motoroids.com/wp-content/uploads/2015/04/Fast-and-Furious-Toyota-Supra-10.jpg",
    },
    {
      name:"Rehan",
      img:"https://img.lovepik.com/photo/48007/1949.jpg_wh860.jpg",
      about:"I am a developer",
    }
  ];

  return (
    <div>
      <h1>Profiles</h1>
      {
        profiles.map((profile, key) => {
          return <Profile key={key} name={profile.name} imgUrl={profile.img} about={profile.about} />
        })
      }
    </div>
  );
}

export default App;