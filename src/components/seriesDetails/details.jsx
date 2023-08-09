import React, { useEffect, useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { getSeriesCredits } from "../../api/tmdb-api";
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

const SeriesDetails = ({series}) => {
	const [seriesCast, setSeriesCast] = useState([]);

	useEffect(() => {
		getSeriesCredits(series.id)
			.then(response => {
				setSeriesCast(response);}
			);
	}, []);

  return (
    <>
      <Typography variant="h4" component="h3" sx={styles.header}>Overview</Typography>

			<Divider /> 

      <Typography variant="h6" component="p">{series.overview}</Typography>

      <Typography variant="h4" component="h3" sx={styles.header}>Details</Typography>

			<Divider /> 

      <Paper component="ul" sx={styles.chipSet}>
        <li>
          <Chip label="Genres" sx={styles.chipLabel} color="primary" />
        </li>

        {series.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name}  />
          </li>
        ))}
      </Paper>

      <Paper component="ul" sx={styles.chipSet}>
				<Chip 
					label={`Seasons: ${series.number_of_seasons}`} 
				/>

        <Chip
					label={`Episodes: ${series.number_of_episodes}`}
        />

        <Chip
					label={`Original Language: ${series.original_language}`}
        />

      </Paper>
    </>
  );
};
export default  SeriesDetails ;

