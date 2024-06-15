function MovieCard(props){
    return(
        <div> 
            <p>{props.show.name}</p>
            <img alt="tv show promotional poster" src={props.show.imageUrl}/>
        </div>
    )
}

export default MovieCard