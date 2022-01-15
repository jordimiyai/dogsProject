import React from "react";
import { Link } from "react-router-dom";
import "./landig.css";
export default function Landing() {
  return (
    <div className="Landing">
        <div className="Title">
          <div>
            <h1>DoggoLand</h1>
          </div>
          <div className="Button">
            <Link to="/home">
              <button className="EnterSite">Let's woof!</button>
            </Link>
          </div>
        </div>
      </div>
  );
}
