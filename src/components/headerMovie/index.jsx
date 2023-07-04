import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import {useParams} from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";

const styles = {
    root: {  
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
};

const MovieHeader = (props) => {
	const movie = props.movie;
	const { id } = useParams();
	const favMovies = JSON.parse(localStorage.getItem("favourites"));

	let isMovieFavourite = false;
	for (const favMovie of favMovies) {
		if (favMovie.id == id) { isMovieFavourite = true; }
	};

  return (
    <Paper component="div" sx={styles.root}>
		{isMovieFavourite && (
			<FavoriteIcon color="primary" fontSize="large" />
	  )}

      <Typography variant="h4" component="h3">
        {movie.title}{"   "}
        <a href={movie.homepage}>
          <HomeIcon color="primary"  fontSize="='large"/>
        </a>
        <br />
        <span>{`${movie.tagline}`} </span>
      </Typography>
    </Paper>
  );
};

export default MovieHeader;
