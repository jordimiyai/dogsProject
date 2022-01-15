import React from "react";
import { Link } from "react-router-dom";
import "./breed.css";

export default function Breed(props) {
  const { name, temperament, weight, image, id } = props;
  return (
    <div>
      <Link to={`/${id}`}>
        <div className="ExternalCard">
          <h3 className="CardTitle">{name}</h3>
          <img className="DogImg" src={image} alt="img not found" />
          <p>{`Weights aprox ${weight.min} ${weight.max ? (' - ' + weight.max) : ''} Kg`}</p>
          <p>Temperaments:</p>

          <div className="AllTemps">
            {temperament &&
              temperament
                .sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1))
                .map((temper) => <spam className="Temp" key={temper}>{temper}</spam>)}
          </div>
        </div>
      </Link>
    </div>
  );
}
