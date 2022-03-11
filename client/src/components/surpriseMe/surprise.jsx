import "./surprise.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BREEDS_URL } from "../../store/constants";
import ShowTempers from "../Breed/showTemperament";
import { useSelector } from "react-redux";

export default function Surprise() {
  const [breed, setBreed] = useState(null);
  const [showTimer, setShowTimer] = useState(false);
  const allDogs = useSelector((state) => state.allBreeds);
  const randomPosition = function () {
    let max = allDogs.length ? allDogs.length : 100;
    return Math.floor(Math.random() * max);
  };
  const [newId, setNewId] = useState(randomPosition());
  function newIdSetter() {
    setNewId(randomPosition());
    return;
  }
  useEffect(() => {
    axios
      .get(BREEDS_URL + "/" + newId)
      .then((res) => {
        setBreed(res.data);
      })
      .catch((e) => {
        console.log(e);
        newIdSetter();
      });
  }, [newId]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {breed && (
          <div className="Details" style={{flexDirection: "column"}}>
             <button onClick={newIdSetter} className="surprisebtn">
                Surprise me, Again!
              </button>
            <div>
           
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
                    } kg`}</p>
                    <h4>Life span:</h4>

                    <p>{breed.life_span}</p>
                  </div>

                  <div className="Col">
                    <div className="DetailTempers">
                      <h4>Temperaments:</h4>

                      <ShowTempers
                        className="showTemps"
                        temperament={breed.temperament}
                      />
                    </div>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
