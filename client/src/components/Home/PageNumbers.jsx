import React from "react";
import "./home.css";

export default function PageNumbers(props) {
  let { breedsPerPage, allBreeds, pageNumber } = props;
  const pageNumbers = [];

  let totalPages = Math.ceil(allBreeds / breedsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="Numbers">
      {pageNumbers.length ? (
        <div>
          {pageNumbers.map((num) => (
            <button className='Num' key={num} onClick={() => pageNumber(num)}>
              {num}
            </button>
          ))}
        </div>
      ) : (
        <p><button className='Num'>1</button></p>
      )}
    </div>
  );
}
