import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import MoviePage from "./pages/movieDetailsPage";
import HomePage from "./pages/homePage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage.jsx";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from "./components/siteHeader";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import {QueryClientProvider, QueryClient} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from "./pages/addMovieReviewPage";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 360000,
			refetchInterval: 360000,
			refetchOnWindowFocus: false
		},
	},
});

const App = () => {
  return(
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
			<SiteHeader />
				<MoviesContextProvider>
	    <Routes>
	      <Route 
		      path="/movies/favourites"
		      element={ <FavouriteMoviesPage /> } 
	      />
        <Route path="/movies/:id" element={ <MoviePage /> } />
        <Route path="/" element={ <HomePage /> } />
        <Route path="*" element={ <Navigate to="/" /> } />
				<Route path="/reviews/:id" element={<MovieReviewPage/>} />
				<Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
				<Route path="/reviews/form" element={<AddMovieReviewPage/>} />
      </Routes>
</MoviesContextProvider>
    </BrowserRouter>
			<ReactQueryDevtools initialIsOpen={false} />
</QueryClientProvider>

  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
