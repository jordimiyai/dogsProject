import React from "react";
import Breed from "../Breed/Breed";
import Loading from "../Loading";
import "./breeds.css";

export default function Breeds(props) {
  const { allBreeds } = props;
  return (
    <div className="Breeds">
      {allBreeds.length ? (
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
        })
      ) : (
        <Loading />
      )}
    </div>
  );
}
