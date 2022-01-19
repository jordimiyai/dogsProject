import "./detail.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { BREEDS_URL } from "../../store/constants";
import ShowTempers from "../Breed/showTemperament";

export default function Detail(props) {
  const [breed, setBreed] = useState(null);
  const id = useParams()
  

  useEffect(() => {
    axios.get(BREEDS_URL + "/" + id.id).then((res) => {
      setBreed(res.data);
    });
    console.log(breed);
    return () => {
      setBreed(null);
    };
  }, []);

  return (
    <div >
      {breed && (
        <div className="Details">
          <div className="ConteinerD2">
            <img className="Image" src={breed.image} alt="img not found" />
          </div>
          <div className="ConteinerD1">
          <h2 className="BreedName">{breed.name}</h2>

            <div className="Info">

              <div className="Col">
                <h4>Weight:</h4>
                <p>{`${ breed.weight.min ?  breed.weight.min : 'n/a'} ${breed.weight.max ? (' - ' + breed.weight.max) : ''} kg`}</p>
                <h4>Height:</h4>
                <p>{`${ breed.height.min ?  breed.height.min : 'n/a'} ${breed.height.max ? (' - ' + breed.height.max) : ''} kg`}</p>
                <h4>Life span:</h4>

                <p>{breed.life_span}</p>
              </div>

              <div className="Col">
                <div className="DetailTempers">
                <h4>Temperaments:</h4>
                <ShowTempers temperament= {breed.temperament}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
