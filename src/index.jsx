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
import PopularMoviesPage from "./pages/popularMoviesPage";
import PeoplePage from "./pages/peoplePage";
import MenuOptionsContext from "./contexts/menuOptionsContext";
import PersonPage from "./pages/personDetailsPage";
import MyMoviesPage from "./pages/myMovies";
import TvSeriesPage from "./pages/tvSeriesPage";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 360000,
			refetchInterval: 360000,
			refetchOnWindowFocus: false
		},
	},
});

const menuOptions = [
  { label: "Home", path: "/" },
  { label: "Upcoming", path: "/movies/upcoming" },
  { label: "Popular", path: "/movies/popular" },
	{ label: "TV Series", path: "/tv" },
  { label: "Favorites", path: "/movies/favourites" },
  { label: "Top Actors", path: "/people" },
	{ label: "My Movies", path: "/movies/my-movies" },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MenuOptionsContext.Provider value={menuOptions}>
        <BrowserRouter>
          <SiteHeader />
          <MoviesContextProvider>
            <Routes>
              <Route
                path="/movies/favourites"
                element={<FavouriteMoviesPage />}
              />
              <Route path="/movies/:id" element={<MoviePage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="/reviews/:id" element={<MovieReviewPage />} />
              <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
              <Route path="/reviews/form" element={<AddMovieReviewPage />} />
              <Route path="/movies/popular" element={<PopularMoviesPage />} />
              <Route path="/people" element={<PeoplePage />} />
							<Route path="/people/:id" element={<PersonPage />} />
							<Route path="/movies/my-movies" element={<MyMoviesPage />} />
							<Route path="/tv" element={<TvSeriesPage />} />
            </Routes>
          </MoviesContextProvider>
        </BrowserRouter>
      </MenuOptionsContext.Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
