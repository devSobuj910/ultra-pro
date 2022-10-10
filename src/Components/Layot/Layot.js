import React, { useEffect, useState } from "react";
import Main from "../Main/Main";
import Saidbar from "../Saidbar/Saidbar";
import "./Layot.css";

const Layot = () => {
  const [cards, setCards] = useState([]);
  console.log(cards);

  useEffect(() => {
    fetch("faceData.json")
      .then((res) => res.json())
      .then((cards) => setCards(cards));
  }, []);

  return (
    <div className="container mt-3 mb-3">
      <div className="row">
        <div className="col-12 col-sm-8 col-lg-9 col-md-9  ">
          <h5 className="text-left">Select your day exersise</h5>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-3">
            {cards.map((card) => (
              <Main card={card}></Main>
            ))}
          </div>
        </div>

        <div className="col-12 col-sm-4 col-md-3 cal-lg-3 ">
          <Saidbar></Saidbar>
        </div>
      </div>

      {/* <Question></Question> */}
    </div>
  );
};

export default Layot;
