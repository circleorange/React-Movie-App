import {Chip, Paper, Typography} from "@mui/material";
import React from "react";

const styles = {
    root: {  
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
};

const PersonHeader = (props) => {
	const person = props.person;
	
	return (
		<>
			<Paper
				component="div" 
				sx={styles.root}>
				<Typography 
					variant="h4"
					component="h3">
					{person.name}
					<br />
					<Chip label={`Known for: ${person.known_for_department}`} />
					<Chip label={`Popularity: ${person.popularity}`} />
					<Chip label={`Birthday: ${person.birthday}`} />
					<Chip label={`Birthplace: ${person.place_of_birth}`} />
				</Typography>
			</Paper>
		</>
	);
};

export default PersonHeader;
