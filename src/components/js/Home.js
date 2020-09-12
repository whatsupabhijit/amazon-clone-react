import React from "react";
import "../css/Home.css";
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
          <Product
            id={1133334312}
            title="The Lean Startup"
            price={99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/41niH-BNuvL._SX326_BO1,204,203,200_.jpg"
            }
            rating={4}
            remrating={1}
          />
          <Product
            id={1116512}
            title="The Lean Startup"
            price={10000}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/81BDpSIwu3L._UL1500_.jpg"
            }
            rating={4}
            remrating={1}
          />
          <Product
            id={111234112}
            title="The Lean Startup"
            price={59999}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/5103Xi7yQgL._SL1024_.jpg"
            }
            rating={3}
            remrating={2}
          />
          <Product
            id={111123432412}
            title="The Lean Startup"
            price={722}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/51itILNsjJL._SX383_BO1,204,203,200_.jpg"
            }
            rating={4}
            remrating={1}
          />
        </div>

        <div className="home__row">
          <Product
            id={111123432412}
            title="The Lean Startup"
            price={1900}
            image={
              "https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
            }
            rating={4}
            remrating={1}
          />
        </div>

        <div className="home__row">
          <Product
            id={1111111}
            title="The Lean Startup"
            price={159}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            }
            rating={3}
            remrating={2}
          />
          <Product
            id={1111112}
            title="The Lean Startup"
            price={499}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/71vp8Lec9JL._UL1500_.jpg"
            }
            rating={4}
            remrating={1}
          />
          <Product
            id={12111112}
            title="The Lean Startup"
            price={1500}
            image={
              "https://images-eu.ssl-images-amazon.com/images/I/51M-0OzscIL._AC_SY200_.jpg"
            }
            rating={4}
            remrating={1}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
