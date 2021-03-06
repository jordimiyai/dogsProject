import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBreeds, getTemperaments, orderBy } from "../../store/actions";
import Breeds from "../Breeds/Breeds";
import { useState } from "react";
import PageNumbers from "./PageNumbers";
import Order from "./Order";
import { ASC, DESC, HEAVIEST, LIGHTEST } from "../../store/constants";
import FilterH from "./FilterH";
import SearchBar from "./SearchBar";
import "./home.css";

export default function Home2() {
  const dispatch = useDispatch();
  const allBreeds = useSelector((state) => state.breeds);
  const order = useSelector((state) => state.order);

  const [breedsToDisplay, setBreedsToDisplay] = useState([]);
  
  useEffect(() => {
    dispatch(getBreeds());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  useEffect(() => {
    setBreedsToDisplay(allBreeds);
    pageNumber(1)
  }, [allBreeds]);

  function handleClick(e) {
    e.preventDefault();
    dispatch( orderBy(''))
    dispatch(getBreeds());
  }
  
  useEffect(() => {
    let breedsToShow = JSON.parse(JSON.stringify([...allBreeds]));

    if (order === ASC) {
      breedsToShow.sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
      );
    } else if (order === DESC) {
      breedsToShow.sort((a, b) =>
        b.name.toLowerCase() > a.name.toLowerCase() ? 1 : -1
      );
    } else if (order === LIGHTEST) {
      breedsToShow.sort((a, b) => (a.weight.min > b.weight.min ? 1 : -1));
    } else if (order === HEAVIEST) {
      breedsToShow.sort((a, b) => (a.weight.max < b.weight.max ? 1 : -1));
    } else if (!order) {
      breedsToShow = allBreeds;
    }
    setBreedsToDisplay(breedsToShow);
    pageNumber(1)
  }, [order, allBreeds]);



  //paginado
  const [currentPage, setCurrentPage] = useState(1);
  const breedsPerPage = 8;
  const lastBreedIndex = currentPage * breedsPerPage;
  const firstBreedIndex = lastBreedIndex - breedsPerPage;
  const currentBreeds = breedsToDisplay.slice(firstBreedIndex, lastBreedIndex);

  const pageNumber = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="TopBar">

        <Order />
        <FilterH />
        <SearchBar
          setBreedsToDisplay={setBreedsToDisplay}
          allBreeds={allBreeds}
        />
        <button className="Reset" onClick={(e) => handleClick(e)}>Reset All</button>
      </div>
      <Breeds allBreeds={currentBreeds}/>

      <PageNumbers
        breedsPerPage={breedsPerPage}
        allBreeds={breedsToDisplay.length}
        pageNumber={pageNumber}
        actual={currentPage}
      />
    </div>
  );
}
