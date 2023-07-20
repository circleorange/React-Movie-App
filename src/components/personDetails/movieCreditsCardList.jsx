import React, { useState } from "react";
import MovieCreditsCard from './movieCreditsCard';
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const MovieCreditsCardList = ({ movieCredits }) => {
  const [page, setPage] = useState(0);

	const limit = 4;
  const totalPages = Math.ceil(movieCredits.length / limit);
  const start = page * limit;
  const end = start + limit;
  const displayedCredits = movieCredits.slice(start, end);

  const handlePrevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <Grid container spacing={2}>
        {displayedCredits.map((m) => (
          <Grid
            key={m.id}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
          >
            <MovieCreditsCard
              key={m.id}
              movieCredit={m}
            />
          </Grid>
        ))}
      </Grid>
      <div>
        <IconButton
          onClick={handlePrevPage}
          disabled={page === 0}
        >
          <ChevronLeftIcon />
        </IconButton>
        <IconButton
          onClick={handleNextPage}
          disabled={page === totalPages - 1}
        >
          <ChevronRightIcon />
        </IconButton>
      </div>
    </>
  );
};

export default MovieCreditsCardList;

