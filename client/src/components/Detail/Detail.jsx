import "./detail.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { BREEDS_URL } from "../../store/constants";

export default function Detail() {
  const [breed, setBreed] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    axios.get(BREEDS_URL + "/" + id).then((res) => {
      setBreed(res.data);
    });
    console.log(breed);
    return () => {
      setBreed(null);
    };
  }, [breed, id]);

  return (
    <div>
      {breed ? (
        <div>
          <h3>{breed.name}</h3>
          <img src={breed.image} alt="img not found" />
          <h6>{`Weight: Min ${breed.weight.min} Max ${breed.weight.max}`}</h6>
          <h6>{`Height: Min ${breed.height.min} Max ${breed.height.max}`}</h6>
          <h6>{breed.life_span}</h6>
          {breed.temperament &&
            breed.temperament.map((temper) => <h6 key={temper}>{temper}</h6>)}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
