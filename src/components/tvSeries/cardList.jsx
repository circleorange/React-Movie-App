import React from "react";
import Card from "./card";
import Grid from "@mui/material/Grid";

const CardList = ({series, action}) => {
  let cards = series.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Card key={m.id} serie={m} action={action} />
    </Grid>
  ));
  return cards;
};

export default CardList;

