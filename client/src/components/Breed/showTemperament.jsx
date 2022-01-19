import React from "react";

export default function ShowTempers(props) {
    const {temperament} = props
  return (
    <>
      {temperament.length ? (
        temperament
          .sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1))
          .map((temper) => (
            <p className="Temp" key={temper}>
              {temper}
            </p>
          ))
      ) : (
        <p style={{ margin: "6px 2px" }}>No temperaments available</p>
      )}{" "}
    </>
  );
}
