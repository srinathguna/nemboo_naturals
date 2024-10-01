import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./../assets/loader.gif";

const ProductDetails = ({ handleClicked, cartlist }) => {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    productDetail();
  }, [id]);

  const productDetail = async () => {
    await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProductData(res.data))
      .catch((err) => console.error(err));
  };

  if (!productData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <img src={Loader} alt="Loading..." />
      </div>
    );
  }

  const handleClick = () => {
    handleClicked(productData);
  };

  const isAdded = cartlist
    ? cartlist.filter((e) => e.id === productData.id)
    : [];

  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:items-start p-4 md:p-8">
      {/* Image Section */}
      <div className="w-full md:w-5/12 lg:w-4/12 mb-4 md:mb-0">
        <img
          className="w-full h-auto object-contain"
          src={productData.image}
          alt={productData.title}
        />
      </div>

      {/* Product Details Section */}
      <div className="w-full md:w-7/12 lg:w-6/12 md:pl-8">
        <h3 className="text-sm font-medium uppercase text-gray-700">
          {productData.category}
        </h3>
        <h3 className="mt-1 text-xl md:text-2xl font-medium text-gray-900">
          {productData.title}
        </h3>
        <h1 className="mt-4 text-2xl md:text-3xl font-bold text-green-700">
          ${productData.price}
        </h1>
        <p className="mt-4 text-sm md:text-base text-gray-600">
          {productData.description}
        </p>
        <button
          className={`mt-6 py-3 px-6 w-full md:w-auto text-white rounded-full ${
            isAdded.length > 0 ? "bg-black" : "bg-[#B78744]"
          } hover:opacity-90 transition-opacity duration-200`}
          onClick={handleClick}
        >
          {isAdded.length > 0 ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
