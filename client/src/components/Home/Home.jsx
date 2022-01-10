import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBreeds, filterByOriginal, getTemperaments, filterByTemper } from "../../store/actions";
import { Link } from "react-router-dom";
import Breeds from "../Breeds/Breeds";
import { useState } from "react";
import PageNumbers from "../PageNumbers";

export default function Home() {
  const dispatch = useDispatch();
  const allBreeds = useSelector((state) => state.breeds);
  const allTemperaments = (useSelector((state)=> state.temperaments)).sort(sortFunction);
  
  const [currentPage, setCurrentPage] = useState(1);
  const breedsToShow = 8;
  const lastBreedIndex = currentPage * breedsToShow;
  const firstBreedIndex = lastBreedIndex - breedsToShow;
  const currentBreeds = allBreeds.slice(firstBreedIndex, lastBreedIndex);

   function sortFunction(a, b) {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      }



  const pageNumber = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getBreeds());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getBreeds());
  }

  function handleFilterOriginality(e) {
    dispatch(filterByOriginal(e.target.value));
  }

  function handleFilterTemper(e){
    dispatch(filterByTemper(e.target.value));
  }

  return (
    <div>
      <h1>DoggoLand</h1>
      <Link to="/addBreed">
        <button> Create New Breed</button>
      </Link>
      <button onClick={(e) => handleClick(e)}>Reset</button>
      <div>
        <h3>order by</h3>
        <select>
          <option value="asc">A to Z</option>
          <option value="desc">Z to A</option>
        </select>
        <select>
          <option value="light">Lighter</option>
          <option value="heavy">Hevyer</option>
        </select>
        <h3>Filter by</h3>
        <select onChange={(e) => handleFilterOriginality(e)}>
          <option value="all" selected>All Breeds</option>
          <option value="original">Original Breeds</option>
          <option value="created">Created Breeds</option>
        </select>
        <select onChange={(e) => handleFilterTemper(e)}>
            <option value="all" selected>All Temperaments</option>
          {
              allTemperaments ? allTemperaments.map(temper=> {
                  return <option value={temper.name} >{temper.name}</option>
              }):
              <option>Temperaments</option>
          }
        </select>
      </div>
      <Breeds allBreeds={currentBreeds} />
      <PageNumbers
        breedsPerPage={breedsToShow}
        allBreeds={allBreeds.length}
        pageNumber={pageNumber}
      />
    </div>
  );
}
