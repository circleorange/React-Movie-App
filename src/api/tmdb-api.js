export const getMovies = () => {
	return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&page=1`)
		.then(res => res.json())
		.then(json => json.results);
};

export const getMovie = ID => {
	return fetch(`https://api.themoviedb.org/3/movie/${ID}?api_key=${import.meta.env.VITE_TMDB_KEY}`)
		.then(res => res.json());
};

export const getGenres = () => {
	return fetch("https://api.themoviedb.org/3/genre/movie/list?api_key="+import.meta.env.VITE_TMDB_KEY+"&language=en-US")
		.then(res => res.json())
		.then(json => json.genres);
};

export const getMovieImages = ID => {
	return fetch(`https://api.themoviedb.org/3/movie/${ID}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`)
		.then(res => res.json())
		.then(json => json.posters);
};

export const getMovieReviews = (id) => {
	return fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${import.meta.env.VITE_TMDB_KEY}`)
		.then((res) => res.json())
		.then((json) => {return json.results});
};


export const getUpcomingMovies = () => {
	return fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&page=1`)
		.then(res => res.json())
		.then(json => json.results);
};
