import React, { useState } from "react";
import Axios from "axios";

const UserForm = () => {
  const [filmId, setFilmId] = useState(0);

  const requestMovie = (filmId) => {
    Axios.get("http://localhost:3001/movies").then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div>
      <h1>Select movie from database</h1>
      <form>
        <input
          type="number"
          placeholder="Select id"
          min="0"
          defaultValue="0"
          onChange={(event) => {
            setFilmId(parseInt(event.target.value));
          }}
        />
      </form>
      <br />
      <button
        type="submit"
        onClick={(e) => {
          requestMovie(filmId);
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default UserForm;
