import React from 'react';
import Hero from "../Image/1.png"
const Index = () => {
    return (
      <>
        <section className="hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-7 col-sm-12">
                <h1 className="hero-title">
                  Now we can help you. Or you know less
                </h1>
                <p className="hero-description">
                  Until the onset of the pandemic, Zara’s brick-and-mortar
                  stores were the major source of revenue.
                </p>
                <button className="btn px-3 readmore d-flex align-items-center">
                  Readmore{" "}
                  <i className="bi bi-arrow-right-circle-fill mx-2"></i>
                </button>
              </div>
              <div className="col-lg-7 col-md-5 col-sm-12">
                <div className="hero-img-slider d-flex">
                  <div className="hero-item-1">
                    <img src={Hero} alt="img" className="img-fluid" />
                  </div>
                  <div className="hero-item-2 d-none">
                    <img
                      src="https://picsum.photos/200/200"
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                  <div className="hero-item-3 d-none">
                    <img
                      src="https://picsum.photos/200/200"
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
};

export default Index;