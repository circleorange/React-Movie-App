import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SortIcon from '@mui/icons-material/Sort';
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useQuery } from "react-query";
import Spinner from "../spinner";

const styles={
	root: {maxWidth: 345},
	media: {height: 300},
	formControl: {
		margin: 1,
		minWidth: 220,
		backgroundColor: "rgb(255,255,255)"
	},
};

export default function FilterPeopleCard(props) {
	const handleUserInput = (e, type, value) => {
		e.preventDefault();
		props.onUserInput(type, value);
	};
	const handleTextChange = (e, props) => {handleUserInput(e, "name", e.target.value)};

	return <>
		<Card sx={styles.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <FilterAltIcon fontSize="large" />
          Filter actors        
				</Typography>

        <TextField
          sx={styles.formControl}
          id="filled-search"
          label="Search field"
          type="search"
          value={props.nameFilter}
          variant="filled"
          onChange={handleTextChange}
        />
    	</CardContent>
    </Card>

    <Card sx={styles.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h1">
            <SortIcon fontSize="large" />
            Sort actors
          </Typography>
        </CardContent>
      </Card>
		</>
};


