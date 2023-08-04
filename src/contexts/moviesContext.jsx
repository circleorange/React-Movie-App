import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favourites, setFavourites] = useState([]);
	const [myReviews, setMyReviews] = useState({});
	const [playlist, setPlaylist] = useState([]);
	const [myMovies, setMyMovies] = useState([]);

  const addToFavourites = (movie) => {
    let updatedFavourites = [...favourites];
    if (!favourites.includes(movie.id)) {
      updatedFavourites.push(movie.id);
    }
    setFavourites(updatedFavourites);
  };

  const removeFromFavourites = (movie) => {
    setFavourites(favourites.filter((mId) => mId !== movie.id));
  };

	const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

	const addToPlaylist = (movie) => {
		let updatedPlaylist = [...playlist];
		if (!playlist.includes(movie.id)) {
			updatedPlaylist.push(movie.id);
		}
		setPlaylist(updatedPlaylist);
	};

	const addToMyMovies = (movie) => {
		let myUpdatedMovieList = [...myMovies];
		myUpdatedMovieList.push(movie);
		setMyMovies(myUpdatedMovieList);
	};

  return (
		<MoviesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        addReview,
				playlist,
				addToPlaylist,
				myMovies,
				addToMyMovies,
			}}
    >
      {props.children}
    </MoviesContext.Provider>
	);
};

export default MoviesContextProvider;

