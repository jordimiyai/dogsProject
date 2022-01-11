import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBreeds,
  filterByOriginal,
  getTemperaments,
  filterByTemper,
  orderBy,
} from "../../store/actions";
import { Link } from "react-router-dom";
import Breeds from "../Breeds/Breeds";
import { useState } from "react";
import PageNumbers from "../PageNumbers";
import {
  ASC,
  DESC,
  HEAVIEST,
  LIGHTEST,
} from "../../store/constants";
import SearchBar from "../SearchBar";

export default function Home2() {
  const dispatch = useDispatch();
  const allBreeds = useSelector((state) => state.breeds);
  const allTemperaments = useSelector((state) => state.temperaments);


  const order = useSelector((state) => state.order);

  const [breedsToDisplay, setBreedsToDisplay] = useState([]);

  useEffect(() => {
    setBreedsToDisplay(allBreeds);
  }, [allBreeds]);

  let breedsToShow;
  useEffect(() => {
    breedsToShow = JSON.parse(JSON.stringify([...allBreeds]));

    if (order === ASC) {
      breedsToShow.sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
      );
    } else if (order === DESC) {
      breedsToShow.sort((a, b) =>
        b.name.toLowerCase() > a.name.toLowerCase() ? 1 : -1
      );
    } else if (order === LIGHTEST) {
      breedsToShow.sort((a, b) =>
        a.weight.min > b.weight.min ? 1 : -1
      );
    } else if (order === HEAVIEST) {
      breedsToShow.sort((a, b) =>
      a.weight.max < b.weight.max ? 1 : -1
      );
    } else if (!order) {
      breedsToShow = allBreeds;
    }
    setBreedsToDisplay(breedsToShow);
  }, [order]);

 

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

  function handleFilterTemper(e) {
    dispatch(filterByTemper(e.target.value));
  }

  function handleOrderSelector(e){
      dispatch(orderBy(e.target.value))
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
      <h1>DoggoLand</h1>
      <Link to="/addBreed">
        <button> Create New Breed</button>
      </Link>

      <button onClick={(e) => handleClick(e)}>Reset</button>
      <SearchBar/>
      <div>
        <h3>order by</h3>
        <select onChange={e => handleOrderSelector(e)}>
        <option value=''>Order By</option>
          <option value={ASC}>A to Z</option>
          <option value={DESC}>Z to A</option>
          <option value={LIGHTEST}>Lightest first</option>
          <option value={HEAVIEST}>Heaviest first</option>
        </select>
        <h3>Filter by</h3>
        <select onChange={(e) => handleFilterOriginality(e)}>
          <option value="all">By Originality</option>
          <option value="original">Original Breeds</option>
          <option value="created">Created Breeds</option>
        </select>
        <select onChange={(e) => handleFilterTemper(e)}>
          <option value="all">By Temperaments</option>
          {allTemperaments ? (
            allTemperaments.map((temper) => {
              return <option value={temper.name}>{temper.name}</option>;
            })
          ) : (
            <option>Temperaments</option>
          )}
        </select>
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
