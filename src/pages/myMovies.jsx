import React, { useContext, useEffect, useState } from "react";
import PageTemplate from "../components/myMovies/templateMyMoviesPage";
import { getMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import {MoviesContext} from "../contexts/moviesContext";
import MovieCard from "../components/movieCard";

const MyMovies = (props) => {
	const { myMovies } = useContext(MoviesContext);

	// if ( isLoading ) { return <Spinner />; }
  // if ( isError ) { return <h1>{error.message}</h1>; }

	useEffect(() => {
		console.log("myMovies", myMovies);
		let movies = myMovies ? myMovies : [];
		console.log("pages.myMovies.movies", movies);
	}, [myMovies]);

	return (
		<>
			<PageTemplate
				title="My Movies"
			/>
		</>
	);
};

export default MyMovies;

