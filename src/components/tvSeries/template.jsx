import React, { useState } from "react";
import Header from "../header";
import CardFilter from "./filterCards";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import SerieList from "./cardList";

const styles = {
	root: { padding: "20px", },
	fab: {
		marginTop: 8,
		position: "fixed",
		top: 2,
		right: 2,
	},
};

function SerieListPageTemplate({ series, name, action }) {
	const [nameFilter, setNameFilter] = useState("");
	const [genreFilter, setGenreFilter] = useState("0");
	const [drawerOpen, setDrawerOpen] = useState(false);

	const genreID = Number(genreFilter);
	let displayedSeries = series
		.filter((m) => {
		return m.name.toLowerCase().search(nameFilter.toLowerCase()) != -1;
	})
		.filter((m) => {
		return genreID > 0 ? m.genre_ids.includes(genreID) : true;
	});

	const handleChange = (type, value) => {
		if(type === "name") setNameFilter(value);
		else setGenreFilter(value);
	};

	return(
		<>
			<Grid container sx={styles.root}>
				<Grid item xs={12}>
					<Header name={name} />
				</Grid>
				<Grid item container spacing="5">
					<SerieList
						series={displayedSeries}
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
				<CardFilter
					onUserInput={handleChange}
					nameFilter={nameFilter}
					genreFilter={genreFilter}
				/>
			</Drawer>
		</>
	);
}

export default SerieListPageTemplate;

