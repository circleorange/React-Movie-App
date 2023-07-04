import React, {useState} from "react";
import FilterCard from "../filterPeopleCard";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import PersonList from "../peopleList";
import Header from "../header";

const styles = {
	root: { padding: "20px", },
	fab: {
		marginTop: 8,
		position: "fixed",
		top: 2,
		right: 2,
	},
};

function PeopleListPageTemplate({title, people}) {
	const [nameFilter, setNameFilter] = useState("");
	const [drawerOpen, setDrawerOpen] = useState(false);
	console.log("templatePeopleListPage.people", people); // for debugging

	let displayedPeople = people 
		.filter((person) => {
		return person.name.toLowerCase().search(nameFilter.toLowerCase()) != -1;
	});

	const handleChange = (type, value) => {
		if(type === "name") setNameFilter(value);
	};

	return(
		<>
			<Grid container sx={styles.root}>
				<Grid item xs={12}>
					<Header title={title} />
				</Grid>
				<Grid item container spacing="5">
					<PersonList
						people={displayedPeople}
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
					nameFilter={nameFilter}	
				/>
			</Drawer>
		</>
	);
}

export default PeopleListPageTemplate;

