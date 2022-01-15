import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function NavBar() {
  return (
    <div className="Nav">
      <div className="Side">
        <Logo />
        <Link to="/addBreed">
          <div className="Left">
            <h5>Create New Breed</h5>
          </div>
        </Link>
      </div>
      <div className="Side">
        <Link to="/home">
          <div className="Right">
            <img className="Icon2" src="https://www.clipartmax.com/png/full/95-952642_randome-clipart-svg-random-icon.png" alt="icon1" />
            <h6>Surprise me!</h6>
          </div>
        </Link>
        <Link to="/home">
          <div className="Right">
            <img className="Icon2" src="https://www.clipartmax.com/png/small/12-127042_student-attendance-student-id-card-icon.png" alt="icon2" />
            <h6>About Us</h6>
          </div>
        </Link>
      </div>
    </div>
  );
}
