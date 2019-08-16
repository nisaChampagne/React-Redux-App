import React from "react";

export default function Movie(props) {
  console.log(props);
  return (
    <div className="movies">
      <div className="title">
        <p>{props.movie.title}</p>
      </div>
      <div className="description">
        <p>{props.movie.description}</p>
        <hr />
      </div>
      <p>Director: {props.movie.director}</p>
      <p>Producer: {props.movie.producer}</p>
      <p>Release Date: {props.movie.release_date}</p>
    </div>
  );
}
