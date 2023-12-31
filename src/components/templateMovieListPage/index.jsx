import React, { useState } from "react";
import Header from "../header";
import FilterCard from "../filterMoviesCard";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import MovieList from "../movieList";

const styles = {
	root: { padding: "20px", },
	fab: {
		marginTop: 8,
		position: "fixed",
		top: 2,
		right: 2,
	},
};

// Destructuring of props, alternative would be
// function MovieListPageTemplate(props) {
// 	const movies = props.movies;
// 	const title = props.title;
// 	const action = props.action;
function MovieListPageTemplate({ movies, title, action }) {
	const [titleFilter, setTitleFilter] = useState("");
	const [genreFilter, setGenreFilter] = useState("0");
	const [sortingOrder, setSortingOrder] = useState(null);
	const [drawerOpen, setDrawerOpen] = useState(false);

	const genreID = Number(genreFilter);

	let displayedMovies = movies
		.filter((m) => {
			return m.title.toLowerCase().search(titleFilter.toLowerCase()) != -1;
		})
		.filter((m) => {
			return genreID > 0 ? m.genre_ids.includes(genreID) : true;
		})
		.sort((a, b) => {
			if (sortingOrder === "asc") {
				return a.title.localeCompare(b.title);
			} else if (sortingOrder === "desc") {
				return b.title.localeCompare(a.title);
			}
			return 0;
		});


	const handleChange = (type, value) => {
		if (type === "title") setTitleFilter(value);
		else if (type === "genre") setGenreFilter(value);
		else if (type === "sort") setSortingOrder(value);
	};


	return(
		<>
			<Grid container sx={styles.root}>
				<Grid item xs={12}>
					<Header title={title} />
				</Grid>
				<Grid item container spacing="5">
					<MovieList
						movies={displayedMovies}
						action={action}
					/>
				</Grid>
			</Grid>
			<Fab
				color="secondary"
				variant="extended"
				onClick={() => setDrawerOpen(true)}
				sx={styles.fab}
			>Filter</Fab>
			<Drawer
				anchor="left"
				open={drawerOpen}
				onClose={() => setDrawerOpen(false)}
			>
				<FilterCard 
					onUserInput={handleChange}
					titleFilter={titleFilter}
					genreFilter={genreFilter}
				/>
			</Drawer>
		</>
	);
}

export default MovieListPageTemplate;

