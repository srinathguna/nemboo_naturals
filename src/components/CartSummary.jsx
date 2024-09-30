import React from "react";
import { NavLink } from "react-router-dom";

const CartSummary = ({ total, cardlist, removeCart, count, handlePopup }) => {
  return (
    <div className="cartsum absolute top-20 right-0 shadow-md p-4 bg-white w-full sm:w-8/12 md:w-6/12 lg:w-4/12 z-50">
      <h2 className="text-md font-bold mb-2 uppercase border-b-2 border-spacing-1 pb-1">
        Cart Summary ({cardlist.length})
      </h2>
      {cardlist.length > 0 ? (
        <>
          {cardlist.map((item, index) => {
            return (
              <div key={index} className="flex border-b-2 py-2">
                <div className="flex items-center w-8/12">
                  <img
                    className="h-10 w-12 object-contain"
                    src={item.image}
                    alt={item.title}
                  />
                  <h1 className="ml-2 text-sm w-8/12">{item.title}</h1>
                </div>
                <div className="w-4/12 flex justify-end items-center">
                  <span className="font-bold mr-4">${item.price}</span>
                  <i
                    className="cursor-pointer text-red-500 not-italic font-bold text-sm"
                    onClick={() => removeCart(item.id)}
                  >
                    X
                  </i>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <p className="text-center font-bold my-4">Your cart is empty</p>
      )}
      {cardlist.length > 0 && (
        <>
          <div className="flex justify-between items-center mt-4">
            <NavLink to="/shoppingcart">
              <button className="my-3 p-2 text-black border rounded-xl text-sm bg-gray-200 hover:bg-gray-300 transition">
                Go to Cart
              </button>
            </NavLink>
            <h3 className="font-bold text-lg">Total: ${total}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default CartSummary;
