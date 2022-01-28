import React from "react";
import { Link } from "react-router-dom";
import nothingHere from "../../Assets/img/nothingHere.png";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
        padding: "1rem",
        background: "#b8eed3",
      }}
    >
      <Link to={"/dogs"}>
        <button
          style={{
            margin: "3px",
            backgroundColor: "#494949",
            color: "white",
            padding: "12px 20px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            float: "right",
          }}
        >
          Back to Home
        </button>
      </Link>

      <img src={nothingHere} alt="Cute Dog" style={{ maxHeight: "90vh" }} />
    </div>
  );
}
