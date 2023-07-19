import {Paper, Typography} from "@mui/material";
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
					<span>{person.known_for_department}</span>
				</Typography>
			</Paper>
		</>
	);
};

export default PersonHeader;
