import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useStateValue } from "../StateProvider";

function Product({ id, title, image, price, rating, remrating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

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
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
