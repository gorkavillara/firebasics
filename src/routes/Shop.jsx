import React, { useEffect, useState } from "react";
import axios from "axios";
import products from "../data/products";
import toast from "react-hot-toast";

const Shop = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(products);
    // axios
    //   .get("https://fakestoreapi.com/products")
    //   .then((res) => setItems(res.data))
    //   .catch((e) => console.error(e));
  }, []);

  const showToast = (item) => {
    toast(item.title);
  };
  return (
    <div>
      <h1 className="text-3xl text-cyan-700 font-semibold">
        Welcome to the shop!
      </h1>
      <h3 className="text-xl text-cyan-700">Here are the items:</h3>
      {items.length > 0 ? (
        items.map((item) => (
          <div key={item.id} onClick={() => showToast(item)}>
            {item.title}
          </div>
        ))
      ) : (
        <div className="flex justify-center">
          <div className="w-24 h-24 border-t-2 border-pink-600 rounded-full mt-6 animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default Shop;
