import "./MyTvShowCard.css";

function MyTvShowCard(props) {
  const handleDelete = (id) => {
    const filteredShows = [...props.myShows].filter((show) => show.id !== id);
    props.setMyShows(filteredShows);
  };
  return (
    <div key={props.show.id} className="show-card">
      <p className="show-card-p">{`Show name: ${props.show.name}`}</p>
      <img alt="selected show" src={props.show.imageUrl} />
      <button onClick={() => handleDelete(props.show.id)}>Delete</button>
    </div>
  );
}

export default MyTvShowCard;
