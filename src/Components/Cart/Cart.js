import React from "react";
import "./Cart.css";

const Cart = (props) => {
  let { setTimeForWorkOut } = props;
  let { img, time, name, age, text } = props.gym;
  return (
    <div className="col">
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"> {name} </h5>
          <p className="card-text">{text}</p>
          <p>For Age: {age}</p>
          <p>
            <span>Time : {time}s</span>
          </p>
          <button
            onClick={(event) => setTimeForWorkOut(event, props.gym)}
            className="w-100 bg-warning fw-bold p-2 border-0"
          >
            Add to list
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
