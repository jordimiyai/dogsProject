import React from "react";
import { Link } from "react-router-dom";
import "./breed.css";

export default function Breed(props){
    const {name, temperament, weight, image, id } = props;
    return(
        <div className="Card">
            <Link to={`/${id}`}>
            <h3>{name}</h3>                    
            <img src={image} alt="img not found"/>
            <h6>{`Weight: Min ${weight.min} Max ${weight.max}`}</h6>
            </Link>
            {temperament && temperament.map((temper) => <h6 key={temper}>{temper}
            </h6>)}
        </div>
    )
}