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
		height: 750,
	},
	media: { height: 500 },
	avatar: {
		backgroundColor: "rgb(255, 0, 0)",
	},
	header: {
		height: 50,
	}
};

export default function TvCard({serie, action}) {
	const { favourites, addToFavourites } = useContext(MoviesContext);
	const { playlist, addToPlaylist } = useContext(MoviesContext);

	if (favourites.find((id) => id === serie.id)) {serie.favourite = true;} 
	else {serie.favourite = false;}

	if (playlist.find((id) => id === serie.id)) {serie.mustWatch = true;} 
	else {serie.mustWatch = false;}

	return (
		<Card sx={styles.card}>
			<CardHeader 
				sx={styles.header} 
				avatar={ 
					serie.favourite ? (<Avatar sx={styles.avatar}><FavoriteIcon /></Avatar>) : (
					serie.mustWatch ? (<Avatar sx={styles.avatar}><PlaylistIcon /></Avatar>) : null)
				}
				title={ <Typography variant="h5" component="p">{serie.name}{" "}</Typography> }
			/>
			<CardMedia
				sx={styles.media}
				image={
					serie.poster_path
						? `https://image.tmdb.org/t/p/w500/${serie.poster_path}`
						: img
				}
			/>
			<CardContent>
				<Grid container direction="column">
					<Grid item xs={6}>
						<Typography variant="h6" component="p">
							<CalendarIcon fontSize="small" />
							{"  "} First Aired On: {serie.first_air_date}
						</Typography>
					</Grid>
					<Grid item xs={6}>
						<Typography variant="h6" component="p">
							<StarRateIcon fontSize="small" />
							{"  "}  Average Vote: {serie.vote_average}{" "}
						</Typography>
					</Grid>
				</Grid>
			</CardContent>
			<CardActions disableSpacing>
				{action(serie)}
				<Link to={`/tv/${serie.id}`}>
					<Button variant="outlined" size="medium" color="primary">
						More Info
					</Button>
				</Link>
			</CardActions>
		</Card>
	);
}
