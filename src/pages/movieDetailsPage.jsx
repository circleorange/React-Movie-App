import React, {useState, useEffect}  from "react";
import {useParams} from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import {getMovie} from "../api/tmdb-api";
import PageTemplate from "../components/templateMoviePage";

const styles = {
  imageListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
};

const MoviePage = (props) => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
	  getMovie(id).then((movie) => {
		  setMovie(movie);
	  });
  }, [id]);

  return (
    <>
      {movie ? (
	      <>
		      <PageTemplate movie={movie}>
			      <MovieDetails movie={movie} />
		      </PageTemplate>
	      </>
      ) : (
	      <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MoviePage;
