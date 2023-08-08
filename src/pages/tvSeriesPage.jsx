import React, { useState } from "react";
import PageTemplate from "../components/tvSeries/template";
import { getPopularTvSeries } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import Pagination from "@mui/material/Pagination";

const TvSeriesPage = () => {
  const cardsPerPage = 4;
  const [ page, setPage ] = useState(1); 
  const { data, error, isLoading, isError } = useQuery(["tvSeries", page], getPopularTvSeries);

  if ( isLoading ) { return <Spinner />; }
  if ( isError ) { return <h1>{error.message}</h1>; }

  const totalResults = data ? data.results.length : 0;
  const totalPages = Math.ceil(totalResults / cardsPerPage);

  const startIndex = (page - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const series = data ? data.results.slice(startIndex, endIndex) : [];

  const handlePageChange = (event, value) => {
    setPage(value);   
	};

  return (
    <>
      <PageTemplate
        title="Discover Movies"
        series={series}
        action={(serie) => {
          return <AddToFavouritesIcon movie={serie} />;
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

export default TvSeriesPage;

