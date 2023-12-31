import React from "react";
import PageTemplate from "../components/templatePeopleListPage";
import {getPopularPeople} from "../api/tmdb-api";
import {useQuery} from "react-query";
import Spinner from "../components/spinner";

const popularPeoplePage = () => {
const {data, error, isLoading, isError} = useQuery("people", getPopularPeople);
	if (isLoading) {return <Spinner />;}
	if (isError) {return <h1>{error.message}</h1>;}
	const people = data ? data : [];

	console.log("pages.peoplePage.people", people);

	return(
		<PageTemplate
			title='Current Top Actors'
			people={people}	
		/>
	)
};

export default popularPeoplePage;
