import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="Logo">
      {" "}
      <Link to="/home">
        <div className="Logo">
          <img
            className="Icon1"
            src="https://www.pngkey.com/png/full/147-1471552_pug-png-photo-pug-png.png"
            alt=""
          />
          <div>
          DoggoLand
          </div>
        </div>
      </Link>
    </div>
  );
}
