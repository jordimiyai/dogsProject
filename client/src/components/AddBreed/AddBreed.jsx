import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getTemperaments, postBreeds } from "../../store/actions";

export default function AddBreed() {
  const dispatch = useDispatch();
  const tempers = useSelector((state) => state.temperaments);
  const navigate = useNavigate();
  const [newBreed, setNewBreed] = useState({
    name: "",
    height: {
      min: 0,
      max: 0,
    },
    weight: {
      min: 0,
      max: 0,
    },
    life_span: "",
    img: "",
    temperament: [],
  });

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  function handleChange(e) {
    setNewBreed({
      ...newBreed,
      [e.target.name]: e.target.value,
    });
  }

  function handleTempersChange(e) {
    setNewBreed({
      ...newBreed,
      temperament: [...newBreed.temperament, e.target.value],
    });
  }

  function handleWeightChange(e) {
    setNewBreed({
      ...newBreed,
      weight: {
        [e.target.name]: e.target.value,
      },
    });
  }
  function handleHeightChange(e) {
    setNewBreed({
      ...newBreed,
      height: {
        [e.target.name]: e.target.value,
      },
    });
  }

  function handleSubmit(e) {
    e.prevent.default();
    console.log(newBreed);
    dispatch(postBreeds(newBreed));
    alert("Breed created");
    setNewBreed({
      name: "",
      height: {
        min: 0,
        max: 0,
      },
      weight: {
        min: 0,
        max: 0,
      },
      life_span: "",
      img: "",
      temperament: [],
    });
    navigate("/home");
  }

  return (
    <div>
      <Link to="/home">
        <button>Back to home</button>
      </Link>
      <h2>Create a new Breed</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={newBreed.name}
            name="name"
            onChange={handleChange}
            required={true}
          />
        </div>
        <div>
          <label>Height: </label>
          <label>Min: </label>
          <input
            type="number"
            value={newBreed.height.min}
            name="min"
            onChange={handleHeightChange}
            required={true}
          />
          <label>Max: </label>
          <input
            type="number"
            value={newBreed.height.max}
            name="max"
            onChange={handleHeightChange}
            required={true}
          />
        </div>
        <div>
          <label>Weight: </label>
          <label>Min: </label>
          <input
            type="number"
            value={newBreed.weight.min}
            name="min"
            onChange={handleWeightChange}
            required={true}
          />
          <label>Max: </label>
          <input
            type="number"
            value={newBreed.weight.max}
            name="max"
            onChange={handleWeightChange}
            required={true}
          />
        </div>
        <div>
          <label>Life span: </label>
          <input
            type="text"
            value={newBreed.life_span}
            name="life_span"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Temperaments: </label>
          <select
            name="temperament"
            value={newBreed.temperament}
            onChange={handleTempersChange}
          >
            {tempers ? (
              tempers.map((temp) => (
                <option value={temp.id}>{temp.name}</option>
              ))
            ) : (
              <option>Loading</option>
            )}
          </select>
          <ul>
            <li>{newBreed.temperament.map((id) => id) + " "}</li>
          </ul>
        </div>
        <div>
          <label>Image: </label>
          <input
            type="text"
            value={newBreed.img}
            name="img"
            onChange={handleChange}
          />
        </div>
        <input type="submit"  />
      </form>
    </div>
  );
}
