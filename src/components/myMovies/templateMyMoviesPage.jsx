import React, { useContext, useState } from "react";
import Header from "../header";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import MovieList from "./movieList";
import MovieForm from "./movieForm";
import { MoviesContext } from "../../contexts/moviesContext";

const styles = {
  root: { padding: "20px" },
  fab: {
    marginTop: 8,
    position: "fixed",
    top: 2,
    right: 2,
  },
	form: {
		top: "50%",
		left: "50%",
		width: "50%",
		height: "50%",
	}
};

function MovieListPageTemplate({title}) {
  const [isFormOpen, setFormOpen] = useState(false);
	const context = useContext(MoviesContext);
	const { myMovies } = context;
	console.log("myMovies.templateMyMoviesPage.createdMovies", myMovies);

	const movies = myMovies ? myMovies : [];

  const handleAddMovie = () => {
    setFormOpen(true);
  };

	const onFormSubmit = (movie) => {
		context.addToMyMovies(movie);
		setFormOpen(false);
	};
	 
	return (
		<>
			<Grid container sx={styles.root}>
				<Grid item xs={12}>
					<Header title={title} />
				</Grid>
				{isFormOpen && (
					<MovieForm 
						onClose={() => setFormOpen(false)}
						onSave={(newMovie) => onFormSubmit(newMovie)}
					/>

				)}
				<Grid item container spacing="5">
					<MovieList movies={movies} />
				</Grid>
			</Grid>
			<Fab
				color="secondary"
				variant="extended"
				onClick={handleAddMovie}
				sx={styles.fab}
			>
				<AddIcon sx={{ mr: 1 }} />
				Add Movie
			</Fab>

		</>
	);
}
export default MovieListPageTemplate;


