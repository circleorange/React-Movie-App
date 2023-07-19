import React from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";

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
};

const PersonDetails = ( {person}) => {
  return (
    <>
      <Typography 
				variant="h5" 
				component="h3" 
			>
       Biograpghy 
      </Typography>

      <Typography 
				variant="h6" 
				component="p" 
			>
        {person.biography}
      </Typography>

      <Paper 
				component="ul" 
				sx={styles.chipSet}>
        
				<Chip 
					icon={<AccessTimeIcon />} 
					label={person.popularity} 
				/>
        
				<Chip
          icon={<StarRate />}
          label={`${person.birthday}`} 
				/>

        <Chip 
					label={`POB: ${person.place_of_birth}`} 
				/>
      </Paper>
    </>
  );
};
export default PersonDetails;
