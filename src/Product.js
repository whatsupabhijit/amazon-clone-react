import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Product({ id, title, image, price, rating, remrating }) {
  // const rem_rating = 5 - rating;

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>Rs. </small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {/* <span role="img">⭐</span> */}
          {Array(rating)
            .fill()
            .map((_, i) => (
              <FontAwesomeIcon icon={faStar} color="orange" />
            ))}
          {Array(remrating)
            .fill()
            .map((_, i) => (
              <FontAwesomeIcon icon={faStar} />
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
