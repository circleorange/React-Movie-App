import React, {useContext} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png';
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { MoviesContext } from "../../contexts/moviesContext";
import PlaylistIcon from "@mui/icons-material/PlaylistAdd";

const styles = {
  card: { 
		maxWidth: 345,
		height: 720,
	},
  media: { 
		height: 500 
	},
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
	header: {
		height: 50,
	},
	cardActions: {
		display: "flex", 
		justifyContent: "center",
	}
};

export default function MovieCard({movie}) {
	const formattedReleaseDate = movie.releaseDate.toLocaleDateString();

	return (
		<Card sx={styles.card}>
			<CardHeader 
				sx={styles.header} 
				title={ <Typography variant="h5" component="p">{movie.title}{" "}</Typography> }
			/>
			<CardMedia
				sx={styles.media}
				image={
					movie.poster_path
						? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
						: img
				}
			/>
			<CardContent>
				<Grid container>
					<Grid item xs={6}>
						<Typography variant="h6" component="p">
							<CalendarIcon fontSize="small" />
							{formattedReleaseDate}
						</Typography>
					</Grid>
					<Grid item xs={6}>
						<Typography variant="h6" component="p">
							<StarRateIcon fontSize="small" />
							{"  "} {movie.genre}{" "}
						</Typography>
					</Grid>
				</Grid>
			</CardContent>
			<CardActions disableSpacing sx={styles.cardActions}>
				<Link to={`/my-movies/${movie.id}`}>
					<Button variant="outlined" size="medium" color="primary">
						More Info
					</Button>
				</Link>
			</CardActions>
		</Card>
	);
}
