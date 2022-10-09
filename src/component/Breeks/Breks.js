import React, { useEffect, useState } from "react";
import Brek from "../brek-time/Brek";

const Breks = () => {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    fetch("time.json")
      .then((res) => res.json())
      .then((tims) => setTimes(tims));
  }, []);
  return (
    <div>
      {times.map((time) => (
        <Brek time={time}></Brek>
      ))}
    </div>
  );
};

export default Breks;
