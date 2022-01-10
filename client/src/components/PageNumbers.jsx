import React from "react";

export default function PageNumbers(props) {
  let { breedsPerPage, allBreeds, pageNumber } = props;
  const pageNumbers = [];

  let totalPages = Math.ceil(allBreeds / breedsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {pageNumbers.length ? (
        <div>
          {pageNumbers.map((num) => (
            <button key={num} onClick={() => pageNumber(num)}>
              {num}
            </button>
          ))}
        </div>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}
