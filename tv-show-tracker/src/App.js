import { useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";
import Button from "./components/Button";
import AddShowComponent from "./components/AddShowInput";

function App() {
  const [addMode, setAddMode] = useState(false);
  const [myShows, setMyShows] = useState([]);

  const toggleAddMode = () => {
    setAddMode(!addMode);
  };

  return (
    <div>
      <div className="header">
        <h1> TV Show Tracker </h1>
      </div>
      <section className="my-shows">
        {myShows.length > 0 ? (
          <div>
            <h2> My TV Shows </h2>
            {myShows.map((show) => (
              <MovieCard show={show} />
            ))}
          </div>
        ) : (
          <p> You still have not picked your tv shows</p>
        )}
      </section>
      <section className="add-show">
        <Button handleClick={toggleAddMode} buttonText="Add New TV Show" />
        {addMode && <AddShowComponent addShow = {setMyShows}/>}
      </section>
    </div>
  );
}

export default App;
