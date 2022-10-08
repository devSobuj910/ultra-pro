import React from "react";

import img from "../../images/user.png";

const User = () => {
  return (
    <div>
      <div>
        <img src={img} alt="" />
        <div className="user-name">
          <h5>sobuj hasan</h5>
          <p>dhaka,bangladesh</p>
        </div>
      </div>

      <div className="user-info">
        <p>
          weight: <h4>76</h4> <span>kg</span>
        </p>

        <p>
          Hight:
          <h4>5.8 </h4>
          <span>inc</span>
        </p>

        <p>
          age: <h4>21</h4>
          <span>years</span>
        </p>
      </div>
    </div>
  );
};

export default User;
