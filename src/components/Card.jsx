import React, { useState } from "react";

const Card = ({ item, index, status, setStatus, setCount, handleClick }) => {
  return (
    <>
      <div className="p-4 w-12/12 sm:w-6/12 md:w-3/12" key={index}>
        <div className="card  p-4 rounded overflow-hidden shadow-lg">
          <img
            className="full-width h-28 mx-auto"
            src={item.image}
            alt="classic"
          />
          <h1 className="mt-2 text-sm font-medium">{item.title}</h1>
          <h2 className="mt-2 text-xl font-bold text-[#416A34]">
            ${item.price}
          </h2>
          <button
            className={`mt-4 w-full text-white rounded py-3 ${
              status ? "bg-[#000]" : "bg-[#B78744]"
            }`}
            onClick={() => handleClick(item)}
          >
            {status ? "Remove from Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
