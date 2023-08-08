import React, { useEffect, useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import MovieReviews from '../movieReviews'
import {getMovieCast} from "../../api/tmdb-api";
import CardList from "./cardList";
import Divider from "@mui/material/Divider";

const styles = {
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
  },
  chipLabel: {
    margin: 0.5,
  },
  fab: { 
    position: "fixed",
    top: 50,
    right: 2,
  },
	header: {
		marginTop: "15px",
	},
};

const MovieDetails = ( {movie}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
	const [movieCast, setMovieCast] = useState([]);
	useEffect(() => {
		getMovieCast(movie.id)
			.then(response => {
				setMovieCast(response);}
			);
	}, []);
	console.log("movie cast", movieCast);

  return (
    <>
      <Typography variant="h4" component="h3" sx={styles.header}>Overview</Typography>

			<Divider /> 

      <Typography variant="h6" component="p">{movie.overview}</Typography>

      <Typography variant="h4" component="h3" sx={styles.header}>Details</Typography>

			<Divider /> 

      <Paper component="ul" sx={styles.chipSet}>
        <li>
          <Chip label="Genres" sx={styles.chipLabel} color="primary" />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name}  />
          </li>
        ))}
      </Paper>

      <Paper component="ul" sx={styles.chipSet}>
        <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
        <Chip
          icon={<MonetizationIcon />}
          label={`${movie.revenue.toLocaleString()}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count}`}
        />
        <Chip label={`Released: ${movie.release_date}`} />
      </Paper>

			<Typography
				variant="h4"
				sx={styles.header}>
				Cast
			</Typography>

			<Divider /> 

			{movieCast != null ? (
				<Paper component="ul" sx={styles.chipSet}>
					<CardList cast={movieCast} />
				</Paper>
			) : null}

      <Fab    
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={styles.fab}
      >
        <NavigationIcon />
        Reviews
      </Fab>

      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer>
    </>
  );
};
export default  MovieDetails ;

