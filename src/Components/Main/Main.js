import React from "react";
import "./Main.css";

const Main = (props) => {
  const { name, img, text, time, age } = props.card;
  return (
    <div className="col">
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"> {name} </h5>
          <p className="card-text">{text}</p>
          <p>For Age: {age}</p>
          <p>
            <span>Time required : {time}s</span>
          </p>
          <button className="w-100 bg-warning fw-bold p-2 border-0">
            Add to list
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
