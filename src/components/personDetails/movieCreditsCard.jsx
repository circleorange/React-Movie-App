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
	},
  media: { 
		height: 200,
	},
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

export default function movieCreditsCard({movieCredit}) {

	return (
		<Link to={`/movies/${movieCredit.id}`}>
			<Card sx={styles.card}>

				<CardMedia 
					sx={styles.media}
					image={movieCredit.poster_path
						? `https://image.tmdb.org/t/p/w500/${movieCredit.poster_path}` 
						: img
					}/>

				<CardContent>
					<Grid container>
						<Typography 
							variant="subtitle2"
							component="p">
							{movieCredit.title ? movieCredit.title : movieCredit.name}

						</Typography>
					</Grid>
				</CardContent>
			</Card>
		</Link>
	)
}
