import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The Lean Startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">
          <FontAwesomeIcon icon={faStar} color="orange" />
          <FontAwesomeIcon icon={faStar} color="orange" />
          <FontAwesomeIcon icon={faStar} color="orange" />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
      </div>
    </div>
  );
}

export default Product;
