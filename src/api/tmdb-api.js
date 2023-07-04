export const fetchData = (api) => {
	const credParams = `?api_key=${import.meta.env.VITE_TMDB_KEY}`;
	// const extraParams = "&language=en-US&include_adult=false&page=1"; // error with getMovieReviews
	const request = `${api}${credParams}`;
	console.log(request); // for debugging API

	return fetch(request)
		.then(res => {
			if (!res.ok) {throw new Error(res.json().message);}
			return res.json();
		})
		.catch(error => {throw error});
};

export const getUpcomingMovies = () => {
	const upcomingMoviesAPI="https://api.themoviedb.org/3/movie/upcoming";
	return fetchData(upcomingMoviesAPI);
};

export const getMovies = () => {
	const discoverAPI="https://api.themoviedb.org/3/discover/movie";
	return fetchData(discoverAPI);
};

export const getGenres = () => {
	const genresAPI="https://api.themoviedb.org/3/genre/movie/list";
	return fetchData(genresAPI);
};

export const getMovie = (args) => {
	const [, idPart] = args.queryKey;
	const {id} = idPart;
	const movieAPI=`https://api.themoviedb.org/3/movie/${id}`;
	return fetchData(movieAPI);
};

export const getMovieImages = ({queryKey}) => {
	const [, idPart] = queryKey;
	const {id} = idPart;
	const movieImageAPI=`https://api.themoviedb.org/3/movie/${id}/images`;
	return fetchData(movieImageAPI);
};

export const getMovieReviews = async (id) => {
	const movieReviewsAPI=`https://api.themoviedb.org/3/movie/${id}/reviews`;
	return (await fetchData(movieReviewsAPI)).results;
};

export const getMovieCredits = (id) => {
	const movieCreditsAPI=`https://api.themoviedb.org/3/movie/${id}/credits`;
	return fetchData(movieCreditsAPI);
};
