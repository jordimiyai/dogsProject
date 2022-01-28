import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";

import Logo from "./Logo";
import { Outlet } from "react-router";
//import { useSelector } from "react-redux";
//import { useState } from "react";

export default function NavBar() {
  /*     
      const allDogs = useSelector((state) => state.allBreeds);
  const [newId, setNewId] = useState(13) 


  function newIdSetter() {
    console.log('estoy aca',allDogs)
    const randomPosition = Math.floor(Math.random() * allDogs);
    //const newId = allDogs[randomPosition].id;
    console.log(allDogs, randomPosition);
    return ;
  }*/

  return (
    <>
      <div className="Nav">
        <div className="Side">
          <Logo />
          <Link to="/dogs/addDog">
            <div className="Left">
              <h5>Create New Breed</h5>
            </div>
          </Link>
        </div>

        <div className="Side">
          <Link to={`/surprise`} replace>
            <div className="Right">
              <img
                className="Icon2"
                src="https://www.clipartmax.com/png/full/95-952642_randome-clipart-svg-random-icon.png"
                alt="icon1"
              />
              <h6>Surprise me!</h6>
            </div>
          </Link>
          <Link to="/dogs/about">
            <div className="Right">
              <img
                className="Icon2"
                src="https://www.clipartmax.com/png/small/12-127042_student-attendance-student-id-card-icon.png"
                alt="icon2"
              />
              <h6>About</h6>
            </div>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
