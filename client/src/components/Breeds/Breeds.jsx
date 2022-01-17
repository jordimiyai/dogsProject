import React from "react";
import Breed from "../Breed/Breed";
import "./breeds.css";

export default function Breeds(props) {
  const { allBreeds } = props;
  return (
    <div className="Breeds">
      {
        allBreeds &&
      allBreeds.map((br) => {
          return (
            <Breed
              key={br.id}
              name={br.name}
              image={br.image}
              temperament={br.temperament}
              weight={br.weight}
              id={br.id}
            />
          );
        })}
        { 
        allBreeds.length === 0 &&
        <div>
            No Breeds Match
        </div>
        }
    </div>
  )
}
