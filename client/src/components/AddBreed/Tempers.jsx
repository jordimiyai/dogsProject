import React from "react";

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
        <div>
          {temperament && temperament.map((id) => (
            <span>
              {allTempers.find((t) => t.id === parseInt(id)).name}
              <button value={id} onClick={handleClick}>
                x
              </button>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
