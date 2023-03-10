import React from "react";

export const Navbar = () => {
  return (
    <div className="navbox">
      <div className="leftside">
        <img
          src="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/11/23065530/ecommerce-1992280_960_720-300x225.png"
          alt=""
        />
      </div>

      <div className="rightside">
        <Link to="/signup">SIGNUP</Link>
        <Link to="/login" className="navlink">
          LOGIN
        </Link>
      </div>
    </div>
  );
};
