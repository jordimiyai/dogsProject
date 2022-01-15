import React from "react";
import "./addBreed.css";

export default function Tempers(props) {
  const {
    temperament,
    handleTempersChange,
    allTempers,
    temperSelect,
    handleClick,
  } = props;

  return (
    <div>
      <label>Temperaments: </label>
      <select
        name="temperament"
        value={temperament}
        onChange={handleTempersChange}
        multiple={false}
        required={true}
      >
        <option>Add temperament</option>
        {temperSelect.temperaments ? (
          temperSelect.temperaments.map((temp) => (
            <option value={temp.id} key={temp.id}>
              {temp.name}
            </option>
          ))
        ) : (
          <option>Loading</option>
        )}
      </select>
      <div>
        <div className="TemperContainer">
          {temperament &&
            temperament.map((id) => (
              <div className="IndividualTemper">
                {allTempers.find((t) => t.id === parseInt(id)).name}
                <button className="DelTemper" value={id} onClick={handleClick}>
                  x
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
