import React from "react";
import "./App.scss";
import Navbar from "./assets/Components/Navbar/index.jsx";
import HeroBlock from "./assets/Components/Hero/index.jsx";
import Cards from "./assets/Components/Cards";
import ContentCard from "./assets/Components/Content";
import SellProduct from "./assets/Components/SellProduct";
import Footer from "./assets/Components/Footer";
import Produc from "../db.json";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroBlock />
      <main>
        <section className="product-cards">
          <div className="container">
            <div className="product-title d-flex justify-content-between align-items-center">
              <h3 className="popular">Popular goods</h3>
              <a href="#" className="see-all">
                See all
              </a>
            </div>
            <div className="row mt-5 justify-content-between">
              {Produc.splice(8)}
              {Produc.map((item) => {
                console.log(item);
                let itemStr = item.description.substring(0, 50);
                return (
                  <Cards
                    ProductImg={item.images[0]}
                    ItemString={itemStr}
                    Price={item.price}
                    Reting={item.rating}
                  />
                );
              })}
            </div>
          </div>
        </section>

        <ContentCard />

        <section className="sell-product">
          <div className="container">
            <div className="product-sell-all d-flex justify-content-between align-content-center ">
              <h3>Sales products</h3>
              <a href="#">See all</a>
            </div>
            <div className="row" id="product-sell-cards">
              {Produc.splice(4)}
              {Produc.map((item) => {
                let itemStr = item.description.substring(0, 50);
                return (
                  <SellProduct
                    ProductImg={item.images[0]}
                    ItemString={itemStr}
                    Price={item.price}
                    Reting={item.rating}
                    Stock={item.stock}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;
