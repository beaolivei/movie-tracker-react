import { useState } from "react";
import useFetchShow from "../hooks/useFetchData";

const AddShowComponent = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const apiData = useFetchShow(searchTerm)

  const onInputType = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleShowSelect = (show) => {
    const newShow ={ 
        id: show.show.id,
        name: show.show.name,
        imageUrl: show.show.image.medium
    }

    props.addShow((prevState) => ([...prevState, newShow]))

  }

  return (
    <div className="add-show-box">
      <p> Use the input below to add your show </p>
      <input
        name="search-show"
        className="search-input"
        value={searchTerm}
        onChange={onInputType}
      />
      {
        apiData.length > 0 && (
            <div className="input-list">
                {
                    apiData.map((show) => {
                        return(
                        <div onClick={() => handleShowSelect(show)} key={show.id}>
                        {`${show.show.name}  (${show.show.premiered})`}
                        </div>
                        )
                    })
                }
            </div>
        )
      }
    </div>
  );
};

export default AddShowComponent
