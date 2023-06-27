import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Routes, Route, Link } from "react-router-dom";
import MoviePage from "./pages/movieDetailsPage";
import HomePage from "./pages/homePage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage.jsx";
import MovieReviewPage from "./pages/movieReviewPage";

const App = () => {
  return(
    <BrowserRouter>
	    <ul>
		    <li><Link to="/">Home</Link></li>
		    <li><Link to="/movies/favourites">Favourites</Link></li>
	    </ul>
      <Routes>
	      <Route 
		      path="/movies/favourites"
		      element={ <FavouriteMoviesPage /> } 
	      />
        <Route path="/movies/:id" element={ <MoviePage /> } />
        <Route path="/" element={ <HomePage /> } />
        <Route path="*" element={ <Navigate to="/" /> } />
				<Route path="/reviews/:id" element={<MovieReviewPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
