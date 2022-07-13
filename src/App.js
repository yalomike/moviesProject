import "./App.css";
import React from "react";
import { useState, useEffect } from "react";

export default function App() {
  const [results, setResults] = useState([]);
  const [searchText, setSearch] = useState("");

  const url = `http://www.omdbapi.com/?s=${searchText}&apikey=541bfab2`;

  useEffect(() => {
    fetchMovies();
  }, []);

  const onInputChange = (e) => {
    setSearch(e.target.value);
  };

  const fetchMovies = async () => {
    const response = await fetch(url);
    // {"Search":[{"Title":"Indiana Jones and the Raiders of the Lost Ark","Year":"1981","imdbID":"tt0082971","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNTU2ODkyY2MtMjU1NC00NjE1LWEzYjgtMWQ3MzRhMTE0NDc0XkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_SX300.jpg"},{"Title":"Lost","Year":"2004–2010","imdbID":"tt0411008","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BNzhlY2E5NDUtYjJjYy00ODg3LWFkZWQtYTVmMzU4ZWZmOWJkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"},{"Title":"Lost in Translation","Year":"2003","imdbID":"tt0335266","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTUxMzk0NDg1MV5BMl5BanBnXkFtZTgwNDg0NjkxMDI@._V1_SX300.jpg"},{"Title":"The Lost World: Jurassic Park","Year":"1997","imdbID":"tt0119567","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMDFlMmM4Y2QtNDg1ZS00MWVlLTlmODgtZDdhYjY5YjdhN2M0XkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SX300.jpg"},{"Title":"Home Alone 2: Lost in New York","Year":"1992","imdbID":"tt0104431","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNDI1MzM0Y2YtYmIyMS00ODE3LTlhZjEtZTUyNmEzMTNhZWU5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"Lost Highway","Year":"1997","imdbID":"tt0116922","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZDBmMjg0MWMtNTQ3MS00NGQ5LTg4YzQtNzA1NTk2MWQ2NzY3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"},{"Title":"The Lost Boys","Year":"1987","imdbID":"tt0093437","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMWEzNmUxZTMtZjY0My00OGNmLWIyNDctODM2YzZjM2YwZWEwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"Atlantis: The Lost Empire","Year":"2001","imdbID":"tt0230011","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNjM2NzNjMDAtZTAyMi00NTQzLWFlMTctNTUzMGE1ODE2NDRlXkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg"},{"Title":"Lost in Space","Year":"2018–2021","imdbID":"tt5232792","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BZTY5YjQwYmEtOWJiNy00NDBmLTgxM2YtMmVkMmI0NzE1N2FjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_SX300.jpg"},{"Title":"The Lost City of Z","Year":"2016","imdbID":"tt1212428","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNjAyN2QxOTItOGQ0YS00NmQxLWIxMjEtMDdkZmY0NDU5OWUzXkEyXkFqcGdeQXVyMTk1MDM0OTc@._V1_SX300.jpg"}],"totalResults":"5012","Response":"True"}
    const data = await response.json();
    console.log(data.Search);
    setResults(data);
  };

  // const makeImages = ([{ data }]) => {
  //   for (let data of data) {
  //     if (shows.Search.Poster) {
  //       const img = document.createElement("IMG");
  //       img.src = Array.map[0][1];
  //       document.body.append(img);
  //     }
  //   }
  // };
  // console.log("DONE!");

  return (
    <div>
      <div className="App-header">
        <div className="input-text input-group-lg justify-content-center  ">
          <input
            onChange={onInputChange}
            value={searchText}
            className="form-control form-control "
            type="text"
            placeholder="Any special movie?"
          />

          <br></br>

          <button
            className="btn-primary input-text text-center "
            type="submit"
            onClick={fetchMovies}
          >
            Search
          </button>

          <br></br>
          <br></br>
          <br></br>

          <List data={results} />
        </div>
      </div>
    </div>
  );
}

function List({ data }) {
  if (data.Response === "True") {
    data.Search.map((item) => (
      <div className="movie-info text-uppercase text-dark">
        <img src={item.Poster} alt="" />
        <h4>Title: {item.Title}</h4>
        <p>Year: {item.Year}</p>
        <p>Writer: {item.Writer}</p>
        <p>{item.Response}</p>
      </div>
    ));
  } else {
    return <p> No Movie found </p>;
  }
}
