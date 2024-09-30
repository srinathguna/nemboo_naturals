import React from "react";

const ShoppingCart = ({ cartlist }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="mt-6 text-lg font-semibold text-center sm:text-left">
        {cartlist.length === 0
          ? "Your NEMBOONATURALS Cart is empty."
          : "Shopping Cart"}
      </h1>

      {cartlist.length > 0 && (
        <div className="mt-8 space-y-6">
          {cartlist.map((item, id) => (
            <div
              key={id}
              className="flex flex-col sm:flex-row items-center justify-between border-b pb-4 border-gray-300"
            >
              {/* Product Image */}
              <div className="w-full sm:w-2/12 mb-4 sm:mb-0">
                <img
                  className="w-full h-32 object-contain rounded"
                  src={item.image}
                  alt={item.title}
                />
              </div>

              {/* Product Details */}
              <div className="w-full sm:w-8/12 text-center sm:text-left px-4">
                <h2 className="text-md font-semibold">{item.title}</h2>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>

              {/* Delete Button */}
              <div className="w-full sm:w-2/12 text-center sm:text-right">
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
