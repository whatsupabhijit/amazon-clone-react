import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product />
          <Product />
        </div>

        <div className="home__row">
          {/* product 1 */}
          {/* product 2 */}
          {/* product 3 */}
        </div>

        <div className="home__row">{/* product 1 */}</div>
      </div>
    </div>
  );
}

export default Home;
