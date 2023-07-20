export const fetchData = (api) => {
  const credParams = `?api_key=${import.meta.env.VITE_TMDB_KEY}`;
  // const extraParams = "&language=en-US&include_adult=false&page=1"; // causes errors with some API endpoints
  const request = `${api}${credParams}`;
  console.log(request); // for debugging API

  return fetch(request)
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.json().message);
      }
      return res.json();
    })
    .catch((error) => {
      throw error;
    });
};

export const getUpcomingMovies = () => {
  const upcomingMoviesAPI = "https://api.themoviedb.org/3/movie/upcoming";
  return fetchData(upcomingMoviesAPI);
};

export const getMovies = () => {
  const discoverAPI = "https://api.themoviedb.org/3/discover/movie";
  return fetchData(discoverAPI);
};

export const getGenres = () => {
  const genresAPI = "https://api.themoviedb.org/3/genre/movie/list";
  return fetchData(genresAPI);
};

export const getMovie = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  const movieAPI = `https://api.themoviedb.org/3/movie/${id}`;
  return fetchData(movieAPI);
};

export const getMovieImages = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  const movieImageAPI = `https://api.themoviedb.org/3/movie/${id}/images`;
  return fetchData(movieImageAPI);
};

export const getMovieReviews = (id) => {
  const movieReviewsAPI = `https://api.themoviedb.org/3/movie/${id}/reviews`;
  return fetchData(movieReviewsAPI).then((response) => {
    return response.results;
  });
};

export const getMovieCast = (id) => {
  const movieCastAPI = `https://api.themoviedb.org/3/movie/${id}/credits`;
  return fetchData(movieCastAPI).then((response) => {
    response.cast.sort((a, b) => b.popularity - a.popularity);
    return response.cast;
  });
};

export const getPopularMovies = () => {
  const popularMoviesAPI = "https://api.themoviedb.org/3/movie/popular";
  return fetchData(popularMoviesAPI).then((response) => {
    response.results.sort((a, b) => b.popularity - a.popularity);
    return response;
  });
};

export const getPersonDetails = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;

  const personDetailsAPI = `https://api.themoviedb.org/3/person/${id}`;
  return fetchData(personDetailsAPI);
};

// can also be used to filter for only movies or TV
export const getPersonCredits = (id) => {
  const personCreditsAPI = `https://api.themoviedb.org/3/person/${id}/combined_credits`;
  return fetchData(personCreditsAPI).then((response) => {
    response.cast.sort((a, b) => b.popularity - a.popularity);
    return response;
  });
};

export const getPopularPeople = () => {
  const popularPeopleAPI = "https://api.themoviedb.org/3/person/popular";
  return fetchData(popularPeopleAPI).then((response) => {
    response.results.sort((a, b) => b.popularity - a.popularity);
    return response.results;
  });
};

export const getPersonImages = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  const personImageAPI = `https://api.themoviedb.org/3/person/${id}/images`;
  return fetchData(personImageAPI);
};
