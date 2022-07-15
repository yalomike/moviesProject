import React from "react";

export default function Card({ item }) {
  return (
    <div key={item} className="card-body1">
      <img src={item.Poster} alt="" />
      <h4> Title: {item.Title} </h4>
      <p> Year: {item.Year}</p>
    </div>
  );
}
