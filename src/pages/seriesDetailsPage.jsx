import React from "react";
import { useParams } from "react-router-dom";
import SeriesDetails from "../components/seriesDetails/details";
import Template from "../components/seriesDetails/template";
import { getSeries, getSeriesCredits } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";

const SeriesDetailsPage = (props) => {
	const { id } = useParams();

  const { data: series, error, isLoading, isError } = useQuery(
    ["series", { id: id }],
    getSeries
  );

  if (isLoading) {return <Spinner />;}
  if (isError) {return <h1>{error.message}</h1>;}

  return (
    <>
      {series ? (
        <>
          <Template series={series}>
            <SeriesDetails series={series} />
          </Template>
        </>
      ) : (
        <p>Waiting for series details</p>
      )}
    </>
  );
};

export default SeriesDetailsPage;

