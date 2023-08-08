import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png';
import {Link} from "react-router-dom";

const styles = {
  card: { 
		maxWidth: 345,
		height: 270,
		textDecoration: "none",
	},
  media: { 
		height: 200,
	},
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

export default function CastCard({actor}) {

	return (
		<Link to={`/people/${actor.id}`}>
			<Card sx={styles.card}>

				<CardMedia 
					sx={styles.media}
					image={actor.profile_path
						? `https://image.tmdb.org/t/p/w500/${actor.profile_path}` 
						: img
					}/>

				<CardContent>
					<Grid container direction="column" alignItems="center">
						<Typography 
							variant="subtitle2"
							component="p">
							{actor.name ? actor.name : ""}
						</Typography>

						<Typography
							varitant="subtitle2"
							component="p">
							{actor.character ? actor.character : ""}
						</Typography>
					</Grid>
				</CardContent>
			</Card>
		</Link>
	)
};
