
import React, { useState } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import Pagination from "@mui/material/Pagination";

const HomePage = () => {
  const moviesPerPage = 4;
  const [ page, setPage ] = useState(1); 
  const { data, error, isLoading, isError } = useQuery(["discover", page], getMovies);

  if ( isLoading ) { return <Spinner />; }
  if ( isError ) { return <h1>{error.message}</h1>; }

  const totalResults = data ? data.results.length : 0;
  const totalPages = Math.ceil(totalResults / moviesPerPage);

  const startIndex = (page - 1) * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;
  const movies = data ? data.results.slice(startIndex, endIndex) : [];

  const handlePageChange = (event, value) => {
    setPage(value);   
	};

  return (
    <>
      <PageTemplate
        title="Discover Movies"
        movies={movies}
        action={(movie) => {
          return <AddToFavouritesIcon movie={movie} />;
        }}
      />
      <Pagination
        count={totalPages} 
        page={page}
        onChange={handlePageChange}
      />
    </>
  );
};

export default HomePage;

