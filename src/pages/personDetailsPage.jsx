import React from "react";
import { useParams } from "react-router-dom";
import PersonDetails from "../components/personDetails/index";
import PageTemplate from "../components/personDetails/template";
import { getPersonDetails } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";

const PersonDetailsPage = () => {
	const { id } = useParams();
	console.log(id);
  const { data: person, error, isLoading, isError } = useQuery(
    ["person", { id: id }],
    getPersonDetails
  );
	console.log("pages.personDetailsPage.getPersonDetails", person);

	if (isLoading) {return <Spinner />;}
  if (isError) {return <h1>{error.message}</h1>;}

  return (
    <>
      {person ? (
				<>
					<PageTemplate person={person}>
						<PersonDetails person={person} />	
					</PageTemplate>
				</>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default PersonDetailsPage;

