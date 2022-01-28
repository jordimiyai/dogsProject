import React from "react";
import { Link } from "react-router-dom";
import "./breed.css";
import ShowTempers from "./showTemperament";

export default function Breed(props) {
  const { name, temperament, weight, image, id, height } = props;
  return (
    <div>
      <Link to={`${id}`}>
        <div className="ExternalCard">
          <h3 className="CardTitle">{name}</h3>
          <img className="DogImg" src={image} alt="img not found" />
          <p>{`Weights aprox ${weight.min ? weight.min : 'n/a'} ${weight.max ? (' - ' + weight.max) : ''} Kg`}</p>
          <p>Temperaments:</p>

          <div className="AllTemps">
            <ShowTempers temperament={temperament}/>
           
          </div>
        </div>
      </Link>
    </div>
  );
}
