import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CartSummary from "./components/CartSummary";
import { TbLoader3 } from "react-icons/tb";
import ProductDetails from "./components/ProductDetails";
import ShoppingCart from "./components/ShoppingCart";
import Loading from "./assets/loader.gif";


function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
  const [count, setCount] = useState(0);
  const [popup, setPopup] = useState(false);
  // const [status, setStatus] = useState(true);
  const [cartlist, setCartList] = useState([]);
  const [total, setTotal] = useState();
  const popupRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
        setFilteredData(res.data); 
      })
      .catch((err) => console.error(err));
    if (setData) {
      setLoading(false);
    }
  };

    const handleSearch = (query) => {
      if (query.trim() === "") {
        setFilteredData(data); // Reset to all products if search is empty
      } else {
        const filtered = data.filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(filtered); // Update the filtered data
      }
  };
  
  const handlePopup = () => {
    setPopup(!popup);
  };

  const handleClick = (item, id) => {
    // const x = cartlist ? cartlist.filter((e)=>e.id === item.id) : ""
    const x = cartlist.filter((e) => e.id === item.id);
    if (x.length === 0) {
      setCartList([...cartlist, item]);
      const total = cartlist.reduce(
        (acc, cval) => acc + cval.price,
        item.price
      );
      setTotal(total.toFixed(2));
    }
  };

  const removeCart = (id) => {
    const remove = cartlist.filter((item) => item.id !== id);
    setCartList(remove);
    const newTotal = remove.reduce((acc, item) => acc + item.price, 0);
    setTotal(newTotal.toFixed(2));
    // console.log(setTotal);
  };

  // console.log(cartlist)
  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setPopup(false); // Close popup
    }
  };

  useEffect(() => {
    if (popup) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popup]);
  return (
    <div className="container mx-auto relative">
      <Header
        cardlist={cartlist}
        handlePopup={handlePopup}
        handleSearch={handleSearch}
      />
      <div className="">
        {loading ? (
          <div className="flex justify-center mt-4">
            {/* <TbLoader3 className="anim h-32 w-32 mx-auto rounded-full bg-sky-400 opacity-75" /> */}
            <img src={Loading} alt="loading" />
          </div>
        ) : (
          // <span class=""></span>
          <Routes>
            <Route
              path="/"
              element={
                <ProductList
                  data={filteredData}
                  count={count}
                  setCount={setCount}
                  handleClick={handleClick}
                  // status={status}
                  // setStatus={setStatus}
                  cartlist={cartlist}
                />
              }
            ></Route>
            <Route
              path="/product/:id"
              element={
                <ProductDetails data={data} handleClicked={handleClick} />
              }
            ></Route>
            <Route
              path="/shoppingcart"
              element={<ShoppingCart cartlist={cartlist} />}
            ></Route>
          </Routes>
        )}
        {popup && (
          <div ref={popupRef}>
            <CartSummary
              count={count}
              handlePopup={handlePopup}
              cardlist={cartlist}
              removeCart={removeCart}
              total={total}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
