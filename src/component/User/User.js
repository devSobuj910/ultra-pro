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
        <p>weight:</p>

        <p>Hight:</p>

        <p></p>
      </div>
    </div>
  );
};

export default User;
