import { useState } from "react";
import useFetchShow from "../hooks/useFetchDataInfo";
import "./AddTvShowInput.css";

function AddTvShowInput(props){
    const [searchTerm, setSearchTerm] = useState("");

    const onFormType = (e) => {
        setSearchTerm(e.target.value);
      };

    const data = useFetchShow(searchTerm);

    const handleShowSelect = (show) => {
        const newShow = {
          id: show.show.id,
          name: show.show.name,
          imageUrl: show.show.image.medium,
        };

        props.setMyShows((prevState) =>([...prevState, newShow]));
        props.setAddShowMode(false);
        setSearchTerm("");
      };

  return(
    <div className="add-show-form">
    <p htmlFor="search-input" className="add-movie-box-label">
      Search for your TV Show
    </p>
    <input
      name="search-input"
      className="add-show-input"
      onChange={onFormType}
      value={searchTerm}
    />
    {data.length > 0 && (
      <div className="input-list">
        {data.map((show) => (
          <div onClick={() => handleShowSelect(show)} key={show.show.id}>
            {`${show.show.name} (${show.show.premiered})`}
          </div>
        ))}
      </div>
    )}
  </div>
  )
}

export default AddTvShowInput