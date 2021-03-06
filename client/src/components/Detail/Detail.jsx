import "./detail.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { BREEDS_URL } from "../../store/constants";
import ShowTempers from "../Breed/showTemperament";

export default function Detail() {
  const [breed, setBreed] = useState(null);
  const id = useParams();

  useEffect(() => {
    axios.get(BREEDS_URL + "/" + id.id).then((res) => {
      setBreed(res.data);
    });
    console.log(breed);
    return () => {
      setBreed(null);
    };
  }, [id.id]);

  return (
    <div style={{display:'flex', justifyContent:'center', textAlign:'center'}}>
      {breed && (
        <div className="Details">
          <img className="Image" src={breed.image} alt="img not found" />
          <div className="rightSide">
            <h2 className="BreedName">{breed.name}</h2>

            <div className="Info">
              <div className="Col">
                <h4>Weight:</h4>
                <p>{`${breed.weight.min ? breed.weight.min : "n/a"} ${
                  breed.weight.max ? " - " + breed.weight.max : ""
                } kg`}</p>
                <h4>Height:</h4>
                <p>{`${breed.height.min ? breed.height.min : "n/a"} ${
                  breed.height.max ? " - " + breed.height.max : ""
                } cm`}</p>
                <h4>Life span:</h4>

                <p>{breed.life_span}</p>
              </div>

              <div className="Col">
              <h4>Temperaments:</h4>

                <div className="DetailTempers">

                  <ShowTempers
                    className="showTemps"
                    temperament={breed.temperament}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
