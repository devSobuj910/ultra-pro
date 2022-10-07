import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";

const Catagory = () => {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, []);

  const addtoprofile = () => {
    console.log("add to profile");
  };

  return (
    <div>
      <h4>select-today-exersice</h4>
      {carts.map((cart) => (
        <Cart data={cart} profile={addtoprofile}></Cart>
      ))}
    </div>
  );
};

export default Catagory;
