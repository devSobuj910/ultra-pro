import React from "react";

const Cart = (props) => {
  const { name, text, img, age, time } = props.data;

  return (
    <div>
      <div>
        <div className="card">
          <img src={img} alt="" />
          <div className="card-body">
            <h3 className="cart-title">{name}</h3>
            <span className="card-text">{text}</span>
            <p>For-age: {age} </p>
            <p>time-req: {time}</p>
            <button onClick={() => props.profile()}>add-to-list</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
