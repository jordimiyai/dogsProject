import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBreeds, getTemperaments } from "../../store/actions";
import Breeds from "../Breeds/Breeds";
import { useState } from "react";
import PageNumbers from "./PageNumbers";
import SearchBar from "../SearchBar";
import Order from "./Order";
import { ASC, DESC, HEAVIEST, LIGHTEST } from "../../store/constants";
import FilterH from "./FilterH";

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
  }, [allBreeds]);

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
  }, [order, allBreeds]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getBreeds());
  }

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
      <div>
        <SearchBar
          setBreedsToDisplay={setBreedsToDisplay}
          allBreeds={allBreeds}
        />
        <Order />
        <FilterH />
        <button onClick={(e) => handleClick(e)}>Reset</button>
      </div>
      <Breeds allBreeds={currentBreeds} />
      <PageNumbers
        breedsPerPage={breedsPerPage}
        allBreeds={breedsToDisplay.length}
        pageNumber={pageNumber}
      />
    </div>
  );
}
