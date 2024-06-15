import { useState } from "react";
import "./App.css";
import MyTvShowCard from "./components/MyTvShowCard";
import AddTvShowInput from "./components/AddTvShowInput";

function App() {
  const [myShows, setMyShows] = useState([]);
  const [addShowMode, setAddShowMode] = useState(false);

  const handleSearchShow = () => {
    setAddShowMode(!addShowMode);
  };

  return (
    <div>
      <div className="header">
        <h1> My TV Show Tracker</h1>
      </div>

      <div>
        <h2>My TV Shows</h2>
        {myShows.length > 0 ? (
          <div className="my-shows">
            {myShows.map((show) => (
                  <MyTvShowCard show={show} myShows={myShows} setMyShows={setMyShows} />
            ))}
          </div>
        ) : (
          <p> You don't have any shows to display at this moment</p>
        )}
      </div>

      <div className="button-section">
        <button onClick={handleSearchShow}> Add a new TV Show </button>
      </div>

      {addShowMode && (
        <AddTvShowInput setMyShows={setMyShows} setAddShowMode={setAddShowMode} />
      )}
    </div>
  );
}

export default App;
