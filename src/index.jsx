import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import MoviePage from "./pages/movieDetailsPage";
import HomePage from "./pages/homePage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage.jsx";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from "./components/siteHeader";

const App = () => {
  return(
    <BrowserRouter>
			<SiteHeader />
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
