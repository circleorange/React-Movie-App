import React, {useEffect, useState} from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import {getPersonCredits} from '../../api/tmdb-api';
import MovieCreditsCardList from "./movieCreditsCardList";
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
	knownFor: {
		marginTop: "10px",
	},
	biographyTitle: {
		marginTop: "10px",
		marginBottom: "5px",
	},
	biography: {
		marginBottom: "20px",
	} 
};

const PersonDetails = ( {person}) => {
	const [movieCredits, setMovieCredits] = useState([]);
	useEffect(() => {
		getPersonCredits(person.id)
			.then(credits => {setMovieCredits(credits.cast);});
	}, []);
	console.log('PersonDetails.index.movieCredits', movieCredits);

  return (
    <>
			<Typography 
				variant="h4"
				sx={styles.biographyTitle}>
				Biography 
			</Typography>

			<Divider />
			
      <Typography 
				variant="h6" 
				component="p"
				sx={styles.biography}>
        {person.biography}
      </Typography>

			<Typography 
				variant="h4"
				sx={styles.knownFor}>
				Known For
			</Typography>

			<Divider />

			{movieCredits != null ? (
      <Paper 
				component="ul" 
				sx={styles.chipSet}
			>
				<MovieCreditsCardList movieCredits={movieCredits} />
			</Paper>
			) : null}
    </>
  );
};
export default PersonDetails;
