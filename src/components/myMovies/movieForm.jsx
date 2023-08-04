import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Card from "@mui/material/Card";
import { v4 as uuidv4 } from "uuid";

const genres = [
  { id: 1, name: "Action" },
  { id: 2, name: "Comedy" },
  { id: 3, name: "Drama" },
];

const styles = {
	card: {
		padding: "20px",
		marginBottom: "20px",
	}
};

const MovieForm = ({ onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [overview, setOverview] = useState("");
  const [genre, setGenre] = useState("");
  const [releaseDate, setReleaseDate] = useState(new Date());
  const [runtime, setRuntime] = useState("");
  const [productionCompany, setProductionCompany] = useState("");

  const handleSave = () => {
    // Create a new movie object with the form data
    const newMovie = {
			id: uuidv4(), 
      title,
      overview,
      genre,
      releaseDate,
      runtime,
      productionCompany,
    };
    onSave(newMovie);
  };

  return (
		<Card style={styles.card}>
      <h2>Add Movie</h2>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
      />
      <TextField
        label="Overview"
        value={overview}
        onChange={(e) => setOverview(e.target.value)}
        fullWidth
        multiline
        rows={4}
      />
      <TextField
        select
        label="Genres"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        fullWidth
      >
        {genres.map((genre) => (
          <MenuItem key={genre.id} value={genre.name}>
            {genre.name}
          </MenuItem>
        ))}
      </TextField>
      <div style={{ marginTop: "16px" }}>
        <label>Release Date:</label>
        <br />
        <DatePicker
          selected={releaseDate}
          onChange={(date) => setReleaseDate(date)}
        />
      </div>
      <TextField
        label="Runtime"
        value={runtime}
        onChange={(e) => setRuntime(e.target.value)}
        fullWidth
      />
      <TextField
        label="Production Company"
        value={productionCompany}
        onChange={(e) => setProductionCompany(e.target.value)}
        fullWidth
      />
      <div style={{ marginTop: "20px", textAlign: "right" }}>
        <Button variant="contained" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="contained" color="primary" onClick={handleSave} style={{ marginLeft: "10px" }}>
          Save
        </Button>
      </div>
    </Card>
  );
};

export default MovieForm;

