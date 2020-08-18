import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
    </nav>
  );
}

export default Header;
