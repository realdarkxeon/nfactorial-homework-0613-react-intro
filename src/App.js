import './App.css';
import {format} from "date-fns";
import Logo from "./logo.svg"

const photos = [
  { 
    key: 1,
    link: "https://source.unsplash.com/gYl-UtwNg_I/1500x1500",
    frontWord: "HEY",
  },
  {
    key: 2,
    link: "https://source.unsplash.com/rFKUFzjPYiQ/1500x1500",
    frontWord: "LET'S",
  },
  {
    key: 3,
    link: "https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d",
    frontWord: "GIVE",
  },
  {
    key: 4,
    link: "https://source.unsplash.com/ITjiVXcwVng/1500x1500",
    frontWord: "ALL",
  },
  {
    key: 5,
    link: "https://source.unsplash.com/3MNzGlQM7qs/1500x1500",
    frontWord: "YOU CAN",
  },
];

function App() {
  return (
    <>
      <div className="header">
        <div className="container">
          <img class="logo" src={Logo} alt="react-logo" />
          <input placeholder="Search" class="empty-input" />
        </div>
        <span className="date-time">{format(new Date(), "dd.MM.yyyy HH:mm")}</span>
      </div>
      <div className="content">
        {photos.map((photo) => (
          <div key={photo.key} className='photo-container'>
            <img className="photo" src={photo.link} alt="pictures" />
            <p className="centeredText">{photo.frontWord}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
