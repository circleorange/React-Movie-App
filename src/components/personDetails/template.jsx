
import React from "react";
import { Grid, ImageList, ImageListItem } from "@mui/material";
import { useQuery } from "react-query";
import { getPersonImages } from "../../api/tmdb-api";
import Spinner from "../../components/spinner";
import PersonHeader from "./header";

const styles = {
  gridListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
};

const TemplatePersonPage = ({ person, children }) => {
  const { data, error, isLoading, isError } = useQuery(
    ["personImages", { id: person.id }],
    getPersonImages
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const images = data?.profiles || [];

  return (
    <>
      <PersonHeader person={person} />

      <Grid 
				container 
				spacing={5} 
				style={{ padding: "15px" }}>

        <Grid 
					item 
					xs={3}>

          <div 
						sx={styles.gridListRoot}>

            <ImageList 
							cols={2}>
              {images.map((image) => (
                <ImageListItem
                  key={image.file_path}
                  cols={1}>

                  <img
                    src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                    alt={image.file_path}/>

                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </Grid>

        <Grid 
					item 
					xs={9}>
          {children}

        </Grid>
      </Grid>
    </>
  );
};

export default TemplatePersonPage;

	
