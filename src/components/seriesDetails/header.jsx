import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import {useParams} from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";

const styles = {
    root: {  
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
};

const SeriesHeader = (props) => {
	const series = props.series;
	const { id } = useParams();
	const favSeries = JSON.parse(localStorage.getItem("favourites"));
	console.log('headerSeries.series', series);
	
	let isSeriesFavourite = false;
	for (const favSerie of favSeries) {
		if (favSeries.id == id) { isSeriesFavourite = true; }
	};

  return (
    <Paper component="div" sx={styles.root}>
		{isSeriesFavourite && (
			<FavoriteIcon color="primary" fontSize="large" />
	  )}

      <Typography variant="h4" component="h3">
        {series.name}{"   "}
        <a href={series.homepage}>
          <HomeIcon color="primary"  fontSize="='large"/>
        </a>
      </Typography>
    </Paper>
  );
};

export default SeriesHeader;
