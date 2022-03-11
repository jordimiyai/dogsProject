import React from "react";
import { Link } from "react-router-dom";
import "./landig.css";
import pug from "../../Assets/img/dog-landing.jpg";

export default function Landing() {
  return (
    <div className="Landing">
      <div className="Title">
        <div>
          <h1>DoggoLand</h1>
        </div>
        <div>
          <Link to="/dogs">
           <button className="EnterSite">
              Let's woof!
              </button>
          </Link>
        </div>
      </div>
      <div className="dogPic">
        <img src={pug} alt="Nice looking pug" />
      </div>
    </div>
  );
}
