import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import Logo from "./../assets/nemboo_logo.png";

const Header = ({ count, handlePopup, cardlist, handleSearch }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const handleInputChange = (e) => {
      const value = e.target.value;
      setSearchQuery(value);
      handleSearch(value); // Pass the query to the parent component
    };
  return (
    <div className="header flex flex-wrap justify-between py-4 items-center px-4 md:px-8 lg:px-16">
      {/* Logo Section */}
      <NavLink to="/">
        <img
          className="logo w-24 h-auto md:w-32"
          src={Logo}
          alt="nemboo_logo"
        />
      </NavLink>

      {/* Search Bar */}
      <div className="w-full md:w-6/12 mt-4 md:mt-0">
        <input
          className="h-10 w-full border border-stone-400 px-2 outline-none rounded-sm"
          type="search"
          placeholder="Search"
          value={searchQuery}
          onChange={handleInputChange} // Capture user input
        />
      </div>

      {/* Cart Section */}
      <div
        className="relative cursor-pointer mt-4 md:mt-0 md:ml-4"
        onClick={handlePopup}
      >
        <span className="flex items-center mr-3">
          Cart
          <i className="flex justify-center items-center not-italic bg-slate-900 text-white absolute -top-2 -right-3 w-6 h-6 text-sm rounded-full">
            {cardlist.length}
          </i>
        </span>
      </div>
    </div>
  );
};

export default Header;
