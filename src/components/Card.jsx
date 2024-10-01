import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ item, index, status, handleClick }) => {
  return (
    <>
      <div className="p-2 w-full sm:w-1/2 md:w-1/4 lg:w-1/4 cursor-pointer"
        key={index}
      >
        <div className="card p-4 rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <NavLink to={`/product/${item.id}`} className="block">
            <img
              className="w-full h-28 mx-auto object-contain"
              src={item.image}
              alt={item.title}
            />
            <h1 className="title mt-2 text-sm font-medium text-center">
              {item.title}
            </h1>
          </NavLink>
          <h2 className="mt-2 text-xl font-bold text-[#416A34] text-center">
            ${item.price}
          </h2>
          <button
            className={`mt-4 w-full text-white rounded-full py-3 ${
              status ? "bg-black" : "bg-[#B78744]"
            } hover:opacity-90 transition-opacity duration-200`}
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
